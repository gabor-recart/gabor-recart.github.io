;(function (document) {
  const id = 'recart-tracking-js'
  if (document.getElementById(id)) {
    return
  }

  const container = document.createElement('div')
  container.attachShadow({ mode: 'open' })
  document.body.appendChild(container)
  container.id = 'recart-root'

  // Disable fastclick to avoid event collision
  // https://github.com/ftlabs/fastclick/blob/f77afc87aa43fb7a89e1ed8ba20c8d1695bd95b6/README.md#ignore-certain-elements-with-needsclick
  container.classList.add('needsclick')
  container.style.display = 'block'

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://gabor-recart.github.io/spinner/main.css'
  document.querySelector('#recart-root').shadowRoot.appendChild(link)

  const font = document.createElement('link')
  font.rel = 'stylesheet'
  font.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
  document.head.appendChild(font)

  const script = document.createElement('script')
  script.id = id
  script.src = 'https://gabor-recart.github.io/spinner/main.js'
  script.async = true
  document.body.appendChild(script)
})(document)
