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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

/**
 * all the lower case tags are rendered as regular
 * HTML tags and the tags that are Uppercased are
 * rendered as React components.
 */
