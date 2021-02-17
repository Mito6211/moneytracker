import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
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
        <div>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            {"<- Back"}
          </button>
          Failed to get entry
        </div>
      ) : (
        <>
          <h2
            key={selectedEntry?.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              {"<- Back"}
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {selectedEntry.name}
            </div>
            <button onClick={handleSave}>Save</button>
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>({selectedEntry.type})</span>
            <span className={selectedEntry.isIncome ? "green" : "red"}>
              ${abbreviateMoney(selectedEntry.amount)}
            </span>
            <span>{moment(selectedEntry.dateAdded).fromNow()}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "30px 0px",
            }}
          >
            <NameInput
              value={entryData.entryName}
              handleChange={handleChange}
              style={{ flex: 4 }}
            />
            <AmountInput
              value={entryData.entryAmount}
              handleChange={handleChange}
              style={{ flex: 2 }}
            />
            <TypeSelect
              value={entryData.entryType}
              handleChange={handleChange}
              style={{ flex: 1 }}
            />
            <IsIncomeSelect
              value={entryData.entryIsIncome}
              handleChange={handleChange}
              style={{ flex: 1 }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default EditEntry;
