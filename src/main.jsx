import React from 'react'
import ReactDOM from 'react-dom/client'
import Lenis from 'lenis'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})
window.__lenis = lenis;
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
