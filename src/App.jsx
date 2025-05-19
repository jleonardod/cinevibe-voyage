import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
 return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
      </div>
    </Router>
  )
}

export default App
