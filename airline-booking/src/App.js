import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './component/login'; // Ensure the correct path
import Footer from './component/Footer'; // Correct casing // Ensure the correct path
import './component/register';
function App() {
  return (
    <Router>
      {/* Header with website name */}

      {/* Navigation Bar */}
      <nav>
      <header className="site-header">
        <h1>Peace Air Reservation</h1>
      </header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/flights">Flights</Link></li>
          <li><Link to="/my-booking">My Booking</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<div className="home-page-content">Your Journey Begins with Peace with ease.</div>} />
        <Route path="/flights" element={<div className="flights-page">Flights</div>} />
        <Route path="/my-booking" element={<div className="booking-page">My Booking</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

export default App;
