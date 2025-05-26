import { motion } from "framer-motion"
import MovieCard from "./MovieCard"

function PlanCard({ plan }) {
  const sharePlan = () => {
    const shareText = `¡Mira mi plan de noche de cine! Estado de animo: ${plan.mood}, Genero: ${plan.genre}, Peliculas: ${plan.movies
      .map((m) => m.title)
      .join(', ')}. Comida: ${plan.food}. Actividad: ${plan.activity}. Crea el tuyo ahora`
    navigator.clipboard.writeText(shareText)
    alert('Plan copiado al portapapeles. ¡Compártelo!');
  }

  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto"
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <h2 className="text-2xl font-bold mb-4 text-red-600">Tu noche de Cine: {plan.mood}</h2>
      <p className="mb-4">
        <strong>Género:</strong> {plan.genre}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {plan.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <p className="mb-2"><strong>Comida Sugerida: </strong>{plan.food}</p>
      <p className="mb-4"><strong>Actividad: </strong>{plan.activity}</p>
      <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded" onClick={sharePlan}>
        Compartir Plan
      </button>
    </motion.div>
  )
}

export default PlanCard
