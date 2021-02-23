
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../App.css";


function Button() {
  return (
    <>
    <Router>
      <button href="https://github.com/brianneewell1" variant="primary" size="lg" block>
        View All
        </button>
      </Router>
    </>
  );
}

export default Button;

