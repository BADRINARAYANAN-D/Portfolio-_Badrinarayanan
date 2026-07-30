// ─── Internship Case Study Data ───────────────────────────────────────────────
// Full engineering case study — traced to internship report.
// Framing: practical exposure, learning progression, not product ownership.

export const internshipData = {
  meta: {
    title: 'EV Startup Internship',
    company: 'EV Startup, Chennai', // TODO: replace with actual company name if comfortable
    subtitle: 'Battery Management Systems · Embedded Firmware · Automotive Protocols',
    location: 'Chennai, India',
    year: '2025', // TODO: exact dates
    type: 'Engineering Internship',
    tags: ['Embedded Systems', 'CAN Bus', 'Battery Management', 'Firmware'],
  },

  // Opening context paragraph — set expectations honestly
  context:
    'This was my first exposure to professional embedded engineering. Working within an electric vehicle startup, I was immersed in the technical domain of EV development — from BMS fundamentals to firmware workflows, from CAN signal definitions to high-voltage handling procedures. This case study documents the concepts I learned, the tools I worked with, and the engineering mindset I developed — not a list of products shipped.',

  // Learning journey steps — "was exposed to / worked with / gained understanding of"
  journey: [
    {
      id: 'bms',
      icon: 'Battery',
      title: 'Battery Management Systems',
      desc: 'Gained foundational understanding of BMS architecture — cell monitoring, balancing strategies, SOC estimation concepts, and protection circuit design.',
      detail: 'Studied Li-ion battery cell chemistry, pack topology, and the role of BMS in ensuring safety and longevity of EV battery packs.',
    },
    {
      id: 'ev-arch',
      icon: 'Zap',
      title: 'EV System Architecture',
      desc: 'Learned the end-to-end architecture of electric vehicles — from battery pack through inverter to motor, including power distribution and control hierarchy.',
      detail: 'Developed understanding of how subsystems communicate and the role of embedded controllers in orchestrating EV operation.',
    },
    {
      id: 'can-protocols',
      icon: 'Radio',
      title: 'CAN Communication Protocols',
      desc: 'Studied Controller Area Network (CAN) protocol fundamentals — frame structure, message arbitration, error detection, and bus timing.',
      detail: 'Gained exposure to CAN Bus implementation on communication boards used within the EV development environment.',
    },
    {
      id: 'platformio',
      icon: 'Cpu',
      title: 'PlatformIO & Embedded Tooling',
      desc: 'Worked with PlatformIO as the primary embedded development environment — build systems, library management, and cross-compilation.',
      detail: 'Used PlatformIO with the Arduino framework targeting the Teensy 4.1 platform for firmware compilation and deployment.',
    },
    {
      id: 'teensy',
      icon: 'Cpu',
      title: 'Teensy 4.1 — ARM Cortex-M7',
      desc: 'Developed familiarity with the Teensy 4.1 microcontroller — its peripheral set, pin configuration, interrupt handling, and serial communication interfaces.',
      detail: 'Worked within firmware code targeting the Teensy 4.1\'s ARM Cortex-M7 core, including GPIO, UART, SPI, and I2C peripheral usage.',
    },
    {
      id: 'can-bus',
      icon: 'Radio',
      title: 'CAN Bus Communication',
      desc: 'Gained practical exposure to CAN Bus network setup — termination, message prioritization, baud rate configuration, and bus load considerations.',
      detail: 'Worked with multi-node CAN networks and understood how embedded nodes participate in automotive communication topologies.',
    },
    {
      id: 'dbc',
      icon: 'GitBranch',
      title: 'DBC Files & Vector CANdb++',
      desc: 'Learned to read and work with DBC database files — CAN signal definitions, message IDs, scaling, and physical value mapping.',
      detail: 'Used Vector CANdb++ to study existing DBC files used in the project, understanding how signal databases support system-level communication documentation.',
    },
    {
      id: 'kvaser',
      icon: 'Shield',
      title: 'Kvaser Interface Tools',
      desc: 'Used Kvaser hardware interface tools for CAN Bus monitoring, traffic logging, and communication validation.',
      detail: 'Applied Kvaser tools to capture and analyze CAN Bus traffic, verify message timing, and support debugging of communication issues.',
    },
    {
      id: 'firmware',
      icon: 'Code',
      title: 'Firmware Development Workflow',
      desc: 'Gained exposure to professional firmware development practices — requirements understanding, code structure, testing workflows, and documentation standards.',
      detail: 'Worked within an automotive firmware codebase, following team conventions and contributing to software under engineering guidance.',
    },
    {
      id: 'validation',
      icon: 'Shield',
      title: 'Engineering Validation',
      desc: 'Participated in engineering validation workflows — functional testing, hardware-in-loop verification, and validation documentation practices.',
      detail: 'Observed and contributed to test case execution, result documentation, and the systematic approach to validating firmware behavior against requirements.',
    },
    {
      id: 'hv-safety',
      icon: 'AlertTriangle',
      title: 'High Voltage Safety Procedures',
      desc: 'Learned high-voltage safety protocols required for working with EV battery systems — HV interlock procedures, PPE requirements, and isolation testing.',
      detail: 'Followed established safety workflows for HV system handling, understanding why automotive-grade safety discipline is non-negotiable in EV development.',
    },
    {
      id: 'repository',
      icon: 'GitBranch',
      title: 'Automotive Engineering Repository',
      desc: 'Contributed to and maintained a structured engineering repository — version control practices, branching strategy, and documentation standards.',
      detail: 'Participated in team code review workflows and maintained engineering documentation as part of the project repository.',
    },
  ],

  // Skills that were acquired/developed during the internship
  skillsAcquired: [
    'CAN Bus Communication',
    'DBC File Analysis',
    'Teensy 4.1 (ARM Cortex-M7)',
    'PlatformIO',
    'Battery Management Systems',
    'Kvaser Interface Tools',
    'Vector CANdb++',
    'Embedded C/C++',
    'Engineering Validation',
    'EV System Architecture',
    'High Voltage Safety',
    'Automotive Protocols',
    'Engineering Documentation',
  ],

  // Key lessons — framed as learning takeaways
  lessons: [
    'Real-world firmware is collaborative — understanding existing code is as important as writing new code.',
    'Communication protocols are contracts between systems. Precision in signal definition prevents cascading failures.',
    'High voltage demands respect. Safety is a discipline built into every procedure, not an afterthought.',
    'Documentation is engineering work. A well-documented system is easier to test, maintain, and evolve.',
    'The best approach to complex systems is to understand the physics and requirements before writing a single line of code.',
  ],
} as const;
