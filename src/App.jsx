import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Plan from "./pages/Plan"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SavedPlans from "./pages/SavedPlans"

function App() {
 return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan/:id" element={<Plan />} />
          <Route path="/saved" element={<SavedPlans />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
