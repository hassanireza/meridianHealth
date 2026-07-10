import { useRef, useState } from 'react';
import { useAppState } from '../state/AppControllerContext';
import { ZoneShape } from './ZoneShape';

interface TooltipState {
  label: string;
  x: number;
  y: number;
  visible: boolean;
}

/**
 * Interactive anatomical body map: the mannequin photo plus a precisely
 * aligned SVG overlay of clickable zones, a hover tooltip, and the
 * front / back and male / female toggles that drive which atlas is shown.
 */
export function BodyMap() {
  const [snapshot, controller] = useAppState();
  const { atlas, activeZoneId } = snapshot;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({ label: '', x: 0, y: 0, visible: false });

  function handleHover(label: string) {
    setTooltip((t) => ({ ...t, label, visible: true }));
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip((t) => ({ ...t, x: e.clientX - rect.left, y: e.clientY - rect.top }));
  }

  function handleHoverEnd() {
    setTooltip((t) => ({ ...t, visible: false }));
  }

  return (
    <div className="body-map-wrapper">
      <div className="body-view-toggle" role="group" aria-label="Anatomical view">
        <button
          className={`view-btn${atlas.view === 'front' ? ' active' : ''}`}
          onClick={() => controller.setView('front')}
          aria-pressed={atlas.view === 'front'}
        >
          Front
        </button>
        <button
          className={`view-btn${atlas.view === 'back' ? ' active' : ''}`}
          onClick={() => controller.setView('back')}
          aria-pressed={atlas.view === 'back'}
        >
          Back
        </button>
      </div>

      <div className="body-map-inner" id="bodyMapInner" ref={wrapperRef} onMouseMove={handleMove}>
        <img className="body-img visible" src={atlas.imagePath} alt={`${atlas.gender} ${atlas.view} anatomical view`} />

        <div className="body-svg-overlay">
          <svg viewBox="0 0 320 480" overflow="visible" role="img" aria-label={`${atlas.gender} ${atlas.view} body map`}>
            {atlas.zones.map((zone) => (
              <ZoneShape
                key={zone.id}
                zone={zone}
                isSelected={zone.panelKey === activeZoneId}
                onSelect={(panelKey) => controller.openPanel(panelKey)}
                onHover={handleHover}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </svg>
        </div>

        <div className={`body-tooltip${tooltip.visible ? ' visible' : ''}`} style={{ left: tooltip.x, top: tooltip.y }} role="tooltip">
          {tooltip.label}
        </div>
      </div>

      <div className="body-instruction" aria-hidden="true">
        <div className="pulse-dot" />
        Select a body region to explore symptoms
      </div>
    </div>
  );
}
