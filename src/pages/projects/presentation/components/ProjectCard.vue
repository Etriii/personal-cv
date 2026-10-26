<script setup lang="ts">
import type { Project } from '../../domain/entities/project'
import ArrowIcon from '../../../../components/ui/ArrowIcon.vue'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article class="project-card" data-reveal>
    <div :class="['project-placeholder', `placeholder-${project.visual}`]">
      <span v-if="project.isSideProject" class="project-kind">Side project</span>
      <div class="placeholder-drawing" aria-hidden="true">
        <span class="placeholder-symbol">{{ project.visual === 'ocean' ? '≈' : project.visual === 'tools' ? '{ }' : '[ ]' }}</span>
        <span class="placeholder-rule"></span>
        <span class="placeholder-rule short"></span>
      </div>
      <span class="placeholder-caption">Screenshot coming soon</span>
      <span class="project-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>
    <div class="project-body">
      <p class="eyebrow">{{ project.category }}</p>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <ul class="tags" aria-label="Technologies">
        <li v-for="technology in project.technologies" :key="technology" class="tag">{{ technology }}</li>
      </ul>
      <p v-if="project.contribution" class="contribution">{{ project.contribution }}</p>
      <a v-if="project.repositoryUrl" class="text-link" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer">
        View repository <ArrowIcon />
        <span class="sr-only"> (opens in a new tab)</span>
      </a>
      <p v-else class="project-source-note">Source not publicly linked</p>
    </div>
  </article>
</template>
