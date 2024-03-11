// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



import HomePage from "./views/pages/homePage";
import AboutUs from "./views/pages/aboutUs";
function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
  );
}

export default App;
