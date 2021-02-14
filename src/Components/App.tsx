import React, { useState, useEffect } from "react";
import { defaultEntries } from "../constants";
import { getFromStorage, saveToStorage } from "../storage";
import MoneyDisplay from "./MoneyDisplay";
import EntryForm from "./EntryForm";
import EntryList from "./EntryList";

import "./App.scss";

import { Entry } from "../types";

const App: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>(
    getFromStorage("entries") || defaultEntries
  );

  useEffect(() => {
    saveToStorage("entries", entries);
  }, [entries]);

  return (
    <div className="app">
      <MoneyDisplay entries={entries} startingAmount={500} />
      <EntryForm setEntries={setEntries} />
      <EntryList entries={entries} setEntries={setEntries} />
    </div>
  );
};

export default App;
