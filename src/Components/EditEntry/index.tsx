import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Entry, EntryFormData } from "../../types";

import { abbreviateMoney } from "../../utils";
import { defaultFormData } from "../../constants";

import TypeSelect from "../EntryForm/TypeSelect";
import IsIncomeSelect from "../EntryForm/IsIncomeSelect";
import NameInput from "../EntryForm/NameInput";
import AmountInput from "../EntryForm/AmountInput";

type Props = {
  entries: Entry[];
  setEntries: React.Dispatch<Entry[]>;
};

const EditEntry: React.FC<Props> = ({ entries, setEntries }) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const selectedEntryIndex = entries.findIndex((entry) => entry.id === id);
  const error = selectedEntryIndex === -1;

  const selectedEntry = entries[selectedEntryIndex];

  const [entryData, setEntryData] = useState<EntryFormData>(
    error
      ? defaultFormData
      : {
          entryName: selectedEntry.name,
          entryType: selectedEntry.type,
          entryIsIncome: selectedEntry.isIncome,
          entryAmount: selectedEntry.amount.toString(),
        }
  );

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value: possibleValue } = e.target;
    let value: string | boolean = possibleValue;

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

    history.push("/");
  };

  return (
    <>
      {error ? (
        <div>Failed to get entry</div>
      ) : (
        <>
          <h2
            key={selectedEntry?.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>{selectedEntry.name}</span>
            &nbsp;-&nbsp;
            <span className={selectedEntry.isIncome ? "green" : "red"}>
              ${abbreviateMoney(selectedEntry.amount)}
            </span>
            &nbsp;
            <span className="small">({selectedEntry.type})</span>
          </h2>
          <NameInput value={entryData.entryName} handleChange={handleChange} />
          <AmountInput
            value={entryData.entryAmount}
            handleChange={handleChange}
          />
          <TypeSelect value={entryData.entryType} handleChange={handleChange} />
          <IsIncomeSelect
            value={entryData.entryIsIncome}
            handleChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </>
  );
};

export default EditEntry;
