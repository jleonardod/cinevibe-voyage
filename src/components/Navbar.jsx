import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="">
      <Link to="/">Cinevibe-Voyage</Link>
      <Link to="/">Home</Link>
      <Link to="/saved">Saved Plans</Link>
    </nav>
  )
}

export default Navbar
