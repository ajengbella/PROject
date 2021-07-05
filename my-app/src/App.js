import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../src/assets/scss/style.scss";
import landingPage from "../src/pages/LandingPage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={landingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
