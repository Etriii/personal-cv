<script setup lang="ts">
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import { usePageNavigation } from '../composables/usePageNavigation'

const { announcement } = usePageNavigation()
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <SiteHeader />
  <main id="main-content" class="site-main container" tabindex="-1">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" class="page-enter" />
    </RouterView>
  </main>
  <p class="sr-only" role="status" aria-live="polite">{{ announcement }}</p>
  <SiteFooter />
</template>
