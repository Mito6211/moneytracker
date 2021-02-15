import React from "react";
import { useParams } from "react-router-dom";
import { Entry } from "../../types";

import { abbreviateMoney } from "../../utils";

type Props = {
  entries: Entry[];
};
const EditEntry: React.FC<Props> = ({ entries }) => {
  const { id } = useParams<{ id: string }>();
  const selectedEntry = entries.find((entry) => entry.id === id);
  console.log(selectedEntry);
  return (
    <div key={selectedEntry?.id}>
      <span>{selectedEntry?.name}</span>
      &nbsp;-&nbsp;
      <span className={selectedEntry?.isIncome ? "green" : "red"}>
        ${abbreviateMoney(selectedEntry!.amount)}
      </span>
      &nbsp;
      <span className="small">({selectedEntry?.type})</span>
    </div>
  );
};

export default EditEntry;
