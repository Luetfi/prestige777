import './FloatingElements.css'

const icons = {
  hookah: (
    <svg viewBox="0 0 64 64">
      <path d="M32 4c-1.5 4.5-5 8-5 14a5 5 0 0 0 10 0c0-6-3.5-9.5-5-14z" />
      <line x1="32" y1="22" x2="32" y2="42" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="32" cy="48" rx="10" ry="6" />
      <line x1="22" y1="48" x2="22" y2="56" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="42" y1="48" x2="42" y2="56" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="18" y1="56" x2="46" y2="56" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  crescent: (
    <svg viewBox="0 0 64 64">
      <path d="M36 8a24 24 0 1 0 0 48 20 20 0 0 1 0-48z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 64 64">
      <path d="M32 6l7 14.3 15.8 2.3-11.4 11.1 2.7 15.7L32 42l-14.1 7.4 2.7-15.7L9.2 22.6 25 20.3z" />
    </svg>
  ),
  smokeWisp: (
    <svg viewBox="0 0 64 64">
      <path d="M20 56c0-8 8-8 8-16s-8-8-8-16 8-8 8-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 56c0-8 8-8 8-16s-8-8-8-16 8-8 8-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  teaGlass: (
    <svg viewBox="0 0 64 64">
      <path d="M20 16h24l-4 36H24L20 16z" />
      <path d="M44 24h6a6 6 0 0 1 0 12h-5" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="22" y1="10" x2="26" y2="16" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="32" y1="8" x2="32" y2="16" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="42" y1="10" x2="38" y2="16" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 64 64">
      <path d="M32 4L56 32 32 60 8 32z" />
    </svg>
  ),
  arabesque: (
    <svg viewBox="0 0 64 64">
      <path d="M32 8c12 0 20 8 20 20-8 0-12-4-20-4s-12 4-20 4c0-12 8-20 20-20z" />
      <path d="M32 56c-12 0-20-8-20-20 8 0 12 4 20 4s12-4 20-4c0 12-8 20-20 20z" />
    </svg>
  ),
}

const presets = {
  hookah: [
    { icon: 'hookah', top: '10%', left: '5%', size: 'lg', delay: '0s' },
    { icon: 'smokeWisp', top: '30%', right: '8%', size: 'md', delay: '1.5s' },
    { icon: 'star', top: '60%', left: '12%', size: 'sm', delay: '3s' },
    { icon: 'crescent', top: '15%', right: '15%', size: 'sm', delay: '0.8s' },
    { icon: 'diamond', top: '75%', right: '5%', size: 'md', delay: '2.2s' },
  ],
  oriental: [
    { icon: 'arabesque', top: '8%', left: '3%', size: 'lg', delay: '0s' },
    { icon: 'crescent', top: '20%', right: '6%', size: 'md', delay: '1s' },
    { icon: 'star', top: '55%', left: '8%', size: 'sm', delay: '2s' },
    { icon: 'diamond', top: '40%', right: '4%', size: 'sm', delay: '3s' },
    { icon: 'star', top: '80%', left: '15%', size: 'md', delay: '1.5s' },
    { icon: 'crescent', top: '70%', right: '12%', size: 'sm', delay: '0.5s' },
  ],
  stars: [
    { icon: 'star', top: '5%', left: '10%', size: 'md', delay: '0s' },
    { icon: 'star', top: '25%', right: '7%', size: 'sm', delay: '1.2s' },
    { icon: 'crescent', top: '50%', left: '5%', size: 'lg', delay: '2s' },
    { icon: 'star', top: '70%', right: '10%', size: 'md', delay: '0.6s' },
    { icon: 'diamond', top: '85%', left: '18%', size: 'sm', delay: '3.5s' },
  ],
  drinks: [
    { icon: 'teaGlass', top: '8%', left: '4%', size: 'lg', delay: '0s' },
    { icon: 'star', top: '20%', right: '6%', size: 'sm', delay: '1s' },
    { icon: 'diamond', top: '50%', left: '7%', size: 'md', delay: '2.5s' },
    { icon: 'teaGlass', top: '65%', right: '5%', size: 'sm', delay: '1.8s' },
    { icon: 'crescent', top: '85%', left: '12%', size: 'sm', delay: '3s' },
  ],
  gallery: [
    { icon: 'diamond', top: '5%', left: '3%', size: 'md', delay: '0s' },
    { icon: 'star', top: '15%', right: '5%', size: 'sm', delay: '1.5s' },
    { icon: 'arabesque', top: '45%', left: '6%', size: 'lg', delay: '0.8s' },
    { icon: 'crescent', top: '60%', right: '8%', size: 'md', delay: '2.2s' },
    { icon: 'star', top: '80%', left: '10%', size: 'sm', delay: '3s' },
    { icon: 'smokeWisp', top: '35%', right: '3%', size: 'sm', delay: '1s' },
  ],
}

function FloatingElements({ preset = 'hookah' }) {
  const elements = presets[preset] || presets.hookah

  return (
    <div className="floating-elements" aria-hidden="true">
      {elements.map((el, i) => (
        <div
          key={i}
          className={`floating-el floating-el--${el.size}`}
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
            animationDelay: el.delay,
          }}
        >
          {icons[el.icon]}
        </div>
      ))}
    </div>
  )
}

export default FloatingElements
