<script setup lang="ts">
import { profile } from './data/profile'
import ProfilePortrait from './presentation/components/ProfilePortrait.vue'
import ArrowIcon from '../../components/ui/ArrowIcon.vue'
</script>

<template>
  <div class="home-page">
    <div class="home-meta" aria-label="Personal portfolio">
      <span>PERSONAL PORTFOLIO</span>
      <span>CODE. COLLABORATE. CREATE.</span>
    </div>
    <section class="home-hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>{{ profile.title }}</p>
        <h1 id="home-title">{{ profile.name }}<span class="accent">.</span></h1>
        <p class="hero-tagline">Thoughtful code.<br /><span>Useful software.</span></p>
        <p class="hero-introduction">{{ profile.introduction }}</p>
        <div class="actions">
          <RouterLink class="button button-primary" to="/projects">Explore my work <ArrowIcon /></RouterLink>
          <RouterLink class="button button-secondary" to="/contact">Let’s talk <ArrowIcon /></RouterLink>
        </div>
        <p class="hero-note">Learning through building. Growing through collaboration.</p>
      </div>
      <ProfilePortrait />
    </section>
    <section class="home-details" aria-label="A little more about me">
      <div class="home-detail" data-reveal>
        <p class="eyebrow">01 / Education</p>
        <h2>Curiosity, put to work.</h2>
        <p>{{ profile.education.level }} · {{ profile.education.degree }}<br />{{ profile.education.school }}</p>
      </div>
      <div class="home-detail" data-reveal>
        <p class="eyebrow">02 / Direction</p>
        <h2>Building with purpose.</h2>
        <p>{{ profile.objective }}</p>
      </div>
      <div class="home-detail" data-reveal>
        <p class="eyebrow">03 / Beyond the code</p>
        <h2>People &amp; possibilities.</h2>
        <p>Project collaboration, student leadership, and a notebook full of ideas for what comes next.</p>
        <RouterLink class="text-link" to="/about">More about me <ArrowIcon /></RouterLink>
      </div>
    </section>
  </div>
</template>
