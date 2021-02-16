import React from "react";
import { EntryFormProps } from "../../types";

const IsIncomeSelect: React.FC<EntryFormProps> = ({ value, handleChange }) => {
  return (
    <select
      className="form-entry-select"
      name="entryIsIncome"
      value={value.toString()}
      onChange={handleChange}
    >
      <option value="true">Income</option>
      <option value="false">Expense</option>
    </select>
  );
};

export default IsIncomeSelect;
