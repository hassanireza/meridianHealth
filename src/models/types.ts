/**
 * Meridian Health — Shared domain types.
 */

export type Gender = 'male' | 'female';
export type ViewSide = 'front' | 'back';
export type Severity = 'mild' | 'moderate' | 'severe';
export type MatchStrength = 'high' | 'medium' | 'low';
export type Priority = 'high' | 'medium' | 'low';
export type ShapeKind = 'ellipse' | 'rect' | 'path';

export interface ZoneSymptomData {
  name: string;
  intro: string;
  symptoms: string[];
}

export interface ConditionRecord {
  name: string;
  match: MatchStrength;
  priority: Priority;
  specialty: string;
  desc: string;
}

export interface ShapeAttrs {
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rxCorner?: number;
  d?: string;
  transform?: string;
}

export interface ZoneDefinition {
  id: string;
  panelKey: string;
  shape: ShapeKind;
  attrs: ShapeAttrs;
  label: string;
  labelX: number;
  labelY: number;
}

export type BmiCategory = 'underweight' | 'normal' | 'overweight' | 'obese';

export interface PatientProfile {
  name: string;
  age: number;
  gender: Gender;
  /** kilograms */
  weightKg: number;
  /** centimeters */
  heightCm: number;
}
