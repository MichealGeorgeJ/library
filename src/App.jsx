import React from 'react'
import Navbar from './Components/Navbar'
import Edit from'./Components/Edit'
import Book from './Components/Book'
import Add from './Components/Add'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LibraryContext from './utils/LibraryContextComponent'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const API_URL='https://65977d72668d248edf22e4bd.mockapi.io/lib'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<LibraryContext>
            <Book/>
        </LibraryContext>} />
        <Route path='/edit/:id' element={<LibraryContext>
            <Edit/>
        </LibraryContext>} />
        <Route path='create' element={<Add/>} />
        
       </Routes>
      </BrowserRouter>
      <ToastContainer  autoClose={2000} />
    </div>
  )
}

export default App