// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import HomePage from "./views/pages/HomePage";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/"  element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
