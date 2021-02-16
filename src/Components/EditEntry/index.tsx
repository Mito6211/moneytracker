import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Entry, EntryFormData } from "../../types";

import { abbreviateMoney } from "../../utils";

import TypeSelect from "../EntryForm/TypeSelect";
import IsIncomeSelect from "../EntryForm/IsIncomeSelect";
import NameInput from "../EntryForm/NameInput";
import AmountInput from "../EntryForm/AmountInput";

type Props = {
  entries: Entry[];
};
const EditEntry: React.FC<Props> = ({ entries }) => {
  const { id } = useParams<{ id: string }>();

  const selectedEntry = entries.find((entry) => entry.id === id);

  const [entryData, setEntryData] = useState<EntryFormData>({
    entryName: selectedEntry?.name!,
    entryType: selectedEntry?.type!,
    entryIsIncome: selectedEntry?.isIncome!,
    entryAmount: selectedEntry?.amount.toString()!,
  });

  if (!selectedEntry) return <div>Failed to get entry</div>;

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    if (name === "entryIsIncome") {
      value = value === "true" ? true : false;
    }

    setEntryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h2
        key={selectedEntry?.id}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>{selectedEntry?.name}</span>
        &nbsp;-&nbsp;
        <span className={selectedEntry?.isIncome ? "green" : "red"}>
          ${abbreviateMoney(selectedEntry!.amount)}
        </span>
        &nbsp;
        <span className="small">({selectedEntry?.type})</span>
      </h2>
      <NameInput value={entryData.entryName} handleChange={handleChange} />
      <AmountInput value={entryData.entryAmount} handleChange={handleChange} />
      <TypeSelect value={entryData.entryType} handleChange={handleChange} />
      <IsIncomeSelect
        value={entryData.entryIsIncome}
        handleChange={handleChange}
      />
      Date:{" "}
      <input
        type="text"
        placeholder={new Date(selectedEntry.dateAdded).toString()}
        // make this a date picker
      />
    </>
  );
};

export default EditEntry;
