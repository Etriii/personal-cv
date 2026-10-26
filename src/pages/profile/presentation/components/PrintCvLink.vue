<script setup lang="ts">
import PrinterIcon from '../../../../components/ui/PrinterIcon.vue'
</script>

<template>
  <RouterLink class="button button-secondary print-cv-link" to="/cv">
    <PrinterIcon /> Print CV
  </RouterLink>
</template>

<style scoped>
.print-cv-link {
  gap: var(--space-3);
  white-space: nowrap;
}
</style>
