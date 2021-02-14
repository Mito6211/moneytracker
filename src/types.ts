export type Entry = {
  id: string;
  name: string;
  amount: number;
  type: string;
  isIncome: boolean;
};

export type EntryFormData = {
  entryName: string;
  entryType: string;
  entryIsIncome: boolean;
  entryAmount: string;
};
