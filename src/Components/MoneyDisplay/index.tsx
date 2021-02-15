import React from "react";
import Arrow from "./Arrow";
import { abbreviateMoney } from "../../utils";
import { Entry } from "../../types";
import "./index.scss";

type Props = {
  entries: Entry[];
  startingAmount?: number;
};

const MoneyDisplay: React.FC<Props> = ({ entries, startingAmount = 0 }) => {
  const income: number = entries.reduce(
    (acc, cur) => acc + (cur.isIncome ? cur.amount : 0),
    0
  );
  const expenses: number = entries.reduce(
    (acc, cur) => acc + (cur.isIncome ? 0 : cur.amount),
    0
  );
  const total: number = startingAmount + (income - expenses);

  return (
    <div className="top-money-display">
      <span className="income stroke-text">
        {"$" + abbreviateMoney(income)}
      </span>
      <Arrow />
      <span className="total stroke-text">
        {(total < 0 ? "-$" : "$") + abbreviateMoney(Math.abs(total))}
      </span>
      <Arrow />
      <span className="expenses stroke-text">
        {"$" + abbreviateMoney(expenses)}
      </span>
    </div>
  );
};

export default MoneyDisplay;
