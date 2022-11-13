import React , {useContext} from 'react'
import { UseGlobalContext } from './Context'



const Search = () => {
  const {query , searchPost} =  UseGlobalContext()

  return (
    <>

    <h1>amit technical</h1>
    <form>
      <div className='search'>
        <input type =  "text" placeholder = "search here"
        value = {query}
        onChange = {(e)=> searchPost(e.target.value)}
        
        />
      </div>
    </form>
    </>
  )
}

export default Search
