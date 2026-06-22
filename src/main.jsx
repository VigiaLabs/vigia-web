import React from 'react'
import ReactDOM from 'react-dom/client'
import Lenis from 'lenis'
import App from './App.jsx'
import './index.css'

// Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf)

// Pre-warm: during browser idle time, kick off the Three.js + StaticShader
// chunk download so it's cached before the user scrolls to it.
// Falls back to a short timeout on browsers without rIC support.
const preload = () => import('./components/StaticShader.jsx');
if ('requestIdleCallback' in window) {
  requestIdleCallback(preload, { timeout: 2000 });
} else {
  setTimeout(preload, 1500);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
