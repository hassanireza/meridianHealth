import { useAppState } from '../state/AppControllerContext';

/**
 * Modal presenting the analysis workflow: a loading state followed by the
 * ranked condition cards returned by the ConditionAnalyzer service.
 */
export function AnalysisModal() {
  const [snapshot, controller] = useAppState();
  const { analysisStatus, analysisConditions, profile, analysisZoneName } = snapshot;
  const isOpen = analysisStatus !== 'idle';
  const count = profile.count;

  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} role="dialog" aria-modal="true" onClick={(e) => {
      if (e.target === e.currentTarget) controller.closeAnalysis();
    }}>
      <div className="modal">
        <div className="modal-header">
          <div>
            <div className="modal-title">Symptom Analysis</div>
            <div className="modal-subtitle">
              {analysisStatus === 'loading'
                ? 'Reviewing your symptom profile'
                : `${count} symptom${count !== 1 ? 's' : ''} identified${analysisZoneName ? ` \u00b7 ${analysisZoneName}` : ''}`}
            </div>
          </div>
          <button className="modal-close" onClick={() => controller.closeAnalysis()} aria-label="Close analysis">
            &#x2715;
          </button>
        </div>

        <div className="modal-body">
          {analysisStatus === 'loading' && (
            <div className="modal-loading">
              <div className="loading-ring" />
              <div className="loading-text">Analyzing symptom patterns</div>
            </div>
          )}

          {analysisStatus === 'ready' && (
            <>
              <div className="analysis-summary">
                <p>
                  Based on the symptoms you reported, the following conditions represent the most
                  clinically relevant possibilities. This is not a diagnosis. Consult a physician
                  for a complete assessment.
                </p>
              </div>
              <div className="conditions-grid">
                {analysisConditions.map((condition) => (
                  <div key={condition.name} className="condition-card">
                    <div className={`condition-priority ${condition.priority}`} />
                    <div className="condition-card-body">
                      <div className="condition-name">{condition.name}</div>
                      <div className="condition-meta">
                        <span className={`condition-match ${condition.matchClassName}`}>{condition.matchLabel}</span>
                        <span className="condition-specialty">{condition.specialty}</span>
                      </div>
                      <p className="condition-desc">{condition.desc}</p>
                      <div className="condition-actions">
                        <button className="cond-btn-primary">Find a Specialist</button>
                        <button className="cond-btn-ghost">Learn More</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-disclaimer">
          <p className="disclaimer-text">
            This analysis is for informational purposes only and does not constitute medical advice,
            diagnosis, or treatment. Always consult a qualified healthcare provider regarding any
            medical condition. If you are experiencing a medical emergency, contact emergency services immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
