const ZONES = {"male": {"front": [{"id": "head", "panelKey": "head", "shape": "ellipse", "attrs": {"cx": 160, "cy": 38, "rx": 23, "ry": 30}, "label": "Head", "labelX": 160, "labelY": 40}, {"id": "neck", "panelKey": "neck", "shape": "path", "attrs": {"d": "M145 66 L175 66 L178 89 L142 89 Z"}, "label": "Neck", "labelX": 160, "labelY": 82}, {"id": "left-shoulder", "panelKey": "left-shoulder", "shape": "ellipse", "attrs": {"cx": 106, "cy": 99, "rx": 17, "ry": 18, "transform": "rotate(-14 106 99)"}, "label": "Shoulder", "labelX": 100, "labelY": 102}, {"id": "right-shoulder", "panelKey": "right-shoulder", "shape": "ellipse", "attrs": {"cx": 214, "cy": 99, "rx": 17, "ry": 18, "transform": "rotate(14 214 99)"}, "label": "Shoulder", "labelX": 220, "labelY": 102}, {"id": "chest", "panelKey": "chest", "shape": "path", "attrs": {"d": "M120 100 C133 90 148 92 160 102 C172 92 187 90 200 100 L196 148 C184 158 136 158 124 148 Z"}, "label": "Chest", "labelX": 160, "labelY": 126}, {"id": "left-arm", "panelKey": "left-arm", "shape": "rect", "attrs": {"x": 83.5, "y": 126.76464350328267, "width": 23, "height": 55.47071299343465, "rxCorner": 11.5, "transform": "rotate(28.0 95.0 154.5)"}, "label": "Arm", "labelX": 90, "labelY": 154}, {"id": "right-arm", "panelKey": "right-arm", "shape": "rect", "attrs": {"x": 213.5, "y": 126.76464350328267, "width": 23, "height": 55.47071299343465, "rxCorner": 11.5, "transform": "rotate(-28.0 225.0 154.5)"}, "label": "Arm", "labelX": 230, "labelY": 154}, {"id": "abdomen", "panelKey": "abdomen", "shape": "path", "attrs": {"d": "M126 150 L194 150 L190 200 C179 210 141 210 130 200 Z"}, "label": "Abdomen", "labelX": 160, "labelY": 178}, {"id": "left-forearm", "panelKey": "left-forearm", "shape": "rect", "attrs": {"x": 57, "y": 174.531670963289, "width": 25, "height": 39.436658073421995, "rxCorner": 12.5, "transform": "rotate(39.3 69.5 194.3)"}, "label": "Forearm", "labelX": 62, "labelY": 194}, {"id": "right-forearm", "panelKey": "right-forearm", "shape": "rect", "attrs": {"x": 238, "y": 174.531670963289, "width": 25, "height": 39.436658073421995, "rxCorner": 12.5, "transform": "rotate(-39.3 250.5 194.3)"}, "label": "Forearm", "labelX": 258, "labelY": 194}, {"id": "pelvis", "panelKey": "pelvis", "shape": "path", "attrs": {"d": "M124 200 C142 193 178 193 196 200 L188 234 C173 246 147 246 132 234 Z"}, "label": "Pelvis", "labelX": 160, "labelY": 222}, {"id": "left-hand", "panelKey": "left-hand", "shape": "ellipse", "attrs": {"cx": 56, "cy": 224, "rx": 15, "ry": 14, "transform": "rotate(30 56 224)"}, "label": "Hand", "labelX": 48, "labelY": 228}, {"id": "right-hand", "panelKey": "right-hand", "shape": "ellipse", "attrs": {"cx": 264, "cy": 224, "rx": 15, "ry": 14, "transform": "rotate(-30 264 224)"}, "label": "Hand", "labelX": 272, "labelY": 228}, {"id": "left-thigh", "panelKey": "left-thigh", "shape": "rect", "attrs": {"x": 112.75, "y": 238.59705681195285, "width": 35, "height": 68.8058863760943, "rxCorner": 17.5, "transform": "rotate(8.8 130.3 273.0)"}, "label": "Thigh", "labelX": 122, "labelY": 273}, {"id": "right-thigh", "panelKey": "right-thigh", "shape": "rect", "attrs": {"x": 172.25, "y": 238.59705681195285, "width": 35, "height": 68.8058863760943, "rxCorner": 17.5, "transform": "rotate(-8.8 189.7 273.0)"}, "label": "Thigh", "labelX": 198, "labelY": 273}, {"id": "left-knee", "panelKey": "left-knee", "shape": "ellipse", "attrs": {"cx": 122.5, "cy": 313.5, "rx": 15, "ry": 8}, "label": "Knee", "labelX": 122, "labelY": 317}, {"id": "right-knee", "panelKey": "right-knee", "shape": "ellipse", "attrs": {"cx": 197.5, "cy": 313.5, "rx": 15, "ry": 8}, "label": "Knee", "labelX": 198, "labelY": 317}, {"id": "left-shin", "panelKey": "left-shin", "shape": "rect", "attrs": {"x": 106.5, "y": 319.7688900263755, "width": 20, "height": 69.46221994724903, "rxCorner": 10, "transform": "rotate(6.6 116.5 354.5)"}, "label": "Shin", "labelX": 113, "labelY": 354}, {"id": "right-shin", "panelKey": "right-shin", "shape": "rect", "attrs": {"x": 193.5, "y": 319.7688900263755, "width": 20, "height": 69.46221994724903, "rxCorner": 10, "transform": "rotate(-6.6 203.5 354.5)"}, "label": "Shin", "labelX": 207, "labelY": 354}, {"id": "left-foot", "panelKey": "left-foot", "shape": "ellipse", "attrs": {"cx": 108.5, "cy": 416, "rx": 18, "ry": 15, "transform": "rotate(-4 108.5 416)"}, "label": "Foot", "labelX": 108, "labelY": 420}, {"id": "right-foot", "panelKey": "right-foot", "shape": "ellipse", "attrs": {"cx": 211.5, "cy": 416, "rx": 18, "ry": 15, "transform": "rotate(4 211.5 416)"}, "label": "Foot", "labelX": 212, "labelY": 420}], "back": [{"id": "head", "panelKey": "head", "shape": "ellipse", "attrs": {"cx": 160, "cy": 37, "rx": 23, "ry": 28}, "label": "Head", "labelX": 160, "labelY": 40}, {"id": "neck", "panelKey": "neck", "shape": "path", "attrs": {"d": "M145 63 L175 63 L178 88 L142 88 Z"}, "label": "Neck", "labelX": 160, "labelY": 80}, {"id": "left-shoulder", "panelKey": "left-shoulder", "shape": "ellipse", "attrs": {"cx": 103, "cy": 97, "rx": 17, "ry": 18, "transform": "rotate(-14 103 97)"}, "label": "Shoulder", "labelX": 97, "labelY": 100}, {"id": "right-shoulder", "panelKey": "right-shoulder", "shape": "ellipse", "attrs": {"cx": 217, "cy": 97, "rx": 17, "ry": 18, "transform": "rotate(14 217 97)"}, "label": "Shoulder", "labelX": 223, "labelY": 100}, {"id": "upper-back", "panelKey": "upper-back", "shape": "path", "attrs": {"d": "M122 95 C133 88 148 90 160 100 C172 90 187 88 198 95 L192 155 C180 163 140 163 128 155 Z"}, "label": "Upper Back", "labelX": 160, "labelY": 126}, {"id": "left-arm", "panelKey": "left-arm", "shape": "rect", "attrs": {"x": 78.25, "y": 116.10748421427196, "width": 22, "height": 59.78503157145608, "rxCorner": 11, "transform": "rotate(29.6 89.3 146.0)"}, "label": "Arm", "labelX": 88, "labelY": 146}, {"id": "right-arm", "panelKey": "right-arm", "shape": "rect", "attrs": {"x": 219.75, "y": 116.10748421427196, "width": 22, "height": 59.78503157145608, "rxCorner": 11, "transform": "rotate(-29.6 230.7 146.0)"}, "label": "Arm", "labelX": 232, "labelY": 146}, {"id": "lower-back", "panelKey": "lower-back", "shape": "path", "attrs": {"d": "M128 155 L192 155 L192 200 C180 210 140 210 128 200 Z"}, "label": "Lower Back", "labelX": 160, "labelY": 178}, {"id": "left-forearm", "panelKey": "left-forearm", "shape": "rect", "attrs": {"x": 47, "y": 166.4071771183108, "width": 26, "height": 43.18564576337837, "rxCorner": 13, "transform": "rotate(42.2 60.0 188.0)"}, "label": "Forearm", "labelX": 55, "labelY": 188}, {"id": "right-forearm", "panelKey": "right-forearm", "shape": "rect", "attrs": {"x": 247, "y": 166.4071771183108, "width": 26, "height": 43.18564576337837, "rxCorner": 13, "transform": "rotate(-42.2 260.0 188.0)"}, "label": "Forearm", "labelX": 265, "labelY": 188}, {"id": "glutes", "panelKey": "glutes", "shape": "path", "attrs": {"d": "M124 200 C142 193 178 193 196 200 L188 231 C173 243 147 243 132 231 Z"}, "label": "Glutes", "labelX": 160, "labelY": 218}, {"id": "left-hand", "panelKey": "left-hand", "shape": "ellipse", "attrs": {"cx": 44.5, "cy": 217.5, "rx": 15, "ry": 12, "transform": "rotate(32 44.5 217.5)"}, "label": "Hand", "labelX": 36, "labelY": 221}, {"id": "right-hand", "panelKey": "right-hand", "shape": "ellipse", "attrs": {"cx": 275.5, "cy": 217.5, "rx": 15, "ry": 12, "transform": "rotate(-32 275.5 217.5)"}, "label": "Hand", "labelX": 284, "labelY": 221}, {"id": "left-thigh", "panelKey": "left-thigh", "shape": "rect", "attrs": {"x": 111.5, "y": 230.7509690068058, "width": 36, "height": 64.4980619863884, "rxCorner": 18, "transform": "rotate(7.1 129.5 263.0)"}, "label": "Thigh", "labelX": 121, "labelY": 263}, {"id": "right-thigh", "panelKey": "right-thigh", "shape": "rect", "attrs": {"x": 172.5, "y": 230.7509690068058, "width": 36, "height": 64.4980619863884, "rxCorner": 18, "transform": "rotate(-7.1 190.5 263.0)"}, "label": "Thigh", "labelX": 199, "labelY": 263}, {"id": "left-knee", "panelKey": "left-knee", "shape": "ellipse", "attrs": {"cx": 124.5, "cy": 301.5, "rx": 14, "ry": 8}, "label": "Knee", "labelX": 124, "labelY": 305}, {"id": "right-knee", "panelKey": "right-knee", "shape": "ellipse", "attrs": {"cx": 195.5, "cy": 301.5, "rx": 14, "ry": 8}, "label": "Knee", "labelX": 196, "labelY": 305}, {"id": "left-shin", "panelKey": "left-shin", "shape": "rect", "attrs": {"x": 108.25, "y": 307.81780125173856, "width": 21, "height": 77.36439749652291, "rxCorner": 10.5, "transform": "rotate(5.6 118.8 346.5)"}, "label": "Shin", "labelX": 114, "labelY": 346}, {"id": "right-shin", "panelKey": "right-shin", "shape": "rect", "attrs": {"x": 190.75, "y": 307.81780125173856, "width": 21, "height": 77.36439749652291, "rxCorner": 10.5, "transform": "rotate(-5.6 201.2 346.5)"}, "label": "Shin", "labelX": 206, "labelY": 346}, {"id": "left-foot", "panelKey": "left-foot", "shape": "ellipse", "attrs": {"cx": 108, "cy": 409, "rx": 16, "ry": 15, "transform": "rotate(-3 108 409)"}, "label": "Foot", "labelX": 108, "labelY": 413}, {"id": "right-foot", "panelKey": "right-foot", "shape": "ellipse", "attrs": {"cx": 212, "cy": 409, "rx": 16, "ry": 15, "transform": "rotate(3 212 409)"}, "label": "Foot", "labelX": 212, "labelY": 413}]}, "female": {"front": [{"id": "head", "panelKey": "head", "shape": "ellipse", "attrs": {"cx": 160, "cy": 36, "rx": 21, "ry": 28}, "label": "Head", "labelX": 160, "labelY": 39}, {"id": "neck", "panelKey": "neck", "shape": "path", "attrs": {"d": "M147 65 L173 65 L176 86 L144 86 Z"}, "label": "Neck", "labelX": 160, "labelY": 80}, {"id": "left-shoulder", "panelKey": "left-shoulder", "shape": "ellipse", "attrs": {"cx": 114, "cy": 96, "rx": 15, "ry": 15, "transform": "rotate(-12 114 96)"}, "label": "Shoulder", "labelX": 109, "labelY": 99}, {"id": "right-shoulder", "panelKey": "right-shoulder", "shape": "ellipse", "attrs": {"cx": 206, "cy": 96, "rx": 15, "ry": 15, "transform": "rotate(12 206 96)"}, "label": "Shoulder", "labelX": 211, "labelY": 99}, {"id": "chest", "panelKey": "chest", "shape": "path", "attrs": {"d": "M124 96 C137 87 150 91 160 102 C170 91 183 87 196 96 L192 142 C181 152 139 152 128 142 Z"}, "label": "Chest", "labelX": 160, "labelY": 122}, {"id": "left-arm", "panelKey": "left-arm", "shape": "rect", "attrs": {"x": 91, "y": 122.64692390749298, "width": 20, "height": 57.706152185014034, "rxCorner": 10, "transform": "rotate(27.9 101.0 151.5)"}, "label": "Arm", "labelX": 98, "labelY": 150}, {"id": "right-arm", "panelKey": "right-arm", "shape": "rect", "attrs": {"x": 207, "y": 122.64692390749298, "width": 20, "height": 57.706152185014034, "rxCorner": 10, "transform": "rotate(-27.9 217.0 151.5)"}, "label": "Arm", "labelX": 220, "labelY": 150}, {"id": "abdomen", "panelKey": "abdomen", "shape": "path", "attrs": {"d": "M129 144 L191 144 L188 195 C178 205 142 205 132 195 Z"}, "label": "Abdomen", "labelX": 160, "labelY": 172}, {"id": "left-forearm", "panelKey": "left-forearm", "shape": "rect", "attrs": {"x": 64, "y": 172.5, "width": 20, "height": 45, "rxCorner": 10, "transform": "rotate(36.9 74.0 195.0)"}, "label": "Forearm", "labelX": 66, "labelY": 194}, {"id": "right-forearm", "panelKey": "right-forearm", "shape": "rect", "attrs": {"x": 234, "y": 172.5, "width": 20, "height": 45, "rxCorner": 10, "transform": "rotate(-36.9 244.0 195.0)"}, "label": "Forearm", "labelX": 252, "labelY": 194}, {"id": "pelvis", "panelKey": "pelvis", "shape": "path", "attrs": {"d": "M118 195 C143 187 177 187 202 195 L194 232 C176 245 144 245 126 232 Z"}, "label": "Pelvis", "labelX": 160, "labelY": 218}, {"id": "left-hand", "panelKey": "left-hand", "shape": "ellipse", "attrs": {"cx": 58.5, "cy": 222, "rx": 12, "ry": 10, "transform": "rotate(28 58.5 222)"}, "label": "Hand", "labelX": 51, "labelY": 226}, {"id": "right-hand", "panelKey": "right-hand", "shape": "ellipse", "attrs": {"cx": 259.5, "cy": 222, "rx": 12, "ry": 10, "transform": "rotate(-28 259.5 222)"}, "label": "Hand", "labelX": 267, "labelY": 226}, {"id": "left-thigh", "panelKey": "left-thigh", "shape": "rect", "attrs": {"x": 130.25, "y": 241.7251088760834, "width": 27, "height": 120.54978224783319, "rxCorner": 13.5, "transform": "rotate(-5.5 143.8 302.0)"}, "label": "Thigh", "labelX": 132, "labelY": 300}, {"id": "right-thigh", "panelKey": "right-thigh", "shape": "rect", "attrs": {"x": 160.75, "y": 241.7251088760834, "width": 27, "height": 120.54978224783319, "rxCorner": 13.5, "transform": "rotate(5.5 174.2 302.0)"}, "label": "Thigh", "labelX": 188, "labelY": 300}, {"id": "left-knee", "panelKey": "left-knee", "shape": "ellipse", "attrs": {"cx": 150.5, "cy": 368.5, "rx": 10, "ry": 6}, "label": "Knee", "labelX": 148, "labelY": 372}, {"id": "right-knee", "panelKey": "right-knee", "shape": "ellipse", "attrs": {"cx": 167.5, "cy": 368.5, "rx": 10, "ry": 6}, "label": "Knee", "labelX": 170, "labelY": 372}, {"id": "left-shin", "panelKey": "left-shin", "shape": "rect", "attrs": {"x": 147.5, "y": 374.933951834124, "width": 11, "height": 34.132096331752024, "rxCorner": 5.5, "transform": "rotate(-5.0 153.0 392.0)"}, "label": "Shin", "labelX": 147, "labelY": 392}, {"id": "right-shin", "panelKey": "right-shin", "shape": "rect", "attrs": {"x": 159.5, "y": 374.933951834124, "width": 11, "height": 34.132096331752024, "rxCorner": 5.5, "transform": "rotate(5.0 165.0 392.0)"}, "label": "Shin", "labelX": 172, "labelY": 392}, {"id": "left-foot", "panelKey": "left-foot", "shape": "ellipse", "attrs": {"cx": 151.5, "cy": 432.5, "rx": 10, "ry": 21, "transform": "rotate(-5 151.5 432.5)"}, "label": "Foot", "labelX": 144, "labelY": 436}, {"id": "right-foot", "panelKey": "right-foot", "shape": "ellipse", "attrs": {"cx": 166.5, "cy": 432.5, "rx": 10, "ry": 21, "transform": "rotate(5 166.5 432.5)"}, "label": "Foot", "labelX": 174, "labelY": 436}], "back": [{"id": "head", "panelKey": "head", "shape": "ellipse", "attrs": {"cx": 160, "cy": 35, "rx": 21, "ry": 27}, "label": "Head", "labelX": 160, "labelY": 38}, {"id": "neck", "panelKey": "neck", "shape": "path", "attrs": {"d": "M147 62 L173 62 L176 85 L144 85 Z"}, "label": "Neck", "labelX": 160, "labelY": 78}, {"id": "left-shoulder", "panelKey": "left-shoulder", "shape": "ellipse", "attrs": {"cx": 119, "cy": 96, "rx": 14, "ry": 14, "transform": "rotate(-12 119 96)"}, "label": "Shoulder", "labelX": 114, "labelY": 99}, {"id": "right-shoulder", "panelKey": "right-shoulder", "shape": "ellipse", "attrs": {"cx": 201, "cy": 96, "rx": 14, "ry": 14, "transform": "rotate(12 201 96)"}, "label": "Shoulder", "labelX": 206, "labelY": 99}, {"id": "upper-back", "panelKey": "upper-back", "shape": "path", "attrs": {"d": "M128 94 C138 87 150 90 160 100 C170 90 182 87 192 94 L188 148 C177 157 143 157 132 148 Z"}, "label": "Upper Back", "labelX": 160, "labelY": 120}, {"id": "left-arm", "panelKey": "left-arm", "shape": "rect", "attrs": {"x": 98.25, "y": 122.99013328687768, "width": 17, "height": 57.019733426244635, "rxCorner": 8.5, "transform": "rotate(26.6 106.8 151.5)"}, "label": "Arm", "labelX": 102, "labelY": 150}, {"id": "right-arm", "panelKey": "right-arm", "shape": "rect", "attrs": {"x": 206.75, "y": 122.99013328687768, "width": 17, "height": 57.019733426244635, "rxCorner": 8.5, "transform": "rotate(-26.6 215.2 151.5)"}, "label": "Arm", "labelX": 220, "labelY": 150}, {"id": "lower-back", "panelKey": "lower-back", "shape": "path", "attrs": {"d": "M132 148 L188 148 L188 193 C178 202 144 202 132 193 Z"}, "label": "Lower Back", "labelX": 160, "labelY": 172}, {"id": "left-forearm", "panelKey": "left-forearm", "shape": "rect", "attrs": {"x": 73.5, "y": 173.36669234721606, "width": 17, "height": 43.266615305567875, "rxCorner": 8.5, "transform": "rotate(33.7 82.0 195.0)"}, "label": "Forearm", "labelX": 74, "labelY": 194}, {"id": "right-forearm", "panelKey": "right-forearm", "shape": "rect", "attrs": {"x": 231.5, "y": 173.36669234721606, "width": 17, "height": 43.266615305567875, "rxCorner": 8.5, "transform": "rotate(-33.7 240.0 195.0)"}, "label": "Forearm", "labelX": 246, "labelY": 194}, {"id": "glutes", "panelKey": "glutes", "shape": "path", "attrs": {"d": "M123 193 C144 186 178 186 199 193 L191 231 C174 244 146 244 129 231 Z"}, "label": "Glutes", "labelX": 160, "labelY": 214}, {"id": "left-hand", "panelKey": "left-hand", "shape": "ellipse", "attrs": {"cx": 68, "cy": 220, "rx": 11, "ry": 8, "transform": "rotate(30 68 220)"}, "label": "Hand", "labelX": 61, "labelY": 224}, {"id": "right-hand", "panelKey": "right-hand", "shape": "ellipse", "attrs": {"cx": 254, "cy": 220, "rx": 11, "ry": 8, "transform": "rotate(-30 254 220)"}, "label": "Hand", "labelX": 261, "labelY": 224}, {"id": "left-thigh", "panelKey": "left-thigh", "shape": "rect", "attrs": {"x": 135.25, "y": 231.66707979370733, "width": 26, "height": 117.66584041258534, "rxCorner": 13, "transform": "rotate(-6.1 148.3 290.5)"}, "label": "Thigh", "labelX": 134, "labelY": 290}, {"id": "right-thigh", "panelKey": "right-thigh", "shape": "rect", "attrs": {"x": 160.75, "y": 231.66707979370733, "width": 26, "height": 117.66584041258534, "rxCorner": 13, "transform": "rotate(6.1 173.7 290.5)"}, "label": "Thigh", "labelX": 188, "labelY": 290}, {"id": "left-knee", "panelKey": "left-knee", "shape": "ellipse", "attrs": {"cx": 155.5, "cy": 355.5, "rx": 8, "ry": 6}, "label": "Knee", "labelX": 152, "labelY": 359}, {"id": "right-knee", "panelKey": "right-knee", "shape": "ellipse", "attrs": {"cx": 166.5, "cy": 355.5, "rx": 8, "ry": 6}, "label": "Knee", "labelX": 170, "labelY": 359}, {"id": "left-shin", "panelKey": "left-shin", "shape": "rect", "attrs": {"x": 153, "y": 361.9773194914064, "width": 8, "height": 11.045361017187261, "rxCorner": 4, "transform": "rotate(-5.2 157.0 367.5)"}, "label": "Shin", "labelX": 151, "labelY": 368}, {"id": "right-shin", "panelKey": "right-shin", "shape": "rect", "attrs": {"x": 161, "y": 361.9773194914064, "width": 8, "height": 11.045361017187261, "rxCorner": 4, "transform": "rotate(5.2 165.0 367.5)"}, "label": "Shin", "labelX": 172, "labelY": 368}, {"id": "left-foot", "panelKey": "left-foot", "shape": "ellipse", "attrs": {"cx": 153.5, "cy": 400, "rx": 9, "ry": 17, "transform": "rotate(-5 153.5 400)"}, "label": "Foot", "labelX": 146, "labelY": 404}, {"id": "right-foot", "panelKey": "right-foot", "shape": "ellipse", "attrs": {"cx": 168.5, "cy": 400, "rx": 9, "ry": 17, "transform": "rotate(5 168.5 400)"}, "label": "Foot", "labelX": 176, "labelY": 404}]}};
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