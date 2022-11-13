import React  from 'react'
import { UseGlobalContext } from './Context.js'

 export const Stories = () => {

  const {hits , isLoading , removePost }= UseGlobalContext()

  if(isLoading){
    return(
    <>
    
    <h1>............loading</h1>
    </>
    );
  }
 

    return(
      <>
       <div className='stories-div'>
      
    {hits.map((curPost)=>{
      const {title , author , objectID , url , num_comments} = curPost;
    
             return(
              <>
             <div className= "card" key={objectID}>
             <h2>{title}</h2>
             <p>
              By <span>{author}</span> | <span>{num_comments}</span> comments
             </p>
             <div className='card-button'>
            <a href = {url} target = "_blank">
              ReadMore
            </a>

            <a href='#' onClick={()=>removePost(objectID)}>REMOVE</a>

             </div>
            
    
             </div>
             
         
              </>
             )
            })}
            </div>
          
      
      </>
    )
  
  
}

