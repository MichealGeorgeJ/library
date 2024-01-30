import React, { useState } from 'react'
export const LibraryContext=React.createContext()
const LibraryContextComponent = ({children}) => {

  const [books,setBooks]=useState([])


  return (
    <div>
        <LibraryContext.Provider value={{books,setBooks}} >
            {children}
        </LibraryContext.Provider>
    </div>
  )
}

export default LibraryContextComponent