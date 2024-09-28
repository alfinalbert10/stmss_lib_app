import React, { useState, useEffect } from "react";
import "./log.css";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";

const Log = () => {
  const [data, setData] = useState([]);
  const [years, setYears] = useState([]);
  const [currentYear, setCurrentYear] = useState("");
  const [isLoading, setIsLoading] = useState(true); 
  const [isLoaded, setIsLoaded] = useState(false); 
  useEffect(() => {
    fetch("https://sunday-library.onrender.com/admin/logyears")
      .then((res) => res.json())
      .then((data) => {
        setYears(data.years);
        setCurrentYear(data.years[0]); 
          setIsLoading(false);
          setIsLoaded(true);  
      })
      .catch((error) => console.error("Error fetching years:", error));
  }, []);

  useEffect(() => {
    if (currentYear) {
      fetch(`https://sunday-library.onrender.com/admin/log/${currentYear}`)
        .then((res) => res.json())
        .then((data) => {
         
          const combinedData = combineBooks(data.data);
          setData(combinedData);
          setIsLoading(false);
          setIsLoaded(true);  
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [currentYear]);

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };


  const combineBooks = (data) => {
    const combinedData = [];
    data.forEach((item) => {
      const existingClass = combinedData.find((c) => c.class === item.class);
      if (existingClass) {
        existingClass.books.push({
          book_id: item.book_id,
          book_name: item.book_name,
        });
      } else {
        combinedData.push({
          class: item.class,
          books: [
            {
              book_id: item.book_id,
              book_name: item.book_name,
            },
          ],
        });
      }
    });
    return combinedData;
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
    <div className="log-container"style={{backgroundColor:'#E0E4EE',height:'610px',boxShadow:'2px 2px rgb(136, 134, 134)'}}>
      <div className="header">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="year-dropdown">
            {currentYear ? currentYear : "Select Year"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {years.map((year, index) => (
              <Dropdown.Item key={index} onClick={() => handleYearChange(year)}>
                {year}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="table-container"  style={{ height: '500px', overflowY:'auto'}}>
      <Table striped bordered hover className={tableClass}>
          <thead>
            <tr>
              <th className="center">Class</th>
              <th>Books</th>
            </tr>
          </thead>
          <tbody>
            {data.map((classData, index) => (
              <tr key={index}>
                <td className="center">{classData.class}</td>
                <td>
                  <ul className="book-list">
                    {classData.books.map((book, index) => (
                      <li key={index}>{book.book_name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Log;
