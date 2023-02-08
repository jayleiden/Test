import React, { useContext } from 'react'
import { StateContext } from './StateContext'

const History = () => {

  const {history} = useContext(StateContext);
  console.log(history);
  return (
    <div className='History'>
        <h3>History</h3>
        {
          history.map( ({text, amount}) => {return( <div>{text} {amount}</div>)})
        }
    </div>
  )
}

export default History