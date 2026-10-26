import type { SkillGroup } from '../domain/entities/skill'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend development',
    description: 'Interfaces and route-based web applications.',
    skills: ['Vue 3', 'TypeScript', 'Vue Router', 'React', 'JavaScript', 'Vite', 'HTML', 'CSS'],
    evidence: { label: 'Vue project manifest', url: 'https://github.com/Etriii/motorpool-management-system-frontend/blob/main/package.json' },
  },
  {
    title: 'Backend & data',
    description: 'APIs, server-side development, and structured data.',
    skills: ['Python', 'FastAPI', 'SQLModel', 'SQLAlchemy', 'SQLite', 'PHP', 'MySQL'],
    evidence: { label: 'FastAPI pagination example', url: 'https://github.com/Etriii/fastapi_pagination' },
  },
  {
    title: 'Tools & workflow',
    description: 'Version control, repeatable setups, and developer tooling.',
    skills: ['Git', 'GitHub', 'npm', 'Python standard library', 'Command-line tools'],
    evidence: { label: 'Agent Skills documentation', url: 'https://github.com/Etriii/agent-skills' },
  },
]
