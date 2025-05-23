import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Plan from "./pages/Plan"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
 return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan/:id" element={<Plan />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
