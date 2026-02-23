import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Hotel Reservation</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}

export default Navbar