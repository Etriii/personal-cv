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
        <span class="brand-mark" aria-hidden="true">a.</span>
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
        <span aria-hidden="true">{{ isOpen ? '×' : '☰' }}</span>
      </button>
      <nav id="primary-navigation" aria-label="Main navigation" :class="['navigation', { 'is-open': isOpen }]">
        <RouterLink v-for="item in navigation" :key="item.path" :to="item.path" @click="onNavigate(item.path)">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
