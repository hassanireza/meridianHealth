/**
 * Meridian Health — Body zone geometry.
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
 *
 * Values below reflect the calibrated pass (bodyZones_calibrated.json).
 */
import type { Gender, ViewSide, ZoneDefinition } from '../models/types';

// ─────────────────────────────────────────────────────────────────────────
// MALE FRONT
// ─────────────────────────────────────────────────────────────────────────
const maleFront: ZoneDefinition[] = [
  { id: 'head', panelKey: 'head', shape: 'ellipse', attrs: { cx: 159.5, cy: 30.5, rx: 20.8, ry: 29 }, label: 'Head', labelX: 160, labelY: 40 },
  { id: 'neck', panelKey: 'neck', shape: 'path', attrs: { d: 'M147 62 L172.5 62 L179.5 82 L141 82 Z' }, label: 'Neck', labelX: 160, labelY: 82 },
  { id: 'left-shoulder', panelKey: 'left-shoulder', shape: 'ellipse', attrs: { cx: 116, cy: 90.3, rx: 12.5, ry: 15, transform: 'rotate(32 116 90.3)' }, label: 'Shoulder', labelX: 100, labelY: 102 },
  { id: 'right-shoulder', panelKey: 'right-shoulder', shape: 'ellipse', attrs: { cx: 202.5, cy: 89, rx: 12.5, ry: 15, transform: 'rotate(-32 202.5 89)' }, label: 'Shoulder', labelX: 220, labelY: 102 },
  { id: 'chest', panelKey: 'chest', shape: 'path', attrs: { d: 'M120 92 C133 82 148 84 160 89.1 C172 84 187 82 200 92 L194 142.8 C176 149.3 139 152.8 128.5 139.3 Z' }, label: 'Chest', labelX: 160, labelY: 126 },
  { id: 'left-arm', panelKey: 'left-arm', shape: 'rect', attrs: { x: 92.9, y: 105.3, width: 23, height: 53, rxCorner: 11.5, transform: 'rotate(19 104.4 131.8)' }, label: 'Arm', labelX: 90, labelY: 154 },
  { id: 'right-arm', panelKey: 'right-arm', shape: 'rect', attrs: { x: 204, y: 105.5, width: 23, height: 51.5, rxCorner: 11.5, transform: 'rotate(-21 215.5 131.2)' }, label: 'Arm', labelX: 230, labelY: 154 },
  { id: 'abdomen', panelKey: 'abdomen', shape: 'path', attrs: { d: 'M126 151 L194 151 L190 182 C179 192 141 192 130 182 Z' }, label: 'Abdomen', labelX: 160, labelY: 178 },
  { id: 'left-forearm', panelKey: 'left-forearm', shape: 'rect', attrs: { x: 69.2, y: 153.5, width: 22, height: 50, rxCorner: 11, transform: 'rotate(35.3 80.2 178.5)' }, label: 'Forearm', labelX: 62, labelY: 194 },
  { id: 'right-forearm', panelKey: 'right-forearm', shape: 'rect', attrs: { x: 227.5, y: 152.3, width: 22, height: 52.4, rxCorner: 11, transform: 'rotate(-34.3 238.5 178.5)' }, label: 'Forearm', labelX: 258, labelY: 194 },
  { id: 'pelvis', panelKey: 'pelvis', shape: 'path', attrs: { d: 'M124 196 C142 189 178 189 196 196 L188 210 C173 222 147 222 132 210 Z' }, label: 'Pelvis', labelX: 160, labelY: 222 },
  { id: 'left-hand', panelKey: 'left-hand', shape: 'ellipse', attrs: { cx: 57, cy: 217, rx: 15, ry: 18.8, transform: 'rotate(30 57 217)' }, label: 'Hand', labelX: 48, labelY: 228 },
  { id: 'right-hand', panelKey: 'right-hand', shape: 'ellipse', attrs: { cx: 263.5, cy: 218.1, rx: 15, ry: 19, transform: 'rotate(-30 263.5 218.1)' }, label: 'Hand', labelX: 272, labelY: 228 },
  { id: 'left-thigh', panelKey: 'left-thigh', shape: 'rect', attrs: { x: 116.8, y: 211.9, width: 35, height: 70, rxCorner: 17.5, transform: 'rotate(8.8 134.3 246.9)' }, label: 'Thigh', labelX: 122, labelY: 273 },
  { id: 'right-thigh', panelKey: 'right-thigh', shape: 'rect', attrs: { x: 168.8, y: 215, width: 35, height: 70, rxCorner: 17.5, transform: 'rotate(-8.8 186.3 250)' }, label: 'Thigh', labelX: 198, labelY: 273 },
  { id: 'left-knee', panelKey: 'left-knee', shape: 'ellipse', attrs: { cx: 125.5, cy: 299.3, rx: 15, ry: 16.5, transform: 'rotate(4 125.5 299.3)' }, label: 'Knee', labelX: 122, labelY: 317 },
  { id: 'right-knee', panelKey: 'right-knee', shape: 'ellipse', attrs: { cx: 194.5, cy: 302.2, rx: 15, ry: 16.5, transform: 'rotate(-13 194.5 302.2)' }, label: 'Knee', labelX: 198, labelY: 317 },
  { id: 'left-shin', panelKey: 'left-shin', shape: 'rect', attrs: { x: 105, y: 317.3, width: 23, height: 89, rxCorner: 11.5, transform: 'rotate(6.6 116.5 361.8)' }, label: 'Shin', labelX: 113, labelY: 354 },
  { id: 'right-shin', panelKey: 'right-shin', shape: 'rect', attrs: { x: 192.5, y: 319.2, width: 23, height: 85, rxCorner: 11.5, transform: 'rotate(-6.6 204 361.7)' }, label: 'Shin', labelX: 207, labelY: 354 },
  { id: 'left-foot', panelKey: 'left-foot', shape: 'ellipse', attrs: { cx: 105.5, cy: 425, rx: 13, ry: 16.5, transform: 'rotate(23 105.5 425)' }, label: 'Foot', labelX: 108, labelY: 420 },
  { id: 'right-foot', panelKey: 'right-foot', shape: 'ellipse', attrs: { cx: 212, cy: 423.4, rx: 13, ry: 16.5, transform: 'rotate(-19 212 423.4)' }, label: 'Foot', labelX: 212, labelY: 420 },
];

// ─────────────────────────────────────────────────────────────────────────
// MALE BACK
// ─────────────────────────────────────────────────────────────────────────
const maleBack: ZoneDefinition[] = [
  { id: 'head', panelKey: 'head', shape: 'ellipse', attrs: { cx: 158, cy: 25.9, rx: 20.3, ry: 24.8 }, label: 'Head', labelX: 160, labelY: 40 },
  { id: 'neck', panelKey: 'neck', shape: 'path', attrs: { d: 'M143 53 L173 53 L177 73 L139 73 Z' }, label: 'Neck', labelX: 160, labelY: 80 },
  { id: 'left-shoulder', panelKey: 'left-shoulder', shape: 'ellipse', attrs: { cx: 112, cy: 81.3, rx: 12.5, ry: 15, transform: 'rotate(26 112 81.3)' }, label: 'Shoulder', labelX: 97, labelY: 100 },
  { id: 'right-shoulder', panelKey: 'right-shoulder', shape: 'ellipse', attrs: { cx: 202, cy: 81.1, rx: 12.5, ry: 15, transform: 'rotate(-26 202 81.1)' }, label: 'Shoulder', labelX: 223, labelY: 100 },
  { id: 'upper-back', panelKey: 'upper-back', shape: 'path', attrs: { d: 'M121 80 C130 73 145 75 157 78.5 C169 75 184 73 193 80 L189 140 C177 148 137 148 125 140 Z' }, label: 'Upper Back', labelX: 160, labelY: 126 },
  { id: 'left-arm', panelKey: 'left-arm', shape: 'rect', attrs: { x: 91.3, y: 96.1, width: 23, height: 49, rxCorner: 11.5, transform: 'rotate(19.6 102.8 120.6)' }, label: 'Arm', labelX: 88, labelY: 146 },
  { id: 'right-arm', panelKey: 'right-arm', shape: 'rect', attrs: { x: 200.8, y: 95.2, width: 23, height: 52.3, rxCorner: 11.5, transform: 'rotate(-22.6 212.3 121.3)' }, label: 'Arm', labelX: 232, labelY: 146 },
  { id: 'lower-back', panelKey: 'lower-back', shape: 'path', attrs: { d: 'M125 148 L189 148 L189 172 C177 182 137 182 125 172 Z' }, label: 'Lower Back', labelX: 160, labelY: 178 },
  { id: 'left-forearm', panelKey: 'left-forearm', shape: 'rect', attrs: { x: 64.1, y: 140.8, width: 23.5, height: 53.7, rxCorner: 11.8, transform: 'rotate(35.2 75.8 167.7)' }, label: 'Forearm', labelX: 55, labelY: 188 },
  { id: 'right-forearm', panelKey: 'right-forearm', shape: 'rect', attrs: { x: 227.4, y: 140.9, width: 23, height: 56.7, rxCorner: 11.5, transform: 'rotate(-36.2 238.9 169.2)' }, label: 'Forearm', labelX: 265, labelY: 188 },
  { id: 'glutes', panelKey: 'glutes', shape: 'path', attrs: { d: 'M121 183 C139 181 175 181 193 183 L185 209 C170 216 144 216 129 210 Z' }, label: 'Glutes', labelX: 160, labelY: 218 },
  { id: 'left-hand', panelKey: 'left-hand', shape: 'ellipse', attrs: { cx: 47, cy: 211, rx: 15.3, ry: 18.8, transform: 'rotate(32 47 211)' }, label: 'Hand', labelX: 36, labelY: 221 },
  { id: 'right-hand', panelKey: 'right-hand', shape: 'ellipse', attrs: { cx: 268.5, cy: 210.5, rx: 15, ry: 18.8, transform: 'rotate(-32 268.5 210.5)' }, label: 'Hand', labelX: 284, labelY: 221 },
  { id: 'left-thigh', panelKey: 'left-thigh', shape: 'rect', attrs: { x: 111.5, y: 215.4, width: 36, height: 72, rxCorner: 18, transform: 'rotate(7.1 129.5 251.4)' }, label: 'Thigh', labelX: 121, labelY: 263 },
  { id: 'right-thigh', panelKey: 'right-thigh', shape: 'rect', attrs: { x: 166.5, y: 215.1, width: 36, height: 72, rxCorner: 18, transform: 'rotate(-7.1 184.5 251.1)' }, label: 'Thigh', labelX: 199, labelY: 263 },
  { id: 'left-knee', panelKey: 'left-knee', shape: 'ellipse', attrs: { cx: 123.5, cy: 300.9, rx: 14, ry: 12.5 }, label: 'Knee', labelX: 124, labelY: 305 },
  { id: 'right-knee', panelKey: 'right-knee', shape: 'ellipse', attrs: { cx: 189.5, cy: 301, rx: 14, ry: 12.5 }, label: 'Knee', labelX: 196, labelY: 305 },
  { id: 'left-shin', panelKey: 'left-shin', shape: 'rect', attrs: { x: 104.3, y: 314.6, width: 25, height: 85.4, rxCorner: 12.5, transform: 'rotate(4.6 116.8 357.3)' }, label: 'Shin', labelX: 114, labelY: 346 },
  { id: 'right-shin', panelKey: 'right-shin', shape: 'rect', attrs: { x: 183.3, y: 315.6, width: 25, height: 86, rxCorner: 12.5, transform: 'rotate(-4.6 195.8 358.6)' }, label: 'Shin', labelX: 206, labelY: 346 },
  { id: 'left-foot', panelKey: 'left-foot', shape: 'ellipse', attrs: { cx: 111, cy: 417.8, rx: 14, ry: 16, transform: 'rotate(32 111 417.8)' }, label: 'Foot', labelX: 108, labelY: 413 },
  { id: 'right-foot', panelKey: 'right-foot', shape: 'ellipse', attrs: { cx: 203, cy: 418.4, rx: 14, ry: 15.8, transform: 'rotate(-23 203 418.4)' }, label: 'Foot', labelX: 212, labelY: 413 },
];

// ─────────────────────────────────────────────────────────────────────────
// FEMALE FRONT
// ─────────────────────────────────────────────────────────────────────────
const femaleFront: ZoneDefinition[] = [
  { id: 'head', panelKey: 'head', shape: 'ellipse', attrs: { cx: 158, cy: 28.9, rx: 21, ry: 28 }, label: 'Head', labelX: 160, labelY: 39 },
  { id: 'neck', panelKey: 'neck', shape: 'path', attrs: { d: 'M146 59 L172 59 L175 80 L143 80 Z' }, label: 'Neck', labelX: 160, labelY: 80 },
  { id: 'left-shoulder', panelKey: 'left-shoulder', shape: 'ellipse', attrs: { cx: 121.5, cy: 87.2, rx: 12.5, ry: 15, transform: 'rotate(25 121.5 87.2)' }, label: 'Shoulder', labelX: 109, labelY: 99 },
  { id: 'right-shoulder', panelKey: 'right-shoulder', shape: 'ellipse', attrs: { cx: 194.5, cy: 86, rx: 12.5, ry: 15, transform: 'rotate(-25 194.5 86)' }, label: 'Shoulder', labelX: 211, labelY: 99 },
  { id: 'chest', panelKey: 'chest', shape: 'path', attrs: { d: 'M124 87 C137 78 150 82 160 88 C170 82 183 78 196 87 L192 133 C181 143 139 143 128 133 Z' }, label: 'Chest', labelX: 160, labelY: 122 },
  { id: 'left-arm', panelKey: 'left-arm', shape: 'rect', attrs: { x: 102.5, y: 102.5, width: 20, height: 47.7, rxCorner: 10, transform: 'rotate(14.9 112.5 126.3)' }, label: 'Arm', labelX: 98, labelY: 150 },
  { id: 'right-arm', panelKey: 'right-arm', shape: 'rect', attrs: { x: 195.5, y: 102.7, width: 20, height: 51.7, rxCorner: 10, transform: 'rotate(-18.9 205.5 128.5)' }, label: 'Arm', labelX: 220, labelY: 150 },
  { id: 'abdomen', panelKey: 'abdomen', shape: 'path', attrs: { d: 'M128 142 L190 142 L187 174 C177 184 141 184 131 174 Z' }, label: 'Abdomen', labelX: 160, labelY: 172 },
  { id: 'left-forearm', panelKey: 'left-forearm', shape: 'rect', attrs: { x: 80.5, y: 146.6, width: 20, height: 52, rxCorner: 10, transform: 'rotate(36.9 90.5 172.6)' }, label: 'Forearm', labelX: 66, labelY: 194 },
  { id: 'right-forearm', panelKey: 'right-forearm', shape: 'rect', attrs: { x: 219.5, y: 151.5, width: 20, height: 49, rxCorner: 10, transform: 'rotate(-33.9 229.5 176)' }, label: 'Forearm', labelX: 252, labelY: 194 },
  { id: 'pelvis', panelKey: 'pelvis', shape: 'path', attrs: { d: 'M116 188.9 C141 180.9 175 180.9 200 188.9 L192 205.9 C174 218.9 142 218.9 124 205.9 Z' }, label: 'Pelvis', labelX: 160, labelY: 218 },
  { id: 'left-hand', panelKey: 'left-hand', shape: 'ellipse', attrs: { cx: 64, cy: 212.8, rx: 12, ry: 19.5, transform: 'rotate(28 64 212.8)' }, label: 'Hand', labelX: 51, labelY: 226 },
  { id: 'right-hand', panelKey: 'right-hand', shape: 'ellipse', attrs: { cx: 254.5, cy: 213.1, rx: 12, ry: 18.8, transform: 'rotate(-28 254.5 213.1)' }, label: 'Hand', labelX: 267, labelY: 226 },
  { id: 'left-thigh', panelKey: 'left-thigh', shape: 'rect', attrs: { x: 124.3, y: 214.9, width: 30, height: 73, rxCorner: 15, transform: 'rotate(-4.5 139.3 251.4)' }, label: 'Thigh', labelX: 132, labelY: 300 },
  { id: 'right-thigh', panelKey: 'right-thigh', shape: 'rect', attrs: { x: 165.3, y: 213.6, width: 30, height: 71.5, rxCorner: 15, transform: 'rotate(5.5 180.3 249.3)' }, label: 'Thigh', labelX: 188, labelY: 300 },
  { id: 'left-knee', panelKey: 'left-knee', shape: 'ellipse', attrs: { cx: 145, cy: 303.8, rx: 12.5, ry: 14.5 }, label: 'Knee', labelX: 148, labelY: 372 },
  { id: 'right-knee', panelKey: 'right-knee', shape: 'ellipse', attrs: { cx: 173, cy: 301.4, rx: 12.5, ry: 14.5 }, label: 'Knee', labelX: 170, labelY: 372 },
  { id: 'left-shin', panelKey: 'left-shin', shape: 'rect', attrs: { x: 137.5, y: 320.7, width: 23, height: 77, rxCorner: 11.5, transform: 'rotate(-5 149 359.2)' }, label: 'Shin', labelX: 147, labelY: 392 },
  { id: 'right-shin', panelKey: 'right-shin', shape: 'rect', attrs: { x: 158.8, y: 318.7, width: 23, height: 83, rxCorner: 11.5, transform: 'rotate(5 170.3 360.2)' }, label: 'Shin', labelX: 172, labelY: 392 },
  { id: 'left-foot', panelKey: 'left-foot', shape: 'ellipse', attrs: { cx: 153, cy: 426, rx: 7.8, ry: 18, transform: 'rotate(3 153 426)' }, label: 'Foot', labelX: 144, labelY: 436 },
  { id: 'right-foot', panelKey: 'right-foot', shape: 'ellipse', attrs: { cx: 164, cy: 432.5, rx: 11.5, ry: 21, transform: 'rotate(5 164 432.5)' }, label: 'Foot', labelX: 174, labelY: 436 },
];

// ─────────────────────────────────────────────────────────────────────────
// FEMALE BACK
// ─────────────────────────────────────────────────────────────────────────
const femaleBack: ZoneDefinition[] = [
  { id: 'head', panelKey: 'head', shape: 'ellipse', attrs: { cx: 161, cy: 38.3, rx: 18.8, ry: 24 }, label: 'Head', labelX: 160, labelY: 38 },
  { id: 'neck', panelKey: 'neck', shape: 'path', attrs: { d: 'M148 64 L174 64 L177 87 L145 87 Z' }, label: 'Neck', labelX: 160, labelY: 78 },
  { id: 'left-shoulder', panelKey: 'left-shoulder', shape: 'ellipse', attrs: { cx: 127, cy: 92, rx: 11, ry: 15, transform: 'rotate(30 127 92)' }, label: 'Shoulder', labelX: 114, labelY: 99 },
  { id: 'right-shoulder', panelKey: 'right-shoulder', shape: 'ellipse', attrs: { cx: 196.5, cy: 95.5, rx: 11, ry: 15, transform: 'rotate(-25 196.5 95.5)' }, label: 'Shoulder', labelX: 206, labelY: 99 },
  { id: 'upper-back', panelKey: 'upper-back', shape: 'path', attrs: { d: 'M128 92 C138 85 150 88 160 92.5 C170 88 182 85 192 92 L183 146 C167 155 153 155 137 146 Z' }, label: 'Upper Back', labelX: 160, labelY: 120 },
  { id: 'left-arm', panelKey: 'left-arm', shape: 'rect', attrs: { x: 108.3, y: 107.6, width: 20, height: 45.5, rxCorner: 10, transform: 'rotate(11.6 118.3 130.3)' }, label: 'Arm', labelX: 102, labelY: 150 },
  { id: 'right-arm', panelKey: 'right-arm', shape: 'rect', attrs: { x: 193.3, y: 111.7, width: 20, height: 50.5, rxCorner: 10, transform: 'rotate(-13.6 203.3 136.9)' }, label: 'Arm', labelX: 220, labelY: 150 },
  { id: 'lower-back', panelKey: 'lower-back', shape: 'path', attrs: { d: 'M133 154 L189 154 L189 176 C179 185 145 185 133 176 Z' }, label: 'Lower Back', labelX: 160, labelY: 172 },
  { id: 'left-forearm', panelKey: 'left-forearm', shape: 'rect', attrs: { x: 92, y: 151.8, width: 20, height: 52.8, rxCorner: 10, transform: 'rotate(28.7 102 178.2)' }, label: 'Forearm', labelX: 74, labelY: 194 },
  { id: 'right-forearm', panelKey: 'right-forearm', shape: 'rect', attrs: { x: 213, y: 159.2, width: 20, height: 46.3, rxCorner: 10, transform: 'rotate(-27.7 223 182.3)' }, label: 'Forearm', labelX: 246, labelY: 194 },
  { id: 'glutes', panelKey: 'glutes', shape: 'path', attrs: { d: 'M123 190 C144 183 178 183 199 190 L191 208 C174 221 146 221 129 208 Z' }, label: 'Glutes', labelX: 160, labelY: 214 },
  { id: 'left-hand', panelKey: 'left-hand', shape: 'ellipse', attrs: { cx: 82, cy: 223.3, rx: 11, ry: 19.5, transform: 'rotate(30 82 223.3)' }, label: 'Hand', labelX: 61, labelY: 224 },
  { id: 'right-hand', panelKey: 'right-hand', shape: 'ellipse', attrs: { cx: 241.5, cy: 221.4, rx: 11, ry: 17, transform: 'rotate(-26 241.5 221.4)' }, label: 'Hand', labelX: 261, labelY: 224 },
  { id: 'left-thigh', panelKey: 'left-thigh', shape: 'rect', attrs: { x: 128.3, y: 216.8, width: 30, height: 64, rxCorner: 15, transform: 'rotate(-6.1 143.3 248.8)' }, label: 'Thigh', labelX: 134, labelY: 290 },
  { id: 'right-thigh', panelKey: 'right-thigh', shape: 'rect', attrs: { x: 163.3, y: 217.2, width: 30, height: 64.5, rxCorner: 15, transform: 'rotate(6.1 178.3 249.4)' }, label: 'Thigh', labelX: 188, labelY: 290 },
  { id: 'left-knee', panelKey: 'left-knee', shape: 'ellipse', attrs: { cx: 147.5, cy: 297.3, rx: 12.5, ry: 14.5 }, label: 'Knee', labelX: 152, labelY: 359 },
  { id: 'right-knee', panelKey: 'right-knee', shape: 'ellipse', attrs: { cx: 171, cy: 297.2, rx: 12.5, ry: 14.5 }, label: 'Knee', labelX: 170, labelY: 359 },
  { id: 'left-shin', panelKey: 'left-shin', shape: 'rect', attrs: { x: 143.5, y: 316.6, width: 23, height: 61, rxCorner: 11.5, transform: 'rotate(-10.2 155 347.1)' }, label: 'Shin', labelX: 151, labelY: 368 },
  { id: 'right-shin', panelKey: 'right-shin', shape: 'rect', attrs: { x: 153.5, y: 317.7, width: 23, height: 77.5, rxCorner: 11.5, transform: 'rotate(5.2 165 356.4)' }, label: 'Shin', labelX: 172, labelY: 368 },
  { id: 'left-foot', panelKey: 'left-foot', shape: 'ellipse', attrs: { cx: 170, cy: 417.5, rx: 9, ry: 17, transform: 'rotate(-5 170 417.5)' }, label: 'Foot', labelX: 146, labelY: 404 },
  { id: 'right-foot', panelKey: 'right-foot', shape: 'ellipse', attrs: { cx: 156, cy: 433.8, rx: 10, ry: 19.3, transform: 'rotate(3 156 433.8)' }, label: 'Foot', labelX: 176, labelY: 404 },
];

const REGISTRY: Record<Gender, Record<ViewSide, ZoneDefinition[]>> = {
  male: { front: maleFront, back: maleBack },
  female: { front: femaleFront, back: femaleBack },
};

export function getZoneDefinitions(gender: Gender, view: ViewSide): ZoneDefinition[] {
  return REGISTRY[gender][view];
}
