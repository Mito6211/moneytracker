import React from "react";

import "./index.scss";

import { Entry } from "../../types";

type Props = {
  entries: Entry[];
};

const MoneyDisplay: React.FC<Props> = ({ entries }) => {
  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <div key={entry.id}>
          {entry.name} -{" "}
          <span className={entry.isIncome ? "green" : "red"}>
            ${entry.amount}
          </span>{" "}
          <span className="small">({entry.type})</span>
        </div>
      ))}
    </div>
  );
};

export default MoneyDisplay;
