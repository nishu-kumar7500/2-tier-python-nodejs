import React, {useEffect, useState} from 'react'
import GameCard from './GameCard'
import axios from 'axios'

export default function Dashboard(){
  const [games, setGames] = useState([])

  useEffect(() => {
    axios.get('/api/games').then(r => setGames(r.data)).catch(()=> {
      // demo fallback
      setGames([
        { id: 1, title: 'Nebula Racer', genre: 'Racing', players: 12 },
        { id: 2, title: 'Eclipse Front', genre: 'Shooter', players: 8 },
        { id: 3, title: 'Crystal Keep', genre: 'MMO', players: 120 }
      ])
    })
  }, [])

  return (
    <section className="py-12 grid grid-cols-1 gap-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Featured Games</h3>
        <div className="text-sm text-white/60">Curated for premium users</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {games.map(g => <GameCard key={g.id} game={g} />)}
      </div>
    </section>
  )
}
