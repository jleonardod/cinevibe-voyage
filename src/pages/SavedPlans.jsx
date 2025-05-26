import React, { useState, useEffect, use } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function SavedPlans() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem("savedPlans")) || []
    setPlans(savedPlans)
  }, [])
  return(
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-8 text-red-600">Tus Planes Guardados</h1>
      {plans.length === 0 ? (
        <p>No tienes planes guardados, Crea uno en la pagina principal</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold">{plan.mood} - {plan.genre}</h2>
              <p className="text-sm text-gray-400">Creado: {new Date(plan.createdAt).toLocaleString()}</p>
              <Link
                to={`/plan/${plan.id}`}
                className="text-red-600 hover:underline mt-2 block"
              >
                Ver detalles
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SavedPlans
