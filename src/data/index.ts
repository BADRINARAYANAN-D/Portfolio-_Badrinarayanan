// ─── Data Layer Barrel Export ─────────────────────────────────────────────────
// Import everything through this single file: import { heroData, skillsData } from '@/data'

export { heroData }          from './hero';
export { aboutData }         from './about';
export { socialData }        from './social';
export { experienceData }    from './experience';
export { internshipData }    from './internship';
export { projectsData }      from './projects';
export type { Project, ProjectStatus, ProjectCategory } from './projects';
export { skillsData }        from './skills';
export { researchData }      from './research';
export type { ResearchStatus } from './research';
export { achievementsData }  from './achievements';
export { timelineData }      from './timeline';
export { roadmapData }       from './roadmap';
export type { RoadmapStatus } from './roadmap';
