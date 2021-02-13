import React, { useState } from "react";
import { defaultEntries } from "./constants";
import MoneyDisplay from "./MoneyDisplay";
import EntryForm from "./EntryForm";

import "./App.css";

function App() {
  const [entries, setEntries] = useState(defaultEntries);

  return (
    <div className="app">
      <MoneyDisplay entries={entries} />
      <EntryForm setEntries={setEntries} />
    </div>
  );
}

export default App;
