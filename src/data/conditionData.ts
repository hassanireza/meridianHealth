/**
 * Meridian Health: Condition Database
 * Reference conditions returned by the analysis engine, keyed by body zone.
 */

import type { ConditionRecord } from '../models/types';

export const CONDITION_DATABASE: Record<string, ConditionRecord[]> = {
  "head": [
    {
      "name": "Migraine",
      "match": "high",
      "priority": "medium",
      "specialty": "Neurology",
      "desc": "A neurological condition characterized by recurrent moderate to severe headaches, often accompanied by nausea and heightened sensitivity to light and sound. Attacks may last from hours to days."
    },
    {
      "name": "Tension-Type Headache",
      "match": "high",
      "priority": "low",
      "specialty": "General Practice",
      "desc": "The most prevalent headache disorder, presenting as a bilateral pressure or tightening sensation. Generally not aggravated by routine physical activity."
    },
    {
      "name": "Cluster Headache",
      "match": "medium",
      "priority": "high",
      "specialty": "Neurology",
      "desc": "Severe, strictly unilateral headache attacks occurring in clusters. Pain is excruciating and typically centered around one eye, lasting 15 to 180 minutes."
    },
    {
      "name": "Intracranial Hypertension",
      "match": "low",
      "priority": "high",
      "specialty": "Neurology",
      "desc": "Elevated pressure within the cranial vault, producing a progressive headache that may be accompanied by visual disturbances and pulsatile tinnitus."
    }
  ],
  "chest": [
    {
      "name": "Costochondritis",
      "match": "high",
      "priority": "low",
      "specialty": "Internal Medicine",
      "desc": "Inflammation of the costal cartilage connecting the ribs to the sternum. Produces localized tenderness reproducible on palpation."
    },
    {
      "name": "Gastroesophageal Reflux",
      "match": "high",
      "priority": "low",
      "specialty": "Gastroenterology",
      "desc": "Acid regurgitation into the esophagus producing a retrosternal burning sensation that may mimic cardiac pain. Commonly worsens after meals."
    },
    {
      "name": "Angina Pectoris",
      "match": "medium",
      "priority": "high",
      "specialty": "Cardiology",
      "desc": "Chest tightness or pressure caused by reduced myocardial blood flow, typically precipitated by exertion and relieved by rest or nitrates."
    },
    {
      "name": "Pulmonary Embolism",
      "match": "low",
      "priority": "high",
      "specialty": "Emergency Medicine",
      "desc": "Obstruction of pulmonary arterial circulation, producing pleuritic chest pain, dyspnea, and tachycardia. Requires immediate evaluation."
    }
  ],
  "abdomen": [
    {
      "name": "Irritable Bowel Syndrome",
      "match": "high",
      "priority": "low",
      "specialty": "Gastroenterology",
      "desc": "A functional gastrointestinal disorder characterized by recurrent abdominal pain associated with altered bowel habits, without structural abnormality."
    },
    {
      "name": "Appendicitis",
      "match": "medium",
      "priority": "high",
      "specialty": "Surgery",
      "desc": "Acute inflammation of the vermiform appendix, classically presenting with periumbilical pain migrating to the right iliac fossa. Requires urgent surgical evaluation."
    },
    {
      "name": "Peptic Ulcer Disease",
      "match": "medium",
      "priority": "medium",
      "specialty": "Gastroenterology",
      "desc": "Mucosal erosion of the stomach or duodenum, producing epigastric pain that may be relieved or worsened by food intake depending on ulcer location."
    }
  ],
  "lower-back": [
    {
      "name": "Lumbar Disc Herniation",
      "match": "high",
      "priority": "medium",
      "specialty": "Orthopedics",
      "desc": "Protrusion of intervertebral disc material compressing adjacent nerve roots, producing radicular pain, sensory changes, and potential motor weakness."
    },
    {
      "name": "Lumbar Facet Syndrome",
      "match": "high",
      "priority": "low",
      "specialty": "Orthopedics",
      "desc": "Degenerative or inflammatory changes in the zygapophyseal joints, producing localized lower back pain typically worsening with extension."
    },
    {
      "name": "Sacroiliac Joint Dysfunction",
      "match": "medium",
      "priority": "low",
      "specialty": "Rheumatology",
      "desc": "Aberrant motion or inflammation of the sacroiliac joint producing unilateral low back and buttock pain, often exacerbated by transitional movements."
    }
  ],
  "left-knee": [
    {
      "name": "Medial Meniscus Tear",
      "match": "high",
      "priority": "medium",
      "specialty": "Orthopedic Surgery",
      "desc": "Disruption of the medial fibrocartilaginous meniscus, producing medial joint-line pain, swelling, and mechanical symptoms including locking or clicking."
    },
    {
      "name": "Osteoarthritis",
      "match": "high",
      "priority": "low",
      "specialty": "Rheumatology",
      "desc": "Progressive articular cartilage degradation with subchondral bone changes. Presents as activity-related pain, crepitus, and morning stiffness lasting under 30 minutes."
    },
    {
      "name": "Anterior Cruciate Ligament Injury",
      "match": "medium",
      "priority": "medium",
      "specialty": "Sports Medicine",
      "desc": "Complete or partial disruption of the ACL, typically from a pivot or hyperextension mechanism. Associated with a \"pop\", rapid effusion, and instability."
    }
  ],
  "right-knee": [
    {
      "name": "Medial Meniscus Tear",
      "match": "high",
      "priority": "medium",
      "specialty": "Orthopedic Surgery",
      "desc": "Disruption of the medial fibrocartilaginous meniscus, producing medial joint-line pain, swelling, and mechanical symptoms including locking or clicking."
    },
    {
      "name": "Osteoarthritis",
      "match": "high",
      "priority": "low",
      "specialty": "Rheumatology",
      "desc": "Progressive articular cartilage degradation with subchondral bone changes. Presents as activity-related pain, crepitus, and morning stiffness."
    },
    {
      "name": "Patellofemoral Pain Syndrome",
      "match": "medium",
      "priority": "low",
      "specialty": "Sports Medicine",
      "desc": "Anterior knee pain arising from abnormal patellofemoral contact pressures. Worsens with prolonged sitting, squatting, and stair descent."
    }
  ]
};

export const DEFAULT_CONDITIONS: ConditionRecord[] = [
  {
    "name": "Musculoskeletal Strain",
    "match": "high",
    "priority": "low",
    "specialty": "General Practice",
    "desc": "Overstretching or tearing of muscle fibres or tendons from acute injury or cumulative overuse, producing localised pain and functional limitation."
  },
  {
    "name": "Nerve Root Compression",
    "match": "medium",
    "priority": "medium",
    "specialty": "Neurology",
    "desc": "Mechanical irritation of a spinal nerve root producing radicular symptoms including pain, paraesthesia, and motor weakness in the corresponding distribution."
  },
  {
    "name": "Inflammatory Arthropathy",
    "match": "low",
    "priority": "medium",
    "specialty": "Rheumatology",
    "desc": "A spectrum of immune-mediated joint conditions including rheumatoid arthritis, psoriatic arthritis, and reactive arthritis, presenting with synovitis and systemic features."
  }
];
