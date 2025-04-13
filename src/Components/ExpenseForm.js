import { useState } from "react";

export default function ExpenseForm({ setExpenses}) {
  const [formData, setFormData] = useState({
    expense: "",
    description: "",
    category: "",
    amount: "",
    date: "",

  });

  const handleSubmit = (event) => {
    event.preventDefault();


    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = `${letters.charAt(
      Math.floor(Math.random() * letters.length)
    )}${Math.floor(Math.random() * 100000)}${letters.charAt(
      Math.floor(Math.random() * letters.length)
    )}`;

        const newExpense = {
      ...formData,
      id
    };

    setExpenses((prev) => [...prev, newExpense]);

    //Reset form
    setFormData({
      expense: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="col-6">
      <form className="me-4" onSubmit={handleSubmit} >
        <div className="mb-3">
          <h3 className="mt-3">Add Expense</h3>
          <label htmlFor="expense" className="form-label">
            Expense
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="expense"
            placeholder="e.g.KPLC Tokens"
            name="expense"
            value={formData.expense}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="description"
            placeholder="e.g.Pay April's tokens"
            name="description"
            value={formData.description}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="category"
            placeholder="e.g.Electricity"
            name="category"
            value={formData.category}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expenseAmount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="expenseAmount"
            placeholder="e.g.100"
            name="amount"
            value={formData.amount}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control form-control-sm"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleOnChange}
          />
        </div>
        <div className="d-grid gap-2 col-12 mx-auto">
          <button className="btn btn-dark btn-sm" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}