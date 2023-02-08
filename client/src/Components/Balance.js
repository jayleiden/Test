import React, { useContext, useEffect } from 'react'
import { StateContext } from './StateContext'

const Balance = () => {

  const state = useContext(StateContext);
  
  const getColor = () => {
    if(state.balance > 0) { return 'green'} else {return 'red'}
  }

  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(state));
  },[state])

  return (
    <div className='balance'>
        <h6>Your Balance</h6>
        <h2 style={{color: state.balance && getColor()}}>{state.balance}</h2>
          <div className='pl'>
            <span>
              <div>Income</div>
              <div style={{color: state.income && 'green'}}>{state.income}</div>
            </span>
            <span>
              <div>Expense</div>
              <div style={{color: state.expense && 'red'}}>{state.expense}</div>
            </span>
          </div>
    </div>
  )
}

export default Balance