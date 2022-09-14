!function (t) {
  const e = Array.from(t.getElementsByTagName('script')).map((t => t.src)), s = /.+recart-loader.js/,
    r = e.find((t => s.test(t)))
  if (!r) return void console.log('No recartLoaderScript')
  const n = new URLSearchParams(r.substring(r.lastIndexOf('?') + 1))
  if (!n.has('siteId')) throw new Error('Missing Recart SiteId')
  const c = n.get('siteId'), a = n.get('storefront'), o = 'https://cdn.recart.co/loader.js',
    i = a ? `${o}?account=${c}&hasGMInitParams=1&storefront=${a}` : `${o}?account=${c}&hasGMInitParams=1`,
    d = 'recart-settings'
  if (!t.getElementById(d)) {
    const e = t.createElement('script')
    e.id = d, e.src = `https://api.recart.co/tracking/v2/settings/${c}/settings.js`, e.async = !0, t.body.appendChild(e)
  }
  const g = 'recart-tracking-js-loader'
  if (!t.getElementById(g)) {
    const e = t.createElement('script')
    e.id = g, e.src = i, e.async = !0, t.body.appendChild(e)
  }
  const l = 'messenger-widget-js-loader'
  if (!t.getElementById(l)) {
    const e = t.createElement('script')
    e.id = l, e.src = 'https://cdn.ghostmonitor.com/messenger/pre/loader.js', e.async = !0, t.body.appendChild(e)
  }
}(document)
