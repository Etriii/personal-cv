import { experiences } from '../../experience/data/experience'
import { projects } from '../../projects/data/projects'

const experienceSummaries: Record<string, string> = {
  Internship: '',
  'Project work': 'Develop full-stack applications, contribute to collaborative projects, and build APIs and developer tools.',
  'Student leadership': 'Student organization leadership and collaboration with fellow IT students.',
  'Technical leadership': 'Led development of eight systems. Work toward shared APIs, a shared database, and database synchronization remains in progress.',
}

const projectSummaries: Record<string, string> = {
  motorpool: 'Fleet requests, trips, driver coordination, gate operations, and maintenance workflows.',
  bale: 'A neighborhood marketplace connecting customers, stores, riders, and administrators across web and mobile clients.',
  'collection-management': 'A student fee collection frontend with payment, fee, and announcement workflows.',
}

export const printableCv = {
  summary: 'Fourth-year Information Technology student focused on full-stack applications, API integration, and collaborative software development. Builds web systems and developer tools while taking on student and technical leadership responsibilities.',
  location: 'Sto. Tomas, Davao del Norte, Philippines',
  portfolioUrl: 'https://personal-cv-two-lime.vercel.app',
  experience: experiences
    .filter((experience) => Object.hasOwn(experienceSummaries, experience.category))
    .map((experience) => ({
      ...experience,
      title: experience.category === 'Student leadership' ? 'President' : experience.title,
      description: experienceSummaries[experience.category],
    })),
  projects: projects
    .filter((project) => Object.hasOwn(projectSummaries, project.id))
    .map((project) => ({ ...project, description: projectSummaries[project.id] })),
}
