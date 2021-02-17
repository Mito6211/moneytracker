import React from "react";
import { EntryFormProps } from "../../types";

const IsIncomeSelect: React.FC<EntryFormProps> = ({
  value,
  handleChange,
  style = {},
}) => {
  return (
    <select
      className="form-entry-select"
      name="entryIsIncome"
      value={value.toString()}
      onChange={handleChange}
      style={style}
    >
      <option value="true">Income</option>
      <option value="false">Expense</option>
    </select>
  );
};

export default IsIncomeSelect;
