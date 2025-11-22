import { motion } from 'framer-motion'
import { Leaf, Zap, RefreshCcw, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const containerVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const cardHover = {
  y: -8,
  transition: { type: 'spring', stiffness: 300, damping: 22 },
}

const Section = ({ children, className = '' }) => (
  <section className={`relative w-full ${className}`}>{children}</section>
)

function App() {
  return (
    <div className="min-h-screen text-white bg-[radial-gradient(1000px_600px_at_70%_-10%,#0b5258_0%,transparent_60%),linear-gradient(to_bottom,#0a3a3f_0%,#052e33_35%,#052e33_100%)]">
      {/* Subtle grain */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22%3E%3Cpath fill=%22%23ffffff%22 d=%22M0 32h32V0H0z%22 opacity=%220%22/%3E%3C/svg%3E")' }} />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-sm/0">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between rounded-full/0">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f474c] ring-1 ring-white/10">
                <Leaf size={16} className="text-[#d4f936]" />
              </div>
              <span className="font-extrabold tracking-wide">POWERIS</span>
            </div>
            <div className="hidden gap-8 text-sm text-white/80 md:flex">
              {['About', 'Apps', 'Plans', 'FAQ', 'Contacts'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <Section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariant}
            custom={0}
            className="relative z-10"
          >
            <motion.h1
              variants={containerVariant}
              custom={0.1}
              className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-[52px] lg:leading-[1.1]"
            >
              Start energy revolution from your community
            </motion.h1>
            <motion.p
              variants={containerVariant}
              custom={0.2}
              className="mt-4 max-w-xl text-[#a0aec0]"
            >
              Sustainable technologies have never been so affordable. Produce and exchange energy maximizing the power of renewable sources.
            </motion.p>
            <motion.div variants={containerVariant} custom={0.3} className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-transform duration-300 hover:translate-y-[-2px]"
              >
                Contact us
              </a>
            </motion.div>
          </motion.div>

          {/* Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div
              role="img"
              aria-label="Vector illustration of wind turbines and eco village"
              className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-teal-300/30 via-teal-500/20 to-[#052e33] p-0 ring-1 ring-white/10 md:h-[420px]"
            >
              {/* Hills */}
              <div className="absolute -bottom-6 left-[-10%] h-44 w-[70%] rounded-[50%] bg-gradient-to-b from-emerald-500/40 to-emerald-700/40 blur-[1px]" />
              <div className="absolute -bottom-10 right-[-10%] h-48 w-[80%] rounded-[50%] bg-gradient-to-b from-teal-400/40 to-teal-700/40" />
              {/* Sun */}
              <div className="absolute left-8 top-8 h-10 w-10 rounded-full bg-yellow-200/70 blur-[1px]" />
              {/* Turbines */}
              {[0, 1, 2].map((i) => (
                <div key={i} className={`absolute bottom-16 ${i === 0 ? 'left-16' : i === 1 ? 'left-36' : 'left-56'}`}>
                  <div className="h-24 w-[2px] bg-white/80" />
                  <div className="relative -top-6 h-0 w-0">
                    <div className="absolute -left-3 top-0 h-2 w-6 rotate-45 bg-white/80" />
                    <div className="absolute left-0 top-0 h-2 w-6 -rotate-45 bg-white/80" />
                    <div className="absolute -left-1 top-2 h-2 w-6 rotate-90 bg-white/80" />
                  </div>
                </div>
              ))}
              {/* Houses */}
              {[0, 1, 2].map((i) => (
                <div key={i} className={`absolute bottom-6 ${i === 0 ? 'left-10' : i === 1 ? 'left-40' : 'left-72'}`}>
                  <div className="h-10 w-16 rounded bg-emerald-700/70 ring-1 ring-white/10" />
                  <div className="-mt-2 h-3 w-12 bg-sky-300/60" />
                </div>
              ))}
              {/* Skyline */}
              <div className="absolute bottom-24 right-6 flex items-end gap-2 opacity-60">
                <div className="h-20 w-6 bg-teal-200/30" />
                <div className="h-16 w-5 bg-teal-200/30" />
                <div className="h-24 w-7 bg-teal-200/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* What is Poweris? */}
      <Section id="about" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-start justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold md:text-4xl"
            >
              What is Poweris?
            </motion.h2>

            <div className="flex gap-3">
              <button className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center ring-1 ring-white/10">
                <ChevronLeft size={18} />
              </button>
              <button className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center ring-1 ring-white/10">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl text-[#a0aec0]"
          >
            Poweris is a revolutionary platform of ecological energy production and management. It is based on a decentralized system of power exchange which is self-monitored and adapted for autonomous community models. This way communities can exchange the produced energy most efficiently and accelerate new models of energy management.
          </motion.p>
        </div>
      </Section>

      {/* Features & Keypoints */}
      <Section className="pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-4">
          {/* Cards */}
          <FeatureCard
            title="Energy Decentralization"
            Icon={Zap}
            description="Distributed generation empowering communities."
            index={0}
          />
          <FeatureCard
            title="Eco-Friendly Sustainability"
            Icon={Leaf}
            description="Optimized for low-impact, renewable-first models."
            index={1}
            active
          />
          <FeatureCard
            title="Power Exchange"
            Icon={RefreshCcw}
            description="Smart routing to share and trade surplus energy."
            index={2}
          />

          {/* Keypoints */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div>
              <h3 className="text-xl font-semibold">Platform Keypoints</h3>
              <ul className="mt-4 space-y-3 text-[#c7d1dd]">
                {[
                  'Independent and digitized smart marketplace',
                  'New economic model',
                  'Build local ecosystems',
                  'Reduce and preserving fossil fuels',
                  'Reallocating energy surpluses',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#d4f936] shadow-[0_0_8px_#d4f936]" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 inline-flex w-max items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors">
              <Play size={16} />
              Watch video
            </button>
          </motion.aside>
        </div>
      </Section>

      {/* Footer space */}
      <div className="h-12" />
    </div>
  )
}

function FeatureCard({ title, description, Icon, index, active = false }) {
  const neon = '#d4f936'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <motion.div
        whileHover={cardHover}
        className={`group relative h-full rounded-2xl border p-6 transition-colors ${
          active
            ? 'border-white/15 bg-teal-600/10'
            : 'border-white/10 bg-white/5 hover:bg-white/10'
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`grid h-12 w-12 place-items-center rounded-full ring-1 transition-all duration-300 ${
              active
                ? 'bg-[var(--neon)] text-black shadow-[0_0_20px_var(--neon)] ring-transparent'
                : 'bg-[#0f474c] text-white ring-white/10 group-hover:bg-[var(--neon)] group-hover:text-black group-hover:shadow-[0_0_20px_var(--neon)] group-hover:ring-transparent'
            }`}
            style={{ ['--neon'] : neon }}
          >
            <Icon size={20} />
          </div>
          <div>
            <h3 className={`text-lg font-semibold transition-colors ${active ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>{title}</h3>
            <p className={`mt-1 text-sm transition-colors ${active ? 'text-[#e6eef7]' : 'text-[#a0aec0] group-hover:text-[#dbe6f3]'}`}>{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default App
