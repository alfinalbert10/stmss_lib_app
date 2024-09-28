import React from "react";
import "./return.css";

const Return = () => {
  const handleReturn = () => {
    const bookId = document.getElementById("returnbar").value;

    
    if (bookId.trim() === "") {
      alert("Please enter a valid book ID");
      return;
    }
    fetch("https://sunday-library.onrender.com/admin/books/return", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookId }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.msg);
       
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while returning the book");
      });
  };
  

  return (
    <div
      style={{
        backgroundColor: "#E0E4EE",
        height: "610px",
        boxShadow: "2px 2px rgb(136, 134, 134)",
      }}
    >
      <div className="return-box">
        <input id="returnbar" type="text" placeholder="Enter book ID to return" />
        <button id="retbtn" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default Return;