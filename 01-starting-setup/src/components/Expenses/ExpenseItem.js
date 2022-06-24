import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate" //4
import Card from "../UI/Card"

// components/ExpenseItem.js
// here we have our javascript function
const ExpenseItem = (props) => {
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
    
    // introduction into hooks
    // title is the current states value,
    // setTitle is the function that updates the value
    // useState checks the state of the props.title
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!!!!');
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate 
                date={props.date}
            />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
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

