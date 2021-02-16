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
  setEntries: React.Dispatch<any>;
};
const EditEntry: React.FC<Props> = ({ entries, setEntries }) => {
  const { id } = useParams<{ id: string }>();

  const selectedEntryIndex = entries.findIndex((entry) => entry.id === id);
  const selectedEntry = entries[selectedEntryIndex];

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

  const handleSave = () => {
    const newEntries = [...entries];
    newEntries[selectedEntryIndex] = {
      ...newEntries[selectedEntryIndex],
      name: entryData.entryName,
      amount: Number(entryData.entryAmount),
      type: entryData.entryType,
      isIncome: entryData.entryIsIncome,
    };
    setEntries(newEntries);
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
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default EditEntry;
