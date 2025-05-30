import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function MoodSelector({ onPlanGenerated }) {
  const [mood, setMood] = useState("")
  const [genre, setGenre] = useState("")
  const navigate = useNavigate()
  const API_KEY = "3d90bc79c72171ca768bab8af9cc73ca"

  const moods = ['Aventurero', 'Nostálgico', 'Romántico', 'Aterrorizado']
  const genres = [
    {name: 'Accion', id: 28},
    {name: 'Comedia', id: 35},
    {name: 'Drama', id: 18},
    {name: 'Terror', id: 27}
  ]
  
  const foodSuggestions = {
    Aventurero: "Tacos y cerveza",
    Nostálgico: "Pizza y refresco",
    Romántico: "Vino y queso",
    Aterrorizado: "Palomitas y soda"
  }

  const activitySuggestions = {
    Aventurero: "Trivia de acción",
    Nostálgico: "Juego de recuerdos",
    Romántico: "Charla bajo las estrellas",
    Aterrorizado: "Cuentacuentos de terror"
  }

  const generatePlan = async () => {
    if(!mood || !genre) {
      alert("Por favor selecciona un estado de ánimo y un género.")
      return
    }
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}&sort_by=popularity.desc&language=es-ES`)
      const movies = response.data.results.slice(0, 3)
      const plan = {
        id: Date.now().toString(),
        mood,
        genre: genres.find((g) => g.id === parseInt(genre)).name,
        movies,
        food: foodSuggestions[mood],
        activity: activitySuggestions[mood],
        createdAt: new Date().toISOString()
      }
      //console.log("Hola mundo")
      const savedPlans = JSON.parse(localStorage.getItem("savedPlans")) || []
      savedPlans.push(plan)
      localStorage.setItem("savedPlans", JSON.stringify(savedPlans))

      onPlanGenerated(plan)
      navigate(`/plan/${plan.id}`)
    }catch (error) {
      console.error("Error generating plan:", error)
      alert("Error al generar el plan. Por favor intenta de nuevo.")
    }
  }

  return(
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Crea tu noche de cine</h2>
      <div className="mb-4">
        <label htmlFor="estado_animo" className="block mb-2 font-semibold">¿Cóm?</label>
        <select id="estado_animo" value={mood} onChange={(e) => setMood(e.target.value)} className="bg-gray-700 p-2 rounded w-full text-white">
          <option value="">Selecciona un estado de animo</option>
          {moods.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="genero" className="block mb-2 font-semibold">Género preferido</label>
        <select id="genero" value={genre} onChange={(e) => setGenre(e.target.value)} className="bg-gray-700 p-2 rounded w-full text-white">
          <option value="">Seleccione un género</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>
      </div>
      <button onClick={generatePlan} className="bg-red-600 hover:bg-red-700 text-white p-2 rounded w-full cursor-pointer">Generar Plan</button>
    </div>
  )
}

export default MoodSelector
