// ─── Experience Data ──────────────────────────────────────────────────────────
// Replicated from Replit Portfolio System

export const experienceData = [
  {
    id: 'ev-internship',
    company: 'Giroskop Mobility Pvt. Ltd.',
    role: 'Embedded Systems & BMS Intern',
    type: 'internship' as const,
    duration: 'Three-week internship, 2026',
    location: 'Chennai, India',
    description:
      'Gained practical exposure to Battery Management Systems, embedded firmware workflows, CAN Bus communication, and automotive engineering practices at Giroskop Mobility Pvt. Ltd.',
    highlights: [
      'Phase 1: Foundations (Week 1) - BMS fundamentals, EV architecture, CAN, SPI, isoSPI, UART, I2C',
      'Phase 2: Embedded Firmware Development (Week 2) - VS Code, PlatformIO, Teensy 4.1, CAN msg TX/RX, DBC decoding via Kvaser CANKing 7, SD data logging',
      'Phase 3: Automotive Firmware Repository & Engineering Validation (Week 3) - Automotive workflows, EV safety, validation testing',
    ],
    detailRoute: '/internship',
    detailLabel: 'View Internship Case Study',
  },
] as const;
