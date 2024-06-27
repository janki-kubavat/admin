import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


import { Card, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Reservation = () => {
    const [reservations, setReservation] = useState([]);


    useEffect(() => {
        fetchBuses();
    }, []);

    const fetchBuses = () => {
        fetch('http://localhost:8000/api/reservation/')
            .then(response => response.json())
            .then(data => setReservation(data))
            .catch(error => console.error('Error fetching Reservation:', error));
    };


    const handleDelete = (reservationId) => {
        if (window.confirm("Are you sure you want to delete this bus?")) {
            fetch(`http://localhost:8000/api/reservation/${reservationId}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (response.ok) {
                        alert('Reservation successfully deleted');
                        fetchBuses();
                    } else {
                        alert('Failed to delete the Reservation');
                    }
                })
                .catch(error => {
                    console.error('Error deleting bus:', error);
                    alert('An error occurred while deleting the Reservation');
                });
        }
    };


    return (
        <>
            <Typography variant="h4" gutterBottom>
                Reservation Management
            </Typography>
            <Divider />

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Hotel Name</TableCell>
                                            <TableCell>Guest Name</TableCell>
                                            <TableCell>Check-in</TableCell>
                                            <TableCell>Check-Out</TableCell>
                                            <TableCell>RoomType</TableCell>
                                            <TableCell>Room No.</TableCell>
                                            <TableCell>totalPrice</TableCell>
                                            <TableCell>Phone</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {reservations.map((reservation) => (
                                            <TableRow key={reservation._id}>
                                                <TableCell>{reservation.hotelName}</TableCell>
                                                <TableCell>{reservation.guestName}</TableCell>
                                                <TableCell>{reservation.checkInDate}</TableCell>
                                                <TableCell>{reservation.checkOutDate}</TableCell>
                                                <TableCell>{reservation.roomType}</TableCell>
                                                <TableCell>{reservation.reservationRooms}</TableCell>
                                                <TableCell>{reservation.totalPrice}</TableCell>
                                                <TableCell>{reservation.phone}</TableCell>

                                                

                                                <TableCell>
                                                    <Button onClick={() => handleDelete(reservation._id)} variant="outlined" color="primary" title='Update'><DeleteForeverIcon /></Button>
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

export default Reservation;
