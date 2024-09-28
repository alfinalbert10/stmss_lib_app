
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";

const Track = () => {
    const [data, setBooks] = useState([]);
        
    useEffect(() => {
        fetch('https://sunday-library.onrender.com/admin/issuedbooks')
          .then(res => res.json())
          .then(({ data }) => {
            setBooks(data);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);


    return ( 
        <div style={{ backgroundColor: '#E0E4EE', height: '610px', boxShadow: '2px 2px rgb(136, 134, 134)' }}>
              <div   style={{ height: '500px', overflowY:'auto'}}>   
            <Table striped bordered hover id='table' style={{textAlign:'center'}}>
      <thead >
         <tr style={{position:'sticky'}}>
          <th>Book Id</th>
          <th>Teacher Id</th>
          <th>Student Id</th>

        </tr>
     </thead>
       <tbody style={{  overflowY: 'auto' }}>
         {
         data.map((item, i)=> (
    
    
          
          <tr key={i}>
           <td>{item.bid}</td>
           <td>{item.tid}</td>
           <td>{item.sid}</td>
        
          
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
 
export default Track;