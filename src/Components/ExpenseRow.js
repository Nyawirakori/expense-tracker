export default function ExpenseRow({expense, handleRemove}) {
  return( 
    <tr key={expense.id}>
      <td>{expense.id}</td>
      <td>{expense.expense}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>{expense.amount}</td>
      <td>{expense.date}</td>
        <button onClick={()=> handleRemove(expense.id)} className="btn btn-sm btn-danger" 
         style={{ color: "black" }}>Remove</button>
    </tr>
  )
}