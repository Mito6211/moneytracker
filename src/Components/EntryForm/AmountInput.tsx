import React from "react";
import { EntryFormProps } from "../../types";

const AmountInput: React.FC<EntryFormProps> = ({
  value,
  handleChange,
  style = {},
}) => {
  return (
    <input
      type="number"
      placeholder="$"
      className="form-entry-amount"
      name="entryAmount"
      value={value.toString()}
      onChange={handleChange}
      style={style}
    />
  );
};

export default AmountInput;
