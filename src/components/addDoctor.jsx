import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';


const AddDoctor = () => {
    let navigate = useNavigate();

    const[doctor, setDoctor]=useState({
        doctorName:"",
        spec:"",
        doctorAvailability:"",
    });

    const handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const newDoctor={ ...doctor };

        newDoctor[event.target.name]=event.target.value;

        setDoctor(newDoctor);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        console.log("handleSubmit");

        const newDoctor={
            doctorName:doctor.doctorName,
            spec:doctor.spec,
            doctorAvailability:doctor.doctorAvailability,
        };


        console.log(newDoctor);

        axios.post("http://localhost:8080/admin/addDoctor",newDoctor)
             .then((res) => {
                console.log(res);
                alert("Added new Doctor "+ res.data.doctorName +" successfully");
                navigate("/doctor");
             })
             .catch((error)=> console.log(error));
    };

    return(
        <div>
            <Toolbar/>
            <h2 align="center">Add New Doctor</h2>
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
                        name="doctorName"
                        label="Doctor Name"
                        variant="outlined"
                        value={doctor.doctorName}
                        onChange={handleChange}/>
                    <br/>
                    <Select
                            required
                            id="spec"
                            name="spec"
                            value={doctor.spec}
                            label="Specialization"
                            onChange={handleChange}
                            style={{ width: "250px", margin: "10px" }}
                        >
                            <MenuItem value={"Pulmonologists"}>Pulmonologists</MenuItem>
                            <MenuItem value={"Allergists"}>Allergists</MenuItem>
                            <MenuItem value={"Cardiologists"}>Cardiologists</MenuItem>
                            <MenuItem value={"Critical_Care_Medicine_Specialists"}>Critical_Care_Medicine_Specialists</MenuItem>
                            <MenuItem value={"Dermatologists"}>Dermatologists</MenuItem>
                            <MenuItem value={"Endocrinologists"}>Endocrinologists</MenuItem>
                            <MenuItem value={"Emergency_Medicine_Specialists"}>Emergency_Medicine_Specialists</MenuItem>
                            <MenuItem value={"Family_Physicians"}>Family_Physicians</MenuItem>
                            <MenuItem value={"PatieGastroenterologistsnt"}>Gastroenterologists</MenuItem>
                            <MenuItem value={"Geriatric_Medicine_Specialists"}>Geriatric_Medicine_Specialists</MenuItem>
                            <MenuItem value={"Hematologists"}>Hematologists</MenuItem>
                            <MenuItem value={"EndocInfectious_Disease_Specialistsrinologists"}>EnInfectious_Disease_Specialistsdocrinologists</MenuItem>
                            <MenuItem value={"Neurologists"}>Neurologists</MenuItem>
                            <MenuItem value={"Gynecologists"}>Gynecologists</MenuItem>
                            <MenuItem value={"Ophthalmologists"}>Ophthalmologists</MenuItem>
                            <MenuItem value={"Pediatricians"}>Pediatricians</MenuItem>
                        </Select>
                        <br/>
                        <Select
                            required
                            id="availability"
                            name="availability"
                            value={doctor.availability}
                            label="Availability"
                            onChange={handleChange}
                            style={{ width: "250px", margin: "10px" }}
                        >
                            <MenuItem value={true}>Available</MenuItem>
                            <MenuItem value={false}>Unavailable</MenuItem>
                        </Select>
                </div>
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
            </form>
        </div>
    )
}

export default AddDoctor;