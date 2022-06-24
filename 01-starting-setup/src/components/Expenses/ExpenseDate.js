/**
 * Workflow:
 * 1. create function name add props if needed
 * 2. export default <component name>
 * 3. import any css file if necessary
 * 4. On the component that we want to nest 
 * this comonent into we must import this 
 * component name into the parent file
 * import ExpenseDate from "./ExpenseDate"
 */
import "./ExpenseDate.css" //3

function ExpenseDate(props) { //1

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}


export default ExpenseDate; //2