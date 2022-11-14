import React from "react";
import NewExpnses from "./component/NewExpenses/NewExpenses";
import Expenses from "./component/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    
  ];
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  /*{
  if you do not use jsx you will use react oblect  and it needs three arguement first tag element 
  as a streng with  the name of it then oblect to define attribute of this element 
  last you need to pass infos what is inside this elemnt and if you need another tagg name 
  inside this tag you need another  react create elment inside the father react.create element 
   // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // ); }*/
  return (
      <div>
      <NewExpnses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;