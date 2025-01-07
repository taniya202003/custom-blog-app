import React, { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const [exsistingData,setExistingData] = useState(JSON.parse(localStorage.getItem("blogPost")) || []);
    const [filterPost,setFilterPost] = useState(exsistingData)
    const [search,setSearch] = useState('')
 
    
    return (
    <div>
      <Context.Provider value={{exsistingData,setExistingData,filterPost,setFilterPost,search,setSearch}}>
        {children}
      </Context.Provider>
    </div>
  )
}


