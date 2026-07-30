import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, GitFork, Users, BookOpen, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { github, languageColors } from '../lib/github';

function StatCard({ icon: Icon, label, value, delay }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="card p-5 flex flex-col gap-2"
    >
      <Icon size={18} style={{ color: 'var(--accent)' }} />
      <p className="text-2xl font-black tracking-tighter" style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}>
        {value ?? '—'}
      </p>
      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{label}</p>
    </motion.div>
  );
}

function RepoCard({ repo, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const lang  = repo.primaryLanguage?.name;
  const color = lang ? (languageColors[lang] ?? '#86868B') : '#86868B';

  return (
    <motion.a
      ref={ref}
      href={repo.url || repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="card card-hover p-5 flex flex-col gap-3 block"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <BookOpen size={15} style={{ color: 'var(--text-secondary)' }} />
          <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
            {repo.name}
          </span>
        </div>
      </div>
      <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
        {repo.description || 'No description provided.'}
      </p>
      <div className="flex items-center gap-4 mt-auto">
        {lang && (
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: color }} />
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{lang}</span>
          </span>
        )}
        <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
          <Star size={11} /> {repo.stargazerCount ?? repo.stargazers_count ?? 0}
        </span>
        <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
          <GitFork size={11} /> {repo.forkCount ?? repo.forks_count ?? 0}
        </span>
      </div>
    </motion.a>
  );
}

export default function GitHubSection() {
  const [user, setUser]       = useState(null);
  const [repos, setRepos]     = useState([]);
  const [pinned, setPinned]   = useState([]);
  const [langs, setLangs]     = useState({});
  const [loading, setLoading] = useState(true);
  const [ref, inView]         = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    async function load() {
      try {
        const [u, r, p] = await Promise.all([
          github.getUser(),
          github.getRepos(),
          github.getPinnedRepos(),
        ]);
        setUser(u);
        const validRepos = Array.isArray(r) ? r : [];
        setRepos(validRepos);
        setPinned(Array.isArray(p) && p.length > 0 ? p : validRepos.slice(0, 6));
        if (validRepos.length > 0) {
          const l = await github.getLanguages(validRepos);
          setLangs(l);
        }
      } catch (err) {
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Compute total stars
  const totalStars = repos.reduce((a, r) => a + (r.stargazers_count || 0), 0);

  // Language percentages
  const totalBytes = Object.values(langs).reduce((a, b) => a + b, 0);
  const topLangs   = Object.entries(langs)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([name, bytes]) => ({ name, pct: Math.round((bytes / totalBytes) * 100) }));

  return (
    <section id="github" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">Open Source</span>
          <div className="flex items-end gap-4 flex-wrap">
            <h2
              className="font-black tracking-tighter"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
            >
              GitHub
            </h2>
            <a
              href="https://github.com/BADRINARAYANAN-D"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm py-2 px-4 mb-1"
            >
              <GithubIcon size={15} /> View Profile
            </a>
          </div>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1,2,3,4].map(i => (
              <div key={i} className="card h-24 animate-pulse" style={{ background: 'var(--bg-secondary)' }} />
            ))}
          </div>
        ) : user ? (
          <>
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <StatCard icon={BookOpen} label="Public Repos"   value={user.public_repos} delay={0} />
              <StatCard icon={Users}    label="Followers"       value={user.followers}    delay={0.07} />
              <StatCard icon={Star}     label="Total Stars"     value={totalStars}         delay={0.14} />
              <StatCard icon={Code2}    label="Languages Used"  value={topLangs.length}   delay={0.21} />
            </div>

            {/* Language bar */}
            {topLangs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Language Breakdown
                </p>
                {/* Stacked bar */}
                <div className="flex h-2 rounded-full overflow-hidden mb-4 gap-0.5">
                  {topLangs.map(({ name, pct }) => (
                    <motion.div
                      key={name}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ background: languageColors[name] ?? '#86868B' }}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {topLangs.map(({ name, pct }) => (
                    <span key={name} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: languageColors[name] ?? '#86868B' }} />
                      {name} · {pct}%
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        ) : null}

        {/* Pinned repos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(pinned.length > 0 ? pinned : repos.slice(0, 6)).map((repo, i) => (
            <RepoCard key={repo.name || repo._id} repo={repo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
