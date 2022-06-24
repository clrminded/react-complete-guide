import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem item={props.expenseItem[0]} />
            <ExpenseItem item={props.expenseItem[1]} />
            <ExpenseItem item={props.expenseItem[2]} />
            <ExpenseItem item={props.expenseItem[3]} />
      </Card>
    );
}

export default Expenses;