import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("🚀 SIMPLE CONTROLLER CONNECTED")
    
    // Simple test: Just capture and log elements
    console.log("📋 Elements found:", document.querySelectorAll('[data-transition-name]').length)
    
    // Simple event listeners
    document.addEventListener("turbo:before-visit", (e) => {
      console.log("🔴 BEFORE VISIT EVENT FIRED!")
      this.capture()
    })
    
    document.addEventListener("turbo:render", (e) => {
      console.log("🟢 RENDER EVENT FIRED!")
      this.animate()
    })
    
    // Simple click test
    document.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        console.log("🖱️ LINK CLICKED!")
      }
    })
  }
  
  capture() {
    console.log("📸 CAPTURING ELEMENTS...")
    const elements = document.querySelectorAll('[data-transition-name]')
    this.captured = []
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.width > 0 && rect.height > 0) {
        this.captured.push({
          name: el.dataset.transitionName,
          element: el.cloneNode(true),
          rect: rect
        })
        console.log(`✅ CAPTURED: ${el.dataset.transitionName}`)
      }
    })
    
    console.log(`📊 TOTAL CAPTURED: ${this.captured.length}`)
  }
  
  animate() {
    console.log("🎬 STARTING ANIMATION...")
    
    if (!this.captured || this.captured.length === 0) {
      console.log("❌ NO ELEMENTS TO ANIMATE")
      return
    }
    
    this.captured.forEach(item => {
      const target = document.querySelector(`[data-transition-name="${item.name}"]`)
      if (target) {
        console.log(`🚀 ANIMATING: ${item.name}`)
        this.flyElement(item, target)
      } else {
        console.log(`❌ NO TARGET FOR: ${item.name}`)
      }
    })
  }
  
  flyElement(from, to) {
    const clone = from.element
    const fromRect = from.rect
    const toRect = to.getBoundingClientRect()
    
    // Simple clone setup
    clone.style.position = 'fixed'
    clone.style.top = fromRect.top + 'px'
    clone.style.left = fromRect.left + 'px' 
    clone.style.width = fromRect.width + 'px'
    clone.style.height = fromRect.height + 'px'
    clone.style.zIndex = '9999'
    clone.style.transition = 'all 2s ease'
    clone.style.border = '3px solid red' // Make it obvious
    
    // Hide target
    to.style.opacity = '0'
    
    // Add to page
    document.body.appendChild(clone)
    
    // Animate after a moment
    setTimeout(() => {
      clone.style.top = toRect.top + 'px'
      clone.style.left = toRect.left + 'px'
      clone.style.width = toRect.width + 'px'
      clone.style.height = toRect.height + 'px'
      clone.style.border = '3px solid blue'
    }, 100)
    
    // Clean up
    setTimeout(() => {
      to.style.opacity = '1'
      clone.remove()
    }, 2500)
  }
}