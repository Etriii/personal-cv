import { nextTick, onMounted, onScopeDispose } from 'vue'

export function useCvPrint() {
  let active = true

  async function printCv() {
    await nextTick()
    await document.fonts.ready
    if (active) window.print()
  }

  onMounted(() => document.body.classList.add('cv-document-open'))
  onScopeDispose(() => {
    active = false
    document.body.classList.remove('cv-document-open')
  })

  return { printCv }
}
