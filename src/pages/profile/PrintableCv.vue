<script setup lang="ts">
import PrinterIcon from '../../components/ui/PrinterIcon.vue'
import { skillGroups } from '../skills/data/skills'
import { profile } from './data/profile'
import { printableCv } from './data/printableCv'
import { useCvPrint } from './presentation/composables/useCvPrint'
import '../../styles/printable-cv.css'

const { printCv } = useCvPrint()
const professionalLinks = profile.socialLinks.filter((link) => ['GitHub', 'LinkedIn'].includes(link.label))
</script>

<template>
  <div class="cv-page">
    <div class="cv-toolbar">
      <div>
        <p class="eyebrow">Ready for your next opportunity</p>
        <p class="cv-preview-title">Print-ready CV</p>
        <p>Review your CV, then print or save it as a PDF. Choose A4 and turn off browser headers and footers.</p>
      </div>
      <div class="cv-toolbar-actions">
        <button class="button button-primary" type="button" @click="printCv">
          <PrinterIcon /> Print / Save as PDF
        </button>
        <RouterLink class="text-link" to="/about">Back to About</RouterLink>
      </div>
    </div>

    <article class="cv-sheet" aria-label="Curriculum vitae">
      <header class="cv-header">
        <h1>{{ profile.name }}</h1>
        <p class="cv-role">{{ profile.title }}</p>
        <ul class="cv-contact-line" aria-label="Contact information">
          <li><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></li>
          <li><a :href="profile.phoneHref">{{ profile.phone }}</a></li>
          <li>{{ printableCv.location }}</li>
        </ul>
        <ul class="cv-contact-line" aria-label="Professional profiles">
          <li v-for="link in professionalLinks" :key="link.label">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.url.replace('https://www.', '').replace('https://', '') }}</a>
          </li>
          <li><a :href="printableCv.portfolioUrl" target="_blank" rel="noopener noreferrer">{{ printableCv.portfolioUrl.replace('https://', '') }}</a></li>
        </ul>
      </header>

      <section class="cv-section" aria-labelledby="cv-summary">
        <h2 id="cv-summary">Professional summary</h2>
        <p>{{ printableCv.summary }}</p>
      </section>

      <section class="cv-section" aria-labelledby="cv-skills">
        <h2 id="cv-skills">Technical skills</h2>
        <dl class="cv-skills">
          <div v-for="group in skillGroups" :key="group.title">
            <dt>{{ group.title }}</dt>
            <dd>{{ group.skills.join(', ') }}</dd>
          </div>
        </dl>
      </section>

      <section class="cv-section" aria-labelledby="cv-experience">
        <h2 id="cv-experience">Experience &amp; leadership</h2>
        <div v-for="experience in printableCv.experience" :key="experience.title" class="cv-item">
          <div class="cv-item-heading">
            <h3>{{ experience.title }}</h3>
            <p class="cv-item-meta">{{ experience.organization }}</p>
          </div>
          <p v-if="experience.description">{{ experience.description }}</p>
        </div>
      </section>

      <section class="cv-section" aria-labelledby="cv-projects">
        <h2 id="cv-projects">Selected project work</h2>
        <div v-for="project in printableCv.projects" :key="project.id" class="cv-item">
          <div class="cv-item-heading">
            <h3>{{ project.title }}</h3>
            <p class="cv-item-meta">{{ project.technologies.slice(0, 4).join(', ') }}</p>
          </div>
          <p>{{ project.description }}</p>
        </div>
        <p class="cv-archive-note">Complete project archive and further details: {{ printableCv.portfolioUrl }}/projects</p>
      </section>

      <section class="cv-section" aria-labelledby="cv-education">
        <h2 id="cv-education">Education</h2>
        <div class="cv-item-heading">
          <h3>{{ profile.education.degree }}</h3>
          <p class="cv-item-meta">{{ profile.education.level }}</p>
        </div>
        <p>{{ profile.education.school }}</p>
      </section>

      <section class="cv-section" aria-labelledby="cv-highlights">
        <h2 id="cv-highlights">Qualification &amp; academic highlights</h2>
        <ul class="cv-highlights">
          <li v-for="highlight in profile.academicHighlights.slice(0, 3)" :key="highlight">{{ highlight }}</li>
        </ul>
      </section>
    </article>
  </div>
</template>
