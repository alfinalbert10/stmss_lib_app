import React, { useState } from "react";
import "./Addstd.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddStd = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [classname, setClassname] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const validateName = (name) => {
    const regex = /\d/;
    if (regex.test(name)) return "Name must not contain numbers.";
    return null;
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setErrors({ ...errors, name: validateName(newName) });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
 const nameError = validateName(name);
 if (nameError) {
  setErrors({
    name: nameError,

  });
  return; // Stop the submission since there are errors
}

    axios
      .post("https://sunday-library.onrender.com/admin/students", {
        id: id,
        name: name,

        classname: classname,
      })
      .then((res) => {
        navigate("/students");
      })
      .catch((er) => alert(er.response.data.msg));
  };

  return (
    <div>
      <div >
        <div id="main" >
          <h2 style={{ marginTop: "20px", marginLeft: "450px" }}>
            ADD NEW STUDENT
          </h2>
          <div id="add" className="add-book-container"  style={{
        backgroundColor:'#E0E4EE' ,
  

      }}>
            <form className="add-book-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="id">Id:</label>
                <input
                  type="text"
                  id="id"
                  required
                  placeholder="Enter the Id"
                  onChange={(e) => setId(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter the name"
                  onChange={handleNameChange}
                />
                 {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="class" className="form-label">
                  Class:
                </label>
                <input
                  type="text"
                  id="class"
                  required
                  placeholder="Enter Class"
                  onChange={(e) => setClassname(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-btn">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStd;
