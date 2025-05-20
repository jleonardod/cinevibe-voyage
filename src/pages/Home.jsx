import React from "react"
import MoodSelector from "../components/MoodSelector"

function Home() {
  return(
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">CineVibe Voyage</h1>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Crea una noche de cine perfecta con CineVibe Voyage. Elige tu estado de ánimo y género y te recomendaremos películas, comida y una actividad para disfrutar.
      </p>
      <MoodSelector onPlanGenerated={() => {}} />
    </div>
  )
}

export default Home
