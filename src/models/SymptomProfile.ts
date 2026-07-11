import type { Severity } from './types';
import { Symptom } from './Symptom';

/**
 * Meridian Health: SymptomProfile model.
 * Aggregates the symptoms a person has selected across zones during a
 * session, along with a self-reported severity level.
 */
export class SymptomProfile {
  private readonly items: Symptom[] = [];
  private _severity: Severity | null = null;

  get severity(): Severity | null {
    return this._severity;
  }

  set severity(value: Severity | null) {
    this._severity = value;
  }

  get symptoms(): readonly Symptom[] {
    return this.items;
  }

  get count(): number {
    return this.items.length;
  }

  get isEmpty(): boolean {
    return this.items.length === 0;
  }

  has(label: string): boolean {
    return this.items.some((s) => s.label === label);
  }

  toggle(symptom: Symptom): void {
    const idx = this.items.findIndex((s) => s.equals(symptom));
    if (idx === -1) {
      this.items.push(symptom);
    } else {
      this.items.splice(idx, 1);
    }
  }

  remove(label: string): void {
    const idx = this.items.findIndex((s) => s.label === label);
    if (idx !== -1) this.items.splice(idx, 1);
  }

  clone(): SymptomProfile {
    const copy = new SymptomProfile();
    copy.items.push(...this.items);
    copy._severity = this._severity;
    return copy;
  }
}
