// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Card, CardHeader, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// // project imports
// import Breadcrumb from 'component/Breadcrumb';
// import { gridSpacing } from 'config.js';

// // ==============================|| BUS PAGE ||============================== //

// const BusPage = () => {
//   const [buses, setBuses] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/api/buses/')
//       .then(response => response.json())
//       .then(data => setBuses(data))
//       .catch(error => console.error('Error fetching buses:', error));
//   }, []);

//   const deleteBus = (busId) => {
//     fetch(`http://localhost:8000/api/buses/${busId}`, {
//       method: 'DELETE',
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Bus successfully deleted');
//         window.location.reload(); // This refreshes the page
//       } else {
//         alert('Failed to delete the bus');
//       }
//     })
//     .catch(error => {
//       console.error('Error deleting bus:', error);
//       alert('An error occurred while deleting the bus');
//     });
//   };

//   const handleUpdate = () => {
//     const updatedBus = {
//       ...selectedBus,
//       totalSeats: parseInt(selectedBus.totalSeats), // Ensure totalSeats is an integer
//       ticketPrice: parseInt(selectedBus.ticketPrice), // Ensure ticketPrice is an integer
//       // Convert date to an appropriate format if necessary
//       date: new Date(selectedBus.date).toISOString(),
//     };

//     fetch(`http://localhost:8000/api/buses/${selectedBus._id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedBus),
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Bus successfully updated');
//         window.location.reload();
//       } else {
//         alert('Failed to update the bus');
//       }
//     })
//     .catch(error => {
//       console.error('Error updating bus:', error);
//       alert('An error occurred while updating the bus');
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "totalSeats" || name === "ticketPrice") {
//       setSelectedBus(prevState => ({
//         ...prevState,
//         [name]: parseInt(value),
//       }));
//     } else {
//       setSelectedBus(prevState => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   return (
//     <>
//       <Breadcrumb title="All Buses">
//         <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
//           Home
//         </Typography>
//         <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
//           All Buses
//         </Typography>
//       </Breadcrumb>
//       <Grid container spacing={gridSpacing}>
//         <Grid item xs={12}>
//           <Card>
//             <CardHeader
//               title={
//                 <Typography component="div" className="card-header">
//                   Bus Details
//                 </Typography>
//               }
//             />
//             <Divider />
//             <CardContent>
//               <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Operator</TableCell>
//                       <TableCell>Route</TableCell>
//                       <TableCell>Total Seats</TableCell>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Type</TableCell>

//                       {/* Add more columns as needed */}
//                       <TableCell>Action</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {buses.map((bus) => (
//                       <TableRow
//                         key={bus.id}
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                       >
//                         <TableCell component="th" scope="row">
//                           {bus.name}
//                         </TableCell>
//                         <TableCell>{bus.operator}</TableCell>
//                         <TableCell>{bus.route.from} To {bus.route.to}</TableCell>
//                         <TableCell>{bus.totalSeats}</TableCell>
//                         <TableCell>{bus.date}</TableCell>
//                         <TableCell>{bus.busType}</TableCell>

//                         <TableCell>
//                           <Button variant="outlined" color="error" title='Delete' onClick={() => deleteBus(bus._id)}>
//                           <DeleteForeverIcon/>
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default BusPage;










import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Dialog,IconButton, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

import { Card, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BusPage = () => {
  const [buses, setBuses] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [dialogType, setDialogType] = useState(''); // 'Add' or 'Edit'
  const [uploading, setUploading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = () => {
    fetch('http://localhost:8000/api/buses')
      .then(response => response.json())
      .then(data => setBuses(data))
      .catch(error => console.error('Error fetching buses:', error));
  };

  const handleClickOpenEdit = (bus) => {
    setSelectedBus({
      ...bus,
      date: bus.date ? new Date(bus.date).toISOString().split('T')[0] : '', // Adjust date for input[type=date]
    });
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedBus(null);
  };

  const handleUpdate = () => {
    // Adjust data format for sending
    const dataToSend = {
      ...selectedBus,
      totalSeats: parseInt(selectedBus.totalSeats),
      ticketPrice: parseInt(selectedBus.ticketPrice),
      date: new Date(selectedBus.date),
    };

    fetch(`http://localhost:8000/api/buses/${selectedBus._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => {
        if (response.ok) {
          alert('Bus successfully updated');
          handleCloseEdit();
          fetchBuses();
        } else {
          alert('Failed to update the bus');
        }
      })
      .catch(error => {
        console.error('Error updating bus:', error);
        alert('An error occurred while updating the bus');
      });
  };

  const handleDelete = (busId) => {
    if (window.confirm("Are you sure you want to delete this bus?")) {
      fetch(`http://localhost:8000/api/buses/${busId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            alert('Bus successfully deleted');
            fetchBuses();
          } else {
            alert('Failed to delete the bus');
          }
        })
        .catch(error => {
          console.error('Error deleting bus:', error);
          alert('An error occurred while deleting the bus');
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Handle nested properties like "timing.departure"
    const [key, nestedKey] = name.split('.');
    if (nestedKey) {
      setSelectedBus((prevState) => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          [nestedKey]: value,
        },
      }));
    } else {
      setSelectedBus((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleDialogOpen = (type, flight = {}) => {
    setDialogType(type);
    setSelectedBus(flight);
    setOpenDialog(true);
  };


  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedBus({});
    setUploading(false);
  };


  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    // Ensure month and day are in double-digit format
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  };




  const handleAddOrUpdateBus = async () => {
    if (dialogType === 'Add') {
      try {
        await axios.post('http://localhost:8000/api/buses/create', selectedBus);
        alert('Bus added successfully!');
      } catch (error) {
        console.error('Failed to add Bus:', error);
        alert('failed to add  bus.');
      }
    } else if (dialogType === 'Edit') {
      try {
        await axios.put(`http://localhost:8000/api/buses/${selectedBus._id}`, selectedBus);
        alert('Bus updated successfully!');
      } catch (error) {
        console.error('Failed to update flight:', error);
        alert('Failed to update Bus.');
      }
    }
    handleDialogClose();
    fetchBuses();
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Bus Management
      </Typography>
      <Divider />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => handleDialogOpen('Add')}>
        Add New Bus
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Bus Name</TableCell>
                      <TableCell>Operator</TableCell>
                      <TableCell>Total Seats</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Bus Type</TableCell>
                      <TableCell>Timing</TableCell>
                      <TableCell>Route</TableCell>
                      <TableCell>Ticket Price</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {buses.map((bus) => (
                      <TableRow key={bus._id}>
                        <TableCell>{bus.name}</TableCell>
                        <TableCell>{bus.operator}</TableCell>
                        <TableCell>{bus.totalSeats}</TableCell>
                        <TableCell>{new Date(bus.date).toLocaleDateString()}</TableCell>
                        <TableCell>{bus.busType}</TableCell>
                        <TableCell>{`${bus.timing.departure} - ${bus.timing.arrival}`}</TableCell>
                        <TableCell>{`${bus.route.from} to ${bus.route.to}`}</TableCell>
                        <TableCell>₹{bus.ticketPrice}</TableCell>
                        <TableCell>
                          <Button onClick={() => handleClickOpenEdit(bus)} variant="outlined" color="error" title='Delete'><EditIcon /></Button>
                          <Button onClick={() => handleDelete(bus._id)} variant="outlined" color="primary" title='Update'><DeleteForeverIcon /></Button>
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

      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Update Bus</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" name="name" label="Bus Name" type="text" fullWidth variant="outlined" value={selectedBus?.name || ''} onChange={handleChange} />
          <TextField margin="dense" name="operator" label="Operator" type="text" fullWidth variant="outlined" value={selectedBus?.operator || ''} onChange={handleChange} />
          <TextField margin="dense" name="totalSeats" label="Total Seats" type="number" fullWidth variant="outlined" value={selectedBus?.totalSeats || ''} onChange={handleChange} />
          <TextField margin="dense" name="date" label="Date" type="date" fullWidth variant="outlined" InputLabelProps={{ shrink: true, }} value={selectedBus?.date || ''} onChange={handleChange} />
          <TextField margin="dense" name="busType" label="Bus Type" type="text" fullWidth variant="outlined" value={selectedBus?.busType || ''} onChange={handleChange} />
          <TextField margin="dense" name="timing.departure" label="Departure Time" type="text" fullWidth variant="outlined" value={selectedBus?.timing?.departure || ''} onChange={handleChange} />
          <TextField margin="dense" name="timing.arrival" label="Arrival Time" type="text" fullWidth variant="outlined" value={selectedBus?.timing?.arrival || ''} onChange={handleChange} />
          <TextField margin="dense" name="route.from" label="Route From" type="text" fullWidth variant="outlined" value={selectedBus?.route?.from || ''} onChange={handleChange} />
          <TextField margin="dense" name="route.to" label="Route To" type="text" fullWidth variant="outlined" value={selectedBus?.route?.to || ''} onChange={handleChange} />
          <TextField margin="dense" name="ticketPrice" label="Ticket Price" type="number" fullWidth variant="outlined" value={selectedBus?.ticketPrice || ''} onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>{dialogType === 'Add' ? 'Add New Bus' : 'Edit Bus'}</DialogTitle>
        <IconButton onClick={handleDialogClose} style={{ position: 'absolute', right: '8px', top: '8px' }}>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <TextField autoFocus margin="dense" name="name" label="Bus Name" type="text" fullWidth variant="outlined" value={selectedBus?.name || ''} onChange={handleChange} />
          <TextField margin="dense" name="operator" label="Operator" type="text" fullWidth variant="outlined" value={selectedBus?.operator || ''} onChange={handleChange} />
          <TextField margin="dense" name="totalSeats" label="Total Seats" type="number" fullWidth variant="outlined" value={selectedBus?.totalSeats || ''} onChange={handleChange} />
          <TextField margin="dense" name="date" label="Date" type="date" fullWidth variant="outlined" InputLabelProps={{ shrink: true, }} value={selectedBus?.date || getCurrentDate()} onChange={handleChange} />
          <TextField margin="dense" name="busType" label="Bus Type" type="text" fullWidth variant="outlined" value={selectedBus?.busType || ''} onChange={handleChange} />
          <TextField margin="dense" name="timing.departure" label="Departure Time" type="text" fullWidth variant="outlined" value={selectedBus?.timing?.departure || ''} onChange={handleChange} />
          <TextField margin="dense" name="timing.arrival" label="Arrival Time" type="text" fullWidth variant="outlined" value={selectedBus?.timing?.arrival || ''} onChange={handleChange} />
          <TextField margin="dense" name="route.from" label="Route From" type="text" fullWidth variant="outlined" value={selectedBus?.route?.from || ''} onChange={handleChange} />
          <TextField margin="dense" name="route.to" label="Route To" type="text" fullWidth variant="outlined" value={selectedBus?.route?.to || ''} onChange={handleChange} />
          <TextField margin="dense" name="ticketPrice" label="Ticket Price" type="number" fullWidth variant="outlined" value={selectedBus?.ticketPrice || ''} onChange={handleChange} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleAddOrUpdateBus} disabled={uploading}>
            {dialogType === 'Add' ? 'Add' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>



    </>
  );
};

export default BusPage;
