import React, { useState, useEffect } from "react";
import { defaultEntries } from "../constants";
import { getFromStorage, saveToStorage } from "../storage";
import MoneyDisplay from "./MoneyDisplay";
import EntryForm from "./EntryForm";

import "./App.css";

import { Entries } from "../types";

const App: React.FC = () => {
  const [entries, setEntries] = useState<Entries>(
    getFromStorage("entries") || defaultEntries
  );

  useEffect(() => {
    saveToStorage("entries", entries);
  }, [entries]);

  return (
    <div className="app">
      <MoneyDisplay entries={entries} />
      <EntryForm setEntries={setEntries} />
    </div>
  );
};

export default App;
