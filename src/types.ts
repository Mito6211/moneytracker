export type Entry = {
  id: string;
  name: string;
  amount: number;
  type: string;
  isIncome: boolean;
  dateAdded: number;
};

export type EntryFormData = {
  entryName: string;
  entryType: string;
  entryIsIncome: boolean;
  entryAmount: string;
  startingAmount?: string;
};

export type EntryFormProps = {
  value: string | boolean;
  handleChange: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
};
