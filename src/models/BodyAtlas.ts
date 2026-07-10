import { getZoneDefinitions } from '../data/bodyZones';
import type { Gender, ViewSide, ZoneDefinition } from './types';

/**
 * Meridian Health — BodyAtlas model.
 * Resolves the anatomical hit-region geometry for a given gender and
 * viewing side (front or back), on the shared 320 x 480 viewBox.
 */
export class BodyAtlas {
  readonly gender: Gender;
  readonly view: ViewSide;

  constructor(gender: Gender, view: ViewSide) {
    this.gender = gender;
    this.view = view;
  }

  get zones(): ZoneDefinition[] {
    return getZoneDefinitions(this.gender, this.view);
  }

  findZone(panelKey: string): ZoneDefinition | undefined {
    return this.zones.find((z) => z.panelKey === panelKey);
  }

  get imagePath(): string {
    const genderSlug = this.gender === 'male' ? 'man' : 'women';
    const viewSlug = this.view === 'front' ? 'front' : 'back';
    return `${import.meta.env.BASE_URL}mannikin/${genderSlug}-${viewSlug}.webp`;
  }
}
