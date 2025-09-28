import React from 'react'

export default function Header(){
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b border-white/5 card-glass">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 3v18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h1 className="text-2xl font-semibold">Arcadia</h1>
        <span className="ml-2 text-sm text-white/60">Premium Gaming Portal</span>
      </div>

      <nav className="flex items-center gap-4">
        <a className="px-4 py-2 rounded-lg hover:bg-white/4">Games</a>
        <a className="px-4 py-2 rounded-lg hover:bg-white/4">Tournaments</a>
        <a className="px-4 py-2 rounded-lg hover:bg-white/4">Store</a>
        <button className="ml-2 bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-2xl font-medium shadow-lg">Connect</button>
      </nav>
    </header>
  )
}
