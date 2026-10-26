export interface SocialLink {
  label: string
  url: string
}

export interface Profile {
  name: string
  title: string
  introduction: string
  objective: string
  description: string
  interests: string[]
  location: string
  email: string
  phone: string
  phoneHref: string
  education: { school: string; degree: string; level: string }
  academicHighlights: string[]
  socialLinks: SocialLink[]
}
