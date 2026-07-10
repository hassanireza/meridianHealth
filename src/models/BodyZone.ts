import type { ZoneSymptomData } from './types';
import { Symptom } from './Symptom';

/**
 * Meridian Health — BodyZone model.
 * Wraps the clinical reference data for an anatomical region and exposes
 * typed symptom objects instead of raw strings.
 */
export class BodyZone {
  readonly id: string;
  readonly name: string;
  readonly intro: string;
  private readonly symptomLabels: string[];

  constructor(id: string, data: ZoneSymptomData) {
    this.id = id;
    this.name = data.name;
    this.intro = data.intro;
    this.symptomLabels = data.symptoms;
  }

  get symptoms(): Symptom[] {
    return this.symptomLabels.map((label) => new Symptom(label, this.id));
  }

  get symptomCount(): number {
    return this.symptomLabels.length;
  }
}
