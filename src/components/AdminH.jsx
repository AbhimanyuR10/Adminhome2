import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

const AdminH = () => {
    var nam = [
        { name: "Abhimanyu", age: 21, email: "abhi@gmail.com", phone: "940021896" },
        { name: "madhav", age: 20, email: "madhav@gmail.com", phone: "9998787822" },
      ];

      const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./";
      };

  return (
    <div>
    <center><h3>Welcome Admin</h3></center>
    <div style={{paddingTop:'100px'}}>
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "black", backgroundColor: "grey", fontFamily: "cursive", fontSize: "15px" }}>Name</TableCell>
              <TableCell style={{ color: "black", backgroundColor: "grey", fontFamily: "cursive", fontSize: "15px" }}>Age</TableCell>
              <TableCell style={{ color: "black", backgroundColor: "grey", fontFamily: "cursive", fontSize: "15px" }}>Email</TableCell>
              <TableCell style={{ color: "black", backgroundColor: "grey", fontFamily: "cursive", fontSize: "15px" }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nam.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.age}</TableCell>
                  <TableCell>{value.email}</TableCell>
                  <TableCell>{value.phone}</TableCell>
                  <TableCell>
                    <Button variant="contained">view</Button> 
                    </TableCell>
                    <TableCell>
                    <Button variant='contained'>Delete</Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        </TableContainer>
        <Button variant='text' onClick={logOut} > Log Out</Button>
                
        </div>
    </div>
  )
}

export default AdminH