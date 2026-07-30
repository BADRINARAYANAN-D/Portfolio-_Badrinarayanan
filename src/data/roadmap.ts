// ─── Learning Roadmap Data ────────────────────────────────────────────────────
// Dynamic learning path — shows the progression of engineering knowledge.

export type RoadmapStatus = 'completed' | 'in-progress' | 'planned';

export const roadmapData = {
  title: 'Engineering Roadmap',
  subtitle: 'The trajectory of my technical learning — from fundamentals to frontier.',

  steps: [
    {
      id: '1',
      title: 'Programming Foundations',
      description: 'Java, OOP principles, data structures, and algorithmic thinking.',
      status: 'completed' as RoadmapStatus,
      icon: '💻',
    },
    {
      id: '2',
      title: 'Software Development',
      description: 'Mobile apps (Flutter), web development (React), REST APIs, and version control.',
      status: 'completed' as RoadmapStatus,
      icon: '📐',
    },
    {
      id: '3',
      title: 'Machine Learning',
      description: 'Classical ML with Scikit-Learn — supervised, unsupervised, and evaluation strategies.',
      status: 'completed' as RoadmapStatus,
      icon: '🤖',
    },
    {
      id: '4',
      title: 'Deep Learning',
      description: 'CNNs, RNNs, transfer learning, and model training with TensorFlow and PyTorch.',
      status: 'completed' as RoadmapStatus,
      icon: '🧠',
    },
    {
      id: '5',
      title: 'Embedded Systems',
      description: 'ARM Cortex-M7 (Teensy 4.1), PlatformIO, C/C++ firmware, real-time constraints.',
      status: 'completed' as RoadmapStatus,
      icon: '🔧',
    },
    {
      id: '6',
      title: 'Battery Management Systems',
      description: 'BMS architecture, cell monitoring, SOC estimation, safety circuits, and EV firmware.',
      status: 'in-progress' as RoadmapStatus,
      icon: '🔋',
    },
    {
      id: '7',
      title: 'Automotive Protocols & CAN',
      description: 'CAN Bus implementation, DBC engineering, Kvaser tooling, and automotive-grade communication.',
      status: 'in-progress' as RoadmapStatus,
      icon: '🚗',
    },
    {
      id: '8',
      title: 'RTOS & Real-Time Programming',
      description: 'FreeRTOS task scheduling, interrupt handling, watchdog systems, and deterministic execution.',
      status: 'in-progress' as RoadmapStatus,
      icon: '⏱️',
    },
    {
      id: '9',
      title: 'Transformer Architectures & NLP',
      description: 'BERT, GPT, attention mechanisms, and fine-tuning for technical domain applications.',
      status: 'planned' as RoadmapStatus,
      icon: '🔬',
    },
    {
      id: '10',
      title: 'Applied AI for Embedded Systems',
      description: 'TinyML, edge inference, model compression, and deploying AI on resource-constrained hardware.',
      status: 'planned' as RoadmapStatus,
      icon: '🌐',
    },
    {
      id: '11',
      title: 'Open Source Contributions',
      description: 'Contributing meaningfully to open source — ML tooling, embedded libraries, or EV-adjacent projects.',
      status: 'planned' as RoadmapStatus,
      icon: '🌱',
    },
  ],
} as const;
