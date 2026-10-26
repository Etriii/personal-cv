<script setup lang="ts">
import PageHeading from '../../components/ui/PageHeading.vue'
import { projects } from './data/projects'
import ProjectCard from './presentation/components/ProjectCard.vue'
</script>

<template>
  <div>
    <PageHeading eyebrow="Selected work" title="Ideas, made into software." description="A selection of collaborative projects, developer tools, and focused experiments from my GitHub." />
    <div class="project-grid"><ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project" :index="index" /></div>
    <p class="section-note">Project descriptions and stacks were checked against public READMEs and manifests. Illustrations are intentional placeholders, not application screenshots.</p>
  </div>
</template>
