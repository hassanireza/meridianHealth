import { useAppState } from '../state/AppControllerContext';

/**
 * Persistent tray summarizing every symptom selected so far across zones,
 * with quick removal and a shortcut into the analysis workflow.
 */
export function SelectedTray() {
  const [snapshot, controller] = useAppState();
  const { profile } = snapshot;
  const hasSymptoms = profile.count > 0;

  return (
    <div className={`selected-tray${hasSymptoms ? ' visible' : ''}`} role="status" aria-live="polite" aria-label="Selected symptoms">
      <div>
        <div className="tray-label" style={{ marginBottom: 8 }}>
          Selected Symptoms
        </div>
        <div className="tray-symptoms">
          {profile.symptoms.map((symptom) => (
            <div key={symptom.id} className="tray-tag" onClick={() => controller.removeSymptom(symptom.label)}>
              <span>{symptom.label}</span>
              <span className="tray-tag-remove">&#x00D7;</span>
            </div>
          ))}
        </div>
      </div>
      <div className="tray-actions">
        <div>
          <div className="tray-label">Total</div>
          <div className="tray-count">{profile.count}</div>
        </div>
        <button className="tray-analyze-btn" onClick={() => controller.runAnalysis()}>
          Analyze
        </button>
      </div>
    </div>
  );
}
