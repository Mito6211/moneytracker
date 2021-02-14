import React from "react";
import Arrow from "../Arrow";

import "./index.css";

type Props = {
  entries: {
    id: string;
    name: string;
    amount: number;
    type: string;
    isIncome: boolean;
  }[];
};

const MoneyDisplay: React.FC<Props> = ({ entries }: Props) => {
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
