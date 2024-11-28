export const loadCSS = (href: string): void => {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href // e.g., "/styles/enlargemode-style.css"
    link.type = 'text/css'
    document.head.appendChild(link)
    console.log(`${href} loaded`)
  } else {
    console.log(`${href} already loaded`)
  }
}

export const removeCSS = (href: string): void => {
  const link = document.querySelector(`link[href="${href}"]`)
  if (link) {
    document.head.removeChild(link)
    console.log(`${href} removed`)
  } else {
    console.log(`${href} not found`)
  }
}
