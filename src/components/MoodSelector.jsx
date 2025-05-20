import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function MoodSelector({ onPlanGenerated }) {
  const [mood, setMood] = useState("")
  const [genre, setGenre] = useState("")

  const moods = ['Aventurero', 'Nostálgico', 'Romántico', 'Aterrorizado']
  const genres = [
    {name: 'Accion', id: 28},
    {name: 'Comedia', id: 35},
    {name: 'Drama', id: 18},
    {name: 'Terror', id: 27}
  ]


  return(
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Crea tu noche de cine</h2>
      <div className="mb-4">
        <label className="block mb-2">¿Cómo te sientes?</label>
        <select value={mood} onChange={(e) => setMood(e.target.value)} className="bg-gray-700 p-2 rounded w-full text-white">
          <option value="">Selecciona un estado de animo</option>
          {moods.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Género preferido</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)} className="bg-gray-700 p-2 rounded w-full text-white">
          <option value="">Seleccione un género</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>
      </div>
      <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded w-full cursor-pointer">Generar Plan</button>
    </div>
  )
}

export default MoodSelector
