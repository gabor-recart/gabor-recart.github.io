!function(e){const t="recart-tracking-js";if(e.getElementById(t))return;let o=e.body;landingPageRoot=e.getElementById("recart-landing-page-root"),landingPageRoot&&(o=landingPageRoot);const n=e.createElement("div");n.attachShadow({mode:"open"}),o.appendChild(n),n.id="recart-root",n.classList.add("needsclick"),n.style.display="block";const a=e.createElement("link");a.rel="stylesheet",a.href="https://gabor-recart.github.io/build/main.css",e.querySelector("#recart-root").shadowRoot.appendChild(a);const s=e.createElement("link");s.rel="stylesheet",s.href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",e.head.appendChild(s);const r=e.createElement("script");r.id=t,r.src="https://gabor-recart.github.io/build/main.js?version=8629837",r.async=!0,e.body.appendChild(r)}(document);
