import type { BmiCategory, PatientProfile } from './types';

const CATEGORY_LABEL: Record<BmiCategory, string> = {
  underweight: 'Underweight',
  normal: 'Healthy range',
  overweight: 'Overweight',
  obese: 'Obese',
};

const CATEGORY_DESCRIPTION: Record<BmiCategory, string> = {
  underweight: 'Below the typical healthy range for adults.',
  normal: 'Within the typical healthy range for adults.',
  overweight: 'Above the typical healthy range for adults.',
  obese: 'Well above the typical healthy range for adults.',
};

/**
 * Meridian Health: BmiResult model.
 * Derives Body Mass Index and its WHO-standard weight-status category
 * from a patient's self-reported weight and height.
 */
export class BmiResult {
  readonly value: number;
  readonly category: BmiCategory;

  constructor(patient: PatientProfile) {
    const heightM = patient.heightCm / 100;
    const raw = heightM > 0 ? patient.weightKg / (heightM * heightM) : 0;
    this.value = Math.round(raw * 10) / 10;
    this.category = BmiResult.categorize(this.value);
  }

  static categorize(bmi: number): BmiCategory {
    if (bmi < 18.5) return 'underweight';
    if (bmi < 25) return 'normal';
    if (bmi < 30) return 'overweight';
    return 'obese';
  }

  get label(): string {
    return CATEGORY_LABEL[this.category];
  }

  get description(): string {
    return CATEGORY_DESCRIPTION[this.category];
  }
}
