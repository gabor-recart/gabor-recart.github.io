const htmlTemplate = `
  <meta property="og:title" content="Gábor a király" />
  <meta property="og:description" content="Na ki a király?" />
  <meta property="og:image" content="https://static.ghostmonitor.com/optin-tools/popup/default-logo.png" />
  
  <script src="https://cdn.ghostmonitor.com/loader.js?domain=gabor-test-prod.myshopify.com&account=5e660388497b74af2cd8ac15&hasGMInitParams=1&shop=gabor-test-prod.myshopify.com"/>
  
  <style>
      .full-width {
          width: 100vw;
          position: relative;
          left: 50% !important;
          right: 50% !important;
          margin-left: -50vw;
          margin-right: -50vw;
      }
  </style>
  
  <div id="recart-landing-page-root full-width">
      <svg width="600" height="450" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="262" width="76" height="76" rx="4" fill="#E9EFF4"/>
          <rect x="251" y="113" width="97" height="17" rx="4" fill="#E9EFF4"/>
          <rect x="228" y="217" width="143" height="17" rx="4" fill="#E9EFF4"/>
          <rect x="182" y="151" width="236" height="46" rx="4" fill="#E9EFF4"/>
          <rect y="287" width="600" height="46" rx="4" fill="#E9EFF4"/>
          <rect y="348" width="600" height="50" rx="4" fill="#E9EFF4"/>
          <rect x="14" y="419" width="572" height="10" rx="4" fill="#E9EFF4"/>
          <rect x="254" y="440" width="92" height="10" rx="4" fill="#E9EFF4"/>
      </svg>
  </div>
  
  <script>
    console.log('loading from other host')
  
    const sectionHeader = document.querySelector('.section-header')
    if (sectionHeader) {
      sectionHeader.style.display = 'none'
    }
  </script>
`

;(function (document) {
  console.log('svg-from-figm.js start')
  const id = 'recart-loader-div'
  const loaderDiv = document.getElementById(id)
  if (!loaderDiv) {
    console.log('could not find div')
    return
  }

  loaderDiv.innerHTML = htmlTemplate
  console.log('svg-from-figm.js finished')
})(document)
