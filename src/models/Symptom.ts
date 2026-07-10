/**
 * Meridian Health — Symptom model.
 * Represents a single clinically defined symptom belonging to a body zone.
 */
export class Symptom {
  readonly label: string;
  readonly zoneId: string;

  constructor(label: string, zoneId: string) {
    this.label = label;
    this.zoneId = zoneId;
  }

  get id(): string {
    return `${this.zoneId}::${this.label}`;
  }

  equals(other: Symptom): boolean {
    return this.label === other.label && this.zoneId === other.zoneId;
  }
}
