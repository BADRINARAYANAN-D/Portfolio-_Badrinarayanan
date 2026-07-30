import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { socialData } from '../data';


const PROFILES = [
  { id: '1', platform: 'GitHub',     username: 'BADRINARAYANAN-D', url: socialData.links.find(l => l.id === 'github')?.url     ?? 'https://github.com/BADRINARAYANAN-D', order: 1 },
  { id: '2', platform: 'LinkedIn',   username: 'badrinarayanan11',  url: socialData.links.find(l => l.id === 'linkedin')?.url   ?? 'https://linkedin.com/in/badrinarayanan11', order: 2 },
  { id: '3', platform: 'LeetCode',   username: 'badrinarayanan',    url: socialData.links.find(l => l.id === 'leetcode')?.url   ?? 'https://leetcode.com', order: 3 },
  { id: '4', platform: 'HackerRank', username: 'badrinarayanan',    url: socialData.links.find(l => l.id === 'hackerrank')?.url ?? 'https://hackerrank.com', order: 4 },
  { id: '5', platform: 'SkillRack',  username: 'badrinarayanan',    url: socialData.links.find(l => l.id === 'skillrack')?.url  ?? 'https://skillrack.com', order: 5 },
];

const PLATFORM_COLORS = {
  GitHub:     { bg: '#24292E', text: '#fff' },
  LinkedIn:   { bg: '#0077B5', text: '#fff' },
  LeetCode:   { bg: '#FFA116', text: '#000' },
  HackerRank: { bg: '#2EC866', text: '#fff' },
  SkillRack:  { bg: '#E74C3C', text: '#fff' },
};

const PLATFORM_EMOJIS = {
  GitHub: '🐙', LinkedIn: '💼', LeetCode: '🟡', HackerRank: '✅', SkillRack: '📊',
};

function ProfileCard({ profile, delay }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const colors = PLATFORM_COLORS[profile.platform] ?? { bg: 'var(--accent)', text: '#fff' };

  return (
    <motion.a
      ref={ref}
      href={profile.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
      className="card p-6 flex flex-col items-center gap-3 text-center group"
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
        style={{ background: colors.bg }}
      >
        {PLATFORM_EMOJIS[profile.platform] ?? '🔗'}
      </div>
      <div>
        <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{profile.platform}</p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          @{profile.username}
        </p>
      </div>
      <span
        className="text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: 'var(--accent)' }}
      >
        Visit <ExternalLink size={10} />
      </span>
    </motion.a>
  );
}

export default function CodingProfiles() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const profiles = PROFILES;

  return (
    <section id="profiles" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Profiles</span>
          <h2
            className="font-black tracking-tighter"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            Find Me Online
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {profiles.map((p, i) => (
            <ProfileCard key={p.id} profile={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
