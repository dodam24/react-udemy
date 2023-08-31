import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');   // 다중 상태 접근법
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })    
        // setUserInput((prevState) => {   // 이전 상태에 의존해서 상태를 업데이트할 경우, 이 방식을 사용해야 함
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHanler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input 
                 type='text' 
                 value={enteredTitle}   // 양방향 바인딩
                 onChange={titleChangeHandler} />
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input 
                 type='number'
                 value={enteredAmount}
                 min='0.01' 
                 step='0.01' 
                 onChange={amountChangeHanler}/>
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input 
                 type='date'
                 value={enteredDate}
                 min='2020-01-01' 
                 max='2024-12-31' 
                 onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;
