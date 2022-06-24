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
import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

/**
 * all the lower case tags are rendered as regular
 * HTML tags and the tags that are Uppercased are
 * rendered as React components.
 */
