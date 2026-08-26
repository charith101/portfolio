export function scrollToId(id: string) {
  const el = document.querySelector(id)
  if (!el) return
  const header = 96
  const top = el.getBoundingClientRect().top + window.scrollY - header
  window.scrollTo({ top, behavior: "smooth" })
}
