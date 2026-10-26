<script setup lang="ts">
import PageHeading from '../components/ui/PageHeading.vue'
</script>

<template>
  <div class="not-found"><PageHeading eyebrow="404 / Page not found" title="A small detour." description="This page doesn’t exist. Head home to find your way back to the work, the story, and the person behind it." /><RouterLink class="button button-primary" to="/">Return home <span aria-hidden="true">↗</span></RouterLink></div>
</template>
