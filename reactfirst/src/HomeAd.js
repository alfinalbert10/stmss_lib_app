import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./homead.css";


const Home = ({ cardTitle, cardName ,isLoading  }) => {
  

  const NumberAnimate = ({ number }) => {
    const [displayNumber, setDisplayNumber] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const end = parseInt(number, 10);
  
      
      if (start === end) {
        setDisplayNumber(end);
        return;
      }
  
      
      let totalMiliseconds = Math.abs(end - start) * 15; 
      totalMiliseconds = Math.min(2000, Math.max(totalMiliseconds, 1000)); 
  
      const incrementTime = (totalMiliseconds / end);
  
      const timer = setInterval(() => {
        start += 1;
        setDisplayNumber(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
  
      return () => clearInterval(timer);
    }, [number]);
  
    return <span>{displayNumber}</span>;
  };


  return (
    <div className="container">
      <div className="container">
        <div className="card-container">
          <Card style={{ width: "18rem",backgroundColor:'#5BD3C7' }}>
            <Card.Body>
              <Card.Title>{cardTitle}</Card.Title>
              {isLoading ? (
        <div style={{color:'black'}}>Loading...</div>
      ) : (
              <Card.Text style={{marginTop:'30px',fontWeight:'bold',fontSize:'30px'}}><NumberAnimate number={cardName} /></Card.Text>
      )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
