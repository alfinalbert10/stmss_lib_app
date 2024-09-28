import React, {useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import './book.css'
import { NavLink, useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
// import './Addbook.js';
import axios from 'axios';

function UniqueOptionDropdown({ data,handleCategoryChange,selectedCategory }) {

  const uniqueCatIds = new Set();

  const uniqueData = data.filter(item => {
  
    if (uniqueCatIds.has(item.cat_id)) {
      return false; 
    } else {
      uniqueCatIds.add(item.cat_id); 
      return true; 
    }
  });

  return (
    <select id="drop" onChange={handleCategoryChange} value={selectedCategory}>
      {uniqueData.map((item, index) => (
        <option key={index} value={item.cat_id}>
          {item.cat_id}
        </option>
      ))}
    </select>
  );
}



const Books = () => {

  const { id } = useParams();
  const [data, setBooks] = useState([]);
 
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: id,
    name: '',
    author: '',
    price: '',
    publisher: '',
    cat_id: ''
  });
  const [isLoaded, setIsLoaded] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchBooks = axios.get('https://sunday-library.onrender.com/admin/books');
  //   const fetchCategories = axios.get('https://sunday-library.onrender.com/books/categories');
  
  //   Promise.all([fetchBooks, fetchCategories])
  //     .then(([booksResponse, categoriesResponse]) => {
  //       setBooks(booksResponse.data.data); // Ensure the data is accessed correctly depending on your API response structure
  //       setCategories(categoriesResponse.data.data); // Adjust based on your API
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);
  



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const booksRes = await axios.get('https://sunday-library.onrender.com/admin/books');
  //       const categoriesRes = await axios.get('https://sunday-library.onrender.com/admin/books/categories');
  //       console.log(categoriesRes.data);
  //       console.log(booksRes.data)
  //       if (data.status && Array.isArray(data.data)) {
  //         setCategories(data.data);
  //     } else {
  //         console.error('Categories data is not an array:', data);
  //     }
  //       setBooks(booksRes.data);
  //       setCategories(categoriesRes.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
  f()
  }, []);

const f = () =>{
  fetch('https://sunday-library.onrender.com/admin/books')
    
  .then(res => res.json())
  .then(({ data }) => {
    setBooks(data);
    var set = new Set(data);
    console.log(set)
    setIsLoaded(true);  
    setIsLoading(false);
  })
  .catch(error => console.error('Error fetching data:', error));

} 
  
  // useEffect(() => {
  //   fetch('https://sunday-library.onrender.com/admin/books/categories')
    
  //     .then(res => res.json())
  //     .then(({ data1 }) => {
  //       setCategories(data1);
      
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>  
      </div>
    );
  }
  const tableClass = isLoaded ? "fadeIn" : "";

      const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
      };

      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
      };

      const filteredData = data.filter((item) =>
      selectedCategory ? item.cat_id === selectedCategory : true &&
      (item.id.toLowerCase().includes(searchQuery)||
      item.name.toLowerCase().includes(searchQuery) ||
    item.author.toLowerCase().includes(searchQuery) ||
    item.publisher.toLowerCase().includes(searchQuery))
    // item.price.toLowerCase().includes(searchQuery))
    );
     
      const handleDelete = (id) => {
        axios.delete('https://sunday-library.onrender.com/admin/books/'+id)
        .then(res => {
          window.location.reload();
        })
        .catch(er => console.log(er));
      }

    const handleEditClick = (book) => {

      setEditId(book.id);
      setEditFormData({
        name: book.name,
        author: book.author,
        price: book.price,
        publisher: book.publisher,
        category: book.cat_id
      });
    };
 
    const handleEditFormChange = (input) => (e) => {
      setEditFormData({ ...editFormData, [input]: e.target.value });
    };


    // const handleUpdate = () => {
    //   const updatedBook = {
    //     ...editFormData, // ensure that all fields are included correctly
    //   };
    
    //   axios.patch(`https://sunday-library.onrender.com/admin/books/${editId}`, updatedBook)
    //     .then(response => {
    //       // Assuming the server responds with the updated book, use that to update state
    //       const updatedBooks = data.map(book => {
    //         if (book.id === editId) {
    //           return { ...book, ...response.data }; // use response data to ensure state is updated
    //         }
    //         return book;
    //       });
    
    //       setBooks(updatedBooks);
    //       setEditId(null);
    //     })
    //     .catch(err => {
    //       console.error('Failed to update book', err);
    //     });
    // };
    


    const handleUpdate = () => {
      const updatedBook = {
        id: editId,
        ...editFormData
      };
  
      axios.patch(`https://sunday-library.onrender.com/admin/books/${editId}`, updatedBook)
      .then(() => {
        setEditId(null);
        
        setBooks(data.map(book => (book.id === editId ? updatedBook : book)));
       f()
      })
      .catch(err => {
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }else if(err.request){
          console.log(err.request);
        }else{
          console.log('Error', err.message);
        }
      });
    };
  


  return ( 

       <div style={{backgroundColor:'#E0E4EE',height:'610px',boxShadow:'2px 2px rgb(136, 134, 134)'}}>  
        <div id='felx'>
             <input id='txt'
            type='text' placeholder='Search here..'
            onChange={handleSearchChange}
             />
            <button id='buton'><FontAwesomeIcon icon={faSearch}/></button>

            <UniqueOptionDropdown data={data} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory}/>

    <NavLink id='navtobook' to="/addbooks"><button id='but' style={{marginTop:'30px',width:'80px'}}>Add</button></NavLink>
            </div>
            <div   style={{ height: '500px', overflowY:'auto'}}>   
            <Table striped bordered hover id='table' className={tableClass} >
      <thead >
         <tr style={{position:'sticky'}}>
          <th>Id</th>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Price</th>
         <th>Publisher</th>
         <th>available</th>
         <th>Cat_Id</th>
        <th></th> 
        </tr>
     </thead>
       <tbody style={{  overflowY: 'auto' }}>
         {
         filteredData.map((item, i)=> (
          item.id === editId ?
          <tr key={item.id}>
             <td>{item.id}</td>
             <td><input type='text' style={{width:'130px'}} required value={editFormData.name} onChange={handleEditFormChange('name')} /></td>
             <td><input type='text' style={{width:'130px'}} required value={editFormData.author} onChange={handleEditFormChange('author')} /></td>
             <td><input type='text' style={{width:'130px'}} required value={editFormData.price} onChange={handleEditFormChange('price')} /></td>
             <td><input type='text' style={{width:'130px'}} required value={editFormData.publisher} onChange={handleEditFormChange('publisher')}  /></td>
            <td></td>
            <td><input type='text' style={{width:'130px'}} required value={editFormData.category} onChange={handleEditFormChange('category')}  /></td>
            <td><button id='butt' onClick={handleUpdate}>Update</button></td>
          </tr>
          :
          <tr key={i}>
           <td>{item.id}</td>
           <td>{item.name}</td>
           <td>{item.author}</td>
           <td>{item.price}</td>
           <td>{item.publisher}</td>
           <td>{item.available?"Yes":"No"}</td>
           <td>{item.cat_id}</td>
            <td><button id='butt' onClick={() => handleEditClick(item)}>  <FontAwesomeIcon icon={faEdit} /></button>
            <button id='butt' style={{marginLeft:'5px'}} onClick={() => handleDelete(item.id)}>  <FontAwesomeIcon icon={faTrash} /></button></td> 
         </tr>
         )
        )
         }
        
    
      </tbody>
    </Table>

        </div>
    </div>
   );
}
 
export default Books;