import React from "react";
import { EntryFormProps } from "../../types";

const NameInput: React.FC<EntryFormProps> = ({
  value,
  handleChange,
  style = {},
}) => {
  return (
    <input
      type="text"
      placeholder="Name"
      className="form-entry-name"
      name="entryName"
      value={value.toString()}
      onChange={handleChange}
      style={style}
    />
  );
};

export default NameInput;
