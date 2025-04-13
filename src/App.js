import { useState } from "react";
import "./App.css";
import ExpenseTable from "./Components/ExpenseTable";
import ExpenseForm from "./Components/ExpenseForm";
import Search from "./Components/Search";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "M8503V",
      expense: "Ugali Matumbo",
      description: "Wednesday Lunch",
      category: "food",
      amount: 300,
      date: "2025-05-05",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter((item) =>
    item.expense.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-md-1 d-none d-md-block bg-purple"></div>
        <div className="col-md-11">
          <h3 className="mt-3">Expense Tracker</h3>
          <h6 className="mb-4">
            Start taking your finances and life, record, categorize and analyze your spending
          </h6>

          <div className="row">
            <ExpenseForm setExpenses={setExpenses} />
            <div className="col-md-6">
              <Search setSearchTerm={setSearchTerm} />
              <ExpenseTable expenses={filteredExpenses} setExpenses={setExpenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
