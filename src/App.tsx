import { ArrowRight, Phone } from 'lucide-react'
import Navbar from './components/Navbar'
import { services } from './content'
import { PHONE, PHONE_HREF, WHATSAPP } from './contact'
import { useReducedMotion } from './useReducedMotion'

const fade = (delay: string) => ({ animationDelay: delay, opacity: 0 })
const focusClass = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a1f33]'
const gradientText =
  'animate-gradient-drift bg-linear-to-r from-[#2a1f33] via-[#8a5a8c] to-[#d98b5f] bg-[length:200%_100%] bg-clip-text text-transparent'

export default function App() {
  const reduced = useReducedMotion()

  return (
    <div className="relative h-screen overflow-hidden bg-[#faf7f2] supports-[height:100svh]:h-[100svh]">
      {/* Background video, pushed below the hero text and dissolved into the ivory by the overlays */}
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pt-[120px] md:pt-[200px]"
        src="/assets/hero-lavanda.mp4"
        poster="/assets/hero-lavanda-poster.webp"
        autoPlay={!reduced}
        loop
        muted
        playsInline
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[120px] z-10 h-[200px] bg-linear-to-b from-[#faf7f2] to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[200px] z-10 hidden h-[300px] bg-linear-to-b from-[#faf7f2] to-transparent md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[120px] z-10 h-[200px] bg-linear-to-b from-[#faf7f2] to-transparent md:hidden" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[240px] bg-linear-to-t from-[rgba(31,26,36,0.35)] to-transparent" />

      <Navbar />

      <main className="relative z-20 mx-auto max-w-7xl px-4 pt-14 pb-16 text-center sm:px-6 sm:pt-24 sm:pb-32">
        <h1
          className="animate-fade-in-up mb-4 text-[38px] leading-[1.04] font-bold tracking-[-0.035em] text-[#1f1a24] sm:mb-5 sm:text-6xl md:text-7xl lg:text-[84px]"
          style={fade('0.3s')}
        >
          <span className="sm:hidden">
            Menos tareas.<br />Más flujo.<br /><span className={gradientText}>Tu idea, hecha software.</span>
          </span>
          <span className="hidden sm:inline">
            Menos tareas. Más flujo.<br /><span className={gradientText}>Tu idea, hecha software.</span>
          </span>
        </h1>

        <p
          className="animate-fade-in-up mx-auto mb-6 max-w-2xl px-2 text-base text-[#5b5163] sm:mb-8 sm:text-lg md:text-xl"
          style={fade('0.4s')}
        >
          Trackerflow diseña sitios web, software a medida y automatizaciones para emprendimientos y pymes, para que tu equipo se enfoque en lo que importa.
        </p>

        <div className="animate-fade-in-up flex flex-col items-center justify-center gap-3 sm:flex-row" style={fade('0.5s')}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full bg-[#2a1f33] px-6 py-3 text-sm font-medium text-[#faf7f2] transition-colors hover:bg-[#3b2d47] sm:px-8 sm:text-base ${focusClass}`}
          >
            Hablemos por WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href={PHONE_HREF}
            className={`inline-flex items-center gap-2 rounded-full border border-[#d9cfc2] bg-white/50 px-5 py-3 text-sm font-medium text-[#2a1f33] backdrop-blur-sm transition-colors hover:bg-white/80 sm:text-base ${focusClass}`}
          >
            <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#2a1f33]" aria-hidden="true">
              <Phone className="h-3 w-3 fill-[#faf7f2] text-[#faf7f2]" />
            </span>
            Llámanos al {PHONE}
          </a>
        </div>
      </main>

      <section
        aria-label="Lo que construimos"
        className="animate-fade-in-up absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-3 px-4 pb-4 sm:gap-4 sm:pb-8"
        style={fade('0.6s')}
      >
        <p className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-md sm:px-3.5 sm:text-xs">
          Lo que construimos para tu negocio
        </p>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:gap-x-12 md:gap-x-16">
          {services.map((s) => (
            <li
              key={s.title}
              title={s.text}
              className="text-xl tracking-tight text-white italic sm:text-3xl md:text-[34px]"
              style={{ fontFamily: "'Instrument Serif', serif", filter: 'drop-shadow(0 2px 12px rgba(31,26,36,0.35))' }}
            >
              {s.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
