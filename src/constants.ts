import { nanoid } from "nanoid";
import { Entry, EntryFormData } from "./types";

export const defaultEntries: Entry[] = [
  {
    id: nanoid(),
    name: "Mortgage Payment",
    amount: 2500,
    type: "Bank Account",
    isIncome: false,
    dateAdded: 1612222200000,
  },
  {
    id: nanoid(),
    name: "Pay Check",
    amount: 3400,
    type: "Bank Account",
    isIncome: true,
    dateAdded: 1613409300000,
  },
  {
    id: nanoid(),
    name: "Groceries",
    amount: 150,
    type: "Cash",
    isIncome: false,
    dateAdded: 1613483100000,
  },
  {
    id: nanoid(),
    name: "Sold Phone",
    amount: 500,
    type: "Cash",
    isIncome: true,
    dateAdded: 1614354600000,
  },
];

export const defaultFormData: EntryFormData = {
  entryName: "",
  entryType: "Cash",
  entryIsIncome: true,
  entryAmount: "",
  startingAmount: "0",
};
