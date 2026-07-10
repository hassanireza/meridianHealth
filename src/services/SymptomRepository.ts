import { SYMPTOM_DATA } from '../data/symptomData';
import { BodyZone } from '../models/BodyZone';

/**
 * Meridian Health — SymptomRepository service.
 * Provides typed BodyZone lookups over the static clinical reference data.
 */
export class SymptomRepository {
  private readonly zones = new Map<string, BodyZone>();

  constructor() {
    Object.entries(SYMPTOM_DATA).forEach(([id, data]) => {
      this.zones.set(id, new BodyZone(id, data));
    });
  }

  get(zoneId: string): BodyZone | undefined {
    return this.zones.get(zoneId);
  }

  all(): BodyZone[] {
    return Array.from(this.zones.values());
  }
}

export const symptomRepository = new SymptomRepository();
