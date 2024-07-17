import React from 'react'

const Balance = ({transactions}) => {
    // const balance = transactions ? transactions.reduce((elem,0)=>{return elem.amount}) : 0;
    let balance = 0;
    let income = 0;
    let expense = 0;

    for(let i = 0;i<transactions.length;i++){
        let price = parseInt(transactions[i].amount);
        if(price > 0){
            income += price; 
        }
        else{
            expense += price;
        }
    }
    balance = income+expense;
  return (
    <div className='balance-box'>
      <h3>Your Balance</h3>
      <h2>${balance}</h2>
      <div className="balance-container">
        <div className="col">
            <h4>Income</h4>
            <p id="income">${income}</p>
        </div>
        <div className="col">
            <h4>Expense</h4>
            <p id="expense">${expense}</p>
        </div>
      </div>
    </div>
  )
}

export default Balance
