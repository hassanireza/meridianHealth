import { BodyAtlas } from '../models/BodyAtlas';
import { BmiResult } from '../models/BmiResult';
import { Condition } from '../models/Condition';
import { Symptom } from '../models/Symptom';
import { SymptomProfile } from '../models/SymptomProfile';
import { conditionAnalyzer } from '../services/ConditionAnalyzer';
import { symptomRepository } from '../services/SymptomRepository';
import type { Gender, PatientProfile, Severity, ViewSide } from '../models/types';

export type AnalysisStatus = 'idle' | 'loading' | 'ready';

const PATIENT_STORAGE_KEY = 'meridian-health.patient';

export interface AppSnapshot {
  gender: Gender;
  view: ViewSide;
  atlas: BodyAtlas;
  activeZoneId: string | null;
  panelOpen: boolean;
  profile: SymptomProfile;
  analysisStatus: AnalysisStatus;
  analysisConditions: Condition[];
  analysisZoneName: string;
  patient: PatientProfile | null;
  bmi: BmiResult | null;
  intakeOpen: boolean;
}

type Listener = (snapshot: AppSnapshot) => void;

const ANALYSIS_DELAY_MS = 1200;

/**
 * Meridian Health — AppController.
 *
 * A small, dependency-free, class-based state manager. It owns every piece
 * of interactive state on the page (selected gender/view, the active body
 * zone, the running symptom profile, and the analysis workflow) and
 * notifies subscribers whenever something changes. React only has to
 * subscribe to it through the `useAppController` hook; none of the domain
 * logic lives inside a component.
 */
export class AppController {
  private gender: Gender = 'male';
  private view: ViewSide = 'front';
  private activeZoneId: string | null = null;
  private panelOpen = false;
  private profile = new SymptomProfile();
  private analysisStatus: AnalysisStatus = 'idle';
  private analysisConditions: Condition[] = [];
  private analysisTimer: ReturnType<typeof setTimeout> | null = null;
  private listeners = new Set<Listener>();
  private patient: PatientProfile | null = AppController.loadPatient();
  private intakeOpen = !AppController.loadPatient();

  private static loadPatient(): PatientProfile | null {
    if (typeof window === 'undefined') return null;
    try {
      const raw = window.localStorage.getItem(PATIENT_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as PatientProfile;
      if (!parsed.name || !parsed.age || !parsed.gender || !parsed.weightKg || !parsed.heightCm) return null;
      return parsed;
    } catch {
      return null;
    }
  }

  private persistPatient(): void {
    if (typeof window === 'undefined') return;
    if (this.patient) {
      window.localStorage.setItem(PATIENT_STORAGE_KEY, JSON.stringify(this.patient));
    } else {
      window.localStorage.removeItem(PATIENT_STORAGE_KEY);
    }
  }

  constructor() {
    if (this.patient) this.gender = this.patient.gender;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.snapshot());
    return () => this.listeners.delete(listener);
  }

  private emit(): void {
    const snap = this.snapshot();
    this.listeners.forEach((l) => l(snap));
  }

  private snapshot(): AppSnapshot {
    return {
      gender: this.gender,
      view: this.view,
      atlas: new BodyAtlas(this.gender, this.view),
      activeZoneId: this.activeZoneId,
      panelOpen: this.panelOpen,
      profile: this.profile.clone(),
      analysisStatus: this.analysisStatus,
      analysisConditions: this.analysisConditions,
      analysisZoneName: this.activeZoneName(),
      patient: this.patient,
      bmi: this.patient ? new BmiResult(this.patient) : null,
      intakeOpen: this.intakeOpen,
    };
  }

  private activeZoneName(): string {
    if (!this.activeZoneId) return '';
    return symptomRepository.get(this.activeZoneId)?.name ?? '';
  }

  setGender(gender: Gender): void {
    this.gender = gender;
    this.closePanel();
    this.emit();
  }

  submitIntake(patient: PatientProfile): void {
    this.patient = patient;
    this.gender = patient.gender;
    this.intakeOpen = false;
    this.closePanel();
    this.persistPatient();
    this.emit();
  }

  openIntake(): void {
    this.intakeOpen = true;
    this.emit();
  }

  closeIntake(): void {
    if (!this.patient) return;
    this.intakeOpen = false;
    this.emit();
  }

  setView(view: ViewSide): void {
    this.view = view;
    this.closePanel();
    this.emit();
  }

  openPanel(zoneId: string): void {
    if (!symptomRepository.get(zoneId)) return;
    this.activeZoneId = zoneId;
    this.panelOpen = true;
    this.emit();
  }

  closePanel(): void {
    this.activeZoneId = null;
    this.panelOpen = false;
    this.emit();
  }

  toggleSymptom(label: string): void {
    if (!this.activeZoneId) return;
    this.profile.toggle(new Symptom(label, this.activeZoneId));
    this.emit();
  }

  removeSymptom(label: string): void {
    this.profile.remove(label);
    this.emit();
  }

  setSeverity(level: Severity): void {
    this.profile.severity = level;
    this.emit();
  }

  runAnalysis(): void {
    if (this.profile.isEmpty) return;
    this.analysisStatus = 'loading';
    this.analysisConditions = [];
    this.emit();

    if (this.analysisTimer) clearTimeout(this.analysisTimer);
    const zoneId = this.activeZoneId ?? 'head';
    this.analysisTimer = setTimeout(() => {
      this.analysisConditions = conditionAnalyzer.analyze(zoneId);
      this.analysisStatus = 'ready';
      this.emit();
    }, ANALYSIS_DELAY_MS);
  }

  closeAnalysis(): void {
    if (this.analysisTimer) clearTimeout(this.analysisTimer);
    this.analysisStatus = 'idle';
    this.analysisConditions = [];
    this.emit();
  }

  dispose(): void {
    if (this.analysisTimer) clearTimeout(this.analysisTimer);
    this.listeners.clear();
  }
}
