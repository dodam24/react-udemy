import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}

  const clickHandler = () => { // (이벤트 핸들러 함수) + Handler: 이벤트 발생 시, 리액트가 호출하는 함수
    console.log('Clicked!!!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />  
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
