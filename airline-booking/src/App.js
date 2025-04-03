import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './component/login'; // Ensure the correct path
import Footer from './component/Footer'; // Correct casing // Ensure the correct path
import './component/register';
import Register from './component/register'; // Ensure the correct path
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from './component/SearchBar'; // Ensure the correct path

function App() {
  return (
    <Router>
      {/* Header with website name */}

      {/* Navigation Bar */}
      <nav>
      <header className="site-header1">
        <h1 class="Heading">Peace Air Reservation</h1>
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
      <Route path="/" element={
          <div className="home-page-content">
            <h2>Your Journey Begins with Peace and Ease.</h2>
            <SearchBar />  
          </div>
        } />
        <Route path="/" element={<div className="home-page-content">Your Journey Begins with Peace with ease.</div>} />
        <Route path="/flights" element={<div className="flights-page">Flights</div>} />
        <Route path="/my-booking" element={<div className="booking-page">My Booking</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

export default App;
