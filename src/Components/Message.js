import React from 'react'
import '../Styles/Message.css'

const Message = ({msg, bgColor}) => {

  return (
     <>
       <div className='mesageError'>
           <p>  {msg} </p>
       </div>
     </>
  )
}

export default Message