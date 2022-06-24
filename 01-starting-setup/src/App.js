/**
 * Ultimately this is the main component that
 * the index.js is rendering.
 * App will have components nested inside it
 * and inside those components may have other
 * components nested inside them, so we are 
 * essentially creating a giant component tree.
 * Components are just javascript functions.
 */

// the ExpenseItem() that we wrote, so we can use
// it in this main App

import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { 
      id: 'element1', 
      title: "Car Insurance", 
      amount: 55.32, 
      date: new Date(2022, 3, 28) 
    },
    { 
      id: 'element2', 
      title: "Rent", 
      amount: 1900.55, 
      date: new Date(2022, 4, 1) 
    },
    { 
      id: 'element3', 
      title: "Groceries", 
      amount: 155.33, 
      date: new Date(2022, 4, 18) 
    },
    { 
      id: 'element4', 
      title: "Clothing", 
      amount: 45.99, 
      date: new Date(2022, 4, 25) 
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenseItem={expenses}/>
    </div>
  );
}

export default App;

/**
 * all the lower case tags are rendered as regular
 * HTML tags and the tags that are Uppercased are
 * rendered as React components.
 */
