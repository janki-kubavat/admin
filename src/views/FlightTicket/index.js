import React, { useState, useEffect } from 'react';



import { Card, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FlightTicket = () => {
    const [flights, setFlights] = useState([]);


    useEffect(() => {
        fetchTicket();
    }, []);

    const fetchTicket = () => {
        fetch('http://localhost:8000/api/flights/booked-tickets/')
            .then(response => response.json())
            .then(data => setFlights(data))
            .catch(error => console.error('Error fetching Ticket:', error));
    };


   


    return (
        <>
            <Typography variant="h4" gutterBottom>
                Flight Ticket Management
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
                                            <TableCell>Flight Name</TableCell>
                                            <TableCell>Journey Date</TableCell>
                                            <TableCell>From</TableCell>
                                            <TableCell>To</TableCell>
                                            <TableCell>Departure</TableCell>
                                            <TableCell>Arrival</TableCell>
                                            <TableCell>Price</TableCell>
                                            
                                           
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {flights.map((flight) => (
                                            <TableRow key={flight._id}>
                                                <TableCell>{flight.name}</TableCell>
                                                <TableCell>{flight.date}</TableCell>
                                                <TableCell>{flight.route.fromAirport}</TableCell>
                                                <TableCell>{flight.route.toAirport}</TableCell>
                                                <TableCell>{flight.timing.departure}</TableCell>
                                                <TableCell>{flight.timing.arrival}</TableCell>
                                                <TableCell>{flight.price}</TableCell>
                                                

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

export default FlightTicket;
