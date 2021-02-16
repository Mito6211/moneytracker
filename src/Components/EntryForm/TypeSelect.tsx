import React from "react";
import { EntryFormProps } from "../../types";

const TypeSelect: React.FC<EntryFormProps> = ({ value, handleChange }) => {
  return (
    <select
      className="form-entry-select"
      name="entryType"
      value={value.toString()}
      onChange={handleChange}
    >
      <option value="Cash">Cash</option>
      <option value="Bank Account">Bank Account</option>
      <option value="Crypto">Crypto</option>
      <option value="Gift Card">Gift Card</option>
    </select>
  );
};

export default TypeSelect;
