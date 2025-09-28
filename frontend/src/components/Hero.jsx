import React from 'react'

export default function Hero(){
  return (
    <section className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 flex gap-8 items-center">
        <div className="w-2/3">
          <h2 className="text-5xl font-extrabold glow">Enter the Arena</h2>
          <p className="mt-4 text-lg text-white/70">Compete, collect, and climb the leaderboards. Beautiful UI, lightning-fast matchmaking, and monthly tournaments.</p>
          <div className="mt-8 flex gap-3">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent font-semibold shadow-xl">Play Now</button>
            <button className="px-6 py-3 rounded-full border border-white/10">Learn More</button>
          </div>
        </div>
        <div className="w-1/3">
          <div className="card-glass p-6 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-semibold">Live Match</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/2">
                <div className="text-sm text-white/60">VS</div>
                <div className="font-bold text-lg">Team Nova</div>
              </div>
              <div className="p-3 rounded-lg bg-white/2">
                <div className="text-sm text-white/60">VS</div>
                <div className="font-bold text-lg">Shadow Unit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-40 top-10 opacity-20">
        <svg width="420" height="420" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#7c3aed"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs><circle cx="100" cy="100" r="90" fill="url(#g)"/></svg>
      </div>
    </section>
  )
}
