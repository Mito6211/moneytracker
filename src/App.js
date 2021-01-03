import React, { useState } from "react";
import Arrow from "./Arrow";

import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        entryName: "",
        entryType: "cash",
        entryIncomeOrExpense: "income",
        entryAmount: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    React.useEffect(() => {
        console.log(formData);
    }, [formData]);

    const [entries, setEntries] = useState([
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
    ]);

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
            <form className="form-entry">
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
                        <option value="giftCard">Gift Card</option>
                    </select>
                    <select
                        className="form-entry-select"
                        name="entryIncomeOrExpense"
                        value={formData.entryIncomeOrExpense}
                        onChange={handleChange}
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
}

export default App;
