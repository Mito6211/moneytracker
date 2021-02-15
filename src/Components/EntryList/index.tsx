import React from "react";
import { MdClose } from "react-icons/md";
import { abbreviateMoney } from "../../utils";

import "./index.scss";

import { Entry } from "../../types";

type Props = {
  entries: Entry[];
  setEntries: React.Dispatch<any>;
};

const MoneyDisplay: React.FC<Props> = ({ entries, setEntries }) => {
  const removeEntry = (id: string) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <div key={entry.id}>
          <MdClose className="remove" onClick={() => removeEntry(entry.id)} />
          {entry.name}
          &nbsp;-&nbsp;
          <span className={entry.isIncome ? "green" : "red"}>
            ${abbreviateMoney(entry.amount)}
          </span>
          &nbsp;
          <span className="small">({entry.type})</span>
        </div>
      ))}
    </div>
  );
};

export default MoneyDisplay;
