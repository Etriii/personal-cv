export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  contribution: string
  repositoryUrl: string
  visual: 'ocean' | 'tools' | 'api'
}
