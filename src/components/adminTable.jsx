import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';


const AdminTable = (props) => {
    return(
        <div align="center">
            <NavLink to="/addAdmin">
            <Button variant="contained">Add Admin</Button></NavLink>
            <TableContainer  component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Admin Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Contact</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.admin.map((admin)=> (
                        <TableRow
                        key={admin.adminId}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{admin.adminId}</TableCell>
                        <TableCell align="right">{admin.adminName}</TableCell>
                        <TableCell align="right">{admin.contact}</TableCell>
                        <TableCell align="right">{admin.login.loginEmail}</TableCell>
                        <TableCell align="right">
                        <Link to={`/admin/update/${admin.adminId}`}>
                                <UpdateIcon/>
                            </Link>
                            <Button onClick={() => props.handleDelete(admin.adminId)} variant="text">
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

export default AdminTable;