import { nanoid } from "nanoid";
import { Entry, EntryFormData } from "./types";

export const defaultEntries: Entry[] = [
  {
    id: nanoid(),
    name: "Mortgage Payment",
    amount: 2500,
    type: "bankAccount",
    isIncome: false,
  },
  {
    id: nanoid(),
    name: "Pay Check",
    amount: 3400,
    type: "bankAccount",
    isIncome: true,
  },
  {
    id: nanoid(),
    name: "Groceries",
    amount: 150,
    type: "cash",
    isIncome: false,
  },
  {
    id: nanoid(),
    name: "Sold Phone",
    amount: 500,
    type: "cash",
    isIncome: true,
  },
];

export const defaultFormData: EntryFormData = {
  entryName: "",
  entryType: "cash",
  entryIsIncome: true,
  entryAmount: "",
};
