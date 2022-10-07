import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PasswordIcon from '@mui/icons-material/Password';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function Login() {
    let navigate = useNavigate();

    const[login, setLogin]=useState({
        email:"",
        password:"",
        role:"",
    });

    const handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const newLogin={ ...login };

        newLogin[event.target.name]=event.target.value;

        setLogin(newLogin);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        console.log("handleSubmit");

        const newLogin={
            loginEmail:login.loginEmail,
            loginPassword:login.loginPassword,
            role:login.role,
        };


        console.log(newLogin);

        axios.post("http://localhost:8080/login/dto",newLogin)
             .then((res) => {
                console.log(res);
                alert("User loggedin successfully");
                if(login.role=="Admin"){
                navigate("/adminDashboard");
                }
                if(login.role=="Patient"){
                    navigate("/patient");
                }
                if(login.role=="Reporter"){
                    navigate("/reporter")
                }
             })
             .catch((error)=> console.log(error));
    };

    return(
        <div className="main">
            <div className="sub-main">
                <div align="center">
                <div className="imgs">
                    <div className="container-image">
                    <AccountBoxIcon/>
                    </div>
                </div>
                <div>
                    <h1>User Login</h1>
                    <form onSubmit={handleSubmit}>
                    <div>
                    <EmailIcon/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        id="email"
                        name="loginEmail"
                        label="Email"
                        value={login.loginEmail}
                        onChange={handleChange}/>
                    <br/>
                    </div>
                    <div className="second-input">
                        <PasswordIcon/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        id="password"
                        name="loginPassword"
                        label="Password"
                        type="password"
                        value={login.loginPassword}
                        onChange={handleChange}/>
                    <br/>
                    </div>
                    
                        <Select
                            required
                            id="role"
                            name="role"
                            value={login.role}
                            label="Role"
                            onChange={handleChange}
                            style={{ width: "250px", margin: "10px" }}
                        >
                            <MenuItem value={"Admin"}>Admin</MenuItem>
                            <MenuItem value={"Reporter"}>Reporter</MenuItem>
                            <MenuItem value={"Patient"}>Patient</MenuItem>
                        </Select>
                    <div className="login-button">
                    <button type="submit">Submit</button>
                    </div>
                    <p className="link">
                        <a href="a">Forgot password ?</a> Or <a href="a">Sign Up</a>
                    </p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}