import { nanoid } from "nanoid";
import { Entry, EntryFormData } from "./types";

export const defaultEntries: Entry[] = [
  {
    id: nanoid(),
    name: "Mortgage Payment",
    amount: 2500,
    type: "Bank Account",
    isIncome: false,
  },
  {
    id: nanoid(),
    name: "Pay Check",
    amount: 3400,
    type: "Bank Account",
    isIncome: true,
  },
  {
    id: nanoid(),
    name: "Groceries",
    amount: 150,
    type: "Cash",
    isIncome: false,
  },
  {
    id: nanoid(),
    name: "Sold Phone",
    amount: 500,
    type: "Cash",
    isIncome: true,
  },
];

export const defaultFormData: EntryFormData = {
  entryName: "",
  entryType: "Cash",
  entryIsIncome: true,
  entryAmount: "",
};
