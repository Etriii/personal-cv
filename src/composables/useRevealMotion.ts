import { nextTick, onMounted, onScopeDispose, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'

export function useRevealMotion(root: Readonly<Ref<HTMLElement | null>>) {
  const route = useRoute()
  const animations = new Set<Animation>()
  let observer: IntersectionObserver | undefined
  let preference: MediaQueryList | undefined
  let mountedRoot: HTMLElement | null = null
  let version = 0

  function stop() {
    observer?.disconnect()
    animations.forEach((animation) => animation.cancel())
    animations.clear()
  }

  async function observe() {
    const currentVersion = ++version
    stop()
    await nextTick()
    if (currentVersion !== version || !root.value || preference?.matches) return
    if (typeof window.IntersectionObserver !== 'function' || typeof Element.prototype.animate !== 'function') return

    const elements = [...root.value.querySelectorAll<HTMLElement>('[data-reveal]')]
    observer = new IntersectionObserver((entries) => {
      if (currentVersion !== version || preference?.matches) return
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer?.unobserve(entry.target)
        if (entry.target.contains(document.activeElement)) continue

        const animation = entry.target.animate([
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], {
          duration: 620,
          delay: (elements.indexOf(entry.target as HTMLElement) % 3) * 65,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          fill: 'backwards',
        })
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' })

    elements.forEach((element) => observer?.observe(element))
  }

  function finishFocused(event: FocusEvent) {
    for (const animation of animations) {
      const target = (animation.effect as KeyframeEffect | null)?.target
      if (target instanceof Element && event.target instanceof Node && target.contains(event.target)) {
        animation.finish()
      }
    }
  }

  // Initial lazy navigation can resolve while the path is already "/".
  watch(() => route.matched, observe, { flush: 'post' })
  onMounted(() => {
    preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    preference.addEventListener('change', observe)
    mountedRoot = root.value
    mountedRoot?.addEventListener('focusin', finishFocused)
    void observe()
  })
  onScopeDispose(() => {
    version++
    stop()
    preference?.removeEventListener('change', observe)
    mountedRoot?.removeEventListener('focusin', finishFocused)
  })
}
