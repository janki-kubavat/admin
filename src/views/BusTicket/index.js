import React, { useState, useEffect } from 'react';



import { Card, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BusTicket = () => {
    const [flights, setFlights] = useState([]);


    useEffect(() => {
        fetchTicket();
    }, []);

    const fetchTicket = () => {
        fetch('http://localhost:8000/api/buses/booked-tickets/')
            .then(response => response.json())
            .then(data => setFlights(data))
            .catch(error => console.error('Error fetching Ticket:', error));
    };


    


    return (
        <>
            <Typography variant="h4" gutterBottom>
                Bus Ticket Management
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
                                            <TableCell>Bus Name</TableCell>
                                            <TableCell>Bus Operator</TableCell>
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
                                                <TableCell>{flight.operator}</TableCell>
                                                <TableCell>{flight.date}</TableCell>
                                                <TableCell>{flight.route.from}</TableCell>
                                                <TableCell>{flight.route.to}</TableCell>
                                                <TableCell>{flight.time.departure}</TableCell>
                                                <TableCell>{flight.time.arrival}</TableCell>
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

export default BusTicket;
