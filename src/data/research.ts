// ─── Research Interests Data ──────────────────────────────────────────────────
// These are areas of active interest and exploration — not publications.
// Framing: "exploring", "investigating", "building understanding of"

export type ResearchStatus = 'Completed' | 'Ongoing' | 'Planned';

export const researchData = [
  {
    id: '1',
    title: 'Voice-Based Behavioural Pattern Recognition',
    topic: 'Applied Machine Learning',
    status: 'Completed' as ResearchStatus,
    abstract:
      'Explored audio feature extraction (MFCC) and classical ML classifiers to detect behavioural deviations from individual vocal baselines. Culminated in a working personal project prototype.',
    tags: ['ML', 'Audio', 'Python', 'MFCC'],
  },
  {
    id: '2',
    title: 'CAN Bus Communication in EV Architectures',
    topic: 'Automotive Electronics',
    status: 'Completed' as ResearchStatus,
    abstract:
      'Studied Controller Area Network protocols through internship exposure and personal implementation. Gained understanding of message framing, DBC signal definitions, and multi-node network topology in automotive contexts.',
    tags: ['CAN', 'EV', 'Embedded', 'Protocols'],
  },
  {
    id: '3',
    title: 'Battery State Estimation Methods',
    topic: 'Battery Management Systems',
    status: 'Ongoing' as ResearchStatus,
    abstract:
      'Exploring Coulomb counting and Kalman filter approaches for State of Charge (SOC) estimation in Li-ion battery packs. Building foundational understanding of the tradeoffs between algorithmic complexity and estimation accuracy.',
    tags: ['BMS', 'Kalman Filter', 'Signal Processing', 'EV'],
  },
  {
    id: '4',
    title: 'Transformer Architectures for Technical Text',
    topic: 'Deep Learning & NLP',
    status: 'Planned' as ResearchStatus,
    abstract:
      'Planning to explore fine-tuning BERT-class models for engineering documentation understanding and technical information retrieval — motivated by the volume of structured text in automotive and embedded domains.',
    tags: ['NLP', 'Transformers', 'BERT', 'Deep Learning'],
  },
  {
    id: '5',
    title: 'RTOS in Safety-Critical Embedded Systems',
    topic: 'Embedded Systems',
    status: 'Ongoing' as ResearchStatus,
    abstract:
      'Studying FreeRTOS task scheduling, interrupt priorities, and watchdog timer patterns as they apply to real-time reliability in automotive firmware — extending understanding developed during the internship.',
    tags: ['RTOS', 'FreeRTOS', 'Embedded', 'Safety'],
  },
  {
    id: '6',
    title: 'Computer Vision for Automated Inspection',
    topic: 'Computer Vision',
    status: 'Planned' as ResearchStatus,
    abstract:
      'Interested in exploring object detection and semantic segmentation (YOLOv8, SAM) for defect detection in manufacturing contexts — motivated by the intersection of CV and industrial automation.',
    tags: ['CV', 'YOLO', 'Deep Learning', 'Manufacturing'],
  },
] as const;
