
const reducer = (state , action)=>{
    switch(action.type){
        case "SET_LOADING" :

            return{
                ...state,
                isLoading : true
            };




        case  "GET_STORIES" :
            return {
                ...state,
                isLoading :false,
                hits : action.payload.hits,
                nbPages : action.payload.nbPages
               
            }



            case "REMOVE":
        return{
            ...state,
            hits : state.hits.filter((curEle)=>curEle.objectID != action.payload

            )
        };

        
        case "SEARCH":
            return{
                ...state,
                query : action.payload,
            };



            case "NEXT_PAGE":

            let  pageNumInc = state.page + 1
            if(pageNumInc>=state.nbPages){
                pageNumInc = 0
            }

           
            return{
                ...state,
                page : pageNumInc


            }

            case "PREV_PAGE":

            let PageNo  = state.page - 1
            if(PageNo<=0){
                PageNo = 0
            }

        
                return{
                    ...state,
                    page : PageNo
    
    
                }



    }
    return state

}

export default reducer