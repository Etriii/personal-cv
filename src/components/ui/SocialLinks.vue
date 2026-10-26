<script setup lang="ts">
import ArrowIcon from './ArrowIcon.vue'
import { profile } from '../../pages/profile/data/profile'
</script>

<template>
  <ul class="social-links" aria-label="Social profiles">
    <li v-for="link in profile.socialLinks" :key="link.label">
      <a :href="link.url" target="_blank" rel="noopener noreferrer">
        {{ link.label }} <ArrowIcon /><span class="sr-only"> (opens in a new tab)</span>
      </a>
    </li>
  </ul>
</template>
