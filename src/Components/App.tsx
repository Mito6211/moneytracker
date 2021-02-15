import React, { useState, useEffect } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { defaultEntries } from "../constants";
import { getFromStorage, saveToStorage } from "../storage";
import MoneyDisplay from "./MoneyDisplay";
import EntryForm from "./EntryForm";
import EntryList from "./EntryList";
import EditEntry from "./EditEntry";

import "./App.scss";

import { Entry } from "../types";

const App: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>(
    getFromStorage("entries") || defaultEntries
  );
  const [startingAmount, setStartingAmount] = useState<number>(
    getFromStorage("startingAmount") || 0
  );

  useEffect(() => {
    saveToStorage("entries", entries);
    saveToStorage("startingAmount", startingAmount);
  }, [entries, startingAmount]);

  return (
    <div className="app">
      <MoneyDisplay entries={entries} startingAmount={startingAmount} />
      <Switch>
        <Route exact path="/">
          <EntryForm
            setEntries={setEntries}
            setStartingAmount={setStartingAmount}
          />
          <EntryList entries={entries} setEntries={setEntries} />
        </Route>
        <Route path="/edit/:id">
          <EditEntry />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
