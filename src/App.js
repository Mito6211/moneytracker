import React from "react";
import Arrow from "./Arrow";

import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="top-money-display">
                <span className="income stroke-text">$3100</span>
                <Arrow />
                <span className="total stroke-text">$123,456,789</span>
                <Arrow />
                <span className="expenses stroke-text">$1200</span>
            </div>
        </div>
    );
}

export default App;
