import React from 'react'

import {MdDelete,MdEdit} from 'react-icons/md';



const Item = ({expenseThree,deleteItem,editeItem}) => {
  
  const {id,charge,amount} = expenseThree;

  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'> {charge} </span> 
        <span className='amount'> $ {amount} </span>
      </div>

      <button className='edit-btn' aria-label='edit button'  onClick={()=> editeItem(id)}> <MdEdit /> </button>

      <button className='clear-btn' aria-label='delete button' onClick={()=> deleteItem(id)}> <MdDelete /> </button>
    </li>
  )
}

export default Item

