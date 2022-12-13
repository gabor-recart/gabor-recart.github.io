!function (e) {
  const t = 'recart-tracking-js'
  if (e.getElementById(t)) return
  let o = e.body
  landingPageRoot = e.getElementById('recart-landing-page-root'), landingPageRoot && (o = landingPageRoot)
  const a = e.createElement('div')
  a.attachShadow({ mode: 'open' }), o.appendChild(a), a.id = 'recart-root', a.classList.add('needsclick'), a.style.display = 'block'
  const n = e.createElement('link')
  n.rel = 'stylesheet', n.href = 'https://gabor-recart.github.io/build/main.css', e.querySelector('#recart-root').shadowRoot.appendChild(n)
  const s = e.createElement('link')
  s.rel = 'stylesheet', s.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap', e.head.appendChild(s)
  const r = e.createElement('script')
  r.id = t, r.src = 'https://gabor-recart.github.io/build/main.js?version=90d19ea8', r.async = !0, e.body.appendChild(r)
}(document)
