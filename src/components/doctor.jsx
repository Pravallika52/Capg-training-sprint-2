import React, { Component } from "react";
import axios from "axios";
import DoctorTable from "./doctorTable";
import { Toolbar } from "@mui/material";

class Doctor extends Component{
    state = {
        doctor:[],
    };

    componentDidMount() {
        axios.get("http://localhost:8080/admin/getAllDoctors")
             .then((response) => {
                console.log(response);
                this.setState({doctor:response.data});
             })
             .catch((error) => console.log(error));
    }

    handleDelete = (docId) => {
        axios.delete(`http://localhost:8080/admin/deleteDoctor/${docId}`)
             .then((res) => {
                console.log(res);
                const doctor=this.state.doctor.filter((doctor) => doctor.docId!==docId);
                this.setState({doctor:doctor});
                alert("Doctor with DoctorId "+ docId +" deleted successfully!");
             })
             .catch((err) => console.log(err));
    };

    render() {
        return(
            <div>
                <Toolbar />
                <h2 align="center">Doctor Details</h2>
                    <DoctorTable doctor={this.state.doctor}
                                handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default Doctor;