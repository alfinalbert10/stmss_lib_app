
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './issue.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight ,faRemove,faSearch } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
const Issue = () => {

    const [books, setBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);
    const [issuedBooks, setIssuedBooks] = useState([]);
    const [teacherId, setTeacherId] = useState('');
    const [studentId, setStudentId] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoaded, setIsLoaded] = useState(false); 
    const [isLoading, setIsLoading] = useState(true); 


    useEffect(() => {
      fetch('https://sunday-library.onrender.com/admin/availablebooks')
        .then(res => res.json())
        .then(({ data }) => {
          setBooks(data);
          setIsLoaded(true);  
          setIsLoading(false);
        })
        .catch(error => alert('Error fetching data:', error));
    }, []);


    const handleSelectBook = (id) => {
        if (selectedBooks.find(book => book.id === id)) {
           
            setSelectedBooks(selectedBooks.filter(book => book.id !== id));
        } else {
            
            const book = books.find(book => book.id === id);
            setSelectedBooks([...selectedBooks, book]);
        }
    };

    const handleAddBooks = () => {
     
      const newIssuedBooks = [...issuedBooks];
      selectedBooks.forEach((selectedBook) => {
          if (!newIssuedBooks.find(book => book.id === selectedBook.id)) {
              newIssuedBooks.push(selectedBook);
          }
      });

      setIssuedBooks(newIssuedBooks);
      
      setSelectedBooks([]);
      console.log(setSelectedBooks)
  };

  const handleRemoveBook = (id) => {
    setIssuedBooks(issuedBooks.filter(book => book.id !== id));
};


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredData = books.filter((item) =>
  
  (item.id.toLowerCase().includes(searchQuery)||
  item.name.toLowerCase().includes(searchQuery) ||
item.author.toLowerCase().includes(searchQuery) )
  );



  const handleIssueComplete = async () => {
    const bookIds = issuedBooks.map(book => book.id);
    let endpoint;
    let dataToSend;

    if (teacherId.trim() && studentId.trim()) {
        alert("Please fill only one ID, either for a teacher or a student.");
        return;
    } else if (teacherId.trim()) {
        endpoint = 'https://sunday-library.onrender.com/admin/books/issue/teacher';
        dataToSend = { teacherId: teacherId, books: bookIds };
    } else if (studentId.trim()) {
        endpoint = 'https://sunday-library.onrender.com/admin/books/issue/student';
        dataToSend = { studentId: studentId, books: bookIds };
    } else {
        alert("Please enter an ID to issue books.");
        return;
    }
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Success:', responseData);
       
        setIssuedBooks(['']);
        setTeacherId('');
        alert('Books issued successfully!');
    } catch (error) {
        console.error('Failed to issue books:', error);
        console.log(dataToSend)
        alert('Failed to issue books. Please try again.');
    }
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
        <div style={{ backgroundColor: '#E0E4EE', height: '610px', boxShadow: '2px 2px rgb(136, 134, 134)' }}>
            <div id='flex'>
                <input id='txt' type='text' placeholder='search for available books'  onChange={handleSearchChange} />
                 <button id='button' style={{marginLeft:'30px', borderRadius:'20px'}}><FontAwesomeIcon icon={faSearch}/></button> 
                 <button id='button' style={{marginLeft:'50px', borderRadius:'20px'}}><NavLink id='tracknav' to='/track'>Track books</NavLink></button> 
            </div>
            <div className='table-container' style={{width:'1200px' ,height: '400px', overflowY:'auto'}}>
                <Table striped bordered hover id='table' className={tableClass}>
                    <thead>
                        <tr>
                            <th></th> 
                            <th style={{textAlign:'center'}}>Id</th>
                            <th style={{textAlign:'center'}}>Book Name</th>
                            <th style={{textAlign:'center'}}>Author Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((book) => (
                            <tr key={book.id} 
                                onClick={() => handleSelectBook(book.id)} 
                                style={{ cursor: 'pointer' }}>
                                <td>
                                    {selectedBooks.find(selected => selected.id === book.id) ? '✓' : ''}
                                </td>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Table striped bordered hover id='table2' style={{ marginLeft: '40px', marginTop: '20px', width:'1000px'}}>
                    <thead>
                        <tr>
                            <th colSpan={3} style={{textAlign:'center'}}>Added Books</th>
                        </tr>
                        <tr>
                          <th style={{textAlign:'center'}}>Book Id</th>
                          <th style={{textAlign:'center'}}>Book Name</th>
                          <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {issuedBooks.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td style={{textAlign:'center'}}>
                                <button  onClick={() => handleRemoveBook(book.id)} style={{ cursor: 'pointer',width:'75px',backgroundColor:'#5BD3C7',borderRadius:'20px' }}><FontAwesomeIcon icon={faRemove}/></button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                
            </div>
            
            <button id='bt1' onClick={handleAddBooks}><FontAwesomeIcon icon={faArrowRight}/></button>
            <div  style={{display:'felx', justifyContent:'flex-start'}}>
            <input
                        type="text"
                        placeholder="For Teachers Enter ID"
                        value={teacherId}
                        onChange={e =>{

                        setTeacherId(e.target.value);
                        setStudentId('');
                    }}
                        style={{ marginLeft:'740px' }}
                    />
                     <input
                        type="text"
                        placeholder="For Students Enter ID"
                        value={studentId}
                        onChange={e =>{ 
                            setStudentId(e.target.value);
                            setTeacherId('');
                        }}
                        style={{ marginLeft:'740px',marginTop:'20px' }}
                    />

            
            <button id='bt3' onClick={handleIssueComplete} style={{ marginLeft:'835px',marginTop:'10px'}}>Done</button>
        </div>
        
        </div>
    );
}

export default Issue;
