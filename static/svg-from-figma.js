;(function (document) {
  console.log('svg-from-figm.js start')

  const id = 'recart-loader-div'
  const loaderDiv = document.getElementById(id)
  if (!loaderDiv) {
    console.log('could not find div')
    return
  }

  const htmlTemplate = `  
  <div id="recart-landing-page-root" style="width: 100vw;position: relative;left: 50% !important;right: 50% !important;margin-left: -50vw;margin-right: -50vw;">
      <svg width="600" height="450" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto; max-width: 100%">
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
  `

  const scriptTag = document.querySelector('#recart-landing-loader-script')
  const queryParams = scriptTag.src.split('?')[1]

  const script = document.createElement('script')
  script.id = id
  script.src = `https://cdn.ghostmonitor.com/loader.js?${queryParams}`
  script.async = true
  document.body.appendChild(script)

  const sectionHeader = document.querySelector('.section-header')
  if (sectionHeader) {
    sectionHeader.style.display = 'none'
  }

  loaderDiv.innerHTML = htmlTemplate
  console.log('svg-from-figma.js finished')
})(document)
