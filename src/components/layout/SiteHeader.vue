<script setup lang="ts">
import { navigation } from '../../app/router'
import { profile } from '../../pages/profile/data/profile'
import { useMobileNavigation } from '../../composables/useMobileNavigation'

const { isOpen, onNavigate } = useMobileNavigation()
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink to="/" class="brand" :aria-label="`${profile.shortName}, home`" @click="onNavigate('/')">
        <span class="brand-mark" aria-hidden="true">a<span>.</span></span>
        <span>{{ profile.shortName }}<span class="brand-caption">Developer &amp; problem solver</span></span>
      </RouterLink>
      <button
        ref="menuToggle"
        class="menu-toggle"
        type="button"
        aria-controls="primary-navigation"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span>{{ isOpen ? 'Close' : 'Menu' }}</span>
        <svg class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false">
          <path :d="isOpen ? 'm6 6 12 12M6 18 18 6' : 'M4 8h16M4 16h16'" />
        </svg>
      </button>
      <nav id="primary-navigation" aria-label="Main navigation" :class="['navigation', { 'is-open': isOpen }]">
        <RouterLink v-for="item in navigation" :key="item.path" :to="item.path" @click="onNavigate(item.path)">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
