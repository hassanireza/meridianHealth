const ZONES = {"male":{"front":[{"id":"head","panelKey":"head","shape":"ellipse","attrs":{"cx":159.5,"cy":30.5,"rx":20.8,"ry":29},"label":"Head","labelX":160,"labelY":40},{"id":"neck","panelKey":"neck","shape":"path","attrs":{"d":"M150 62 L169.5 62 Q172.5 62 173.49 64.83 L178.51 79.17 Q179.5 82 176.5 82 L144 82 Q141 82 141.86 79.13 L146.14 64.87 Q147 62 150 62 Z"},"label":"Neck","labelX":160,"labelY":82},{"id":"left-shoulder","panelKey":"left-shoulder","shape":"ellipse","attrs":{"cx":116,"cy":90.3,"rx":12.5,"ry":15,"transform":"rotate(32 116 90.3)"},"label":"Shoulder","labelX":100,"labelY":102},{"id":"right-shoulder","panelKey":"right-shoulder","shape":"ellipse","attrs":{"cx":202.5,"cy":89,"rx":12.5,"ry":15,"transform":"rotate(-32 202.5 89)"},"label":"Shoulder","labelX":220,"labelY":102},{"id":"chest","panelKey":"chest","shape":"path","attrs":{"d":"M132 100 C142 91 151 91 160 95 C169 91 178 91 188 100 L185 142.8 C174 149.3 142 152.8 135 139.3 Z"},"label":"Chest","labelX":160,"labelY":126},{"id":"left-arm","panelKey":"left-arm","shape":"rect","attrs":{"x":92.9,"y":105.3,"width":23,"height":53,"rxCorner":11.5,"transform":"rotate(19 104.4 131.8)"},"label":"Arm","labelX":90,"labelY":154},{"id":"right-arm","panelKey":"right-arm","shape":"rect","attrs":{"x":204,"y":105.5,"width":23,"height":51.5,"rxCorner":11.5,"transform":"rotate(-21 215.5 131.2)"},"label":"Arm","labelX":230,"labelY":154},{"id":"abdomen","panelKey":"abdomen","shape":"path","attrs":{"d":"M130 151 L190 151 Q194 151 193.49 154.97 L190.51 178.03 Q190 182 187.04 184.69 C179 192 141 192 132.96 184.69 Q130 182 129.49 178.03 L126.51 154.97 Q126 151 130 151 Z"},"label":"Abdomen","labelX":160,"labelY":178},{"id":"left-forearm","panelKey":"left-forearm","shape":"rect","attrs":{"x":69.2,"y":153.5,"width":22,"height":50,"rxCorner":11,"transform":"rotate(35.3 80.2 178.5)"},"label":"Forearm","labelX":62,"labelY":194},{"id":"right-forearm","panelKey":"right-forearm","shape":"rect","attrs":{"x":227.5,"y":152.3,"width":22,"height":52.4,"rxCorner":11,"transform":"rotate(-34.3 238.5 178.5)"},"label":"Forearm","labelX":258,"labelY":194},{"id":"pelvis","panelKey":"pelvis","shape":"path","attrs":{"d":"M127.73 194.55 C142 189 178 189 192.27 194.55 Q196 196 194.02 199.47 L189.98 206.53 Q188 210 184.88 212.5 C173 222 147 222 135.12 212.5 Q132 210 130.02 206.53 L125.98 199.47 Q124 196 127.73 194.55 Z"},"label":"Pelvis","labelX":160,"labelY":222},{"id":"left-hand","panelKey":"left-hand","shape":"ellipse","attrs":{"cx":57,"cy":217,"rx":15,"ry":18.8,"transform":"rotate(30 57 217)"},"label":"Hand","labelX":48,"labelY":228},{"id":"right-hand","panelKey":"right-hand","shape":"ellipse","attrs":{"cx":263.5,"cy":218.1,"rx":15,"ry":19,"transform":"rotate(-30 263.5 218.1)"},"label":"Hand","labelX":272,"labelY":228},{"id":"left-thigh","panelKey":"left-thigh","shape":"rect","attrs":{"x":116.8,"y":211.9,"width":35,"height":70,"rxCorner":17.5,"transform":"rotate(8.8 134.3 246.9)"},"label":"Thigh","labelX":122,"labelY":273},{"id":"right-thigh","panelKey":"right-thigh","shape":"rect","attrs":{"x":168.8,"y":215,"width":35,"height":70,"rxCorner":17.5,"transform":"rotate(-8.8 186.3 250)"},"label":"Thigh","labelX":198,"labelY":273},{"id":"left-knee","panelKey":"left-knee","shape":"ellipse","attrs":{"cx":125.5,"cy":299.3,"rx":15,"ry":16.5,"transform":"rotate(4 125.5 299.3)"},"label":"Knee","labelX":122,"labelY":317},{"id":"right-knee","panelKey":"right-knee","shape":"ellipse","attrs":{"cx":194.5,"cy":302.2,"rx":15,"ry":16.5,"transform":"rotate(-13 194.5 302.2)"},"label":"Knee","labelX":198,"labelY":317},{"id":"left-shin","panelKey":"left-shin","shape":"rect","attrs":{"x":105,"y":317.3,"width":23,"height":89,"rxCorner":11.5,"transform":"rotate(6.6 116.5 361.8)"},"label":"Shin","labelX":113,"labelY":354},{"id":"right-shin","panelKey":"right-shin","shape":"rect","attrs":{"x":192.5,"y":319.2,"width":23,"height":85,"rxCorner":11.5,"transform":"rotate(-6.6 204 361.7)"},"label":"Shin","labelX":207,"labelY":354},{"id":"left-foot","panelKey":"left-foot","shape":"ellipse","attrs":{"cx":105.5,"cy":425,"rx":13,"ry":16.5,"transform":"rotate(23 105.5 425)"},"label":"Foot","labelX":108,"labelY":420},{"id":"right-foot","panelKey":"right-foot","shape":"ellipse","attrs":{"cx":212,"cy":423.4,"rx":13,"ry":16.5,"transform":"rotate(-19 212 423.4)"},"label":"Foot","labelX":212,"labelY":420}],"back":[{"id":"head","panelKey":"head","shape":"ellipse","attrs":{"cx":158,"cy":25.9,"rx":20.3,"ry":24.8},"label":"Head","labelX":160,"labelY":40},{"id":"neck","panelKey":"neck","shape":"path","attrs":{"d":"M146 53 L170 53 Q173 53 173.59 55.94 L176.41 70.06 Q177 73 174 73 L142 73 Q139 73 139.59 70.06 L142.41 55.94 Q143 53 146 53 Z"},"label":"Neck","labelX":160,"labelY":80},{"id":"left-shoulder","panelKey":"left-shoulder","shape":"ellipse","attrs":{"cx":112,"cy":81.3,"rx":12.5,"ry":15,"transform":"rotate(26 112 81.3)"},"label":"Shoulder","labelX":97,"labelY":100},{"id":"right-shoulder","panelKey":"right-shoulder","shape":"ellipse","attrs":{"cx":202,"cy":81.1,"rx":12.5,"ry":15,"transform":"rotate(-26 202 81.1)"},"label":"Shoulder","labelX":223,"labelY":100},{"id":"upper-back","panelKey":"upper-back","shape":"path","attrs":{"d":"M130 90 C138 82 148 84 160 88 C171 84 180 82 187 92 L189 140 C177 148 137 148 125 140 Z"},"label":"Upper Back","labelX":160,"labelY":126},{"id":"left-arm","panelKey":"left-arm","shape":"rect","attrs":{"x":91.3,"y":96.1,"width":23,"height":49,"rxCorner":11.5,"transform":"rotate(19.6 102.8 120.6)"},"label":"Arm","labelX":88,"labelY":146},{"id":"right-arm","panelKey":"right-arm","shape":"rect","attrs":{"x":200.8,"y":95.2,"width":23,"height":52.3,"rxCorner":11.5,"transform":"rotate(-22.6 212.3 121.3)"},"label":"Arm","labelX":232,"labelY":146},{"id":"lower-back","panelKey":"lower-back","shape":"path","attrs":{"d":"M129 148 L185 148 Q189 148 189 152 L189 168 Q189 172 185.93 174.56 C177 182 137 182 128.07 174.56 Q125 172 125 168 L125 152 Q125 148 129 148 Z"},"label":"Lower Back","labelX":160,"labelY":178},{"id":"left-forearm","panelKey":"left-forearm","shape":"rect","attrs":{"x":64.1,"y":140.8,"width":23.5,"height":53.7,"rxCorner":11.8,"transform":"rotate(35.2 75.8 167.7)"},"label":"Forearm","labelX":55,"labelY":188},{"id":"right-forearm","panelKey":"right-forearm","shape":"rect","attrs":{"x":227.4,"y":140.9,"width":23,"height":56.7,"rxCorner":11.5,"transform":"rotate(-36.2 238.9 169.2)"},"label":"Forearm","labelX":265,"labelY":188},{"id":"glutes","panelKey":"glutes","shape":"path","attrs":{"d":"M124.98 182.56 C139 181 175 181 189.02 182.56 Q193 183 191.82 186.82 L186.18 205.18 Q185 209 181.38 210.69 C170 216 144 216 132.71 211.49 Q129 210 127.86 206.16 L122.14 186.84 Q121 183 124.98 182.56 Z"},"label":"Glutes","labelX":160,"labelY":218},{"id":"left-hand","panelKey":"left-hand","shape":"ellipse","attrs":{"cx":47,"cy":211,"rx":15.3,"ry":18.8,"transform":"rotate(32 47 211)"},"label":"Hand","labelX":36,"labelY":221},{"id":"right-hand","panelKey":"right-hand","shape":"ellipse","attrs":{"cx":268.5,"cy":210.5,"rx":15,"ry":18.8,"transform":"rotate(-32 268.5 210.5)"},"label":"Hand","labelX":284,"labelY":221},{"id":"left-thigh","panelKey":"left-thigh","shape":"rect","attrs":{"x":111.5,"y":215.4,"width":36,"height":72,"rxCorner":18,"transform":"rotate(7.1 129.5 251.4)"},"label":"Thigh","labelX":121,"labelY":263},{"id":"right-thigh","panelKey":"right-thigh","shape":"rect","attrs":{"x":166.5,"y":215.1,"width":36,"height":72,"rxCorner":18,"transform":"rotate(-7.1 184.5 251.1)"},"label":"Thigh","labelX":199,"labelY":263},{"id":"left-knee","panelKey":"left-knee","shape":"ellipse","attrs":{"cx":123.5,"cy":300.9,"rx":14,"ry":12.5},"label":"Knee","labelX":124,"labelY":305},{"id":"right-knee","panelKey":"right-knee","shape":"ellipse","attrs":{"cx":189.5,"cy":301,"rx":14,"ry":12.5},"label":"Knee","labelX":196,"labelY":305},{"id":"left-shin","panelKey":"left-shin","shape":"rect","attrs":{"x":104.3,"y":314.6,"width":25,"height":85.4,"rxCorner":12.5,"transform":"rotate(4.6 116.8 357.3)"},"label":"Shin","labelX":114,"labelY":346},{"id":"right-shin","panelKey":"right-shin","shape":"rect","attrs":{"x":183.3,"y":315.6,"width":25,"height":86,"rxCorner":12.5,"transform":"rotate(-4.6 195.8 358.6)"},"label":"Shin","labelX":206,"labelY":346},{"id":"left-foot","panelKey":"left-foot","shape":"ellipse","attrs":{"cx":111,"cy":417.8,"rx":14,"ry":16,"transform":"rotate(32 111 417.8)"},"label":"Foot","labelX":108,"labelY":413},{"id":"right-foot","panelKey":"right-foot","shape":"ellipse","attrs":{"cx":203,"cy":418.4,"rx":14,"ry":15.8,"transform":"rotate(-23 203 418.4)"},"label":"Foot","labelX":212,"labelY":413}]},"female":{"front":[{"id":"head","panelKey":"head","shape":"ellipse","attrs":{"cx":158,"cy":28.9,"rx":21,"ry":28},"label":"Head","labelX":160,"labelY":39},{"id":"neck","panelKey":"neck","shape":"path","attrs":{"d":"M149 59 L169 59 Q172 59 172.42 61.97 L174.58 77.03 Q175 80 172 80 L146 80 Q143 80 143.42 77.03 L145.58 61.97 Q146 59 149 59 Z"},"label":"Neck","labelX":160,"labelY":80},{"id":"left-shoulder","panelKey":"left-shoulder","shape":"ellipse","attrs":{"cx":121.5,"cy":87.2,"rx":12.5,"ry":15,"transform":"rotate(25 121.5 87.2)"},"label":"Shoulder","labelX":109,"labelY":99},{"id":"right-shoulder","panelKey":"right-shoulder","shape":"ellipse","attrs":{"cx":194.5,"cy":86,"rx":12.5,"ry":15,"transform":"rotate(-25 194.5 86)"},"label":"Shoulder","labelX":211,"labelY":99},{"id":"chest","panelKey":"chest","shape":"path","attrs":{"d":"M135 98 C144 90 152 91 160 94 C168 91 176 90 183 99 L182 133 C172 143 148 143 138 133 Z"},"label":"Chest","labelX":160,"labelY":122},{"id":"left-arm","panelKey":"left-arm","shape":"rect","attrs":{"x":102.5,"y":102.5,"width":20,"height":47.7,"rxCorner":10,"transform":"rotate(14.9 112.5 126.3)"},"label":"Arm","labelX":98,"labelY":150},{"id":"right-arm","panelKey":"right-arm","shape":"rect","attrs":{"x":195.5,"y":102.7,"width":20,"height":51.7,"rxCorner":10,"transform":"rotate(-18.9 205.5 128.5)"},"label":"Arm","labelX":220,"labelY":150},{"id":"abdomen","panelKey":"abdomen","shape":"path","attrs":{"d":"M132 142 L186 142 Q190 142 189.63 145.98 L187.37 170.02 Q187 174 184.17 176.83 C177 184 141 184 133.83 176.83 Q131 174 130.63 170.02 L128.37 145.98 Q128 142 132 142 Z"},"label":"Abdomen","labelX":160,"labelY":172},{"id":"left-forearm","panelKey":"left-forearm","shape":"rect","attrs":{"x":80.5,"y":146.6,"width":20,"height":52,"rxCorner":10,"transform":"rotate(36.9 90.5 172.6)"},"label":"Forearm","labelX":66,"labelY":194},{"id":"right-forearm","panelKey":"right-forearm","shape":"rect","attrs":{"x":219.5,"y":151.5,"width":20,"height":49,"rxCorner":10,"transform":"rotate(-33.9 229.5 176)"},"label":"Forearm","labelX":252,"labelY":194},{"id":"pelvis","panelKey":"pelvis","shape":"path","attrs":{"d":"M119.81 187.68 C141 180.9 175 180.9 196.19 187.68 Q200 188.9 198.3 192.52 L193.7 202.28 Q192 205.9 188.76 208.24 C174 218.9 142 218.9 127.24 208.24 Q124 205.9 122.3 202.28 L117.7 192.52 Q116 188.9 119.81 187.68 Z"},"label":"Pelvis","labelX":160,"labelY":218},{"id":"left-hand","panelKey":"left-hand","shape":"ellipse","attrs":{"cx":64,"cy":212.8,"rx":12,"ry":19.5,"transform":"rotate(28 64 212.8)"},"label":"Hand","labelX":51,"labelY":226},{"id":"right-hand","panelKey":"right-hand","shape":"ellipse","attrs":{"cx":254.5,"cy":213.1,"rx":12,"ry":18.8,"transform":"rotate(-28 254.5 213.1)"},"label":"Hand","labelX":267,"labelY":226},{"id":"left-thigh","panelKey":"left-thigh","shape":"rect","attrs":{"x":124.3,"y":214.9,"width":30,"height":73,"rxCorner":15,"transform":"rotate(-4.5 139.3 251.4)"},"label":"Thigh","labelX":132,"labelY":300},{"id":"right-thigh","panelKey":"right-thigh","shape":"rect","attrs":{"x":165.3,"y":213.6,"width":30,"height":71.5,"rxCorner":15,"transform":"rotate(5.5 180.3 249.3)"},"label":"Thigh","labelX":188,"labelY":300},{"id":"left-knee","panelKey":"left-knee","shape":"ellipse","attrs":{"cx":145,"cy":303.8,"rx":12.5,"ry":14.5},"label":"Knee","labelX":148,"labelY":372},{"id":"right-knee","panelKey":"right-knee","shape":"ellipse","attrs":{"cx":173,"cy":301.4,"rx":12.5,"ry":14.5},"label":"Knee","labelX":170,"labelY":372},{"id":"left-shin","panelKey":"left-shin","shape":"rect","attrs":{"x":137.5,"y":320.7,"width":23,"height":77,"rxCorner":11.5,"transform":"rotate(-5 149 359.2)"},"label":"Shin","labelX":147,"labelY":392},{"id":"right-shin","panelKey":"right-shin","shape":"rect","attrs":{"x":158.8,"y":318.7,"width":23,"height":83,"rxCorner":11.5,"transform":"rotate(5 170.3 360.2)"},"label":"Shin","labelX":172,"labelY":392},{"id":"left-foot","panelKey":"left-foot","shape":"ellipse","attrs":{"cx":153,"cy":426,"rx":7.8,"ry":18,"transform":"rotate(3 153 426)"},"label":"Foot","labelX":144,"labelY":436},{"id":"right-foot","panelKey":"right-foot","shape":"ellipse","attrs":{"cx":164,"cy":432.5,"rx":11.5,"ry":21,"transform":"rotate(5 164 432.5)"},"label":"Foot","labelX":174,"labelY":436}],"back":[{"id":"head","panelKey":"head","shape":"ellipse","attrs":{"cx":161,"cy":38.3,"rx":18.8,"ry":24},"label":"Head","labelX":160,"labelY":38},{"id":"neck","panelKey":"neck","shape":"path","attrs":{"d":"M151 64 L171 64 Q174 64 174.39 66.97 L176.61 84.03 Q177 87 174 87 L148 87 Q145 87 145.39 84.03 L147.61 66.97 Q148 64 151 64 Z"},"label":"Neck","labelX":160,"labelY":78},{"id":"left-shoulder","panelKey":"left-shoulder","shape":"ellipse","attrs":{"cx":127,"cy":92,"rx":11,"ry":15,"transform":"rotate(30 127 92)"},"label":"Shoulder","labelX":114,"labelY":99},{"id":"right-shoulder","panelKey":"right-shoulder","shape":"ellipse","attrs":{"cx":196.5,"cy":95.5,"rx":11,"ry":15,"transform":"rotate(-25 196.5 95.5)"},"label":"Shoulder","labelX":206,"labelY":99},{"id":"upper-back","panelKey":"upper-back","shape":"path","attrs":{"d":"M143 101 C150 92 155 90 160 92 C165 90 170 92 178 101 L183 146 C167 155 153 155 137 146 Z"},"label":"Upper Back","labelX":160,"labelY":120},{"id":"left-arm","panelKey":"left-arm","shape":"rect","attrs":{"x":108.3,"y":107.6,"width":20,"height":45.5,"rxCorner":10,"transform":"rotate(11.6 118.3 130.3)"},"label":"Arm","labelX":102,"labelY":150},{"id":"right-arm","panelKey":"right-arm","shape":"rect","attrs":{"x":193.3,"y":111.7,"width":20,"height":50.5,"rxCorner":10,"transform":"rotate(-13.6 203.3 136.9)"},"label":"Arm","labelX":220,"labelY":150},{"id":"lower-back","panelKey":"lower-back","shape":"path","attrs":{"d":"M137 154 L185 154 Q189 154 189 158 L189 172 Q189 176 186.03 178.68 C179 185 145 185 136.2 178.4 Q133 176 133 172 L133 158 Q133 154 137 154 Z"},"label":"Lower Back","labelX":160,"labelY":172},{"id":"left-forearm","panelKey":"left-forearm","shape":"rect","attrs":{"x":92,"y":151.8,"width":20,"height":52.8,"rxCorner":10,"transform":"rotate(28.7 102 178.2)"},"label":"Forearm","labelX":74,"labelY":194},{"id":"right-forearm","panelKey":"right-forearm","shape":"rect","attrs":{"x":213,"y":159.2,"width":20,"height":46.3,"rxCorner":10,"transform":"rotate(-27.7 223 182.3)"},"label":"Forearm","labelX":246,"labelY":194},{"id":"glutes","panelKey":"glutes","shape":"path","attrs":{"d":"M126.79 188.74 C144 183 178 183 195.21 188.74 Q199 190 197.38 193.66 L192.62 204.34 Q191 208 187.82 210.43 C174 221 146 221 132.18 210.43 Q129 208 127.74 204.21 L124.26 193.79 Q123 190 126.79 188.74 Z"},"label":"Glutes","labelX":160,"labelY":214},{"id":"left-hand","panelKey":"left-hand","shape":"ellipse","attrs":{"cx":82,"cy":223.3,"rx":11,"ry":19.5,"transform":"rotate(30 82 223.3)"},"label":"Hand","labelX":61,"labelY":224},{"id":"right-hand","panelKey":"right-hand","shape":"ellipse","attrs":{"cx":241.5,"cy":221.4,"rx":11,"ry":17,"transform":"rotate(-26 241.5 221.4)"},"label":"Hand","labelX":261,"labelY":224},{"id":"left-thigh","panelKey":"left-thigh","shape":"rect","attrs":{"x":128.3,"y":216.8,"width":30,"height":64,"rxCorner":15,"transform":"rotate(-6.1 143.3 248.8)"},"label":"Thigh","labelX":134,"labelY":290},{"id":"right-thigh","panelKey":"right-thigh","shape":"rect","attrs":{"x":163.3,"y":217.2,"width":30,"height":64.5,"rxCorner":15,"transform":"rotate(6.1 178.3 249.4)"},"label":"Thigh","labelX":188,"labelY":290},{"id":"left-knee","panelKey":"left-knee","shape":"ellipse","attrs":{"cx":147.5,"cy":297.3,"rx":12.5,"ry":14.5},"label":"Knee","labelX":152,"labelY":359},{"id":"right-knee","panelKey":"right-knee","shape":"ellipse","attrs":{"cx":171,"cy":297.2,"rx":12.5,"ry":14.5},"label":"Knee","labelX":170,"labelY":359},{"id":"left-shin","panelKey":"left-shin","shape":"rect","attrs":{"x":143.5,"y":316.6,"width":23,"height":61,"rxCorner":11.5,"transform":"rotate(-10.2 155 347.1)"},"label":"Shin","labelX":151,"labelY":368},{"id":"right-shin","panelKey":"right-shin","shape":"rect","attrs":{"x":153.5,"y":317.7,"width":23,"height":77.5,"rxCorner":11.5,"transform":"rotate(5.2 165 356.4)"},"label":"Shin","labelX":172,"labelY":368},{"id":"left-foot","panelKey":"left-foot","shape":"ellipse","attrs":{"cx":170,"cy":417.5,"rx":9,"ry":17,"transform":"rotate(-5 170 417.5)"},"label":"Foot","labelX":146,"labelY":404},{"id":"right-foot","panelKey":"right-foot","shape":"ellipse","attrs":{"cx":156,"cy":433.8,"rx":10,"ry":19.3,"transform":"rotate(3 156 433.8)"},"label":"Foot","labelX":176,"labelY":404}]}};
const IMAGES = {
    female_front: "./images/women-front.webp",
    female_back: "./images/women-back.webp",
    male_front: "./images/man-front.webp",
    male_back: "./images/man-back.webp"
};
let gender = 'male';
let view = 'front';
let selectedId = null;
let selectedPointIndex = null; // flat index of a selected point on the currently-selected path
let dragging = null; // { id, startMouseX, startMouseY, startCx, startCy }

const undoStack = [];
const redoStack = [];
const MAX_UNDO = 60;

function pushUndo() {
  undoStack.push({ gender, view, data: JSON.stringify(ZONES[gender][view]) });
  if (undoStack.length > MAX_UNDO) undoStack.shift();
  redoStack.length = 0; // a new action invalidates the redo history
}

function undo() {
  if (!undoStack.length) return;
  const entry = undoStack.pop();
  redoStack.push({ gender: entry.gender, view: entry.view, data: JSON.stringify(ZONES[entry.gender][entry.view]) });
  ZONES[entry.gender][entry.view] = JSON.parse(entry.data);
  if (entry.gender !== gender || entry.view !== view) {
    gender = entry.gender; view = entry.view;
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.gender === gender && b.dataset.view === view);
    });
  }
  selectedId = null;
  selectedPointIndex = null;
  renderCanvas(); renderZoneList(); renderEditor();
  statusEl.textContent = 'Undid last change.';
}

function redo() {
  if (!redoStack.length) return;
  const entry = redoStack.pop();
  undoStack.push({ gender: entry.gender, view: entry.view, data: JSON.stringify(ZONES[entry.gender][entry.view]) });
  ZONES[entry.gender][entry.view] = JSON.parse(entry.data);
  if (entry.gender !== gender || entry.view !== view) {
    gender = entry.gender; view = entry.view;
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.gender === gender && b.dataset.view === view);
    });
  }
  selectedId = null;
  selectedPointIndex = null;
  renderCanvas(); renderZoneList(); renderEditor();
  statusEl.textContent = 'Redid last change.';
}

// A slider (range or number input) fires many events while being dragged/typed into; we only
// want ONE undo checkpoint per gesture, taken right before the first change.
let sliderGestureActive = false;
function beginSliderGesture() {
  if (!sliderGestureActive) { pushUndo(); sliderGestureActive = true; }
}
window.addEventListener('mouseup', () => { sliderGestureActive = false; });
window.addEventListener('blur', () => { sliderGestureActive = false; }, true);

const svg = document.getElementById('svgOverlay');
const img = document.getElementById('mannikinImg');
const zoneListEl = document.getElementById('zoneList');
const editorEl = document.getElementById('editor');
const statusEl = document.getElementById('status');

function currentZones() {
  return ZONES[gender][view];
}

function findZone(id) {
  return currentZones().find(z => z.id === id);
}

// Convert a zone's attrs into a uniform {cx, cy, width, height, rotation} edit model.
function toEditModel(zone) {
  const a = zone.attrs;
  let rotation = 0;
  const m = /rotate\(([-\d.]+)/.exec(a.transform || '');
  if (m) rotation = parseFloat(m[1]);
  if (zone.shape === 'ellipse') {
    return { cx: a.cx, cy: a.cy, width: a.rx * 2, height: a.ry * 2, rotation };
  }
  if (zone.shape === 'rect') {
    return { cx: a.x + a.width / 2, cy: a.y + a.height / 2, width: a.width, height: a.height, rotation };
  }
  return null; // paths don't use the cx/cy/width/height model - see path helpers below
}

// ---- Path helpers: translate whole path, and edit individual vertices ----

// Turn a "d" string into a reusable template (numbers replaced by {n} placeholders)
// plus the flat list of numbers, so we can move/rebuild it cheaply.
function parsePathD(d) {
  const nums = [];
  const template = d.replace(/-?\d+\.?\d*/g, (m) => {
    nums.push(parseFloat(m));
    return '{' + (nums.length - 1) + '}';
  });
  return { template, nums };
}

function buildPathD(template, nums) {
  return template.replace(/\{(\d+)\}/g, (_, i) => round1(nums[i]));
}

// All commands used in this dataset (M, L, C, Z) are absolute and consist purely
// of x,y pairs, so every consecutive pair of numbers is a point we can shift.
function translatePathD(d, dx, dy) {
  const { template, nums } = parsePathD(d);
  for (let i = 0; i < nums.length; i += 2) {
    nums[i] += dx;
    if (i + 1 < nums.length) nums[i + 1] += dy;
  }
  return buildPathD(template, nums);
}

function getPathPoints(d) {
  const { nums } = parsePathD(d);
  const points = [];
  for (let i = 0; i + 1 < nums.length; i += 2) points.push({ x: nums[i], y: nums[i + 1] });
  return points;
}

function setPathPoint(d, pointIndex, x, y) {
  const { template, nums } = parsePathD(d);
  nums[pointIndex * 2] = x;
  nums[pointIndex * 2 + 1] = y;
  return buildPathD(template, nums);
}

// ---- Segment-level parsing: needed to add/remove whole vertices (not just drag existing ones) ----
// Splits "M145 66 L175 66 C133 90 148 92 160 102 Z" into segments with their own point lists.
// Q (quadratic curve: 1 control point + 1 endpoint) is understood too, since "round corner" produces it.
function parseSegments(d) {
  const re = /([MLCQZ])([^MLCQZ]*)/gi;
  const segs = [];
  let m;
  while ((m = re.exec(d))) {
    const cmd = m[1].toUpperCase();
    const nums = (m[2].match(/-?\d+\.?\d*/g) || []).map(Number);
    const points = [];
    for (let i = 0; i < nums.length; i += 2) points.push({ x: nums[i], y: nums[i + 1] });
    segs.push({ cmd, points });
  }
  return segs;
}

function buildSegments(segs) {
  return segs.map(s => {
    if (s.cmd === 'Z') return 'Z';
    return s.cmd + ' ' + s.points.map(p => `${round1(p.x)} ${round1(p.y)}`).join(' ');
  }).join(' ');
}

// One "vertex" per segment (its endpoint) - what you see as an addable/removable point in the sidebar.
// Curve control points aren't listed here, only the on-path endpoint; they're still individually
// draggable/editable via getPathPoints/setPathPoint above.
function getVertices(d) {
  return parseSegments(d)
    .map((s, segIndex) => ({ segIndex, cmd: s.cmd, point: s.points[s.points.length - 1] || null }))
    .filter(v => v.point);
}

function addVertexAfter(d, segIndex) {
  const segs = parseSegments(d);
  const seg = segs[segIndex];
  if (!seg || !seg.points.length) return d;
  let nextIdx = (segIndex + 1) % segs.length;
  while (!segs[nextIdx].points.length) nextIdx = (nextIdx + 1) % segs.length;
  const p1 = seg.points[seg.points.length - 1];
  const p2 = segs[nextIdx].points[segs[nextIdx].points.length - 1];
  const mid = { x: round1((p1.x + p2.x) / 2), y: round1((p1.y + p2.y) / 2) };
  segs.splice(segIndex + 1, 0, { cmd: 'L', points: [mid] });
  return buildSegments(segs);
}

function removeVertex(d, segIndex) {
  const segs = parseSegments(d);
  if (!segs[segIndex] || segs[segIndex].cmd === 'M' || segs[segIndex].cmd === 'Z') return d; // keep start/close intact
  const vertexCount = segs.filter(s => s.points.length).length;
  if (vertexCount <= 3) return d; // keep at least a triangle
  segs.splice(segIndex, 1);
  return buildSegments(segs);
}

// Rounds a sharp corner into a smooth curve: pulls the corner back on both adjacent edges
// by `t` (fraction of the way to each neighbor) and bridges the gap with a quadratic curve
// that uses the original corner as its control point - a standard "corner fillet" technique.
function smoothVertex(d, segIndex, t = 0.25) {
  const segs = parseSegments(d);
  const seg = segs[segIndex];
  if (!seg || !seg.points.length || seg.cmd === 'M') return d; // can't fillet the path's start point

  let prevIdx = segIndex - 1;
  if (prevIdx < 0) prevIdx = segs.length - 1;
  while (!segs[prevIdx].points.length) {
    prevIdx--;
    if (prevIdx < 0) prevIdx = segs.length - 1;
  }
  let nextIdx = (segIndex + 1) % segs.length;
  while (!segs[nextIdx].points.length) nextIdx = (nextIdx + 1) % segs.length;

  const P = seg.points[seg.points.length - 1];
  const Pprev = segs[prevIdx].points[segs[prevIdx].points.length - 1];
  const Pnext = segs[nextIdx].points[segs[nextIdx].points.length - 1];

  const A = { x: round1(P.x + (Pprev.x - P.x) * t), y: round1(P.y + (Pprev.y - P.y) * t) };
  const B = { x: round1(P.x + (Pnext.x - P.x) * t), y: round1(P.y + (Pnext.y - P.y) * t) };

  seg.points[seg.points.length - 1] = A; // pull this segment's end back to A
  seg.cmd = 'L';                          // simplify to a straight run into A
  segs.splice(segIndex + 1, 0, { cmd: 'Q', points: [P, B] }); // then curve through P to B
  return buildSegments(segs);
}


// Nudge any zone (path or shape) by dx/dy in SVG units.
function nudgeZone(zone, dx, dy) {
  if (zone.shape === 'path') {
    zone.attrs.d = translatePathD(zone.attrs.d, dx, dy);
  } else {
    const m = toEditModel(zone);
    m.cx = round1(m.cx + dx);
    m.cy = round1(m.cy + dy);
    applyEditModel(zone, m);
  }
}

function applyEditModel(zone, model) {
  const a = zone.attrs;
  const transform = model.rotation
    ? `rotate(${round1(model.rotation)} ${round1(model.cx)} ${round1(model.cy)})`
    : undefined;
  if (zone.shape === 'ellipse') {
    a.cx = round1(model.cx); a.cy = round1(model.cy);
    a.rx = round1(model.width / 2); a.ry = round1(model.height / 2);
    if (transform) a.transform = transform; else delete a.transform;
  } else if (zone.shape === 'rect') {
    a.width = round1(model.width); a.height = round1(model.height);
    a.x = round1(model.cx - model.width / 2); a.y = round1(model.cy - model.height / 2);
    a.rxCorner = round1(Math.min(model.width, model.height) / 2);
    if (transform) a.transform = transform; else delete a.transform;
  }
}

function round1(n) { return Math.round(n * 10) / 10; }

function renderShapeEl(zone) {
  const ns = 'http://www.w3.org/2000/svg';
  const a = zone.attrs;
  let el;
  if (zone.shape === 'ellipse') {
    el = document.createElementNS(ns, 'ellipse');
    el.setAttribute('cx', a.cx); el.setAttribute('cy', a.cy);
    el.setAttribute('rx', a.rx); el.setAttribute('ry', a.ry);
  } else if (zone.shape === 'rect') {
    el = document.createElementNS(ns, 'rect');
    el.setAttribute('x', a.x); el.setAttribute('y', a.y);
    el.setAttribute('width', a.width); el.setAttribute('height', a.height);
    el.setAttribute('rx', a.rxCorner || 0);
  } else {
    el = document.createElementNS(ns, 'path');
    el.setAttribute('d', a.d);
  }
  if (a.transform) el.setAttribute('transform', a.transform);
  el.setAttribute('class', 'zone-shape' + (zone.id === selectedId ? ' selected' : ''));
  el.dataset.zoneId = zone.id;
  return el;
}

function renderCanvas() {
  img.src = IMAGES[gender + '_' + view];
  svg.innerHTML = '';
  currentZones().forEach(zone => {
    const el = renderShapeEl(zone);
    el.addEventListener('mousedown', (e) => startDrag(e, zone.id));
    svg.appendChild(el);
  });
  const selectedZone = findZone(selectedId);
  if (selectedZone && selectedZone.shape === 'path') {
    renderPathHandles(selectedZone);
  }
}

function renderPathHandles(zone) {
  const ns = 'http://www.w3.org/2000/svg';
  const points = getPathPoints(zone.attrs.d);
  points.forEach((pt, i) => {
    const isSelected = i === selectedPointIndex;
    const handle = document.createElementNS(ns, 'circle');
    handle.setAttribute('cx', pt.x);
    handle.setAttribute('cy', pt.y);
    handle.setAttribute('r', isSelected ? 6 : 4);
    handle.setAttribute('class', 'path-handle' + (isSelected ? ' selected' : ''));
    handle.dataset.pointIndex = i;
    handle.addEventListener('mousedown', (e) => startPointDrag(e, zone.id, i));
    svg.appendChild(handle);

    // Number label so a point can be found on canvas by the same number shown in the sidebar list.
    const text = document.createElementNS(ns, 'text');
    text.setAttribute('x', pt.x + 7);
    text.setAttribute('y', pt.y - 7);
    text.setAttribute('class', 'path-handle-label' + (isSelected ? ' selected' : ''));
    text.textContent = i + 1;
    text.setAttribute('pointer-events', 'none');
    svg.appendChild(text);
  });
}

function renderZoneList() {
  zoneListEl.innerHTML = '';
  currentZones().forEach(zone => {
    const li = document.createElement('li');
    li.className = zone.id === selectedId ? 'selected' : '';
    li.innerHTML = `<span>${zone.label}</span><span class="tag">${zone.shape}</span>`;
    li.addEventListener('click', () => selectZone(zone.id));
    zoneListEl.appendChild(li);
  });
}

function renderEditor() {
  const zone = findZone(selectedId);
  if (!zone) {
    editorEl.innerHTML = '<div class="empty-state">Select a zone to edit its position, size, and rotation.</div>';
    return;
  }
  const model = toEditModel(zone);
  if (!model) {
    editorEl.innerHTML = `
      <div class="section-title">${zone.label}</div>
      <div class="empty-state">Path shape - drag the white dots on the canvas to reshape it, or nudge the whole shape below.</div>
      ${nudgeControls()}
      ${vertexControls(zone)}
    `;
    bindNudgeControls(zone);
    bindVertexControls(zone);
    return;
  }
  editorEl.innerHTML = `
    <div class="section-title">${zone.label}</div>
    ${field('cx', 'X position', model.cx, 0, 320, 0.5)}
    ${field('cy', 'Y position', model.cy, 0, 480, 0.5)}
    ${field('width', 'Width', model.width, 2, 200, 0.5)}
    ${field('height', 'Height', model.height, 2, 300, 0.5)}
    ${field('rotation', 'Rotation (deg)', model.rotation, -90, 90, 1)}
    ${nudgeControls()}
  `;
  bindNudgeControls(zone);
  ['cx','cy','width','height','rotation'].forEach(key => {
    const range = document.getElementById('range_' + key);
    const num = document.getElementById('num_' + key);
    const handler = (val) => {
      const m = toEditModel(zone);
      m[key] = parseFloat(val);
      applyEditModel(zone, m);
      range.value = val; num.value = val;
      renderCanvas();
      reselectShape();
    };
    range.addEventListener('input', (e) => handler(e.target.value));
    num.addEventListener('input', (e) => handler(e.target.value));
  });
}

function field(key, label, value, min, max, step) {
  return `
    <div class="field">
      <label>${label} <b id="lbl_${key}">${value}</b></label>
      <div class="row">
        <input type="range" id="range_${key}" min="${min}" max="${max}" step="${step}" value="${value}" />
        <input type="number" id="num_${key}" step="${step}" value="${value}" />
      </div>
    </div>
  `;
}

// Builds the per-point editor: every point on the path (endpoints AND curve control points)
// gets its own X/Y slider pair, using the same flat left-to-right numbering as the draggable
// canvas handles, so dragging a handle and moving a slider always stay in sync.
// Endpoints additionally get + (insert after) / x (remove) / ~ (round corner) buttons.
function vertexControls(zone) {
  const segs = parseSegments(zone.attrs.d);
  let flatIndex = 0;
  const vertexCount = segs.filter(s => s.points.length).length;
  const blocks = [];
  segs.forEach((seg, segIndex) => {
    seg.points.forEach((pt, ptIdxInSeg) => {
      const isEndpoint = ptIdxInSeg === seg.points.length - 1;
      const myFlatIndex = flatIndex++;
      const tag = isEndpoint ? 'corner' : 'curve handle';
      let actions = '';
      if (isEndpoint) {
        const canRemove = seg.cmd === 'L' && vertexCount > 3;
        const canRound = seg.cmd !== 'M';
        actions = `
          <span class="vertex-actions">
            <button type="button" class="vbtn" data-action="add" data-seg="${segIndex}" title="Insert a new point right after this one">+ add</button>
            <button type="button" class="vbtn" data-action="round" data-seg="${segIndex}" title="Round this corner into a curve" ${canRound ? '' : 'disabled'}>round</button>
            <button type="button" class="vbtn" data-action="remove" data-seg="${segIndex}" title="Remove this point" ${canRemove ? '' : 'disabled'}>remove</button>
          </span>
        `;
      }
      const isSelected = myFlatIndex === selectedPointIndex;
      blocks.push(`
        <div class="point-block${isSelected ? ' selected' : ''}" data-point-index="${myFlatIndex}">
          <div class="point-header">
            <span><b>Point ${myFlatIndex + 1}</b> <span class="tag">${tag}</span></span>
          </div>
          ${pointField(myFlatIndex, 'x', 'X position', pt.x)}
          ${pointField(myFlatIndex, 'y', 'Y position', pt.y)}
          ${actions}
        </div>
      `);
    });
  });
  return `
    <div class="section-title" style="margin-top:14px;">Points (${vertexCount} corners)</div>
    <div class="empty-state" style="margin:0 0 8px;">Click a point below to highlight it on the canvas (numbers match). "Curve handle" points bend nearby curves and can't be added, removed, or rounded directly.</div>
    <div class="vertex-list">${blocks.join('')}</div>
  `;
}

function pointField(flatIndex, axis, label, value) {
  const id = `pt_${flatIndex}_${axis}`;
  const min = 0;
  const max = axis === 'x' ? 320 : 480;
  return `
    <div class="field">
      <label>${label} <b id="lbl_${id}">${round1(value)}</b></label>
      <div class="row">
        <input type="range" id="range_${id}" min="${min}" max="${max}" step="0.5" value="${round1(value)}" />
        <input type="number" id="num_${id}" step="0.5" value="${round1(value)}" />
      </div>
    </div>
  `;
}

function bindVertexControls(zone) {
  // Clicking anywhere on a point's block (but not its buttons/inputs) selects & highlights it.
  document.querySelectorAll('.point-block').forEach(block => {
    block.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('input')) return;
      selectPoint(parseInt(block.dataset.pointIndex, 10));
    });
  });

  // Structural actions: add / remove / round-corner
  document.querySelectorAll('.vbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const segIndex = parseInt(btn.dataset.seg, 10);
      pushUndo();
      if (btn.dataset.action === 'add') {
        zone.attrs.d = addVertexAfter(zone.attrs.d, segIndex);
        statusEl.textContent = 'Point added.';
      } else if (btn.dataset.action === 'round') {
        zone.attrs.d = smoothVertex(zone.attrs.d, segIndex);
        statusEl.textContent = 'Corner rounded.';
      } else {
        zone.attrs.d = removeVertex(zone.attrs.d, segIndex);
        statusEl.textContent = 'Point removed.';
      }
      selectedPointIndex = null; // point count/order shifted, avoid a stale highlight
      renderCanvas();
      renderEditor();
    });
  });

  // Per-point X/Y sliders, matched to the same flat numbering as the canvas handles
  const points = getPathPoints(zone.attrs.d);
  points.forEach((pt, flatIndex) => {
    ['x', 'y'].forEach(axis => {
      const id = `pt_${flatIndex}_${axis}`;
      const range = document.getElementById(`range_${id}`);
      const num = document.getElementById(`num_${id}`);
      const lbl = document.getElementById(`lbl_${id}`);
      if (!range) return;
      const handler = (val) => {
        const current = getPathPoints(zone.attrs.d)[flatIndex];
        const x = axis === 'x' ? parseFloat(val) : current.x;
        const y = axis === 'y' ? parseFloat(val) : current.y;
        zone.attrs.d = setPathPoint(zone.attrs.d, flatIndex, x, y);
        range.value = val; num.value = val; lbl.textContent = round1(parseFloat(val));
        selectedPointIndex = flatIndex;
        renderCanvas();
      };
      range.addEventListener('mousedown', beginSliderGesture);
      num.addEventListener('focus', beginSliderGesture);
      range.addEventListener('input', (e) => handler(e.target.value));
      num.addEventListener('input', (e) => handler(e.target.value));
    });
  });
}

function nudgeControls() {
  return `
    <div class="section-title" style="margin-top:14px;">Nudge</div>
    <div class="nudge-pad">
      <span></span>
      <button type="button" id="nudge_up" title="Up (Arrow Up)">&uarr;</button>
      <span></span>
      <button type="button" id="nudge_left" title="Left (Arrow Left)">&larr;</button>
      <button type="button" id="nudge_step" title="Click to change step size">1px</button>
      <button type="button" id="nudge_right" title="Right (Arrow Right)">&rarr;</button>
      <span></span>
      <button type="button" id="nudge_down" title="Down (Arrow Down)">&darr;</button>
      <span></span>
    </div>
    <div class="empty-state" style="margin-top:6px;">Tip: click a shape, then use arrow keys (hold Shift for a bigger step).</div>
  `;
}

function bindNudgeControls(zone) {
  const steps = [1, 5, 10];
  let stepIdx = 0;
  const stepBtn = document.getElementById('nudge_step');
  const doNudge = (dx, dy) => {
    pushUndo();
    nudgeZone(zone, dx * steps[stepIdx], dy * steps[stepIdx]);
    renderCanvas();
    reselectShape();
    renderEditor();
  };
  document.getElementById('nudge_up').addEventListener('click', () => doNudge(0, -1));
  document.getElementById('nudge_down').addEventListener('click', () => doNudge(0, 1));
  document.getElementById('nudge_left').addEventListener('click', () => doNudge(-1, 0));
  document.getElementById('nudge_right').addEventListener('click', () => doNudge(1, 0));
  stepBtn.addEventListener('click', () => {
    stepIdx = (stepIdx + 1) % steps.length;
    stepBtn.textContent = steps[stepIdx] + 'px';
  });
}

function reselectShape() {
  document.querySelectorAll('.zone-shape').forEach(el => {
    el.classList.toggle('selected', el.dataset.zoneId === selectedId);
  });
}

function selectZone(id) {
  if (id !== selectedId) selectedPointIndex = null;
  selectedId = id;
  renderZoneList();
  renderEditor();
  reselectShape();
}

function startDrag(e, id) {
  e.preventDefault();
  e.stopPropagation();
  selectZone(id);
  const zone = findZone(id);
  const pt = svgPoint(e);
  pushUndo();
  if (zone.shape === 'path') {
    dragging = { id, mode: 'path', startX: pt.x, startY: pt.y, startD: zone.attrs.d };
  } else {
    const model = toEditModel(zone);
    dragging = { id, mode: 'shape', startX: pt.x, startY: pt.y, startCx: model.cx, startCy: model.cy };
  }
  document.querySelectorAll('.zone-shape').forEach(el => {
    if (el.dataset.zoneId === id) el.classList.add('dragging');
  });
}

function startPointDrag(e, id, pointIndex) {
  e.preventDefault();
  e.stopPropagation();
  selectZone(id);
  selectPoint(pointIndex);
  const zone = findZone(id);
  const pt = svgPoint(e);
  const points = getPathPoints(zone.attrs.d);
  const p = points[pointIndex];
  pushUndo();
  dragging = { id, mode: 'point', pointIndex, startX: pt.x, startY: pt.y, startPx: p.x, startPy: p.y };
}

// Marks a point as selected: highlights its handle on canvas and scrolls/highlights its row in the sidebar.
function selectPoint(pointIndex) {
  selectedPointIndex = pointIndex;
  document.querySelectorAll('.path-handle').forEach(h => {
    h.classList.toggle('selected', parseInt(h.dataset.pointIndex, 10) === pointIndex);
  });
  document.querySelectorAll('.point-block').forEach(b => {
    const isMatch = parseInt(b.dataset.pointIndex, 10) === pointIndex;
    b.classList.toggle('selected', isMatch);
    if (isMatch) b.scrollIntoView({ block: 'nearest' });
  });
}

function svgPoint(e) {
  const rect = svg.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width * 320;
  const y = (e.clientY - rect.top) / rect.height * 480;
  return { x, y };
}

window.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  const pt = svgPoint(e);
  const zone = findZone(dragging.id);
  const dx = pt.x - dragging.startX;
  const dy = pt.y - dragging.startY;
  if (dragging.mode === 'path') {
    zone.attrs.d = translatePathD(dragging.startD, dx, dy);
  } else if (dragging.mode === 'point') {
    zone.attrs.d = setPathPoint(zone.attrs.d, dragging.pointIndex, round1(dragging.startPx + dx), round1(dragging.startPy + dy));
  } else {
    const model = toEditModel(zone);
    model.cx = round1(dragging.startCx + dx);
    model.cy = round1(dragging.startCy + dy);
    applyEditModel(zone, model);
  }
  renderCanvas();
  reselectShape();
  if (selectedId === dragging.id) renderEditor();
});

window.addEventListener('mouseup', () => {
  dragging = null;
  document.querySelectorAll('.zone-shape').forEach(el => el.classList.remove('dragging'));
});

// Arrow-key nudging for the selected zone (Shift = bigger step)
window.addEventListener('keydown', (e) => {
  const tag = document.activeElement && document.activeElement.tagName;
  const typing = tag === 'INPUT' || tag === 'TEXTAREA';

  if ((e.ctrlKey || e.metaKey) && !typing && (e.key === 'z' || e.key === 'Z')) {
    e.preventDefault();
    if (e.shiftKey) redo(); else undo();
    return;
  }

  if (!selectedId) return;
  if (typing) return; // don't hijack typing in the editor fields
  const step = e.shiftKey ? 5 : 1;
  let dx = 0, dy = 0;
  if (e.key === 'ArrowUp') dy = -step;
  else if (e.key === 'ArrowDown') dy = step;
  else if (e.key === 'ArrowLeft') dx = -step;
  else if (e.key === 'ArrowRight') dx = step;
  else return;
  e.preventDefault();
  const zone = findZone(selectedId);
  pushUndo();
  nudgeZone(zone, dx, dy);
  renderCanvas();
  reselectShape();
  renderEditor();
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    gender = btn.dataset.gender;
    view = btn.dataset.view;
    selectedId = null;
    renderCanvas();
    renderZoneList();
    renderEditor();
  });
});

document.getElementById('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(ZONES, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'bodyZones.calibrated.json';
  a.click();
  URL.revokeObjectURL(url);
  statusEl.textContent = 'Exported bodyZones.calibrated.json';
});

document.getElementById('importBtn').addEventListener('click', () => {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      Object.assign(ZONES, data);
      selectedId = null;
      renderCanvas(); renderZoneList(); renderEditor();
      statusEl.textContent = 'Imported ' + file.name;
    } catch (err) {
      statusEl.textContent = 'Could not parse that file: ' + err.message;
    }
  };
  reader.readAsText(file);
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (!confirm('Reset all zones in this view to their original positions? This cannot be undone.')) return;
  ZONES[gender][view] = JSON.parse(JSON.stringify(ORIGINAL_ZONES[gender][view]));
  selectedId = null;
  renderCanvas(); renderZoneList(); renderEditor();
  statusEl.textContent = 'Reset to original.';
});

const ORIGINAL_ZONES = JSON.parse(JSON.stringify(ZONES));

renderCanvas();
renderZoneList();
renderEditor();