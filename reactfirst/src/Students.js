
import React, {useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faSearch,faTrash} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Table from 'react-bootstrap/Table';
import './book.css'
import { NavLink, useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

// import './Addbook.js';
import axios from 'axios';

const Student = () => {
  const [isLoaded, setIsLoaded] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 
  const { id } = useParams();
  const [data, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: id,
    name: '',
    classname: '',
  
  });

  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
 

  useEffect(() => {
    fetch('https://sunday-library.onrender.com/admin/students')
      .then(res => res.json())
      .then(({ data }) => {
        setStudents(data);
        setIsLoaded(true);  
          setIsLoading(false);
      })
      .catch(error => alert('Error fetching data:', error));
  }, []);


      const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
      };

      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
      };

      const filteredData = data.filter((item) =>
      selectedCategory ? item.id === selectedCategory : true &&
      (item.id.toLowerCase().includes(searchQuery)||
      item.name.toLowerCase().includes(searchQuery) ||
    item.classname.toLowerCase().includes(searchQuery))
    // item.price.toLowerCase().includes(searchQuery))
    );
     
      const handleDelete = (id) => {
        axios.delete('https://sunday-library.onrender.com/admin/students/'+id)
        .then(res => {
          window.location.reload();
        })
        .catch(er => console.log(er));
      }

    const handleEditClick = (std) => {
      setEditId(std.id);
      setEditFormData({
       
        name: std.name,
        classname: std.classname

      });
    };
 
    const handleEditFormChange = (input) => (e) => {
      setEditFormData({ ...editFormData, [input]: e.target.value });
    };

    const handleUpdate = () => {
      const updatedStudent = {
        id: editId,
        ...editFormData
      };
  
      axios.patch(`https://sunday-library.onrender.com/admin/students/${editId}`, updatedStudent)
      .then(() => {
        setEditId(null);
        
        setStudents(data.map(item => (item.id === editId ? updatedStudent : item)));
      })
      .catch(err => {
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }else if(err.request){
          console.log(err.request);
        }else{
          alert('Error', err.message);
        }
      });
    };
  
    if (isLoading) {
      return (
        <div className="loading-container">
          <div className="loader"></div>  
        </div>
      );
    }
    const tableClass = isLoaded ? "fadeIn" : "";

  return ( 

       <div style={{backgroundColor:'#E0E4EE',height:'610px',boxShadow:'2px 2px rgb(136, 134, 134)'}}>  
        <div id='felx'>
             <input id='txt'
            type='text' placeholder='Search here..'
            onChange={handleSearchChange}
             />
            <button id='buton'><FontAwesomeIcon icon={faSearch}/></button>
           
    <button id='but' style={{marginTop:'25px',width:'80px'}}><NavLink id='navtobook' to="/addstudents">Add</NavLink></button>
            </div>
            <div   style={{ height: '500px', overflowY:'auto'}}>   
            <Table striped bordered hover id='table' className={tableClass}>
      <thead >
         <tr style={{position:'sticky'}}>
          <th>Id</th>
          <th>Name</th>
          <th>Class</th>
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
             <td><input type='text' style={{width:'130px'}} required value={editFormData.classname} onChange={handleEditFormChange('classname')} /></td>
            <td><button id='butt' onClick={handleUpdate}>Update</button></td>
          </tr>
          :
          <tr key={i}>
           <td>{item.id}</td>
           <td>{item.name}</td>
           <td>{item.classname}</td>
           
            <td><button id='butt'  onClick={() => handleEditClick(item)}><FontAwesomeIcon icon={faEdit}/></button><button id='butt' style={{marginLeft:'5px'}} onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrash}/></button></td> 
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
 
export default Student;