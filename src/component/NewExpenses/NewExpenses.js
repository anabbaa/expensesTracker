
import React, { useState } from 'react';
import ExpensesForm from './ExpensesForm';
import './NewExpnses.css';

const NewExpnses =(props)=>{
  const [isEditing, setIsEditing] = useState(false);

/*to send data from child to father first i define a function in father send it to son 
through props in so excuted it and pass to it data i want as parameter here expedteddata const
in the function will be the container will have the data from son
*/

const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString(),
  };
      //here i send this data again to app.js

  props.onAddExpense(expenseData);
  setIsEditing(false);
};

const startEditingHandler = () => {
  setIsEditing(true);
};

const stopEditingHandler = () => {
  setIsEditing(false);
};

return (
  <div className='new-expense'>
    {!isEditing && (
      <button onClick={startEditingHandler}>Add New Expense</button>
    )}
    {isEditing && (
      <ExpensesForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    )}
  </div>
);
};

export default NewExpnses;
