import React from "react";
import ExpenseRow from "./ExpenseRow";
function ExpenseTable({expenses, setExpenses}) {
    function handleRemove(id) {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  }

  return (
    <div className="col">
      <table className="table table-striped p-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
         <tbody>
        {expenses.map((expense, index) => (
          <ExpenseRow
          key={index}
            expense={expense}
            handleRemove={handleRemove}
          />
        ))}
      </tbody>
      </table>
    </div>
  );
}
export default ExpenseTable;
