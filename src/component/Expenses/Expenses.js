
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
// import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /*rember that function inside jsk element should be not excuted beuause that means excusted
wehn calling the component and ofcourse itis too early we want to excute it accoring to user
actions and react component will render only once so to update we wnat state or hook as
function in order to react re evaluated this component only according to user actions*/
/*{
for function in react the begins with the word on and you do not need to excusted it in jsx
because it will excuted it when parse an elemnet and that we do not want 
}*/

return (
  <div>
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
              <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  </div>
);
};
export default Expenses;