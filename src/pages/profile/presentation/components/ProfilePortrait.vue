<script setup lang="ts">
import { ref } from 'vue'
import portrait from '../../../../assets/images/profile.png'
import { profile } from '../../data/profile'

const failed = ref(false)
</script>

<template>
  <figure class="portrait-composition">
    <div class="portrait-label"><span class="portrait-status" aria-hidden="true"></span> The person behind the code <span class="portrait-number" aria-hidden="true">01 /</span></div>
    <div class="portrait-orbit" aria-hidden="true"></div>
    <div class="portrait-frame">
      <img
        v-if="!failed"
        :src="portrait"
        :alt="`Portrait of ${profile.name} in formal attire`"
        width="542"
        height="694"
        fetchpriority="high"
        @error="failed = true"
      />
      <div v-else class="portrait-fallback" role="img" :aria-label="`${profile.name}; portrait unavailable`">
        AA<span>{{ profile.shortName }}</span>
      </div>
    </div>
    <figcaption>
      <span class="portrait-signature">{{ profile.shortName }}</span>
      <span class="portrait-location"><span class="location-dot" aria-hidden="true"></span>Davao del Norte, Philippines</span>
    </figcaption>
    <span class="portrait-corner" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-16-4 20" /></svg>
    </span>
  </figure>
</template>
