import React, { useContext } from 'react'
import { StateContext } from './StateContext'
import { v4 as uuidv4 } from 'uuid';

const History = () => {

  const {history} = useContext(StateContext);

  return (
    <div className='History'>
        <h3 >History</h3>
        {
          history.map( ({text, amount}) => {return( <div key = {uuidv4()}> {text} {amount}</div>)})
        }
    </div>
  )
}

export default History