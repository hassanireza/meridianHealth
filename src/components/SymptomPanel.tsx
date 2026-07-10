import { useAppState } from '../state/AppControllerContext';
import { symptomRepository } from '../services/SymptomRepository';
import type { Severity } from '../models/types';

const SEVERITIES: Severity[] = ['mild', 'moderate', 'severe'];

/**
 * Slide-in panel listing the clinically curated symptoms for the currently
 * active body zone, with severity selection and the analyze action.
 */
export function SymptomPanel() {
  const [snapshot, controller] = useAppState();
  const { activeZoneId, panelOpen, profile } = snapshot;
  const zone = activeZoneId ? symptomRepository.get(activeZoneId) : undefined;

  if (!zone) {
    return <div className="symptom-panel" id="symptomPanel" role="complementary" aria-label="Symptom explorer" />;
  }

  const hasSymptoms = profile.count > 0;

  return (
    <>
      <div
        className={`symptom-panel-backdrop${panelOpen ? ' open' : ''}`}
        onClick={() => controller.closePanel()}
        aria-hidden="true"
      />
      <div className={`symptom-panel${panelOpen ? ' open' : ''}`} role="complementary" aria-label="Symptom explorer">
      <div className="panel-header">
        <div className="panel-region">
          <span className="panel-region-label">Region</span>
          <span className="panel-region-name">{zone.name}</span>
        </div>
        <button className="panel-close" onClick={() => controller.closePanel()} aria-label="Close symptom panel">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <p className="panel-intro">{zone.intro}</p>

      <div className="symptom-list" role="list" aria-label="Available symptoms">
        {zone.symptoms.map((symptom) => {
          const selected = profile.has(symptom.label);
          return (
            <div
              key={symptom.label}
              className={`symptom-chip${selected ? ' selected' : ''}`}
              role="listitem"
              onClick={() => controller.toggleSymptom(symptom.label)}
            >
              <div className="chip-dot" />
              <span className="chip-text">{symptom.label}</span>
            </div>
          );
        })}
      </div>

      {hasSymptoms && (
        <div className="severity-bar">
          <div className="severity-label">Severity</div>
          <div className="severity-chips" role="group" aria-label="Severity level">
            {SEVERITIES.map((level) => (
              <button
                key={level}
                className={`sev-btn ${level}${profile.severity === level ? ' active' : ''}`}
                onClick={() => controller.setSeverity(level)}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {hasSymptoms && (
        <button className="panel-analyze-btn" onClick={() => controller.runAnalysis()}>
          Analyze Symptoms
        </button>
      )}
      </div>
    </>
  );
}
