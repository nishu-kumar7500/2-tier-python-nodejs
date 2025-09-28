import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div>
          <div className="font-semibold">Arcadia</div>
          <div className="text-xs text-white/60">© {new Date().getFullYear()} Arcadia Inc.</div>
        </div>
        <div className="text-xs text-white/60">Built with ❤️ for gamers</div>
      </div>
    </footer>
  )
}
