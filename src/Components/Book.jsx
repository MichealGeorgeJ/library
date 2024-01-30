import React, { useEffect,useContext } from 'react'
import { API_URL } from '../App'
import axios from 'axios'
import {toast }from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import { LibraryContext } from '../utils/LibraryContextComponent';
import { useNavigate } from 'react-router-dom';
const Book = () => {
  const Navigate=useNavigate()
 const {books,setBooks}=useContext(LibraryContext)

const getBooks=async()=>{
  try{
    const res=await axios.get(API_URL);
    if(res.status==200){
      toast.success("data got")
      setBooks(res.data)
      console.log("success")
    }

  }
  catch(error){
    console.error(error)
  }
}

const handleDelete=async(id)=>{
  try{
    const res=await axios.delete(`${API_URL}/${id}`)
    if(res.status===200){
      {
        getBooks()
        toast.success("deleted")
      }
    }
  }
  catch(error){
    toast.error("error")
  }
}

useEffect(()=>{
  
  getBooks()
},[])

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row d-flex justify-content-between">
          {
            books.map((book,id)=>(
              <div className="col-sm-12 col-lg-6 mb-4" key={id}  >
            <div className="card h-100 p-2 d-flex flex-row" style={{boxShadow:"box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;"}}>
            <div className="image w-50 d-flex justify-content-between flex-column"><img className='w-100 ' src={book.image} alt="img" />
            <div className="buttons d-flex">
                <div><button className="btn btn-primary ml-2 mr-2" onClick={()=>Navigate(`/edit/${book.id}`)} ><i className="fa-solid fa-pen-to-square"></i> Edit</button></div>
               <div> <button className="btn btn-danger" onClick={()=>handleDelete(book.id)} ><i className="fa-solid fa-trash"></i> Delete</button></div>
              </div>
            </div>
              <div className="contents ml-2">
                <h4>{book.title}</h4>
                <p>Author :{book.author} </p>
                <p><i className="fa-solid fa-calendar-days"></i> Publication Date : {book.publicationDate} </p>
                <p>ISBN - {book.isbn} </p>
                <hr style={{width:"80%"}}  />
                <h5><i className="fa-regular fa-address-card"></i> About Author</h5>
                <p>{book.bio} </p>
                <p><i className="fa-solid fa-calendar-days"></i>DoB : {book.dob}</p>

              </div>
              

            </div>
            
          </div>
            ))
          }
         
        </div>
      </div>
    </div>
  )
}

export default Book