import { useAppState } from '../state/AppControllerContext';
import { BodyMap } from './BodyMap';
import { SymptomPanel } from './SymptomPanel';
import { SelectedTray } from './SelectedTray';

export function Hero() {
  const [snapshot, controller] = useAppState();
  const { patient, bmi } = snapshot;

  return (
    <section className="hero" aria-label="Symptom checker">
      <div className="hero-left">
        <div className="hero-eyebrow fade-in-up">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow-text">Clinical Symptom Intelligence</span>
        </div>

        <h1 className="hero-title fade-in-up">
          Understand
          <br />
          what your body
          <br />
          <em>is telling you</em>
        </h1>

        <p className="hero-subtitle fade-in-up">
          Select a region of the body to explore associated symptoms. Our clinical intelligence
          maps your experience to peer-reviewed diagnostic frameworks, refined by physician
          oversight.
        </p>

        <div className="trust-badge fade-in-up" role="note">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1L8.7 5.2L13.3 5.7L10 8.7L11 13.3L7 11L3 13.3L4 8.7L0.7 5.7L5.3 5.2L7 1Z" fill="#B8965A" />
          </svg>
          <span className="trust-badge-text">Reviewed by board-certified physicians. For informational use only.</span>
        </div>

        {patient && bmi && (
          <div className="patient-card fade-in-up" role="group" aria-label="Patient profile">
            <div className="patient-card-row">
              <div className="patient-card-identity">
                <span className="patient-card-name">{patient.name}</span>
                <span className="patient-card-meta">
                  {patient.age} yrs &middot; {patient.gender === 'male' ? 'Male' : 'Female'} &middot;{' '}
                  {patient.heightCm} cm &middot; {patient.weightKg} kg
                </span>
              </div>
              <button type="button" className="patient-card-edit" onClick={() => controller.openIntake()}>
                Edit
              </button>
            </div>
            <div className="patient-card-divider" aria-hidden="true" />
            <div className={`patient-card-bmi bmi-${bmi.category}`}>
              <span className="patient-card-bmi-value">{bmi.value.toFixed(1)}</span>
              <span className="patient-card-bmi-detail">
                <span className="patient-card-bmi-label">Body Mass Index</span>
                <span className={`bmi-pill bmi-${bmi.category}`}>{bmi.label}</span>
              </span>
            </div>
          </div>
        )}

        <div className="hero-stats" aria-label="Platform statistics">
          <div className="stat-item">
            <span className="stat-num">400+</span>
            <span className="stat-label">Conditions Mapped</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">38</span>
            <span className="stat-label">Body Regions</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">2,000+</span>
            <span className="stat-label">Symptoms Indexed</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <BodyMap />
        <SymptomPanel />
        <SelectedTray />
      </div>
    </section>
  );
}
