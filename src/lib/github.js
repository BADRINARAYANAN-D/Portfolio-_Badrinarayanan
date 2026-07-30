// GitHub API integration
const GITHUB_USERNAME = 'BADRINARAYANAN-D';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers = {
  Accept: 'application/vnd.github.v3+json',
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
};

const BASE = 'https://api.github.com';

export const github = {
  // Basic user profile
  async getUser() {
    const res = await fetch(`${BASE}/users/${GITHUB_USERNAME}`, { headers });
    return res.json();
  },

  // All public repos
  async getRepos() {
    const res = await fetch(
      `${BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      { headers }
    );
    return res.json();
  },

  // Pinned repos via GraphQL
  async getPinnedRepos() {
    if (!GITHUB_TOKEN) return [];
    const query = `{
      user(login: "${GITHUB_USERNAME}") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage { name color }
              languages(first: 5) { nodes { name color } }
              repositoryTopics(first: 5) { nodes { topic { name } } }
              updatedAt
            }
          }
        }
      }
    }`;
    try {
      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      return data?.data?.user?.pinnedItems?.nodes ?? [];
    } catch {
      return [];
    }
  },

  // Language breakdown across all repos
  async getLanguages(repos) {
    const langMap = {};
    const promises = repos.slice(0, 30).map(async (repo) => {
      try {
        const res = await fetch(`${BASE}/repos/${GITHUB_USERNAME}/${repo.name}/languages`, { headers });
        const langs = await res.json();
        Object.entries(langs).forEach(([lang, bytes]) => {
          langMap[lang] = (langMap[lang] || 0) + bytes;
        });
      } catch {}
    });
    await Promise.all(promises);
    return langMap;
  },

  // Recent commits from events
  async getRecentActivity() {
    const res = await fetch(
      `${BASE}/users/${GITHUB_USERNAME}/events/public?per_page=10`,
      { headers }
    );
    const events = await res.json();
    return Array.isArray(events) ? events.slice(0, 5) : [];
  },
};

// Language color map (GitHub colors)
export const languageColors = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python:     '#3776AB',
  Java:       '#007396',
  Dart:       '#00B4AB',
  C:          '#555555',
  'C++':      '#F34B7D',
  HTML:       '#E34C26',
  CSS:        '#264DE4',
  Shell:      '#89E051',
  Jupyter:    '#DA5B0B',
  Kotlin:     '#7F52FF',
};
