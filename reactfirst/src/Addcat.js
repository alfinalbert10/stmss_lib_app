
import axios from "axios";
import React, { useState } from "react";
import './Addcat.css';
import { useNavigate } from "react-router-dom";

const AddCat = () => {

    const [newCategoryName, setNewCategoryName] = useState('');
    const [newCategoryId, setNewCategoryId] = useState('');
    const [nameError, setNameError] = useState('');
    const [idError, setIdError] = useState('');
    const navigate = useNavigate();

    const handleAddCategory = () => {
        if (!nameError && !idError) {
            axios.post('https://sunday-library.onrender.com/admin/books/category', {
                category_name: newCategoryName,
                id: newCategoryId
            }).then(res => {
                console.log("Category added:", res.data);
                setNewCategoryName('');
                setNewCategoryId('');
                navigate("/addbooks"); 
            }).catch(err => {
                alert(err.response.data.msg);
            });
        } else {
            alert("Please correct the errors before submitting.");
        }
    };
    
    const  validateCategoryId  = (id) => {
        if (/\d/.test(id)) {  // Checks if there are any numbers
            setIdError("Category name should not contain numbers.");
            return false;
        } else {
            setIdError("");
            return true;
        }
    };
    const validateCategoryName = (name) => {
        if (/\d/.test(name)) {  // Checks if there are any numbers
            setNameError("Category name should not contain numbers.");
            return false;
        } else {
            setNameError("");
            return true;
        }
    };

    const handleNameChange = (e) => {
        setNewCategoryName(e.target.value);
        validateCategoryName(e.target.value);
    };
    
    const handleIdChange = (e) => {
        setNewCategoryId(e.target.value);
        validateCategoryId(e.target.value);
    };
    
    return ( 
        <div >
 <h2 style={{marginTop:'20px', textAlign:'center', }}>ADD NEW CATEGORY</h2>
        <div id="addcat" style={{backgroundColor:'#E0E4EE',}} >
            <div className="form-group">
                        <label >New Category Name:</label>
                        <input
                            type="text"
                            id="new-category-name"
                            value={newCategoryName}
                            placeholder="Enter new category name"
                            onChange={handleNameChange}
                        />
                           {nameError && <p className="error-message">{nameError}</p>}
                         <label >New Category Id:</label>
                        <input
                            type="text"
                            id="new-cat-id"
                            value={newCategoryId}
                            placeholder="Enter new category Id"
                            onChange={handleIdChange}
                         />
                         {idError && <p className="error-message">{idError}</p>}
                        <button type="button" style={{marginLeft:'100px'}} className="add-btn" onClick={handleAddCategory}>Add Category</button>
                    </div>
        </div>
        </div>
     );
}
 
export default AddCat;