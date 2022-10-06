import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";

const AddAdmin = () => {
    let navigate = useNavigate();

    const[admin, setAdmin]=useState({
        name:"",
        contact:"",
        email:"",
        password:"",
        role:"",
    });

    const handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const newAdmin={ ...admin };

        newAdmin[event.target.name]=event.target.value;

        setAdmin(newAdmin);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        console.log("handleSubmit");

        const newAdmin={
            adminName:admin.name,
            contact:admin.contact,
            loginDto: {
                loginEmail:admin.email,
                loginPassword:admin.password,
                role:admin.role,
            },

        };


        console.log(newAdmin);

        axios.post("http://localhost:8080/admin/add",newAdmin)
             .then((res) => {
                console.log(res);
                alert("Added new Admin "+ res.data.adminName +" successfully");
                navigate("/admin");
             })
             .catch((error)=> console.log(error));
    };

    return(
        <div>
            <Toolbar/>
            <h2 align="center">Add New Admin</h2>
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
    )
}

export default AddAdmin;