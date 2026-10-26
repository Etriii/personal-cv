<script setup lang="ts">
import type { Project } from '../../domain/entities/project'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article class="project-card">
    <div :class="['project-placeholder', `placeholder-${project.visual}`]">
      <div class="placeholder-drawing" aria-hidden="true"><span class="placeholder-symbol">{{ project.visual === 'ocean' ? '≈' : project.visual === 'tools' ? '{ }' : '[ ]' }}</span><span class="placeholder-rule"></span><span class="placeholder-rule short"></span></div>
      <span class="placeholder-caption">Screenshot coming soon</span><span class="project-index" aria-hidden="true">0{{ index + 1 }}</span>
    </div>
    <div class="project-body"><p class="eyebrow">{{ project.category }}</p><h2>{{ project.title }}</h2><p>{{ project.description }}</p><ul class="tags" aria-label="Technologies"><li v-for="technology in project.technologies" :key="technology" class="tag">{{ technology }}</li></ul><p class="contribution">{{ project.contribution }}</p><a class="text-link" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a></div>
  </article>
</template>
