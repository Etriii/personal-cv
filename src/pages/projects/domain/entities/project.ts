export interface Project {
  id: string
  title: string
  category: string
  isSideProject: boolean
  description: string
  technologies: string[]
  contribution?: string
  repositoryUrl?: string
  visual: 'ocean' | 'tools' | 'api'
}
