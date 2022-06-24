import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate" //4
import Card from "../UI/Card"

// components/ExpenseItem.js
// here we have our javascript function
function ExpenseItem(props) {
    /**
     * we really want these in App.js, so we
     * can pass them as parameters.(props)
     * const expenseDate = new Date(2022, 3, 28);
     * const expenseTitle = "Car Insurance";
     * const expenseAmount = 55.32;
     * 
     * KEY CONCEPT: You have to know the name of the
     * props objects argument names (title,amount)
     * Date params order: YYYY,MM,DD
     *
     * We are moving these into ExpenseDate to make a new component
     * const month = props.date.toLocaleString('en-US', { month: 'long' });
     * const day = props.date.toLocaleString('en-US', { day: '2-digit' });
     * const year = props.date.getFullYear();
     */
    
    return (
        <Card className="expense-item">
            <ExpenseDate 
                date={props.item.date}
            />
            <div className="expense-item__description">
                <h2>{props.item.title}</h2>
                <div className="expense-item__price">${props.item.amount}</div>
            </div>
        </Card>
    );
}



// and once we have our javascript function, 
// we need to export it, so other files can
// import it.
export default ExpenseItem;

/**
 * Another key thing to remember is that every 
 * component can only have 1 ROOT element such
 * as a div. If there is another div, it has
 * to be extracted to another comonent.
 * 
 * className is a reserved word for css, so
 * reacts jsx uses className.
 * 
 * Handy shortcut, components can be self closing
 * you just have to add the /> at the end instead
 * of a new </componentName>
 */

