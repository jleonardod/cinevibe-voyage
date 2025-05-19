import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-600">
          Cinematic Journey
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/saved" className="hover:text-red-600">Saved Plans</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
