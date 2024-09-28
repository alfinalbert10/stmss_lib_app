import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddExbk = () => {


    const [Bookid, setBookId] = useState('')

const navigate = useNavigate();
    

const handleAddBook = () => {
   
    axios.post('https://sunday-library.onrender.com/admin/existingbook',{
        id:Bookid
    })
        .then(response => {
            
            console.log('Book added successfully:', response.data);
            navigate('/books')
            
        })
        .catch(error => {
            
            alert('There is no such a book:', error);
        });
    

    setBookId('');
};
    return ( 
        <div>
          <div
      style={{
        backgroundColor:'#FFFFF' ,
        height: "610px",
        boxShadow: "2px 2px rgb(136, 134, 134)",

      }}
    >
      <div className="return-box" style={{backgroundColor:'#E0E4EE'}}>
    
        <input
         id="returnbar"
          type="text"
          placeholder="Enter book ID"
            value={Bookid}
            onChange={(e) => setBookId(e.target.value)}
           />
        <button id="retbtn"  onClick={handleAddBook}>
         Add
        </button>
      </div>
    </div>
        </div>
     );
}
 
export default AddExbk;