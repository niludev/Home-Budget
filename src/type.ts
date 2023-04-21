import { EExpenseCategory, EIncomeCategory } from "./enums";

export enum ModalType {
  NewItem = "newItem",
  EditItem = "editItem"
}







export const tabs = ["Table", "Data"];

export enum What {
  Expense = "expense",
  Income = "income",
}

export type Category = EExpenseCategory | EIncomeCategory | undefined;
export type ID = number;

export interface Item {
  id: ID;
  what: What;
  forWhat: string;
  date: Date;
  howMuch: number;
  inWhichCategory: Category;
}

export interface Content {
  items: Item[];
}
