
import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, IconButton, DialogTitle, TextField, CircularProgress, Card, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const FlightPage = () => {
    const [flights, setFlights] = useState([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState({});
    const [dialogType, setDialogType] = useState(''); // 'Add' or 'Edit'
    const [uploading, setUploading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);




    useEffect(() => {
        fetchFlights();
    }, []);

    const fetchFlights = () => {
        fetch('http://localhost:8000/api/flights')
            .then(response => response.json())
            .then(data => setFlights(data))
            .catch(error => console.error('Error fetching flights:', error));
    };

    const handleClickOpenEdit = (flight) => {
        setSelectedFlight({ ...flight });
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleUpdate = () => {
        fetch(`http://localhost:8000/api/flights/${selectedFlight._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedFlight),
        })
            .then(response => response.json())
            .then(() => {
                alert('Flight updated successfully.');
                handleCloseEdit();
                fetchFlights();
            })
            .catch(error => console.error('Error updating flight:', error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Handle nested properties like "timing.departure"
        const [key, nestedKey] = name.split('.');
        if (nestedKey) {
            setSelectedFlight((prevState) => ({
                ...prevState,
                [key]: {
                    ...prevState[key],
                    [nestedKey]: value,
                },
            }));
        } else {
            setSelectedFlight((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleClickOpenDelete = (flight) => {
        setSelectedFlight({ ...flight });
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };


    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setSelectedFlight(prev => ({ ...prev, [name]: value }));
    // };


    const handleDialogOpen = (type, flight = {}) => {
        setDialogType(type);
        setSelectedFlight(flight);
        setOpenDialog(true);
    };
    // const handleFeaturedChange = (event) => {
    //     const value = event.target.value;
    //     setSelectedFlight(prev => ({
    //         ...prev,
    //         featured: value === 'Yes' ? true : false
    //     }));
    // };



    const handleDialogClose = () => {
        setOpenDialog(false);
        setSelectedFlight({});
        setUploading(false);
    };

    const handleDelete = () => {
        fetch(`http://localhost:8000/api/flights/${selectedFlight._id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                alert('Flight deleted successfully.');
                handleCloseDelete();
                fetchFlights();
            })
            .catch(error => console.error('Error deleting flight:', error));
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


    const handleAddOrUpdateFlight = async () => {
        if (dialogType === 'Add') {
            try {
                await axios.post('http://localhost:8000/api/flights/create', selectedFlight);
                alert('flight added successfully!');
            } catch (error) {
                console.error('Failed to add flight:', error);
                alert('Failed to add flight.');
            }
        } else if (dialogType === 'Edit') {
            try {
                await axios.put(`http://localhost:8000/api/flights/${selectedFlight._id}`, selectedFlight);
                alert('Flight updated successfully!');
            } catch (error) {
                console.error('Failed to update flight:', error);
                alert('Failed to update Flight.');
            }
        }
        handleDialogClose();
        fetchFlights();
    };


    return (
        <>
            <Typography variant="h4" gutterBottom>Flight Management</Typography>
            <Divider />
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => handleDialogOpen('Add')}>
                Add New Flight
            </Button>
            <Grid container spacing={3} style={{ marginTop: '1rem' }}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <TableContainer>
                                <Table>

                                    <TableBody>
                                        {/* {flights.map((Flight) => (
                                            <TableRow key={Flight._id}>
                                                <TableCell>{Flight.name}</TableCell>
                                                <TableCell>{Flight.city}</TableCell>
                                                <TableCell>{Flight.address}</TableCell>
                                                <TableCell>₹{Flight.cheapestPrice}</TableCell>
                                                <TableCell>
                                                    <Button onClick={() => handleDialogOpen('Edit', Flight)} variant="outlined" color="primary" title='Update'>
                                                        <EditIcon color="primary" />
                                                    </Button>
                                                    <Button onClick={() => handleDeleteFlight(Flight._id)} variant="outlined" color="error" title='Delete'>
                                                        <DeleteForeverIcon color="secondary" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))} */}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Flight Number</TableCell>
                                            <TableCell>Airline</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Class Type</TableCell>
                                            <TableCell>Timing</TableCell>
                                            <TableCell>Route</TableCell>
                                            <TableCell>Ticket Price</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {flights.map((flight) => (
                                            <TableRow key={flight._id}>
                                                <TableCell>{flight.flightNumber}</TableCell>
                                                <TableCell>{flight.airline}</TableCell>
                                                <TableCell>{new Date(flight.date).toLocaleDateString()}</TableCell>
                                                <TableCell>{flight.classType}</TableCell>
                                                <TableCell>{`Departure: ${flight.timing.departure}, Arrival: ${flight.timing.arrival}`}</TableCell>
                                                <TableCell>{`${flight.route.fromAirport} to ${flight.route.toAirport}`}</TableCell>
                                                <TableCell>₹{flight.ticketPrice}</TableCell>
                                                <TableCell>
                                                    <Button onClick={() => handleClickOpenEdit(flight)} variant="outlined" color="primary" title='Update' ><EditIcon /></Button>
                                                    <Button onClick={() => handleClickOpenDelete(flight)} variant="outlined" color="error" title='Delete'><DeleteIcon /></Button>
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
                <DialogTitle>Update Flight</DialogTitle>
                <DialogContent>
                    {/* Add all the fields for updating a flight here */}
                    <TextField autoFocus margin="dense" name="flightNumber" label="Flight Number" type="text" fullWidth value={selectedFlight.flightNumber || ''} onChange={handleChange} />
                    <TextField margin="dense" name="airline" label="Airline" type="text" fullWidth value={selectedFlight.airline || ''} onChange={handleChange} />
                    <TextField margin="dense" name="date" label="Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={selectedFlight.date ? new Date(selectedFlight.date).toISOString().split('T')[0] : ''} onChange={handleChange} />
                    <TextField margin="dense" name="classType" label="Class Type" type="text" fullWidth value={selectedFlight.classType || ''} onChange={handleChange} />
                    <TextField margin="dense" name="timing.departure" label="Departure Time" type="text" fullWidth value={selectedFlight.timing?.departure || ''} onChange={handleChange} />
                    <TextField margin="dense" name="timing.arrival" label="Arrival Time" type="text" fullWidth value={selectedFlight.timing?.arrival || ''} onChange={handleChange} />
                    <TextField margin="dense" name="route.fromAirport" label="From Airport" type="text" fullWidth value={selectedFlight.route?.fromAirport || ''} onChange={handleChange} />
                    <TextField margin="dense" name="route.toAirport" label="To Airport" type="text" fullWidth value={selectedFlight.route?.toAirport || ''} onChange={handleChange} />
                    <TextField margin="dense" name="ticketPrice" label="Ticket Price" type="number" fullWidth value={selectedFlight.ticketPrice || ''} onChange={handleChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openDelete} onClose={handleCloseDelete}>
                <DialogTitle>Delete Flight</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this flight?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDelete}>Cancel</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>

            </Dialog>

            <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
                <DialogTitle>{dialogType === 'Add' ? 'Add New Flight' : 'Edit Hotel'}</DialogTitle>
                <IconButton onClick={handleDialogClose} style={{ position: 'absolute', right: '8px', top: '8px' }}>
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    {/* Add all the fields for updating a flight here */}
                    <TextField autoFocus margin="dense" name="flightNumber" label="Flight Number" type="text" fullWidth value={selectedFlight.flightNumber || ''} onChange={handleChange} />
                    <TextField margin="dense" name="airline" label="Airline" type="text" fullWidth value={selectedFlight.airline || ''} onChange={handleChange} />
                    <TextField margin="dense" name="date" label="Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={selectedFlight.date ? new Date(selectedFlight.date).toISOString().split('T')[0] : getCurrentDate()} onChange={handleChange} />
                    <TextField margin="dense" name="classType" label="Class Type" type="text" fullWidth value={selectedFlight.classType || ''} onChange={handleChange} />
                    <TextField margin="dense" name="timing.departure" label="Departure Time" type="text" fullWidth value={selectedFlight.timing?.departure || ''} onChange={handleChange} />
                    <TextField margin="dense" name="timing.arrival" label="Arrival Time" type="text" fullWidth value={selectedFlight.timing?.arrival || ''} onChange={handleChange} />
                    <TextField margin="dense" name="route.fromAirport" label="From Airport" type="text" fullWidth value={selectedFlight.route?.fromAirport || ''} onChange={handleChange} />
                    <TextField margin="dense" name="route.toAirport" label="To Airport" type="text" fullWidth value={selectedFlight.route?.toAirport || ''} onChange={handleChange} />
                    <TextField margin="dense" name="totalSeats" label="total Seats" type="text" fullWidth value={selectedFlight.totalSeats || ''} onChange={handleChange} />

                    <TextField margin="dense" name="ticketPrice" label="Ticket Price" type="number" fullWidth value={selectedFlight.ticketPrice || ''} onChange={handleChange} />
                    {uploading && <CircularProgress />}

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={handleAddOrUpdateFlight} disabled={uploading}>
                        {dialogType === 'Add' ? 'Add' : 'Update'}
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    );
};

export default FlightPage;
