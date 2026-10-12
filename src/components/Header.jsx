import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { BUSINESS as B, NAV } from '../data.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  return (
    <header className="header">
      <div className="wrap header__in">
        <a className="brand" href="#kezdolap" aria-label={`${B.name} – kezdőlap`}>
          <span className="brand__logo" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" /><path d="M16 10h1.5a2 2 0 0 1 0 4H16" /><path d="M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3" stroke="#C87545" /></svg>
          </span>
          <span className="brand__name">{B.name}</span>
        </a>
        <nav className="nav" aria-label="Főmenü">
          {NAV.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
        </nav>
        <div className="header__actions">
          <a className="btn btn--copper header__call" href={B.phoneHref} aria-label={`Telefonhívás: ${B.phone}`}>
            <Icon name="phone" /><span className="long">{B.phone}</span><span className="short">Hívás</span>
          </a>
          <button className="burger" type="button" aria-expanded={open} aria-controls="mobilMenu" aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'} onClick={() => setOpen(!open)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? 'open' : ''}`} id="mobilMenu" aria-label="Mobil menü">
        {NAV.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>)}
      </nav>
    </header>
  )
}
