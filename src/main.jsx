import React, { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Heart, Mail, Sparkles } from 'lucide-react'
import './styles.css'

const letter = `প্রিয় Sifty,

আজ চিঠি দিবস, তাই ভাবলাম তোমাকে ছোট্ট একটা চিঠি লিখি।

সব কথা সবসময় বলা হয় না
আবার কিছু মানুষকে নিয়ে আলাদা করে কিছু লিখতেও ইচ্ছে করে।

তুমি এমন একজন মানুষ
যার সাথে কথা বললে ভালো লাগে
হাসাহাসি করতে ভালো লাগে
আর ছোট ছোট মুহূর্তগুলোও somehow একটু বেশি memorable হয়ে যায়।

জীবনে অনেক মানুষ আসে এবং চলে যায়
কিন্তু কিছু মানুষ কোনো না কোনোভাবে
নিজেদের জন্য একটা সুন্দর জায়গা তৈরি করে ফেলে।

তুমি তেমনই একজন।

তাই আজকের এই ছোট্ট চিঠিটা
শুধু তোমার জন্য।

ভালো থেকো
হাসিখুশি থেকো
আর নিজের মতোই থেকো।

— Sajeeb`

function Envelope({ open }) {
  return <motion.div className="envelope-wrap" animate={open ? { y: -4 } : { y: [0, -7, 0] }} transition={{ duration: open ? .35 : 4, repeat: open ? 0 : Infinity, ease: 'easeInOut' }}>
    <div className={`envelope ${open ? 'is-open' : ''}`}>
      <div className="letter-peek"><span>for Sifty</span><Heart size={13} fill="currentColor" /></div>
      <div className="envelope-back" />
      <div className="envelope-front" />
      <div className="envelope-flap" />
      <div className="seal"><Heart size={15} fill="currentColor" /></div>
    </div>
  </motion.div>
}

function App() {
  const [opened, setOpened] = useState(false)
  const letterRef = useRef(null)
  const openLetter = () => {
    setOpened(true)
    setTimeout(() => letterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 420)
  }
  return <main>
    <div className="grain" />
    <div className="orb orb-one" /><div className="orb orb-two" />
    <div className="particles" aria-hidden="true">{Array.from({ length: 9 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div>

    <nav><span className="nav-mark">S<span>✦</span>S</span><span className="nav-note">Chithi Dibosh <em>2026</em></span></nav>

    <section className="hero">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><span /> A small note, especially for you <span /></motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .12 }}>A Little Letter<br />for <i>Sifty</i></motion.h1>
      <motion.p className="subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .3 }}>Because some things are better<br className="mobile-break" /> written than said.</motion.p>
      <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .25 }}><Envelope open={opened} /></motion.div>
      <motion.button className="open-button" onClick={openLetter} whileHover={{ scale: 1.035, y: -2 }} whileTap={{ scale: .98 }}><Mail size={17} /> {opened ? 'A Letter Awaits' : 'Open the Letter'} <span>✉</span></motion.button>
      <div className="scroll-cue"><span>scroll gently</span><ArrowDown size={14} /></div>
    </section>

    <section className="letter-section" ref={letterRef}>
      <div className="section-rule"><span /><span>✦</span><span /></div>
      <AnimatePresence>
        {opened ? <motion.article className="paper" initial={{ opacity: 0, y: 42, rotateX: -8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}>
          <div className="paper-top"><span>চিঠি দিবস</span><span>✦</span><span>For Sifty</span></div>
          <div className="paper-content">{letter.split('\n').map((line, i) => <motion.p key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 + i * .07, duration: .45 }}>{line || '\u00A0'}</motion.p>)}</div>
          <div className="paper-flourish">❦</div>
        </motion.article> : <div className="unopened-note"><Mail size={17} /><span>There’s a little note waiting for you.</span></div>}
      </AnimatePresence>
    </section>

    <section className="closing">
      <Sparkles size={18} className="sparkle" />
      <h2>Some people make ordinary moments<br />a little more special. <span>✦</span></h2>
      <p>For <strong>Sifty Sarowar</strong></p>
      <button className="read-again" onClick={() => letterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Read Again <ArrowDown size={14} /></button>
    </section>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
