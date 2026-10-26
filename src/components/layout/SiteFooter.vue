<script setup lang="ts">
import ArrowIcon from '../ui/ArrowIcon.vue'
import { profile } from '../../pages/profile/data/profile'

const github = profile.socialLinks.find((link) => link.label === 'GitHub')
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© {{ new Date().getFullYear() }} {{ profile.name }}</p>
      <p>Built with care. Built with Vue.</p>
      <a v-if="github" :href="github.url" target="_blank" rel="noopener noreferrer">
        Find me on GitHub <ArrowIcon />
        <span class="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  </footer>
</template>
