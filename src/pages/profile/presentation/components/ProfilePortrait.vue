<script setup lang="ts">
import { ref } from 'vue'
import portrait from '../../../../assets/images/profile.png'
import { profile } from '../../data/profile'

const failed = ref(false)
</script>

<template>
  <figure class="portrait-composition">
    <div class="portrait-label"><span aria-hidden="true">✳</span> The person behind the code</div>
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
    <figcaption><span class="location-dot" aria-hidden="true"></span>Davao del Norte, Philippines</figcaption>
    <span class="portrait-corner" aria-hidden="true">&lt;/&gt;</span>
  </figure>
</template>
