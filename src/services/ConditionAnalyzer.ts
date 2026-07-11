import { CONDITION_DATABASE, DEFAULT_CONDITIONS } from '../data/conditionData';
import { Condition } from '../models/Condition';

/**
 * Meridian Health: ConditionAnalyzer service.
 * Resolves a body zone identifier to a ranked list of candidate conditions.
 * Falls back to a generic musculoskeletal / neurological / rheumatologic
 * triad when a zone has no dedicated dataset yet.
 */
export class ConditionAnalyzer {
  analyze(zoneId: string): Condition[] {
    const records = CONDITION_DATABASE[zoneId] ?? DEFAULT_CONDITIONS;
    return records.map((record) => new Condition(record));
  }
}

export const conditionAnalyzer = new ConditionAnalyzer();
