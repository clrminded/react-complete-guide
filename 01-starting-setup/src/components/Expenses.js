import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenseItem item={props.expenseItem[0]} />
            <ExpenseItem item={props.expenseItem[1]} />
            <ExpenseItem item={props.expenseItem[2]} />
            <ExpenseItem item={props.expenseItem[3]} />
      </div>
    );
}

export default Expenses;