import React, { useReducer, useContext, createContext, useEffect } from "react"
import reducer from "./Reducer"



const InitialState = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: []
}

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, InitialState)


    let API = "http://hn.algolia.com/api/v1/search?"
    const fetchApiData = async (url) => {


        dispatch({type : "SET_LOADING"})    
 
       


        try {
            const res = await fetch(url)

            const data = await res.json()
            console.log(data)
            dispatch({

                type: 'GET_STORIES',
                payload: {
                    hits: data.hits,
                    nbPages : data.nbPages

                }

            })
        }
        catch (error) {
            console.log(error)

        }

    }

    const removePost = (post_ID)=>{
        dispatch ({
          type : "REMOVE",
          payload : post_ID
        })
      }


      const searchPost = (searchQuery)=>{
        dispatch({type:"SEARCH",
        payload : searchQuery
      
      });
      };

      const getPrevPage = ()=>{
        dispatch({
            type : "PREV_PAGE"
        })

      }

      const getNextPage= ()=>{
        dispatch({
            type : "NEXT_PAGE"
        })

      }



    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query , state.page])



    return <AppContext.Provider value={{ ...state , removePost , searchPost , getNextPage , getPrevPage }}>{children}</AppContext.Provider>

}

const UseGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, UseGlobalContext };