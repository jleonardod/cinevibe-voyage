import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PlanCard from "../components/PlanCard"

function Plan() {
  const { id } = useParams()
  const [plan, setPlan] = useState(null)

  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem('savedPlans') || '[]')
    const foundPlan = savedPlans.find((p) => p.id === id)
    setPlan(foundPlan)
  },[id])

  if (!plan) return <div className="text-center p-4">Plan no encontrado</div>
  return(
    <div className="container mx-auto p-4 pt-20">
      <PlanCard plan={plan} />
    </div>
  )
}

export default Plan
