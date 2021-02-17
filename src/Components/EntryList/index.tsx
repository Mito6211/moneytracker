import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import moment from "moment";
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
          <Link
            to={`/edit/${entry.id}`}
            style={{ all: "unset", color: "inherit", cursor: "pointer" }}
          >
            {entry.name}
          </Link>
          &nbsp;-&nbsp;
          <span className={entry.isIncome ? "green" : "red"}>
            ${abbreviateMoney(entry.amount)}
          </span>
          &nbsp;
          <span className="small">
            ({entry.type} - {moment(entry.dateAdded).fromNow()})
          </span>
        </div>
      ))}
    </div>
  );
};

export default MoneyDisplay;
