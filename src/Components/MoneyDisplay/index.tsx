import React from "react";
import Arrow from "./Arrow";

import { Entries } from "../../types";
import "./index.scss";

type Props = {
  entries: Entries;
};

const MoneyDisplay: React.FC<Props> = ({ entries }) => {
  return (
    <div className="top-money-display">
      <span className="income stroke-text">
        {"$" +
          entries.reduce(
            (acc, cur) => acc + (cur.isIncome ? cur.amount : 0),
            0
          )}
      </span>
      <Arrow />
      <span className="total stroke-text">$15000</span>
      <Arrow />
      <span className="expenses stroke-text">
        {"$" +
          entries.reduce(
            (acc, cur) => acc + (cur.isIncome ? 0 : cur.amount),
            0
          )}
      </span>
    </div>
  );
};

export default MoneyDisplay;
