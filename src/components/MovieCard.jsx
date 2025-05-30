import React from "react"
import { motion } from "framer-motion" 

function MovieCard({ movie }) {
  return(
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded mb-4"
      />
      <h3 className="text-lg font-semibold">{movie.title}</h3>
      <p className="text-sm text-gray-400">{movie.release_date}</p>
      <p className="text-sm mt-2 line-clamp-3">{movie.overview}</p>

    </motion.div>
  )
}

export default MovieCard
