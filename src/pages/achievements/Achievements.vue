<script setup lang="ts">
import PageHeading from '../../components/ui/PageHeading.vue'
import { achievements } from './data/achievements'
</script>

<template>
  <div>
    <PageHeading eyebrow="Milestones" title="Room for what comes next." />
    <section class="empty-state" aria-labelledby="achievements-notice">
      <span class="empty-symbol" aria-hidden="true">✳</span>
      <p class="eyebrow">A growing collection</p>
      <h2 id="achievements-notice">{{ achievements.notice }}</h2>
      <p>{{ achievements.explanation }}</p>
      <RouterLink class="button button-primary" to="/about">View academic highlights <span aria-hidden="true">↗</span></RouterLink>
    </section>
  </div>
</template>
