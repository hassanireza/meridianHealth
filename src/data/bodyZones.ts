/**
 * Meridian Health: Body zone geometry.
 *
 * Every zone is expressed in the shared 320 x 480 viewBox that overlays the
 * mannequin artwork (each source image is 1024 x 1536px, an exact 2:3 match).
 *
 * Coordinates are derived from the artwork itself rather than estimated by
 * eye: each PNG's alpha channel was sampled to trace the silhouette per row,
 * locating joints (shoulder, elbow, wrist, knee, ankle) as local width
 * minima and fitting a rotated capsule between them. Front and back, and
 * male and female, each have independently measured limb geometry, since
 * pose and proportions differ between the four source images.
 */
import type { Gender, ViewSide, ZoneDefinition } from '../models/types';

/** A point used to anchor a rotated capsule (rect) between two joints. */
interface LimbSpec {
  topX: number;
  topY: number;
  bottomX: number;
  bottomY: number;
  width: number;
}

/** Builds a rotated rect (capsule) attrs object spanning topX,topY to bottomX,bottomY. */
function capsule(spec: LimbSpec) {
  const { topX, topY, bottomX, bottomY, width } = spec;
  const dx = bottomX - topX;
  const dy = bottomY - topY;
  const length = Math.sqrt(dx * dx + dy * dy);
  const cx = (topX + bottomX) / 2;
  const cy = (topY + bottomY) / 2;
  const angle = (Math.atan2(-dx, dy) * 180) / Math.PI;
  return {
    x: cx - width / 2,
    y: cy - length / 2,
    width,
    height: length,
    rxCorner: width / 2,
    transform: `rotate(${angle.toFixed(1)} ${cx.toFixed(1)} ${cy.toFixed(1)})`,
  };
}

/** Mirrors a capsule (or ellipse) attrs object across a vertical midline. */
function mirror<T extends { transform?: string }>(attrs: T & { x?: number; cx?: number; width?: number }, midline: number): T {
  const clone: any = { ...attrs };
  const rotateMatch = /rotate\(([-\d.]+) ([-\d.]+) ([-\d.]+)\)/.exec(attrs.transform ?? '');
  if (clone.cx !== undefined) {
    clone.cx = 2 * midline - clone.cx;
  } else if (clone.x !== undefined && clone.width !== undefined) {
    const cx = clone.x + clone.width / 2;
    clone.x = 2 * midline - cx - clone.width / 2;
  }
  if (rotateMatch) {
    const [, deg, rcx, rcy] = rotateMatch;
    const mirroredCx = 2 * midline - parseFloat(rcx);
    clone.transform = `rotate(${(-parseFloat(deg)).toFixed(1)} ${mirroredCx.toFixed(1)} ${rcy})`;
  }
  return clone;
}

// ─────────────────────────────────────────────────────────────────────────
// MALE FRONT
// ─────────────────────────────────────────────────────────────────────────
const MF_MID = 160;
const mfUpperArmL = capsule({ topX: 113.03, topY: 106.74, bottomX: 95.77, bottomY: 156.86, width: 23 });
const mfForearmL = capsule({ topX: 94.65, topY: 158.1, bottomX: 65.75, bottomY: 198.9, width: 22 });
const mfThighL = capsule({ topX: 139.65, topY: 212.31, bottomX: 128.95, bottomY: 281.49, width: 35 });
const mfShinL = capsule({ topX: 121.61, topY: 317.59, bottomX: 111.39, bottomY: 406.01, width: 23 });

const maleFront: ZoneDefinition[] = [
  { id: 'head', panelKey: 'head', shape: 'ellipse', attrs: { cx: 159.5, cy: 29.5, rx: 20.8, ry: 29 }, label: 'Head', labelX: 160, labelY: 40 },
  { id: 'neck', panelKey: 'neck', shape: 'path', attrs: { d: 'M145 60 L175 60 L177 77 L143 77 Z' }, label: 'Neck', labelX: 160, labelY: 82 },
  { id: 'left-shoulder', panelKey: 'left-shoulder', shape: 'ellipse', attrs: { cx: 116, cy: 90.3, rx: 12.5, ry: 12.5, transform: 'rotate(-14 116 90.3)' }, label: 'Shoulder', labelX: 100, labelY: 102 },
  { id: 'right-shoulder', panelKey: 'right-shoulder', shape: 'ellipse', attrs: { cx: 202.5, cy: 89, rx: 12.5, ry: 12.5, transform: 'rotate(14 202.5 89)' }, label: 'Shoulder', labelX: 220, labelY: 102 },
  { id: 'chest', panelKey: 'chest', shape: 'path', attrs: { d: 'M120 100 C133 90 148 92 160 102 C172 92 187 90 200 100 L196 148 C184 158 136 158 124 148 Z' }, label: 'Chest', labelX: 160, labelY: 126 },
  { id: 'left-arm', panelKey: 'left-arm', shape: 'rect', attrs: mfUpperArmL, label: 'Arm', labelX: 90, labelY: 154 },
  { id: 'right-arm', panelKey: 'right-arm', shape: 'rect', attrs: mirror(mfUpperArmL, MF_MID), label: 'Arm', labelX: 230, labelY: 154 },
  { id: 'abdomen', panelKey: 'abdomen', shape: 'path', attrs: { d: 'M126 150 L194 150 L190 200 C179 210 141 210 130 200 Z' }, label: 'Abdomen', labelX: 160, labelY: 178 },
  { id: 'left-forearm', panelKey: 'left-forearm', shape: 'rect', attrs: mfForearmL, label: 'Forearm', labelX: 62, labelY: 194 },
  { id: 'right-forearm', panelKey: 'right-forearm', shape: 'rect', attrs: mirror(mfForearmL, MF_MID), label: 'Forearm', labelX: 258, labelY: 194 },
  { id: 'pelvis', panelKey: 'pelvis', shape: 'path', attrs: { d: 'M124 200 C142 193 178 193 196 200 L188 234 C173 246 147 246 132 234 Z' }, label: 'Pelvis', labelX: 160, labelY: 222 },
  { id: 'left-hand', panelKey: 'left-hand', shape: 'ellipse', attrs: { cx: 57, cy: 217, rx: 15, ry: 18.8, transform: 'rotate(30 57 217)' }, label: 'Hand', labelX: 48, labelY: 228 },
  { id: 'right-hand', panelKey: 'right-hand', shape: 'ellipse', attrs: { cx: 263.5, cy: 218.1, rx: 15, ry: 19, transform: 'rotate(-30 263.5 218.1)' }, label: 'Hand', labelX: 272, labelY: 228 },
  { id: 'left-thigh', panelKey: 'left-thigh', shape: 'rect', attrs: mfThighL, label: 'Thigh', labelX: 122, labelY: 273 },
  { id: 'right-thigh', panelKey: 'right-thigh', shape: 'rect', attrs: mirror(mfThighL, MF_MID), label: 'Thigh', labelX: 198, labelY: 273 },
  { id: 'left-knee', panelKey: 'left-knee', shape: 'ellipse', attrs: { cx: 125.5, cy: 299.3, rx: 15, ry: 16.5, transform: 'rotate(4 125.5 299.3)' }, label: 'Knee', labelX: 122, labelY: 317 },
  { id: 'right-knee', panelKey: 'right-knee', shape: 'ellipse', attrs: { cx: 194.5, cy: 302.2, rx: 15, ry: 16.5, transform: 'rotate(-13 194.5 302.2)' }, label: 'Knee', labelX: 198, labelY: 317 },
  { id: 'left-shin', panelKey: 'left-shin', shape: 'rect', attrs: mfShinL, label: 'Shin', labelX: 113, labelY: 354 },
  { id: 'right-shin', panelKey: 'right-shin', shape: 'rect', attrs: mirror(mfShinL, MF_MID), label: 'Shin', labelX: 207, labelY: 354 },
  { id: 'left-foot', panelKey: 'left-foot', shape: 'ellipse', attrs: { cx: 105.5, cy: 425, rx: 13, ry: 16.5, transform: 'rotate(23 105.5 425)' }, label: 'Foot', labelX: 108, labelY: 420 },
  { id: 'right-foot', panelKey: 'right-foot', shape: 'ellipse', attrs: { cx: 212, cy: 423.4, rx: 13, ry: 16.5, transform: 'rotate(-19 212 423.4)' }, label: 'Foot', labelX: 212, labelY: 420 },
];

// ─────────────────────────────────────────────────────────────────────────
// MALE BACK
// ─────────────────────────────────────────────────────────────────────────
const MB_MID = 160;
const mbUpperArmL = capsule({ topX: 111.02, topY: 97.52, bottomX: 94.58, bottomY: 143.68, width: 23 });
const mbForearmL = capsule({ topX: 91.28, topY: 145.76, bottomX: 60.32, bottomY: 189.64, width: 23.5 });
const mbThighL = capsule({ topX: 135.7, topY: 217.26, bottomX: 127.3, bottomY: 284.74, width: 36 });
const mbShinL = capsule({ topX: 120.22, topY: 314.74, bottomX: 113.38, bottomY: 399.86, width: 25 });

const maleBack: ZoneDefinition[] = [
  { id: 'head', panelKey: 'head', shape: 'ellipse', attrs: { cx: 158, cy: 27.9, rx: 20.3, ry: 27 }, label: 'Head', labelX: 160, labelY: 40 },
  { id: 'neck', panelKey: 'neck', shape: 'path', attrs: { d: 'M145 57 L175 57 L177 73 L143 73 Z' }, label: 'Neck', labelX: 160, labelY: 80 },
  { id: 'left-shoulder', panelKey: 'left-shoulder', shape: 'ellipse', attrs: { cx: 112, cy: 82.3, rx: 12.5, ry: 12.5, transform: 'rotate(-14 112 82.3)' }, label: 'Shoulder', labelX: 97, labelY: 100 },
  { id: 'right-shoulder', panelKey: 'right-shoulder', shape: 'ellipse', attrs: { cx: 202, cy: 81.1, rx: 12.5, ry: 12.5, transform: 'rotate(14 202 81.1)' }, label: 'Shoulder', labelX: 223, labelY: 100 },
  { id: 'upper-back', panelKey: 'upper-back', shape: 'path', attrs: { d: 'M122 95 C133 88 148 90 160 100 C172 90 187 88 198 95 L192 155 C180 163 140 163 128 155 Z' }, label: 'Upper Back', labelX: 160, labelY: 126 },
  { id: 'left-arm', panelKey: 'left-arm', shape: 'rect', attrs: mbUpperArmL, label: 'Arm', labelX: 88, labelY: 146 },
  { id: 'right-arm', panelKey: 'right-arm', shape: 'rect', attrs: mirror(mbUpperArmL, MB_MID), label: 'Arm', labelX: 232, labelY: 146 },
  { id: 'lower-back', panelKey: 'lower-back', shape: 'path', attrs: { d: 'M128 155 L192 155 L192 200 C180 210 140 210 128 200 Z' }, label: 'Lower Back', labelX: 160, labelY: 178 },
  { id: 'left-forearm', panelKey: 'left-forearm', shape: 'rect', attrs: mbForearmL, label: 'Forearm', labelX: 55, labelY: 188 },
  { id: 'right-forearm', panelKey: 'right-forearm', shape: 'rect', attrs: mirror(mbForearmL, MB_MID), label: 'Forearm', labelX: 265, labelY: 188 },
  { id: 'glutes', panelKey: 'glutes', shape: 'path', attrs: { d: 'M124 200 C142 193 178 193 196 200 L188 231 C173 243 147 243 132 231 Z' }, label: 'Glutes', labelX: 160, labelY: 218 },
  { id: 'left-hand', panelKey: 'left-hand', shape: 'ellipse', attrs: { cx: 47, cy: 211, rx: 15.3, ry: 18.8, transform: 'rotate(32 47 211)' }, label: 'Hand', labelX: 36, labelY: 221 },
  { id: 'right-hand', panelKey: 'right-hand', shape: 'ellipse', attrs: { cx: 268.5, cy: 210.5, rx: 15, ry: 18.8, transform: 'rotate(-32 268.5 210.5)' }, label: 'Hand', labelX: 284, labelY: 221 },
  { id: 'left-thigh', panelKey: 'left-thigh', shape: 'rect', attrs: mbThighL, label: 'Thigh', labelX: 121, labelY: 263 },
  { id: 'right-thigh', panelKey: 'right-thigh', shape: 'rect', attrs: mirror(mbThighL, MB_MID), label: 'Thigh', labelX: 199, labelY: 263 },
  { id: 'left-knee', panelKey: 'left-knee', shape: 'ellipse', attrs: { cx: 123.5, cy: 300.9, rx: 14, ry: 12.5 }, label: 'Knee', labelX: 124, labelY: 305 },
  { id: 'right-knee', panelKey: 'right-knee', shape: 'ellipse', attrs: { cx: 189.5, cy: 301, rx: 14, ry: 12.5 }, label: 'Knee', labelX: 196, labelY: 305 },
  { id: 'left-shin', panelKey: 'left-shin', shape: 'rect', attrs: mbShinL, label: 'Shin', labelX: 114, labelY: 346 },
  { id: 'right-shin', panelKey: 'right-shin', shape: 'rect', attrs: mirror(mbShinL, MB_MID), label: 'Shin', labelX: 206, labelY: 346 },
  { id: 'left-foot', panelKey: 'left-foot', shape: 'ellipse', attrs: { cx: 111, cy: 417.8, rx: 14, ry: 16, transform: 'rotate(32 111 417.8)' }, label: 'Foot', labelX: 108, labelY: 413 },
  { id: 'right-foot', panelKey: 'right-foot', shape: 'ellipse', attrs: { cx: 203, cy: 418.4, rx: 14, ry: 15.8, transform: 'rotate(-23 203 418.4)' }, label: 'Foot', labelX: 212, labelY: 413 },
];

// ─────────────────────────────────────────────────────────────────────────
// FEMALE FRONT
// ─────────────────────────────────────────────────────────────────────────
const WF_MID = 159;
const wfUpperArmL = capsule({ topX: 119.63, topY: 101.25, bottomX: 107.37, bottomY: 147.35, width: 20 });
const wfForearmL = capsule({ topX: 107.11, topY: 150.81, bottomX: 75.89, bottomY: 192.39, width: 20 });
// Thighs and lower legs sit close together (mannequin stands with legs touching),
// so the capsules stay narrow and converge slightly toward the midline.
const wfThighL = capsule({ topX: 136.55, topY: 216.21, bottomX: 142.05, bottomY: 285.99, width: 30 });
const wfShinL = capsule({ topX: 145.64, topY: 320.85, bottomX: 152.36, bottomY: 397.55, width: 23 });

const femaleFront: ZoneDefinition[] = [
  { id: 'head', panelKey: 'head', shape: 'ellipse', attrs: { cx: 158, cy: 28.9, rx: 21, ry: 28 }, label: 'Head', labelX: 160, labelY: 39 },
  { id: 'neck', panelKey: 'neck', shape: 'path', attrs: { d: 'M147 57 L173 57 L176 78 L144 78 Z' }, label: 'Neck', labelX: 160, labelY: 80 },
  { id: 'left-shoulder', panelKey: 'left-shoulder', shape: 'ellipse', attrs: { cx: 121.5, cy: 87.2, rx: 12.5, ry: 12.5, transform: 'rotate(-12 121.5 87.2)' }, label: 'Shoulder', labelX: 109, labelY: 99 },
  { id: 'right-shoulder', panelKey: 'right-shoulder', shape: 'ellipse', attrs: { cx: 194.5, cy: 86, rx: 12.5, ry: 12.5, transform: 'rotate(12 194.5 86)' }, label: 'Shoulder', labelX: 211, labelY: 99 },
  { id: 'chest', panelKey: 'chest', shape: 'path', attrs: { d: 'M124 96 C137 87 150 91 160 102 C170 91 183 87 196 96 L192 142 C181 152 139 152 128 142 Z' }, label: 'Chest', labelX: 160, labelY: 122 },
  { id: 'left-arm', panelKey: 'left-arm', shape: 'rect', attrs: wfUpperArmL, label: 'Arm', labelX: 98, labelY: 150 },
  { id: 'right-arm', panelKey: 'right-arm', shape: 'rect', attrs: mirror(wfUpperArmL, WF_MID), label: 'Arm', labelX: 220, labelY: 150 },
  { id: 'abdomen', panelKey: 'abdomen', shape: 'path', attrs: { d: 'M129 144 L191 144 L188 195 C178 205 142 205 132 195 Z' }, label: 'Abdomen', labelX: 160, labelY: 172 },
  { id: 'left-forearm', panelKey: 'left-forearm', shape: 'rect', attrs: wfForearmL, label: 'Forearm', labelX: 66, labelY: 194 },
  { id: 'right-forearm', panelKey: 'right-forearm', shape: 'rect', attrs: mirror(wfForearmL, WF_MID), label: 'Forearm', labelX: 252, labelY: 194 },
  { id: 'pelvis', panelKey: 'pelvis', shape: 'path', attrs: { d: 'M118 195 C143 187 177 187 202 195 L194 232 C176 245 144 245 126 232 Z' }, label: 'Pelvis', labelX: 160, labelY: 218 },
  { id: 'left-hand', panelKey: 'left-hand', shape: 'ellipse', attrs: { cx: 65, cy: 210.8, rx: 12, ry: 19.5, transform: 'rotate(28 65 210.8)' }, label: 'Hand', labelX: 51, labelY: 226 },
  { id: 'right-hand', panelKey: 'right-hand', shape: 'ellipse', attrs: { cx: 253.5, cy: 213.1, rx: 12, ry: 18.8, transform: 'rotate(-28 253.5 213.1)' }, label: 'Hand', labelX: 267, labelY: 226 },
  { id: 'left-thigh', panelKey: 'left-thigh', shape: 'rect', attrs: wfThighL, label: 'Thigh', labelX: 132, labelY: 300 },
  { id: 'right-thigh', panelKey: 'right-thigh', shape: 'rect', attrs: mirror(wfThighL, WF_MID), label: 'Thigh', labelX: 188, labelY: 300 },
  { id: 'left-knee', panelKey: 'left-knee', shape: 'ellipse', attrs: { cx: 145, cy: 303.8, rx: 12.5, ry: 14.5 }, label: 'Knee', labelX: 148, labelY: 372 },
  { id: 'right-knee', panelKey: 'right-knee', shape: 'ellipse', attrs: { cx: 173, cy: 301.4, rx: 12.5, ry: 14.5 }, label: 'Knee', labelX: 170, labelY: 372 },
  { id: 'left-shin', panelKey: 'left-shin', shape: 'rect', attrs: wfShinL, label: 'Shin', labelX: 147, labelY: 392 },
  { id: 'right-shin', panelKey: 'right-shin', shape: 'rect', attrs: mirror(wfShinL, WF_MID), label: 'Shin', labelX: 172, labelY: 392 },
  { id: 'left-foot', panelKey: 'left-foot', shape: 'ellipse', attrs: { cx: 153, cy: 426, rx: 7.8, ry: 18, transform: 'rotate(3 153 426)' }, label: 'Foot', labelX: 144, labelY: 436 },
  { id: 'right-foot', panelKey: 'right-foot', shape: 'ellipse', attrs: { cx: 164, cy: 432.5, rx: 11.5, ry: 21, transform: 'rotate(5 164 432.5)' }, label: 'Foot', labelX: 174, labelY: 436 },
];

// ─────────────────────────────────────────────────────────────────────────
// FEMALE BACK
// ─────────────────────────────────────────────────────────────────────────
const WB_MID = 161;
const wbUpperArmL = capsule({ topX: 122.87, topY: 105.91, bottomX: 113.73, bottomY: 150.49, width: 20 });
const wbForearmL = capsule({ topX: 115.35, topY: 153.52, bottomX: 89.65, bottomY: 202.48, width: 20 });
const wbThighL = capsule({ topX: 139.9, topY: 212.98, bottomX: 146.7, bottomY: 276.62, width: 30 });
const wbShinL = capsule({ topX: 150.07, topY: 313.03, bottomX: 161.93, bottomY: 378.97, width: 23 });

const femaleBack: ZoneDefinition[] = [
  { id: 'head', panelKey: 'head', shape: 'ellipse', attrs: { cx: 159, cy: 36.3, rx: 18.8, ry: 26 }, label: 'Head', labelX: 160, labelY: 38 },
  { id: 'neck', panelKey: 'neck', shape: 'path', attrs: { d: 'M147 62 L173 62 L176 85 L144 85 Z' }, label: 'Neck', labelX: 160, labelY: 78 },
  { id: 'left-shoulder', panelKey: 'left-shoulder', shape: 'ellipse', attrs: { cx: 126, cy: 91.3, rx: 12.5, ry: 12.5, transform: 'rotate(-12 126 91.3)' }, label: 'Shoulder', labelX: 114, labelY: 99 },
  { id: 'right-shoulder', panelKey: 'right-shoulder', shape: 'ellipse', attrs: { cx: 193, cy: 91.3, rx: 12.5, ry: 12.5, transform: 'rotate(12 193 91.3)' }, label: 'Shoulder', labelX: 206, labelY: 99 },
  { id: 'upper-back', panelKey: 'upper-back', shape: 'path', attrs: { d: 'M128 94 C138 87 150 90 160 100 C170 90 182 87 192 94 L188 148 C177 157 143 157 132 148 Z' }, label: 'Upper Back', labelX: 160, labelY: 120 },
  { id: 'left-arm', panelKey: 'left-arm', shape: 'rect', attrs: wbUpperArmL, label: 'Arm', labelX: 102, labelY: 150 },
  { id: 'right-arm', panelKey: 'right-arm', shape: 'rect', attrs: mirror(wbUpperArmL, WB_MID), label: 'Arm', labelX: 220, labelY: 150 },
  { id: 'lower-back', panelKey: 'lower-back', shape: 'path', attrs: { d: 'M132 148 L188 148 L188 193 C178 202 144 202 132 193 Z' }, label: 'Lower Back', labelX: 160, labelY: 172 },
  { id: 'left-forearm', panelKey: 'left-forearm', shape: 'rect', attrs: wbForearmL, label: 'Forearm', labelX: 74, labelY: 194 },
  { id: 'right-forearm', panelKey: 'right-forearm', shape: 'rect', attrs: mirror(wbForearmL, WB_MID), label: 'Forearm', labelX: 246, labelY: 194 },
  { id: 'glutes', panelKey: 'glutes', shape: 'path', attrs: { d: 'M123 193 C144 186 178 186 199 193 L191 231 C174 244 146 244 129 231 Z' }, label: 'Glutes', labelX: 160, labelY: 214 },
  { id: 'left-hand', panelKey: 'left-hand', shape: 'ellipse', attrs: { cx: 81.5, cy: 223.3, rx: 11, ry: 19.5, transform: 'rotate(26 81.5 223.3)' }, label: 'Hand', labelX: 61, labelY: 224 },
  { id: 'right-hand', panelKey: 'right-hand', shape: 'ellipse', attrs: { cx: 241.5, cy: 222.9, rx: 11, ry: 17, transform: 'rotate(-25 241.5 222.9)' }, label: 'Hand', labelX: 261, labelY: 224 },
  { id: 'left-thigh', panelKey: 'left-thigh', shape: 'rect', attrs: wbThighL, label: 'Thigh', labelX: 134, labelY: 290 },
  { id: 'right-thigh', panelKey: 'right-thigh', shape: 'rect', attrs: mirror(wbThighL, WB_MID), label: 'Thigh', labelX: 188, labelY: 290 },
  { id: 'left-knee', panelKey: 'left-knee', shape: 'ellipse', attrs: { cx: 147.5, cy: 294.3, rx: 12.5, ry: 14.5 }, label: 'Knee', labelX: 152, labelY: 359 },
  { id: 'right-knee', panelKey: 'right-knee', shape: 'ellipse', attrs: { cx: 171, cy: 294.2, rx: 12.5, ry: 14.5 }, label: 'Knee', labelX: 170, labelY: 359 },
  { id: 'left-shin', panelKey: 'left-shin', shape: 'rect', attrs: wbShinL, label: 'Shin', labelX: 151, labelY: 368 },
  { id: 'right-shin', panelKey: 'right-shin', shape: 'rect', attrs: mirror(wbShinL, WB_MID), label: 'Shin', labelX: 172, labelY: 368 },
  { id: 'left-foot', panelKey: 'left-foot', shape: 'ellipse', attrs: { cx: 169, cy: 408.5, rx: 9, ry: 17, transform: 'rotate(-5 169 408.5)' }, label: 'Foot', labelX: 146, labelY: 404 },
  { id: 'right-foot', panelKey: 'right-foot', shape: 'ellipse', attrs: { cx: 156, cy: 421.8, rx: 10, ry: 19.3, transform: 'rotate(3 156 421.8)' }, label: 'Foot', labelX: 176, labelY: 404 },
];

const REGISTRY: Record<Gender, Record<ViewSide, ZoneDefinition[]>> = {
  male: { front: maleFront, back: maleBack },
  female: { front: femaleFront, back: femaleBack },
};

export function getZoneDefinitions(gender: Gender, view: ViewSide): ZoneDefinition[] {
  return REGISTRY[gender][view];
}