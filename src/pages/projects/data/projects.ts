import type { Project } from '../domain/entities/project'

export const projects: Project[] = [
  {
    id: 'ocean-view',
    title: 'Ocean View',
    category: 'Collaborative academic project',
    description: 'A resort booking and management project designed to move manual reservations and resort resource management onto the web.',
    technologies: ['React', 'JavaScript', 'Vite', 'PHP', 'MySQL'],
    contribution: 'Named developer in the project README alongside four collaborators. Individual feature ownership is not documented.',
    repositoryUrl: 'https://github.com/Etriii/IT223_resort_booking_and_management_system',
    visual: 'ocean',
  },
  {
    id: 'agent-skills',
    title: 'Agent Skills',
    category: 'Developer tooling',
    description: 'Installable skill packs for Codex and Claude, with a shared Python installer, Markdown operation records, and backup and recovery support.',
    technologies: ['Python', 'Markdown', 'Command-line tools'],
    contribution: 'Published in my GitHub account. Project capabilities are documented in the README; individual contributions are not itemized.',
    repositoryUrl: 'https://github.com/Etriii/agent-skills',
    visual: 'tools',
  },
  {
    id: 'fastapi-pagination',
    title: 'FastAPI Pagination',
    category: 'Backend learning project',
    description: 'An API example using page and per-page query parameters, validated response schemas, and SQLModel with a lightweight SQLite database.',
    technologies: ['Python', 'FastAPI', 'SQLModel', 'SQLAlchemy', 'SQLite'],
    contribution: 'Published in my GitHub account as a focused example. Scope is based on the README and dependency manifest.',
    repositoryUrl: 'https://github.com/Etriii/fastapi_pagination',
    visual: 'api',
  },
]
