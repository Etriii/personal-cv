import type { Profile } from '../domain/entities/profile'

export const profile: Profile = {
  name: 'Alex, Jr. A. Aparece',
  shortName: 'Alex Aparece',
  title: 'Fullstack Developer',
  introduction: "I'm a fourth-year BS Information Technology student at Davao del Norte State College. I build full-stack applications, solve programming problems, and contribute to projects that connect useful ideas with working software.",
  objective: 'To grow as a full-stack developer by building reliable software, contributing to a strong engineering team, and creating lasting financial stability for my family.',
  description: 'I enjoy working through complex programming problems and collaborating with others to turn ideas into useful applications. I work effectively under pressure and keep a notebook of ideas for future software projects. Away from the keyboard, I enjoy gaming and helping on our family farm.',
  interests: ['Full-stack application development', 'Connected systems and API integration', 'Collaborative software projects', 'Programming problem solving'],
  location: 'Prk. 2 FFF Village, Bobongon, Sto. Tomas, Davao del Norte',
  email: 'alexarnaizapece@gmail.com',
  phone: '09633127462',
  phoneHref: 'tel:+639633127462',
  education: {
    school: 'Davao del Norte State College',
    degree: 'Bachelor of Science in Information Technology',
    level: 'Fourth year',
  },
  academicHighlights: [
    'NC II in Computer Systems Servicing',
    'Hackathon and programming competition participation',
    'First-place hackathon award',
    "Rubik’s Cube champion",
    'Fourth-place chess finish',
    'Codex Programmer President',
  ],
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/Etriii' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexaparecejr' },
    { label: 'Facebook', url: 'https://www.facebook.com/alexaparecejr' },
    { label: 'Instagram', url: 'https://www.instagram.com/alexaparecejr/' },
  ],
}
