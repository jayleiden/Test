import React, { useContext, useState } from 'react'
import { StateContext } from './StateContext';

const AddTransaction = () => {
  
  const {dispatch} = useContext(StateContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const btnClick = (e) => {
    e.preventDefault();

    const history = {
        text: text,
        amount: parseFloat(amount)
    }

    dispatch({
        type: 'ADD_TRANSACTION',
        payload: {history: history, amount: parseFloat(amount)}
    })
  }

  return (
    <div className='add-transaction'>
        <h3>Add Transaction</h3>
        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" value={text} onChange={(e) => {setText(e.target.value)}}></input>
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" name="amount" value={amount} onChange={(e) => {setAmount(e.target.value)}}></input>
        <button onClick={btnClick}>Add Transaction</button>
    </div>
  )
}

export default AddTransaction