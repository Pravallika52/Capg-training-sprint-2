import React  from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";



const DoctorTable = (props) => {



    return(
        <div align="center">
            <NavLink to="/addDoctor">
            <Button variant="contained">Add Doctor</Button></NavLink>
            <TableContainer  component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Doctor Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Specialization</TableCell>
                            <TableCell align="right">Availability</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.doctor.map((doctor)=> (
                        <TableRow
                        key={doctor.doctorId}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{doctor.doctorId}</TableCell>
                        <TableCell align="right">{doctor.doctorName}</TableCell>
                        <TableCell align="right">{doctor.spec}</TableCell>
                        <TableCell align="right">{doctor.doctorAvailable?<h4>Available</h4>:<h4>Unavailable</h4>}</TableCell>
                        <TableCell align="right">
                        <Link to={`/admin/updateDoctor/${doctor.doctorId}`}>
                                <UpdateIcon/>
                            </Link>
                            <Button onClick={() => props.handleDelete(doctor.doctorId)} variant="text">
                            <DeleteIcon/>
                            </Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            
        </div>
    )
}

export default DoctorTable;