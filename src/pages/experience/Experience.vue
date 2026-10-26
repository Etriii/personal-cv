<script setup lang="ts">
import PageHeading from '../../components/ui/PageHeading.vue'
import { experiences } from './data/experience'
</script>

<template>
  <div>
    <PageHeading eyebrow="Experience & leadership" title="Growing through real work." description="Learning through projects, helping others, and taking responsibility. Every experience shapes how I build." />
    <div class="experience-list"><article v-for="(experience, index) in experiences" :key="experience.title" class="experience-row"><div class="experience-category"><span class="row-number" aria-hidden="true">0{{ index + 1 }}</span><span>{{ experience.category }}</span></div><div><h2>{{ experience.title }}</h2><p class="experience-organization">{{ experience.organization }}</p><p>{{ experience.description }}</p></div></article></div>
    <p class="section-note">Experience and leadership details are self-reported. Dates and further role details have not yet been supplied.</p>
  </div>
</template>
