import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'; 
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// ==============================|| SAMPLE PAGE ||============================== //

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);


  const deleteUser = (userId) => {
    fetch(`http://localhost:8000/api/users/${userId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        alert('User successfully deleted');
        window.location.reload(); // This refreshes the page
      } else {
        alert('Failed to delete the user');
      }
    })
    .catch(error => {
      console.error('Error deleting user:', error);
      alert('An error occurred while deleting the user');
    });
  };
  


  return (
    <>
      <Breadcrumb title="All Users">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          All Users
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  User Details
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Username</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      {/* <TableCell>Photo</TableCell> */}
                      <TableCell>Action</TableCell> {/* New TableCell for the Action column */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow
                        key={user.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {user.username}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        {/* <TableCell><img src={user.img} alt="img" width={30}/></TableCell> */}
                        <TableCell>
                          {/* Add a delete button for each user */}
                          <Button variant="outlined" color="error" title='Delete' onClick={() => deleteUser(user._id)}>
                          <DeleteForeverIcon/>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Users;
