import type { ZoneDefinition } from '../models/types';

interface ZoneShapeProps {
  zone: ZoneDefinition;
  isSelected: boolean;
  onSelect: (panelKey: string) => void;
  onHover: (label: string, zoneId: string) => void;
  onHoverEnd: () => void;
}

/**
 * Renders a single interactive body-map hit region (ellipse, rect, or path)
 * plus its small anatomical label, wired to the shared hover / click
 * handlers passed down from BodyMap.
 */
export function ZoneShape({ zone, isSelected, onSelect, onHover, onHoverEnd }: ZoneShapeProps) {
  const { shape, attrs, label, labelX, labelY, id, panelKey } = zone;
  const className = `zone${isSelected ? ' selected' : ''}`;

  const shapeEl = (() => {
    if (shape === 'ellipse') {
      return (
        <ellipse
          className={className}
          cx={attrs.cx}
          cy={attrs.cy}
          rx={attrs.rx}
          ry={attrs.ry}
          transform={attrs.transform}
        />
      );
    }
    if (shape === 'rect') {
      return (
        <rect
          className={className}
          x={attrs.x}
          y={attrs.y}
          width={attrs.width}
          height={attrs.height}
          rx={attrs.rxCorner}
          transform={attrs.transform}
        />
      );
    }
    return <path className={className} d={attrs.d} />;
  })();

  return (
    <g
      className="zone-group"
      data-zone={id}
      onClick={() => onSelect(panelKey)}
      onMouseEnter={() => onHover(label, id)}
      onMouseLeave={onHoverEnd}
      role="button"
      tabIndex={0}
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(panelKey);
        }
      }}
    >
      {shapeEl}
      <text className="zone-label" x={labelX} y={labelY} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}
