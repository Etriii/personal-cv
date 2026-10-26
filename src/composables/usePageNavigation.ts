import { nextTick, onScopeDispose, ref } from 'vue'
import { useRouter } from 'vue-router'
import { profile } from '../pages/profile/data/profile'

export function usePageNavigation() {
  const router = useRouter()
  const announcement = ref('')
  let navigationVersion = 0

  const removeHook = router.afterEach(async (to, from, failure) => {
    if (failure) return
    const version = ++navigationVersion
    const title = String(to.meta.title ?? 'Home')
    document.title = `${title} | ${profile.name} — ${profile.title}`
    await nextTick()
    if (version !== navigationVersion) return
    announcement.value = `${title} page`
    if (from.matched.length > 0) {
      document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true })
    }
  })

  onScopeDispose(() => {
    navigationVersion++
    removeHook()
  })

  return { announcement }
}
