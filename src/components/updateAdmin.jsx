import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";

const UpdateAdmin = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  // define state
  const[admin, setAdmin]=useState({
    adminId:"",
    name:"",
    contact:"",
    email:"",
    password:"",
    role:"",
});

  
  useEffect(() => {
    axios.get(`http://localhost:8080/admin/findById/${params.id}`)
      .then((res) => setAdmin(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    const newAdmin = { ...admin };

    newAdmin[event.target.name] = event.target.value;

    setAdmin(newAdmin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send put request to update
    axios
      .put(`http://localhost:8080/admin/update/${params.id}`, admin)
      .then((res) => {
        console.log(res);
        // alert user with msg
        alert("Updated Administrator " + res.data.name + " successfully!");
        // redirect to employees page
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Toolbar/>
            <h2 align="center">Update Admin</h2>
            <form className="border p-3" onSubmit={handleSubmit}>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                align="center"
                noValidate
                autoComplete="off">
                <div>
                <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="adminId"
                        label="Admin Id"
                        variant="outlined"
                        value={admin.adminId}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="name"
                        label="Admin Name"
                        variant="outlined"
                        value={admin.name}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="contact"
                        id="contact"
                        label="Contact"
                        value={admin.contact}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        id="email"
                        name="email"
                        label="Eamil"
                        value={admin.email}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        id="outlined-password-input"
                        name="password"
                        label="Password"
                        type="password"
                        value={admin.password}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        id="role"
                        name="role"
                        label="Role"
                        value={admin.role}
                        onChange={handleChange}/>
                    <br/>
                </div>
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
            </form>
    </div>
  );
};

export default UpdateAdmin;
