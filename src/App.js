import React, { useState } from "react";
import Arrow from "./Arrow";

import "./App.css";

const defaultFormData = {
    entryName: "",
    entryType: "cash",
    entryIsIncome: true,
    entryAmount: "",
};

const defaultEntries = [
    {
        id: 1,
        name: "Mortgage Payment",
        amount: 2500,
        type: "bankAccount",
        isIncome: false,
    },
    {
        id: 2,
        name: "Paycheck",
        amount: 3400,
        type: "bankAccount",
        isIncome: true,
    },
    {
        id: 3,
        name: "Groceries",
        amount: 150,
        type: "cash",
        isIncome: false,
    },
    {
        id: 4,
        name: "Sold Phone",
        amount: 500,
        type: "cash",
        isIncome: true,
    },
];

function App() {
    const [entries, setEntries] = useState(defaultEntries);
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
                id: 5,
                name: formData.entryName,
                amount: parseFloat(formData.entryAmount),
                type: formData.entryType,
                isIncome: formData.entryIsIncome,
            },
        ]);
        setFormData(defaultFormData);
    };

    return (
        <div className="app">
            <div className="top-money-display">
                <span className="income stroke-text">
                    {"$" +
                        entries.reduce(
                            (acc, cur) => acc + (cur.isIncome ? cur.amount : 0),
                            0
                        )}
                </span>
                <Arrow />
                <span className="total stroke-text">$15000</span>
                <Arrow />
                <span className="expenses stroke-text">
                    {"$" +
                        entries.reduce(
                            (acc, cur) => acc + (cur.isIncome ? 0 : cur.amount),
                            0
                        )}
                </span>
            </div>
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
        </div>
    );
}

export default App;
