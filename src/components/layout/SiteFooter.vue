<script setup lang="ts">
import { profile } from '../../pages/profile/data/profile'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© {{ new Date().getFullYear() }} {{ profile.name }}</p>
      <p>Built with care. Built with Vue.</p>
      <a :href="profile.socialLinks[0]!.url" target="_blank" rel="noopener noreferrer">Find me on GitHub <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>
    </div>
  </footer>
</template>
