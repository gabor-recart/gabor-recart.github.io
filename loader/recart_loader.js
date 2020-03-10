

const isTrackingNgrok = new RegExp("_trackingNgrok=true").test(document.location.search)
const isMessengerWidgetNgrok = new RegExp("_messengerNgrok=true").test(document.location.search)

console.log({isTrackingNgrok, isMessengerWidgetNgrok})

if (!isTrackingNgrok) {
  console.log('loading tracking from production')
  (function() { const script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://cdn.ghostmonitor.com/loader.js?domain=gabor-test-prod.myshopify.com&account=5e660388497b74af2cd8ac15&hasGMInitParams=1&rand=' + Math.random(); document.head.appendChild(script); })()
} else {
  console.log('loading tracking from ngrok')
  (function() { const script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://gm-tracking-js-gabor.ngrok.io/loader.js?domain=gabor-test-prod.myshopify.com&account=5e660388497b74af2cd8ac15&hasGMInitParams=1&rand=' + Math.random(); document.head.appendChild(script); })()
}

if (!isMessengerWidgetNgrok) {
  console.log('loading messenger from production')
  (function() { const script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://cdn.ghostmonitor.com/messenger/loader.js?rand=' + Math.random(); document.head.appendChild(script); })()
} else {
  console.log('loading messenger from ngrok')
  (function() { const script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://gm-widget-js-gabor.ngrok.io/messenger/loader.js?rand=' + Math.random(); document.head.appendChild(script); })()
}

