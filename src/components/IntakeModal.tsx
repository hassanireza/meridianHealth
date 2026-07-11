import { useState, type FormEvent } from 'react';
import { useAppState } from '../state/AppControllerContext';
import type { Gender } from '../models/types';

interface FormState {
  name: string;
  age: string;
  gender: Gender | '';
  weight: string;
  weightUnit: 'kg' | 'lb';
  heightCm: string;
  heightFt: string;
  heightIn: string;
  heightUnit: 'cm' | 'ft';
}

const EMPTY_FORM: FormState = {
  name: '',
  age: '',
  gender: '',
  weight: '',
  weightUnit: 'kg',
  heightCm: '',
  heightFt: '',
  heightIn: '',
  heightUnit: 'cm',
};

type FieldErrors = Partial<Record<'name' | 'age' | 'gender' | 'weight' | 'height', string>>;

function toKg(weight: number, unit: 'kg' | 'lb'): number {
  return unit === 'kg' ? weight : weight * 0.453592;
}

function toCm(form: FormState): number {
  if (form.heightUnit === 'cm') return Number(form.heightCm);
  const ft = Number(form.heightFt) || 0;
  const inch = Number(form.heightIn) || 0;
  return ft * 30.48 + inch * 2.54;
}

/**
 * Meridian Health: IntakeModal.
 *
 * The gateway screen for the symptom checker: collects the minimum
 * clinical intake (name, age, gender, weight, height), validates it,
 * and hands a PatientProfile to the AppController. Replaces the previous
 * manual male / female toggle: gender is now determined by the patient's
 * own intake response, and drives both the mannequin shown and the BMI
 * calculation.
 */
export function IntakeModal() {
  const [snapshot, controller] = useAppState();
  const { intakeOpen, patient } = snapshot;
  const [form, setForm] = useState<FormState>(() =>
    patient
      ? {
          ...EMPTY_FORM,
          name: patient.name,
          age: String(patient.age),
          gender: patient.gender,
          weight: String(patient.weightKg),
          heightCm: String(patient.heightCm),
        }
      : EMPTY_FORM,
  );
  const [errors, setErrors] = useState<FieldErrors>({});

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = 'Enter your name';

    const age = Number(form.age);
    if (!form.age || Number.isNaN(age) || age < 1 || age > 120) next.age = 'Enter a valid age (1\u2013120)';

    if (!form.gender) next.gender = 'Select a gender';

    const weight = Number(form.weight);
    if (!form.weight || Number.isNaN(weight) || weight <= 0 || weight > 500) next.weight = 'Enter a valid weight';

    const heightCm = toCm(form);
    if (!heightCm || Number.isNaN(heightCm) || heightCm < 50 || heightCm > 260) next.height = 'Enter a valid height';

    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    controller.submitIntake({
      name: form.name.trim(),
      age: Math.round(Number(form.age)),
      gender: form.gender as Gender,
      weightKg: Math.round(toKg(Number(form.weight), form.weightUnit) * 10) / 10,
      heightCm: Math.round(toCm(form) * 10) / 10,
    });
  }

  if (!intakeOpen) return null;

  return (
    <div className="modal-overlay intake-overlay open" role="dialog" aria-modal="true" aria-labelledby="intake-title">
      <form className="modal intake-modal" onSubmit={handleSubmit} noValidate>
        <div className="modal-header intake-header">
          <div>
            <div className="modal-title" id="intake-title">
              Patient Intake
            </div>
            <div className="modal-subtitle">
              A few details so we can personalize your anatomical model &amp; BMI
            </div>
          </div>
          {patient && (
            <button type="button" className="modal-close" onClick={() => controller.closeIntake()} aria-label="Close intake form">
              &#x2715;
            </button>
          )}
        </div>

        <div className="modal-body intake-body">
          <div className="intake-field">
            <label htmlFor="intake-name">Full name</label>
            <input
              id="intake-name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'intake-name-err' : undefined}
            />
            {errors.name && (
              <span className="intake-error" id="intake-name-err">
                {errors.name}
              </span>
            )}
          </div>

          <div className="intake-row">
            <div className="intake-field">
              <label htmlFor="intake-age">Age</label>
              <input
                id="intake-age"
                type="number"
                inputMode="numeric"
                min={1}
                max={120}
                placeholder="34"
                value={form.age}
                onChange={(e) => update('age', e.target.value)}
                aria-invalid={!!errors.age}
                aria-describedby={errors.age ? 'intake-age-err' : undefined}
              />
              {errors.age && (
                <span className="intake-error" id="intake-age-err">
                  {errors.age}
                </span>
              )}
            </div>

            <div className="intake-field">
              <span className="intake-field-label">Gender</span>
              <div className="toggle-bar intake-toggle" role="group" aria-label="Gender">
                <button
                  type="button"
                  className={`toggle-btn${form.gender === 'male' ? ' active' : ''}`}
                  onClick={() => update('gender', 'male')}
                  aria-pressed={form.gender === 'male'}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`toggle-btn${form.gender === 'female' ? ' active' : ''}`}
                  onClick={() => update('gender', 'female')}
                  aria-pressed={form.gender === 'female'}
                >
                  Female
                </button>
              </div>
              {errors.gender && <span className="intake-error">{errors.gender}</span>}
            </div>
          </div>

          <div className="intake-row">
            <div className="intake-field intake-field-grow">
              <label htmlFor="intake-weight">Weight</label>
              <div className="intake-input-group">
                <input
                  id="intake-weight"
                  type="number"
                  inputMode="decimal"
                  min={1}
                  step="0.1"
                  placeholder={form.weightUnit === 'kg' ? '68' : '150'}
                  value={form.weight}
                  onChange={(e) => update('weight', e.target.value)}
                  aria-invalid={!!errors.weight}
                  aria-describedby={errors.weight ? 'intake-weight-err' : undefined}
                />
                <div className="intake-unit-switch" role="group" aria-label="Weight unit">
                  <button
                    type="button"
                    className={form.weightUnit === 'kg' ? 'active' : ''}
                    onClick={() => update('weightUnit', 'kg')}
                  >
                    kg
                  </button>
                  <button
                    type="button"
                    className={form.weightUnit === 'lb' ? 'active' : ''}
                    onClick={() => update('weightUnit', 'lb')}
                  >
                    lb
                  </button>
                </div>
              </div>
              {errors.weight && (
                <span className="intake-error" id="intake-weight-err">
                  {errors.weight}
                </span>
              )}
            </div>

            <div className="intake-field intake-field-grow">
              <span className="intake-field-label">Height</span>
              {form.heightUnit === 'cm' ? (
                <div className="intake-input-group">
                  <input
                    id="intake-height-cm"
                    type="number"
                    inputMode="decimal"
                    min={1}
                    step="0.1"
                    placeholder="170"
                    value={form.heightCm}
                    onChange={(e) => update('heightCm', e.target.value)}
                    aria-invalid={!!errors.height}
                    aria-describedby={errors.height ? 'intake-height-err' : undefined}
                  />
                  <div className="intake-unit-switch" role="group" aria-label="Height unit">
                    <button type="button" className="active" onClick={() => update('heightUnit', 'cm')}>
                      cm
                    </button>
                    <button type="button" onClick={() => update('heightUnit', 'ft')}>
                      ft/in
                    </button>
                  </div>
                </div>
              ) : (
                <div className="intake-input-group intake-height-imperial">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    placeholder="5"
                    aria-label="Height, feet"
                    value={form.heightFt}
                    onChange={(e) => update('heightFt', e.target.value)}
                    aria-invalid={!!errors.height}
                  />
                  <span className="intake-unit-label">ft</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={11}
                    placeholder="7"
                    aria-label="Height, inches"
                    value={form.heightIn}
                    onChange={(e) => update('heightIn', e.target.value)}
                    aria-invalid={!!errors.height}
                  />
                  <span className="intake-unit-label">in</span>
                  <div className="intake-unit-switch">
                    <button type="button" onClick={() => update('heightUnit', 'cm')}>
                      cm
                    </button>
                    <button type="button" className="active" onClick={() => update('heightUnit', 'ft')}>
                      ft/in
                    </button>
                  </div>
                </div>
              )}
              {errors.height && (
                <span className="intake-error" id="intake-height-err">
                  {errors.height}
                </span>
              )}
            </div>
          </div>

          <p className="intake-privacy">
            Your details stay on this device and are used only to personalize the anatomical model and BMI
            estimate below. Nothing is transmitted or stored on our servers.
          </p>
        </div>

        <div className="intake-footer">
          <button type="submit" className="btn-primary intake-submit">
            {patient ? 'Update Profile' : 'Continue to Symptom Checker'}
          </button>
        </div>
      </form>
    </div>
  );
}
