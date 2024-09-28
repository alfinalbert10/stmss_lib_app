
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './Addbook.css';
// import { NavLink, useNavigate } from "react-router-dom"; 

// function UniqueOptionDropdown({ data,handleCategoryChange,selectedCategory }) {
  
//     const uniqueCatIds = new Set();
  
   
//     const uniqueData = data.filter(item => {
//       if (uniqueCatIds.has(item.cat_id)) {
//         return false; 
//       } else {
//         uniqueCatIds.add(item.cat_id); 
//         return true; 
//       }
//     });
  
//     return (
//       <select id="drop" onChange={handleCategoryChange} value={selectedCategory}>
//         {uniqueData.map((item, index) => (
//           <option key={index} value={item.cat_id}>
//             {item.cat_id}
//           </option>
//         ))}
//       </select>
//     );
//   }

// const AddBoo = () => {

//   const [authorError, setAuthorError] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [publisherError, setPublisherError] = useState('');
  

//     // const [category, setCategory] = useState('');
//     const [author, setAuthor] = useState('');
//     const [name, setName] = useState('');
//     const [publisher, setPublisher] = useState('');
//     const [price, setPrice] = useState('');
//     // const [isLoading, setIsLoading] = useState(true); 
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [data, setBooks] = useState([]);
  
//     const navigate = useNavigate();
//     useEffect(() => {
//         fetch('https://sunday-library.onrender.com/admin/books')
        
//           .then(res => res.json())
//           .then(({ data }) => {
//             setBooks(data);
            
//           })
//           .catch(error => console.error('Error fetching data:', error));
//       }, []);
    
//       const validateName = (input, setError) => {
//         if (/\d/.test(input)) {
//             setError("Name should not contain numbers.");
//             return false;
//         } else {
//             setError("");
//             return true;
//         }
//     };
    
//     const handleAuthorChange = (e) => {
//       setAuthor(e.target.value);
//       validateName(e.target.value, setAuthorError);
//   };
  
//   const handleNameChange = (e) => {
//       setName(e.target.value);
//       validateName(e.target.value, setNameError);
//   };
  
//   const handlePublisherChange = (e) => {
//       setPublisher(e.target.value);
//       validateName(e.target.value, setPublisherError);
//   };
  
//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     if (!authorError && !nameError && !publisherError && author && name && publisher) {
    
//         axios.post('https://sunday-library.onrender.com/admin/books', {
//             author: author,
//             name: name,
//             price: parseFloat(price),
//             publisher: publisher,
//             category: selectedCategory
//         }).then(res => {
//             navigate("/books");
//         }).catch(err => alert(err.response.data.msg));
//     } else {
//         alert('Please correct the errors before submitting.');
//     }
// };

//     const handleCategoryChange = (e) => {
//         setSelectedCategory(e.target.value);
//       };
//     // if (isLoading) {
//     //     return (
//     //       <div className="loading-container">
//     //         <div className="loader"></div>  
//     //       </div>
//     //     );
//     //   }
//     return (
//         <div id="main" >
//             <h2 style={{marginTop:'20px', textAlign:'center'}}>ADD NEW BOOK</h2>
//             <div id="add-book" className="add-book-container" style={{backgroundColor:'#E0E4EE',}} >
//               <div>
               
//                 <form className="add-book-form" onSubmit={handleSubmit}>

//                     <div className="form-group flex-container">
//                         <div className="flex-item">
//                             <label htmlFor="category" className="form-label">Category:</label>
//                             <UniqueOptionDropdown data={data} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory}/>
//                         </div>
                      
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="author-name">Author Name:</label>
//                         <input
//                             type="text"
//                             id="author-name"
//                             required
//                             placeholder="Enter the author name"
//                             onChange={handleAuthorChange}
//                             className={authorError ? "error-input" : ""}
//                         />
//                          {authorError && <p className="error-message">{authorError}</p>}
//                     </div>

//                     <div className="form-group flex-container">
//                         <div className="flex-item">
//                             <label htmlFor="book-name">Book Name:</label>
//                             <input
//                                 type="text"
//                                 id="book-name"
//                                 required
//                                 placeholder="Enter book name"
//                                 onChange={handleNameChange}
//                                 className={nameError ? "error-input" : ""}
//                             />
//                               {nameError && <p className="error-message">{nameError}</p>}
//                         </div>
                       
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="publisher-name" className="form-label">Publisher Name:</label>
//                         <input
//                             type="text"
//                             id="publisher-name"
//                             required
//                             placeholder="Enter publisher name"
//                             onChange={handlePublisherChange}
//                             className={publisherError ? "error-input" : ""}
//                         />
//                          {publisherError && <p className="error-message">{publisherError}</p>}
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="price" className="form-label">Price:</label>
//                         <input
//                             type="number"
//                             id="price"
//                             required
//                             placeholder="Enter price"
//                             onChange={e => setPrice(e.target.value)}
//                         />
//                     </div>

//                     <button type="submit" className="submit-btn1">Add</button>
//                     <NavLink id='navtobook' to="/addcat"> <button  className="submit-btn2">Add Cat</button></NavLink>
//                     <NavLink id='navtobook' to="/addexbk"><button  className="submit-btn3">Add Ex</button></NavLink>
//                 </form>
             
              
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default AddBoo;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom"; 
import './Addbook.css';

function UniqueOptionDropdown({ data, handleCategoryChange, selectedCategory }) {
    return (
        <select id="drop" onChange={handleCategoryChange} value={selectedCategory}>
            {data.map((item, index) => (
                <option key={index} value={item.id}>
                    {item.name + " - "+ item.id}
                </option>
            ))}
        </select>
    );
}

const AddBoo = () => {
    const [authorError, setAuthorError] = useState('');
    const [nameError, setNameError] = useState('');
    const [publisherError, setPublisherError] = useState('');
    const [author, setAuthor] = useState('');
    const [name, setName] = useState('');
    const [publisher, setPublisher] = useState('');
    const [price, setPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://sunday-library.onrender.com/admin/books/categories') 
            .then(res => {
                setCategories(res.data.data);  
                if (res.data.data.length > 0) {
                    setSelectedCategory(res.data.data[0].id); 
                }
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const validateName = (input, setError) => {
        if (/\d/.test(input)) {
            setError("Name should not contain numbers.");
            return false;
        } else {
            setError("");
            return true;
        }
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
        validateName(e.target.value, setAuthorError);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        validateName(e.target.value, setNameError);
    };

    const handlePublisherChange = (e) => {
        setPublisher(e.target.value);
        validateName(e.target.value, setPublisherError);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!authorError && !nameError && !publisherError && author && name && publisher) {
            axios.post('https://sunday-library.onrender.com/admin/books', {
                author: author,
                name: name,
                price: parseFloat(price),
                publisher: publisher,
                category: selectedCategory
            }).then(res => {
                navigate("/books");
            }).catch(err => {
                alert(err.response.data.msg);
            });
        } else {
            alert('Please correct the errors before submitting.');
        }
    };

    return (
        <div id="main">
            <h2 style={{marginTop:'20px', textAlign:'center'}}>ADD NEW BOOK</h2>
            <div id="add-book" className="add-book-container" style={{backgroundColor:'#E0E4EE'}}>
                <form className="add-book-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category" className="form-label">Category:</label>
                        <UniqueOptionDropdown data={categories} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="author-name">Author Name:</label>
                        <input
                            type="text"
                            id="author-name"
                            required
                            placeholder="Enter the author name"
                            onChange={handleAuthorChange}
                            className={authorError ? "error-input" : ""}
                        />
                        {authorError && <p className="error-message">{authorError}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="book-name">Book Name:</label>
                        <input
                            type="text"
                            id="book-name"
                            required
                            placeholder="Enter book name"
                            onChange={handleNameChange}
                            className={nameError ? "error-input" : ""}
                        />
                        {nameError && <p className="error-message">{nameError}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="publisher-name">Publisher Name:</label>
                        <input
                            type="text"
                            id="publisher-name"
                            required
                            placeholder="Enter publisher name"
                            onChange={handlePublisherChange}
                            className={publisherError ? "error-input" : ""}
                        />
                        {publisherError && <p className="error-message">{publisherError}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            required
                            placeholder="Enter price"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="submit-btn1">Add</button>
                    <NavLink to="/addcat"><button className="submit-btn2">Add Cat</button></NavLink>
                    <NavLink to="/addexbk"><button className="submit-btn3">Add Ex</button></NavLink>
                </form>
            </div>
        </div>
    );
};

export default AddBoo;
