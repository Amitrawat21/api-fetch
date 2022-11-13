import React from 'react'
import { UseGlobalContext } from './Context'

 const Pagination = () => {
  const {page ,nbPages , getPrevPage, getNextPage} = UseGlobalContext()
  return (
    <>
    <div className='pagination-btn'>
       <button onClick={()=> getPrevPage()}>PREV</button> 
      <p>
        {page + 1} of {nbPages}
      </p>
       <button onClick={()=> getNextPage()}>PREV</button> 


    </div>
    
    </>
  )
}
export default Pagination
