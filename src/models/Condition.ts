import type { ConditionRecord, MatchStrength, Priority } from './types';

/**
 * Meridian Health: Condition model.
 * Represents a candidate clinical condition returned by the analysis engine.
 */
export class Condition {
  readonly name: string;
  readonly match: MatchStrength;
  readonly priority: Priority;
  readonly specialty: string;
  readonly desc: string;

  constructor(record: ConditionRecord) {
    this.name = record.name;
    this.match = record.match;
    this.priority = record.priority;
    this.specialty = record.specialty;
    this.desc = record.desc;
  }

  get matchLabel(): string {
    return { high: 'High Correlation', medium: 'Moderate Correlation', low: 'Lower Correlation' }[this.match];
  }

  get matchClassName(): string {
    return `match-${this.match}`;
  }
}
