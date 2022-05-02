;(function (document) {
  const scripts = Array.from(document.getElementsByTagName('script')).map((elem) => elem.src)
  const regex = /.+recart-loader.js/
  const recartLoaderScript = scripts.find((src) => regex.test(src))

  if (!recartLoaderScript) {
    console.log('No recartLoaderScript')
    return
  }

  const params = new URLSearchParams(
    recartLoaderScript.substring(recartLoaderScript.lastIndexOf('?') + 1)
  )

  if (!params.has('siteId')) throw new Error('Missing Recart SiteId')
  const siteId = params.get('siteId')

  const storefront = params.get('storefront')

  const settingsJsUrlPrefix = 'https://api.recart.com/tracking/v2'
  const trackingJsUrlBase = 'https://cdn.ghostmonitor.com/loader.js'
  const trackingJsUrl = storefront
    ? `${trackingJsUrlBase}?account=${siteId}&hasGMInitParams=1&storefront=${storefront}`
    : `${trackingJsUrlBase}?account=${siteId}&hasGMInitParams=1`

  const messengerWidgetUrl = 'https://cdn.ghostmonitor.com/messenger/loader.js'

  const settingsId = 'recart-settings'
  if (!document.getElementById(settingsId)) {
    const settings = document.createElement('script')
    settings.id = settingsId
    settings.src = `${settingsJsUrlPrefix}/settings/${siteId}/settings.js`
    settings.async = true
    document.body.appendChild(settings)
  }

  const trackingJsId = 'recart-tracking-js-loader'
  if (!document.getElementById(trackingJsId)) {
    const trackingJs = document.createElement('script')
    trackingJs.id = trackingJsId
    trackingJs.src = trackingJsUrl
    trackingJs.async = true
    document.body.appendChild(trackingJs)
  }

  const messengerWidgetId = 'messenger-widget-js-loader'
  if (!document.getElementById(messengerWidgetId)) {
    const messengerWidget = document.createElement('script')
    messengerWidget.id = messengerWidgetId
    messengerWidget.src = messengerWidgetUrl
    messengerWidget.async = true
    document.body.appendChild(messengerWidget)
  }
})(document)
