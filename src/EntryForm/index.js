import React, { useState } from "react";
import { nanoid } from "nanoid";
import { defaultFormData } from "../constants";

import "./index.css";

export default function EntryForm({ setEntries }) {
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "entryIsIncome") {
      value = value === "true" ? true : false;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const item in formData) {
      if (formData[item] === "") return;
    }
    setEntries((prev) => [
      ...prev,
      {
        id: nanoid(),
        name: formData.entryName,
        amount: parseFloat(formData.entryAmount),
        type: formData.entryType,
        isIncome: formData.entryIsIncome,
      },
    ]);
    setFormData(defaultFormData);
  };
  return (
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
          <option value="cash">Cash</option>
          <option value="bankAccount">Bank Account</option>
          <option value="crypto">Crypto</option>
          <option value="giftCard">Gift Card</option>
        </select>
        <select
          className="form-entry-select"
          name="entryIsIncome"
          value={formData.entryIsIncome}
          onChange={handleChange}
        >
          <option value={true}>Income</option>
          <option value={false}>Expense</option>
        </select>
        <button>Add</button>
      </div>
    </form>
  );
}