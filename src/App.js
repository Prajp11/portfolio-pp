import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import About from "./Components/About";
import Contact from "./Components/Contact"; // Import the Contact component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
