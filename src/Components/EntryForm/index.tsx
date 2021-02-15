import React, { useState } from "react";
import { nanoid } from "nanoid";
import Modal from "../Modal";
import { defaultFormData } from "../../constants";

import "./index.css";

import { EntryFormData } from "../../types";

type Props = {
  setEntries: React.Dispatch<any>;
  setStartingAmount: React.Dispatch<number>;
};

const EntryForm: React.FC<Props> = ({ setEntries, setStartingAmount }) => {
  const [formData, setFormData] = useState<EntryFormData>(defaultFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    if (name === "entryIsIncome") {
      value = value === "true" ? true : false;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    for (const item in formData) {
      if (item === "") return;
    }
    setEntries((prev: any) => [
      ...prev,
      {
        id: nanoid(),
        name: formData.entryName,
        amount: parseFloat(formData.entryAmount),
        type: formData.entryType,
        isIncome: formData.entryIsIncome,
        dateAdded: new Date().getTime(),
      },
    ]);
    setFormData(defaultFormData);
  };

  return (
    <>
      <form className="form-entry" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="form-entry-name"
            name="entryName"
            value={formData.entryName}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="$"
            className="form-entry-amount"
            name="entryAmount"
            value={formData.entryAmount}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            className="form-entry-select"
            name="entryType"
            value={formData.entryType}
            onChange={handleChange}
          >
            <option value="Cash">Cash</option>
            <option value="Bank Account">Bank Account</option>
            <option value="Crypto">Crypto</option>
            <option value="Gift Card">Gift Card</option>
          </select>
          <select
            className="form-entry-select"
            name="entryIsIncome"
            value={formData.entryIsIncome.toString()}
            onChange={handleChange}
          >
            <option value="true">Income</option>
            <option value="false">Expense</option>
          </select>
          <button>Add</button>
        </div>
      </form>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Set Starting Amount
      </button>
      <Modal
        open={isModalOpen}
        close={() => {
          setIsModalOpen(false);
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>Starting Amount</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              try {
                setStartingAmount(Number(formData.startingAmount));
              } catch {
                console.log("Please enter valid number");
              }
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            $
            <input
              type="number"
              name="startingAmount"
              value={formData.startingAmount}
              onChange={handleChange}
              style={{ width: "100px" }}
            />
            <button>Add</button>
          </form>
        </span>
      </Modal>
    </>
  );
};

export default EntryForm;
