import React, { useContext } from 'react'
import { StateContext } from './StateContext'

const Balance = () => {

  const {balance} = useContext(StateContext);
  const {income} = useContext(StateContext);
  const {expense} = useContext(StateContext);

  const getColor = () => {
    if(balance > 0) { return 'green'} else {return 'red'}
  }

  return (
    <div className='balance'>
        <h6>Your Balance</h6>
        <h2 style={{color: balance && getColor()}}>{balance}</h2>
          <div className='pl'>
            <span>
              <div>Income</div>
              <div style={{color: income && 'green'}}>{income}</div>
            </span>
            <span>
              <div>Expense</div>
              <div style={{color: expense && 'red'}}>{expense}</div>
            </span>
          </div>
    </div>
  )
}

export default Balance