<script setup lang="ts">
import PageHeading from '../../components/ui/PageHeading.vue'
import { skillGroups } from './data/skills'
</script>

<template>
  <div>
    <PageHeading eyebrow="My toolkit" title="The tools behind the work." description="Technologies represented in my public projects, grouped by how I use them. Always learning, always building." />
    <div class="skills-list"><section v-for="(group, index) in skillGroups" :key="group.title" class="skill-row"><span class="row-number" aria-hidden="true">0{{ index + 1 }}</span><div><h2>{{ group.title }}</h2><p>{{ group.description }}</p><a class="text-link" :href="group.evidence.url" target="_blank" rel="noopener noreferrer">{{ group.evidence.label }} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a></div><ul class="tags" :aria-label="group.title"><li v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</li></ul></section></div>
    <p class="section-note">Frontend evidence also includes the React manifest for Ocean View. PHP and MySQL are documented in its README. No skill ratings or proficiency scores are claimed.</p>
    <RouterLink class="text-link" to="/projects">See these tools in context <span aria-hidden="true">↗</span></RouterLink>
  </div>
</template>
