<script setup lang="ts">
import PageHeading from '../../components/ui/PageHeading.vue'
import { projects } from './data/projects'
import ProjectCard from './presentation/components/ProjectCard.vue'
</script>

<template>
  <div>
    <PageHeading eyebrow="Project archive" title="Ideas, made into software." description="Systems, developer tools, and experiments—from academic projects to independent work." />
    <div class="project-summary">
      <p>{{ projects.length }} projects</p>
      <p>Side projects are labeled.</p>
    </div>
    <div class="project-grid">
      <ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project" :index="index" />
    </div>
    <p class="section-note">Descriptions and technologies are checked against project documentation and source files. Some source repositories are not publicly linked, and individual roles are not documented for every collaborative project. Illustrations are placeholders, not application screenshots.</p>
  </div>
</template>
