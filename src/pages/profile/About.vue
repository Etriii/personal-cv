<script setup lang="ts">
import PageHeading from '../../components/ui/PageHeading.vue'
import { profile } from './data/profile'
</script>

<template>
  <div>
    <PageHeading eyebrow="A little about me" title="Curious by nature. A builder by choice." description="The person, interests, and education behind the work." />
    <div class="about-grid">
      <section class="prose" aria-labelledby="story-title"><h2 id="story-title">Hello, I’m Alex.</h2><p>{{ profile.description }}</p><p>{{ profile.objective }}</p><h2>What I’m drawn to</h2><ul class="plain-list"><li v-for="interest in profile.interests" :key="interest">{{ interest }}</li></ul></section>
      <aside class="info-panel" aria-label="Basic information"><p class="eyebrow">At a glance</p><dl class="detail-list"><div><dt>Name</dt><dd>{{ profile.name }}</dd></div><div><dt>Focus</dt><dd>{{ profile.title }}</dd></div><div><dt>Based in</dt><dd>{{ profile.location }}</dd></div></dl></aside>
    </div>
    <section class="education-section" aria-labelledby="education-title"><div><p class="eyebrow">Education</p><h2 id="education-title">{{ profile.education.school }}</h2><p>{{ profile.education.degree }}</p><span class="tag">{{ profile.education.level }}</span></div><div><h3>Academic highlights</h3><p class="muted">Self-reported highlights. Event names, dates, and certificate details are not yet supplied.</p><ul class="highlight-list"><li v-for="highlight in profile.academicHighlights" :key="highlight">{{ highlight }}</li></ul><RouterLink class="text-link" to="/achievements">Certificate updates <span aria-hidden="true">↗</span></RouterLink></div></section>
  </div>
</template>
