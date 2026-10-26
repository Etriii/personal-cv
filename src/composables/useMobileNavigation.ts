import { nextTick, onMounted, onScopeDispose, ref, useTemplateRef, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useMobileNavigation() {
  const route = useRoute()
  const isOpen = ref(false)
  const toggleButton = useTemplateRef<HTMLButtonElement>('menuToggle')
  let desktopQuery: MediaQueryList | undefined

  function close() {
    isOpen.value = false
  }

  async function onNavigate(path: string) {
    const restoreFocus = isOpen.value && route.path === path
    close()
    if (restoreFocus) {
      await nextTick()
      toggleButton.value?.focus()
    }
  }

  async function onEscape(event: KeyboardEvent) {
    if (event.key !== 'Escape' || !isOpen.value) return
    event.preventDefault()
    close()
    await nextTick()
    toggleButton.value?.focus()
  }

  function onDesktop(event: MediaQueryListEvent) {
    if (event.matches) close()
  }

  watch(() => route.fullPath, close)
  onMounted(() => {
    desktopQuery = window.matchMedia('(min-width: 1024px)')
    desktopQuery.addEventListener('change', onDesktop)
    window.addEventListener('keydown', onEscape)
  })
  onScopeDispose(() => {
    desktopQuery?.removeEventListener('change', onDesktop)
    window.removeEventListener('keydown', onEscape)
  })

  return { isOpen, onNavigate }
}
