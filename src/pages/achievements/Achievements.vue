<script setup lang="ts">
import ArrowIcon from '../../components/ui/ArrowIcon.vue'
import PageHeading from '../../components/ui/PageHeading.vue'
import { achievements } from './data/achievements'
</script>

<template>
  <div>
    <PageHeading eyebrow="Milestones" title="Room for what comes next." />
    <section class="empty-state" aria-labelledby="achievements-notice" data-reveal>
      <svg class="empty-symbol" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true" focusable="false"><path d="M24 3v42M3 24h42M9 9l30 30M9 39 39 9" /><circle cx="24" cy="24" r="15" /></svg>
      <p class="eyebrow">A growing collection</p>
      <h2 id="achievements-notice">{{ achievements.notice }}</h2>
      <p>{{ achievements.explanation }}</p>
      <RouterLink class="button button-primary" to="/about">View academic highlights <ArrowIcon /></RouterLink>
    </section>
  </div>
</template>
