import { ChevronDown, Feather, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { audiences, services, steps } from '../content'
import { EMAIL, WHATSAPP } from '../contact'

const menus = [
  { id: 'servicios', label: 'Servicios', items: services },
  { id: 'proceso', label: 'Cómo trabajamos', items: steps },
  { id: 'para-quien', label: 'Para quién', items: audiences },
]

const linkClass = 'text-sm text-[#5b5163] transition-colors hover:text-[#1f1a24]'
const focusClass = 'rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a1f33]'
const ctaClass = `rounded-full bg-[#2a1f33] px-5 py-2.5 text-sm font-medium text-[#faf7f2] transition-colors hover:bg-[#3b2d47] ${focusClass}`

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Close dropdowns on outside click or Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => { if (!navRef.current?.contains(e.target as Node)) setOpen(null) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobileOpen(false) } }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey) }
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Principal"
        className="animate-fade-in-up relative z-30 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"
        style={{ animationDelay: '0.1s', opacity: 0 }}
      >
        <a href="/" className={`flex items-center gap-2 ${focusClass}`}>
          <Feather className="h-5 w-5 text-[#1f1a24]" aria-hidden="true" />
          <span className="text-lg font-semibold tracking-tight text-[#1f1a24]">Trackerflow</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {menus.map((m) => (
            <li key={m.id} className="relative">
              <button
                type="button"
                aria-expanded={open === m.id}
                aria-controls={`menu-${m.id}`}
                onClick={() => setOpen(open === m.id ? null : m.id)}
                className={`flex items-center gap-1 ${linkClass} ${focusClass}`}
              >
                {m.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${open === m.id ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {open === m.id && (
                <ul
                  id={`menu-${m.id}`}
                  className="animate-fade-in-overlay absolute top-full left-1/2 mt-3 w-80 -translate-x-1/2 rounded-2xl border border-[#e9e1d6] bg-[#faf7f2]/95 p-2 shadow-lg shadow-[#1f1a24]/5 backdrop-blur-md"
                >
                  {m.items.map((item) => (
                    <li key={item.title} className="rounded-xl px-3 py-2.5">
                      <p className="text-sm font-semibold text-[#1f1a24]">{item.title}</p>
                      <p className="text-xs leading-relaxed text-[#5b5163]">{item.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 sm:flex">
          <a href={`mailto:${EMAIL}?subject=Consulta%20para%20Trackerflow`} className={`${linkClass} ${focusClass}`}>Escríbenos</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={ctaClass}>Cotiza tu proyecto</a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          aria-controls="menu-movil"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`-m-2 p-2 text-[#1f1a24] sm:hidden ${focusClass}`}
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="menu-movil"
          className="animate-fade-in-overlay absolute top-[60px] right-0 left-0 z-30 flex max-h-[calc(100svh-60px)] flex-col gap-4 overflow-y-auto border-b border-[#e9e1d6] bg-[#faf7f2]/95 px-6 py-4 backdrop-blur-md"
        >
          {menus.map((m) => (
            <div key={m.id}>
              <p className="mb-1 text-xs font-semibold tracking-wide text-[#8a5a8c] uppercase">{m.label}</p>
              <p className="text-sm text-[#5b5163]">{m.items.map((i) => i.title).join(' · ')}</p>
            </div>
          ))}
          <div className="flex flex-col gap-4 border-t border-[#e9e1d6] pt-4">
            <a href={`mailto:${EMAIL}?subject=Consulta%20para%20Trackerflow`} className={`${linkClass} ${focusClass}`}>Escríbenos</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`w-full text-center ${ctaClass}`}>Cotiza tu proyecto</a>
          </div>
        </div>
      )}
    </>
  )
}
