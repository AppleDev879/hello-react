import { ChangeEvent } from "react";
import { categories } from "./Expense";

interface Props {
  onSubmitCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSubmitCategory }: Props) => {
  const onChange = (choice: ChangeEvent<HTMLSelectElement>) => {
    onSubmitCategory(choice.target.value);
  };

  return (
    <select
      onChange={(choice) => onChange(choice)}
      className="my-3 form-control"
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
