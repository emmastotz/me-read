import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing/index";
import Generator from "./pages/Generator/index";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Generator" component={Generator} />
      </div>
    </Router>
  );
}

export default App;
