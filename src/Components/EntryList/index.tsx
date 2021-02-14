import React from "react";

import "./index.scss";

import { Entries } from "../../types";

type Props = {
  entries: Entries;
};

const MoneyDisplay: React.FC<Props> = ({ entries }) => {
  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <div key={entry.id}>
          {entry.name} -{" "}
          <span className={entry.isIncome ? "green" : "red"}>
            ${entry.amount} <span className="small">({entry.type})</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default MoneyDisplay;
