import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaUser, FaCalendarAlt } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <form className="search-form">
        <div className="input-group">
          <FaPlaneDeparture className="icon" />
          <input type="text" placeholder="From" />
        </div>

        <div className="input-group">
          <FaPlaneArrival className="icon" />
          <input type="text" placeholder="To" />
        </div>

        <div className="input-group">
          <FaCalendarAlt className="icon" />
          <input type="date" />
        </div>

        <div className="input-group">
          <FaCalendarAlt className="icon" />
          <input type="date" />
        </div>

        <div className="input-group">
          <FaUser className="icon" />
          <input type="number" placeholder="Passengers" min="1" />
        </div>

        <button type="submit" className="search-btn">Search Flights</button>
      </form>
    </div>
  );
};

export default SearchBar;
