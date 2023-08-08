import React, { useState } from "react";

const Form = () => {
const [firstname, setFirstName] = useState('');
const [lastname, setLastName] = useState('');
const [email , setEmail] = useState('');
const [title, setTitle] = useState('');
const [address, setAddress] = useState('');
const [state, setState] = useState('');
const [district, setDistrict] = useState('');
const [locality, setLocality] = useState('');


const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the form from submitting
  // Save form data in local storage
  const formData = {
    firstname,
    lastname,
    email,
    title,
    address,
    state,
    district,
    locality,
  };

};
  return (
    <>
      <center>
        <h1>Register Form</h1>
        <form style={styles.form}>
          <label style={styles.label}>First Name:</label>
          <input type="text" style={styles.input} value={firstname}  placeholder="First Name" onChange={(event) =>setFirstName(event.target.value)} />
          <label style={styles.label}>Last Name:</label>
          <input type="text" style={styles.input} placeholder="Last Name" value={lastname} onChange={(event) =>setLastName(event.target.value)} />
          <label style={styles.label}>Email:</label>
          <input type="email" style={styles.input} placeholder="Email" value={email} onChange={(event) =>setEmail(event.target.value)} />
          <label style={styles.label}>Title:</label>
          <input type="text" style={styles.input} placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
          <label style={styles.label}>Address:</label>
          <input type="text" style={styles.input} placeholder="Address" value={address} onChange={(event) =>setAddress(event.target.value)} />
          <label style={styles.label}>State:</label>
          <input type="text" style={styles.input} placeholder="State"  value={state} onChange={(event) =>setState(event.target.value)}/>
          <label style={styles.label}>District:</label>
          <input type="text" style={styles.input} placeholder="District"  value={district} onChange={(event) =>setDistrict(event.target.value)}/>
          <label style={styles.label}>Locality:</label>
          <input type="text" style={styles.input} placeholder="Locality" value={locality} onChange={(event) => setLocality(event.targetvalue)} />
          <button type="submit" style={styles.button}>Next</button>
        </form>
      </center>
    </>
  );
};

const styles = {
  form: {
    width: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default Form;
