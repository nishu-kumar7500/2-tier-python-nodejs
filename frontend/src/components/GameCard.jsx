import React from 'react'

export default function GameCard({game}){
  return (
    <div className="p-6 rounded-2xl card-glass shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">{game.title}</h4>
          <div className="text-xs text-white/60">{game.genre}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-white/80">{game.players} players</div>
          <button className="mt-3 px-3 py-1 rounded-full border border-white/10 text-sm">Join</button>
        </div>
      </div>
      <div className="mt-4 h-40 rounded-lg overflow-hidden bg-gradient-to-br from-[#0f1724] to-[#020617] flex items-end p-4">
        <div>
          <div className="text-xs text-white/60">Progress</div>
          <div className="text-sm">Ranked • Season I</div>
        </div>
      </div>
    </div>
  )
}
