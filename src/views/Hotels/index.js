// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { Button } from '@mui/material';
// // // import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// // // // material-ui
// // // import { Card, CardHeader, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// // // // project import
// // // import Breadcrumb from 'component/Breadcrumb';
// // // import { gridSpacing } from 'config.js';

// // // // ==============================|| Hotel PAGE ||============================== //

// // // const HotelPage = () => {
// // //   const [hotels, setHotels] = useState([]);

// // //   useEffect(() => {
// // //     fetch('http://localhost:8000/api/hotels')
// // //       .then(response => response.json())
// // //       .then(data => setHotels(data))
// // //       .catch(error => console.error('Error fetching hotels:', error));
// // //   }, []);

// // //   const deleteHotel = (hotelId) => {
// // //     fetch(`http://localhost:8000/api/hotels/${hotelId}`, {
// // //       method: 'DELETE',
// // //     })
// // //     .then(response => {
// // //       if (response.ok) {
// // //         alert('Hotel successfully deleted');
// // //         window.location.reload(); // This refreshes the page
// // //       } else {
// // //         alert('Failed to delete the hotel');
// // //       }
// // //     })
// // //     .catch(error => {
// // //       console.error('Error deleting hotel:', error);
// // //       alert('An error occurred while deleting the hotel');
// // //     });
// // //   };

// // //   return (
// // //     <>
// // //       <Breadcrumb title="All Hotels">
// // //         <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
// // //           Home
// // //         </Typography>
// // //         <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
// // //           All Hotels
// // //         </Typography>
// // //       </Breadcrumb>
// // //       <Grid container spacing={gridSpacing}>
// // //         <Grid item xs={12}>
// // //           <Card>
// // //             <CardHeader
// // //               title={
// // //                 <Typography component="div" className="card-header">
// // //                   Hotel Details
// // //                 </Typography>
// // //               }
// // //             />
// // //             <Divider />
// // //             <CardContent>
// // //               <TableContainer component={Paper}>
// // //                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
// // //                   <TableHead>
// // //                     <TableRow>
// // //                       <TableCell>Hotel Name</TableCell>
// // //                       <TableCell>City</TableCell>
// // //                       <TableCell>Address</TableCell>
// // //                       <TableCell>Price</TableCell>
// // //                       <TableCell>Title</TableCell>
// // //                       <TableCell>Distance</TableCell>

// // //                       <TableCell>Action</TableCell>
// // //                     </TableRow>
// // //                   </TableHead>
// // //                   <TableBody>
// // //                     {hotels.map((hotel) => (
// // //                       <TableRow
// // //                         key={hotel.id}
// // //                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// // //                       >
// // //                         <TableCell component="th" scope="row">
// // //                           {hotel.name}
// // //                         </TableCell>
// // //                         <TableCell>{hotel.city}</TableCell>
// // //                         <TableCell>{hotel.address}</TableCell>
// // //                         <TableCell>{hotel.cheapestPrice}</TableCell>
// // //                         <TableCell>{hotel.title}</TableCell>
// // //                         <TableCell>{hotel.distance}</TableCell>
// // //                         {/* Include additional cells as needed */}
// // //                         <TableCell>
// // //                           <Button variant="outlined" color="error" title='Delete' onClick={() => deleteHotel(hotel._id)}>
// // //                           <DeleteForeverIcon/>
// // //                           </Button>
// // //                         </TableCell>
// // //                       </TableRow>
// // //                     ))}
// // //                   </TableBody>
// // //                 </Table>
// // //               </TableContainer>
// // //             </CardContent>
// // //           </Card>
// // //         </Grid>
// // //       </Grid>
// // //     </>
// // //   );
// // // };

// // // export default HotelPage;

// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// // import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// // import EditIcon from '@mui/icons-material/Edit';

// // // material-ui
// // import { Card, CardHeader, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// // // project import
// // import Breadcrumb from 'component/Breadcrumb';
// // import { gridSpacing } from 'config.js';

// // // ==============================|| Hotel PAGE ||============================== //

// // const HotelPage = () => {
// //   const [hotels, setHotels] = useState([]);
// //   const [open, setOpen] = useState(false);
// //   const [selectedHotel, setSelectedHotel] = useState(null);

// //   useEffect(() => {
// //     fetch('http://localhost:8000/api/hotels')
// //       .then(response => response.json())
// //       .then(data => setHotels(data))
// //       .catch(error => console.error('Error fetching hotels:', error));
// //   }, []);

// //   const handleClickOpen = (hotel) => {
// //     setSelectedHotel(hotel);
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //     setSelectedHotel(null); // Clear selected hotel on close
// //   };

// //   const handleUpdate = () => {
// //     if (selectedHotel) {
// //       fetch(`http://localhost:8000/api/hotels/${selectedHotel._id}`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(selectedHotel),
// //       })
// //       .then(response => {
// //         if (response.ok) {
// //           alert('Hotel successfully updated');
// //           window.location.reload();
// //         } else {
// //           alert('Failed to update the hotel');
// //         }
// //       })
// //       .catch(error => {
// //         console.error('Error updating hotel:', error);
// //         alert('An error occurred while updating the hotel');
// //       });
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setSelectedHotel(prevState => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const deleteHotel = (hotelId) => {
// //     fetch(`http://localhost:8000/api/hotels/${hotelId}`, {
// //       method: 'DELETE',
// //     })
// //     .then(response => {
// //       if (response.ok) {
// //         alert('Hotel successfully deleted');
// //         window.location.reload(); // This refreshes the page
// //       } else {
// //         alert('Failed to delete the hotel');
// //       }
// //     })
// //     .catch(error => {
// //       console.error('Error deleting hotel:', error);
// //       alert('An error occurred while deleting the hotel');
// //     });
// //   };

// //   return (
// //     <>
// //       <Breadcrumb title="All Hotels">
// //         <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
// //           Home
// //         </Typography>
// //         <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
// //           All Hotels
// //         </Typography>

// //       </Breadcrumb>
// //       <Grid container spacing={gridSpacing}>
// //         <Grid item xs={12}>
// //           <Card>
// //             <CardHeader
// //               title={
// //                 <Typography component="div" className="card-header">
// //                   Hotel Details  <button>Add Hotel</button>
// //                 </Typography>
// //               }
// //             />
// //             <Divider />
// //             <CardContent>
// //               <TableContainer component={Paper}>
// //                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //                   <TableHead>
// //                     <TableRow>
// //                       <TableCell>Hotel Name</TableCell>
// //                       <TableCell>City</TableCell>
// //                       <TableCell>Address</TableCell>
// //                       <TableCell>Price</TableCell>
// //                       <TableCell>Title</TableCell>
// //                       <TableCell>Featured</TableCell>
// //                       <TableCell>Action</TableCell>
// //                     </TableRow>
// //                   </TableHead>
// //                   <TableBody>
// //                     {hotels.map((hotel) => (
// //                       <TableRow
// //                         key={hotel.id}
// //                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //                       >
// //                         <TableCell component="th" scope="row">
// //                           {hotel.name}
// //                         </TableCell>
// //                         <TableCell>{hotel.city}</TableCell>
// //                         <TableCell>{hotel.address}</TableCell>
// //                         <TableCell>{hotel.cheapestPrice}</TableCell>
// //                         <TableCell>{hotel.title}</TableCell>
// //                         <TableCell>{hotel.featured ? "Yes" : "No"}</TableCell>
// //                         <TableCell>
// //                           <Button variant="outlined" color="error" title='Delete' onClick={() => deleteHotel(hotel._id)}>
// //                             <DeleteForeverIcon/>
// //                           </Button>
// //                           <Button variant="outlined" color="primary" title='Update' onClick={() => handleClickOpen(hotel)}>
// //                             <EditIcon/>
// //                           </Button>
// //                         </TableCell>
// //                       </TableRow>
// //                     ))}
// //                   </TableBody>
// //                 </Table>
// //               </TableContainer>
// //             </CardContent>
// //           </Card>
// //         </Grid>
// //       </Grid>
// //       <Dialog open={open} onClose={handleClose}>
// //         <DialogTitle>Update Hotel</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             name="name"
// //             label="Hotel Name"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={selectedHotel?.name || ''}
// //             onChange={handleChange}
// //           />
// //              <TextField
// //             margin="dense"
// //             name="city"
// //             label="City"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={selectedHotel?.city || ''}
// //             onChange={handleChange}
// //           />
// //           <TextField
// //             margin="dense"
// //             name="address"
// //             label="Address"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={selectedHotel?.address || ''}
// //             onChange={handleChange}
// //           />
// //           <TextField
// //             margin="dense"
// //             name="distance"
// //             label="Distance"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={selectedHotel?.distance || ''}
// //             onChange={handleChange}
// //           />
// //           <TextField
// //             margin="dense"
// //             name="desc"
// //             label="Description"
// //             type="text"
// //             fullWidth
// //             multiline
// //             rows={4}
// //             variant="standard"
// //             value={selectedHotel?.desc || ''}
// //             onChange={handleChange}
// //           />
// //           <TextField
// //             margin="dense"
// //             name="title"
// //             label="Title"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={selectedHotel?.title || ''}
// //             onChange={handleChange}
// //           />
// //           <TextField
// //             margin="dense"
// //             name="cheapestPrice"
// //             label="Cheapest Price"
// //             type="number"
// //             fullWidth
// //             variant="standard"
// //             value={selectedHotel?.cheapestPrice || ''}
// //             onChange={handleChange}
// //           />

// //           {/* Add more input fields as necessary */}
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose}>Cancel</Button>
// //           <Button onClick={handleUpdate}>Update</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </>
// //   );
// // };

// // export default HotelPage;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel } from '@mui/material';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/Add';

// import Breadcrumb from 'component/Breadcrumb';
// import { gridSpacing } from 'config.js';

// import { Card, CardHeader, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// // Assuming Breadcrumb and gridSpacing are correctly imported from your project's structure

// const HotelPage = () => {
//   const [hotels, setHotels] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false); // Track if the dialog is for editing or adding a new hotel
//   const [selectedHotel, setSelectedHotel] = useState({
//     name: '',
//     city: '',
//     address: '',
//     distance: '',
//     desc: '',
//     title: '',
//     cheapestPrice: '',
//     featured: false,
//   });

//   useEffect(() => {
//     fetch('http://localhost:8000/api/hotels')
//       .then(response => response.json())
//       .then(data => setHotels(data))
//       .catch(error => console.error('Error fetching hotels:', error));
//   }, []);

//   const handleClickOpen = (hotel = null) => {
//     setIsEditing(!!hotel); // Convert truthy or falsy value to boolean
//     setSelectedHotel(hotel || {
//       name: '',
//       city: '',
//       address: '',
//       distance: '',
//       desc: '',
//       title: '',
//       cheapestPrice: '',
//       featured: false,
//     });
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedHotel(null); // Reset the form
//   };

//   const handleFormSubmit = async () => {
//     try {
//       const response = isEditing
//         ? await fetch(`http://localhost:8000/api/hotels/${selectedHotel._id}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(selectedHotel),
//           })
//         : await fetch('http://localhost:8000/api/hotels', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(selectedHotel),
//           });

//       if (response.ok) {
//         alert(`Hotel successfully ${isEditing ? 'updated' : 'added'}.`);
//         handleClose();
//         window.location.reload(); // Or fetch hotels list again to update the UI
//       } else {
//         alert(`Failed to ${isEditing ? 'update' : 'add'} the hotel.`);
//       }
//     } catch (error) {
//       console.error(`Error ${isEditing ? 'updating' : 'adding'} hotel:`, error);
//       alert(`An error occurred while ${isEditing ? 'updating' : 'adding'} the hotel.`);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, checked, type } = e.target;
//     setSelectedHotel((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const deleteHotel = async (hotelId) => {
//     // Similar delete functionality as you've already implemented
//   };

//   return (
//     <>
//       <Breadcrumb title="All Hotels">
//         {/* Breadcrumb content */}
//       </Breadcrumb>
//       <Grid container spacing={gridSpacing}>
//         <Grid item xs={12}>
//           <Card>
//             <CardHeader title="Hotel Details" action={
//               <Button startIcon={<AddIcon />} color="primary" onClick={() => handleClickOpen()}>
//                 Add Hotel
//               </Button>
//             }/>
//             <Divider />
//             <CardContent>
//            <TableContainer component={Paper}>
//              <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                <TableHead>
//                  <TableRow>
//                    <TableCell>Hotel Name</TableCell>
//                    <TableCell>City</TableCell>
//                    <TableCell>Address</TableCell>
//                    <TableCell>Price</TableCell>
//                    <TableCell>Title</TableCell>
//                    <TableCell>Featured</TableCell>
//                    <TableCell>Action</TableCell>
//                  </TableRow>
//                </TableHead>
//                <TableBody>
//                  {hotels.map((hotel) => (
//                    <TableRow
//                      key={hotel.id}
//                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                    >
//                      <TableCell component="th" scope="row">
//                        {hotel.name}
//                      </TableCell>
//                      <TableCell>{hotel.city}</TableCell>
//                      <TableCell>{hotel.address}</TableCell>
//                      <TableCell>{hotel.cheapestPrice}</TableCell>
//                      <TableCell>{hotel.title}</TableCell>
//                      <TableCell>{hotel.featured ? "Yes" : "No"}</TableCell>
//                      <TableCell>
//                        <Button variant="outlined" color="error" title='Delete' onClick={() => deleteHotel(hotel._id)}>
//                          <DeleteForeverIcon/>
//                        </Button>
//                        <Button variant="outlined" color="primary" title='Update' onClick={() => handleClickOpen(hotel)}>
//                          <EditIcon/>
//                        </Button>
//                      </TableCell>
//                    </TableRow>
//                  ))}
//                </TableBody>
//              </Table>
//            </TableContainer>
//          </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{isEditing ? 'Update Hotel' : 'Add New Hotel'}</DialogTitle>
//         <DialogContent>
//           {/* TextFields for input */}
//           {/* Example TextField for Hotel Name */}
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             name="name"
//             label="Hotel Name"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={selectedHotel.name}
//             onChange={handleChange}
//           />
//           {/* Include other fields similarly */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleFormSubmit}>{isEditing ? 'Update' : 'Add'}</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default HotelPage;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/Add';

// // material-ui
// import { Card, CardHeader, CardContent, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// // project import
// import Breadcrumb from 'component/Breadcrumb';
// import { gridSpacing } from 'config.js';

// // ==============================|| Hotel PAGE ||============================== //

// const HotelPage = () => {
//   const [hotels, setHotels] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedHotel, setSelectedHotel] = useState(null);

//   const [openAddDialog, setOpenAddDialog] = useState(false);
//   const [newHotel, setNewHotel] = useState({
//     name: '',
//     city: '',
//     address: '',
//     cheapestPrice: ''
//   });

//   useEffect(() => {
//     fetch('http://localhost:8000/api/hotels')
//       .then(response => response.json())
//       .then(data => setHotels(data))
//       .catch(error => console.error('Error fetching hotels:', error));
//   }, []);

//   const handleClickOpenAdd = () => {
//     setOpenAddDialog(true);
//   };

//   const handleCloseAdd = () => {
//     setOpenAddDialog(false);
//     setNewHotel({ name: '', city: '', address: '', cheapestPrice: '' });
//   };

//   const handleAddHotel = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/hotels', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newHotel),
//       });
//       if (response.ok) {
//         alert('Hotel successfully added');
//         handleCloseAdd();
//         window.location.reload();
//       } else {
//         alert('Failed to add the hotel');
//       }
//     } catch (error) {
//       console.error('Error adding hotel:', error);
//       alert('An error occurred while adding the hotel');
//     }
//   };

//   const handleNewHotelChange = (e) => {
//     const { name, value } = e.target;
//     setNewHotel(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     if (selectedHotel) {
//       fetch(`http://localhost:8000/api/hotels/${selectedHotel._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(selectedHotel),
//       })
//       .then(response => {
//         if (response.ok) {
//           alert('Hotel successfully updated');
//           window.location.reload();
//         } else {
//           alert('Failed to update the hotel');
//         }
//       })
//       .catch(error => {
//         console.error('Error updating hotel:', error);
//         alert('An error occurred while updating the hotel');
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedHotel(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const deleteHotel = (hotelId) => {
//     fetch(`http://localhost:8000/api/hotels/${hotelId}`, {
//       method: 'DELETE',
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Hotel successfully deleted');
//         window.location.reload(); // This refreshes the page
//       } else {
//         alert('Failed to delete the hotel');
//       }
//     })
//     .catch(error => {
//       console.error('Error deleting hotel:', error);
//       alert('An error occurred while deleting the hotel');
//     });
//   };

//   return (
//     <>
//       <Breadcrumb title="All Hotels">
//         <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
//           Home
//         </Typography>
//         <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
//           All Hotels
//         </Typography>

//       </Breadcrumb>
//       <Grid container spacing={gridSpacing}>
//         <Grid item xs={12}>
//           <Card>
//             <CardHeader
//               title={
//                 <Typography component="div" className="card-header">
//                   Hotel Details    <Button startIcon={<AddIcon />} color="primary" onClick={handleClickOpenAdd}>
//         Add Hotel
//       </Button>
//                 </Typography>
//               }
//             />
//             <Divider />

//             <Dialog open={openAddDialog} onClose={handleCloseAdd}>
//         <DialogTitle>Add New Hotel</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             name="name"
//             label="Hotel Name"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={newHotel.name}
//             onChange={handleNewHotelChange}
//           />
//           <TextField
//             margin="dense"
//             id="city"
//             name="city"
//             label="City"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={newHotel.city}
//             onChange={handleNewHotelChange}
//           />
//           <TextField
//             margin="dense"
//             id="address"
//             name="address"
//             label="Address"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={newHotel.address}
//             onChange={handleNewHotelChange}
//           />
//           <TextField
//             margin="dense"
//             id="cheapestPrice"
//             name="cheapestPrice"
//             label="Cheapest Price"
//             type="number"
//             fullWidth
//             variant="outlined"
//             value={newHotel.cheapestPrice}
//             onChange={handleNewHotelChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseAdd}>Cancel</Button>
//           <Button onClick={handleAddHotel}>Add</Button>
//         </DialogActions>
//       </Dialog>

//             <CardContent>
//               <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Hotel Name</TableCell>
//                       <TableCell>City</TableCell>
//                       <TableCell>Address</TableCell>
//                       <TableCell>Price</TableCell>
//                       <TableCell>Title</TableCell>
//                       <TableCell>Featured</TableCell>
//                       <TableCell>Action</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {hotels.map((hotel) => (
//                       <TableRow
//                         key={hotel.id}
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                       >
//                         <TableCell component="th" scope="row">
//                           {hotel.name}
//                         </TableCell>
//                         <TableCell>{hotel.city}</TableCell>
//                         <TableCell>{hotel.address}</TableCell>
//                         <TableCell>{hotel.cheapestPrice}</TableCell>
//                         <TableCell>{hotel.title}</TableCell>
//                         <TableCell>{hotel.featured ? "Yes" : "No"}</TableCell>
//                         <TableCell>
//                           <Button variant="outlined" color="error" title='Delete' onClick={() => deleteHotel(hotel._id)}>
//                             <DeleteForeverIcon/>
//                           </Button>
//                           <Button variant="outlined" color="primary" title='Update' onClick={() => handleClickOpen(hotel)}>
//                             <EditIcon/>
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
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Update Hotel</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             name="name"
//             label="Hotel Name"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={selectedHotel?.name || ''}
//             onChange={handleChange}
//           />
//              <TextField
//             margin="dense"
//             name="city"
//             label="City"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={selectedHotel?.city || ''}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="address"
//             label="Address"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={selectedHotel?.address || ''}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="distance"
//             label="Distance"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={selectedHotel?.distance || ''}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="desc"
//             label="Description"
//             type="text"
//             fullWidth
//             multiline
//             rows={4}
//             variant="standard"
//             value={selectedHotel?.desc || ''}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="title"
//             label="Title"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={selectedHotel?.title || ''}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="cheapestPrice"
//             label="Cheapest Price"
//             type="number"
//             fullWidth
//             variant="standard"
//             value={selectedHotel?.cheapestPrice || ''}
//             onChange={handleChange}
//           />

//           {/* Add more input fields as necessary */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleUpdate}>Update</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default HotelPage;

// import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/Add';
// import CloseIcon from '@mui/icons-material/Close';

// import {
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper
// } from '@mui/material';

// // Assume Breadcrumb and gridSpacing are defined elsewhere in your project.
// // If not, you can remove or replace these components accordingly.

// const HotelPage = () => {
//   const [hotels, setHotels] = useState([]);
//   const [openEditDialog, setOpenEditDialog] = useState(false);
//   const [openAddDialog, setOpenAddDialog] = useState(false);
//   const [selectedHotel, setSelectedHotel] = useState({});
//   const [newHotel, setNewHotel] = useState({
//     name: '',
//     city: '',
//     address: '',
//     title: '',
//     desc: '',
//     distance: '',
//     cheapestPrice: ''
//   });

//   useEffect(() => {
//     fetchHotels();
//   }, []);

//   const fetchHotels = async () => {
//     const response = await fetch('http://localhost:8000/api/hotels');
//     const data = await response.json();
//     setHotels(data);
//   };

//   const handleOpenEditDialog = (hotel) => {
//     setSelectedHotel(hotel);
//     setOpenEditDialog(true);
//   };

//   const handleCloseEditDialog = () => {
//     setOpenEditDialog(false);
//     setSelectedHotel({});
//   };

//   const handleOpenAddDialog = () => {
//     setOpenAddDialog(true);
//   };

//   const handleCloseAddDialog = () => {
//     setOpenAddDialog(false);
//     setNewHotel({
//       name: '',
//       city: '',
//       address: '',
//       title: '',
//       desc: '',
//       distance: '',
//       cheapestPrice: ''
//     });
//   };

//   const handleAddHotel = async () => {
//     try {
//       await fetch('http://localhost:8000/api/hotels', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newHotel)
//       });
//       alert('Hotel added successfully!');
//       handleCloseAddDialog();
//       fetchHotels();
//     } catch (error) {
//       console.error('Failed to add hotel:', error);
//       alert('Failed to add hotel.');
//     }
//   };

//   const handleUpdateHotel = async () => {
//     try {
//       await fetch(`http://localhost:8000/api/hotels/${selectedHotel._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(selectedHotel)
//       });
//       alert('Hotel updated successfully!');
//       handleCloseEditDialog();
//       fetchHotels();
//     } catch (error) {
//       console.error('Failed to update hotel:', error);
//       alert('Failed to update hotel.');
//     }
//   };

//   const handleDeleteHotel = async (id) => {
//     try {
//       await fetch(`http://localhost:8000/api/hotels/${id}`, {
//         method: 'DELETE'
//       });
//       alert('Hotel deleted successfully!');
//       fetchHotels();
//     } catch (error) {
//       console.error('Failed to delete hotel:', error);
//       alert('Failed to delete hotel.');
//     }
//   };

//   const handleInputChange = (e, isEditing = false) => {
//     const { name, value } = e.target;
//     if (isEditing) {
//       setSelectedHotel({ ...selectedHotel, [name]: value });
//     } else {
//       setNewHotel({ ...newHotel, [name]: value });
//     }
//   };

//   return (
//     <>
//       <Typography variant="h4" gutterBottom>
//         All Hotels
//       </Typography>
//       <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenAddDialog}>
//         Add Hotel
//       </Button>

//       {/* Display Hotels */}
//       <Grid container spacing={2} style={{ marginTop: '20px' }}>
//         <Grid item xs={12}>
//           <Card>
//             <CardContent>
//               <TableContainer component={Paper}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Hotel Name</TableCell>
//                       <TableCell>City</TableCell>
//                       <TableCell>Address</TableCell>
//                       <TableCell>Price</TableCell>
//                       <TableCell>Action</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {hotels.map((hotel) => (
//                       <TableRow key={hotel._id}>
//                         <TableCell>{hotel.name}</TableCell>
//                         <TableCell>{hotel.city}</TableCell>
//                         <TableCell>{hotel.address}</TableCell>
//                         <TableCell>{hotel.cheapestPrice}</TableCell>
//                         <TableCell>
//                           <IconButton color="primary" onClick={() => handleOpenEditDialog(hotel)}>
//                             <EditIcon />
//                           </IconButton>
//                           <IconButton color="secondary" onClick={() => handleDeleteHotel(hotel._id)}>
//                             <DeleteForeverIcon />
//                           </IconButton>
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

//       {/* Add Hotel Dialog */}
//       <Dialog open={openAddDialog} onClose={handleCloseAddDialog} maxWidth="sm" fullWidth>
//         <DialogTitle>
//           Add New Hotel
//           <IconButton onClick={handleCloseAddDialog} style={{ position: 'absolute', right: '8px', top: '8px' }}>
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Name"
//             name="name"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={newHotel.name}
//             onChange={(e) => handleInputChange(e, false)}
//           />
//           <TextField
//             label="City"
//             name="city"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={newHotel.city}
//             onChange={(e) => handleInputChange(e, false)}
//           />
//           <TextField
//             label="Address"
//             name="address"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={newHotel.address}
//             onChange={(e) => handleInputChange(e, false)}
//           />
//             <TextField
//             label="Title"
//             name="title"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={newHotel.title}
//             onChange={(e) => handleInputChange(e, false)}
//           />
//             <TextField
//             label="Description"
//             name="desc"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={newHotel.desc}
//             onChange={(e) => handleInputChange(e, false)}
//           />

// <TextField
//             label="Distance from center"
//             name="distance"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={newHotel.distance}
//             onChange={(e) => handleInputChange(e, false)}
//           />
//           <TextField
//             label="Cheapest Price"
//             name="cheapestPrice"
//             type="number"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={newHotel.cheapestPrice}
//             onChange={(e) => handleInputChange(e, false)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseAddDialog}>Cancel</Button>
//           <Button onClick={handleAddHotel} color="primary">
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Edit Hotel Dialog */}
//       <Dialog open={openEditDialog} onClose={handleCloseEditDialog} maxWidth="sm" fullWidth>
//         <DialogTitle>
//           Edit Hotel
//           <IconButton onClick={handleCloseEditDialog} style={{ position: 'absolute', right: '8px', top: '8px' }}>
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Name"
//             name="name"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={selectedHotel.name || ''}
//             onChange={(e) => handleInputChange(e, true)}
//           />
//           <TextField
//             label="City"
//             name="city"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={selectedHotel.city || ''}
//             onChange={(e) => handleInputChange(e, true)}
//           />
//           <TextField
//             label="Address"
//             name="address"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={selectedHotel.address || ''}
//             onChange={(e) => handleInputChange(e, true)}
//           />

// <TextField
//             label="Title"
//             name="title"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={selectedHotel.title || ''}
//             onChange={(e) => handleInputChange(e, true)}
//           />

//             <TextField
//             label="Description"
//             name="desc"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={selectedHotel.desc || ''}
//             onChange={(e) => handleInputChange(e, true)}
//           />

//         <TextField
//             label="Distance from center"
//             name="distance"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={selectedHotel.distance || ''}
//             onChange={(e) => handleInputChange(e, true)}
//           />

//           <TextField
//             label="Cheapest Price"
//             name="cheapestPrice"
//             type="number"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={selectedHotel.cheapestPrice || ''}
//             onChange={(e) => handleInputChange(e, true)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseEditDialog}>Cancel</Button>
//           <Button onClick={handleUpdateHotel} color="primary">
//             Update
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default HotelPage;








import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Card, CardContent, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';


const HotelPage = () => {
  const [hotels, setHotels] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(''); // 'Add' or 'Edit'
  const [selectedHotel, setSelectedHotel] = useState({});
  const [uploading, setUploading] = useState(false);






  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    const response = await fetch('http://localhost:8000/api/hotels');
    const data = await response.json();
    setHotels(data);
  };

  const handleDialogOpen = (type, hotel = {}) => {
    setDialogType(type);
    setSelectedHotel(hotel);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedHotel({});
    setUploading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedHotel(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    setUploading(true);
    try {
      const urls = await Promise.all([...files].map(file => uploadImage(file)));
      setSelectedHotel(prev => ({ ...prev, photos: urls }));
      setUploading(false);
    } catch (error) {
      console.error('Failed to upload images:', error);
      setUploading(false);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'upload');
    const response = await axios.post('https://api.cloudinary.com/v1_1/dfyhz7yzg/image/upload', formData);
    return response.data.secure_url;
  };

  const handleAddOrUpdateHotel = async () => {
    if (dialogType === 'Add') {
      try {
        await axios.post('http://localhost:8000/api/hotels', selectedHotel);
        alert('Hotel added successfully!');
      } catch (error) {
        console.error('Failed to add hotel:', error);
        alert('Failed to add hotel.');
      }
    } else if (dialogType === 'Edit') {
      try {
        await axios.put(`http://localhost:8000/api/hotels/${selectedHotel._id}`, selectedHotel);
        alert('Hotel updated successfully!');
      } catch (error) {
        console.error('Failed to update hotel:', error);
        alert('Failed to update hotel.');
      }
    }
    handleDialogClose();
    fetchHotels();
  };

  const handleDeleteHotel = async (hotelId) => {
    try {
      await axios.delete(`http://localhost:8000/api/hotels/${hotelId}`);
      alert('Hotel deleted successfully!');
      fetchHotels();
    } catch (error) {
      console.error('Failed to delete hotel:', error);
      alert('Failed to delete hotel.');
    }
  };

  const handleFeaturedChange = (event) => {
    const value = event.target.value;
    setSelectedHotel(prev => ({
      ...prev,
      featured: value === 'Yes' ? true : false
    }));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Hotel Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => handleDialogOpen('Add')}
      >
        Add New Hotel
      </Button>
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {hotels.map((hotel) => (
                      <TableRow key={hotel._id}>
                        <TableCell>{hotel.name}</TableCell>
                        <TableCell>{hotel.city}</TableCell>
                        <TableCell>{hotel.address}</TableCell>
                        <TableCell>₹{hotel.cheapestPrice}</TableCell>
                        <TableCell>
                          <Button onClick={() => handleDialogOpen('Edit', hotel)} variant="outlined" color="primary" title='Update'>
                            <EditIcon color="primary" />
                          </Button>
                          <Button onClick={() => handleDeleteHotel(hotel._id)} variant="outlined" color="error" title='Delete'>
                            <DeleteForeverIcon color="secondary" />
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
      
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>{dialogType === 'Add' ? 'Add New Hotel' : 'Edit Hotel'}</DialogTitle>
        <IconButton onClick={handleDialogClose} style={{ position: 'absolute', right: '8px', top: '8px' }}>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Hotel Name"
            type="text"
            fullWidth
            value={selectedHotel.name || ''}
            onChange={handleInputChange}
          />
          
          
          <TextField
            margin="dense"
            name="type"
            label="property Type"
            type="text"
            fullWidth
            value={selectedHotel.type || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="city"
            label="City"
            type="text"
            fullWidth
            value={selectedHotel.city || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="address"
            label="Address"
            type="text"
            fullWidth
            value={selectedHotel.address || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={selectedHotel.title || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="rating"
            label="rating"
            type="number"
            fullWidth
            value={selectedHotel.rating || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="desc"
            label="Discription"
            type="text"
            fullWidth
            value={selectedHotel.desc || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="distance"
            label="Distance from center"
            type="text"
            fullWidth
            value={selectedHotel.distance || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="cheapestPrice"
            label="Cheapest Price"
            type="number"
            fullWidth
            value={selectedHotel.cheapestPrice || ''}
            onChange={handleInputChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="featured-label">Featured</InputLabel>
            <Select
              labelId="featured-label"
              value={selectedHotel.featured ? 'Yes' : 'No'}
              label="Featured"
              onChange={handleFeaturedChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>

          <input
            accept="image/*"
            type="file"
            multiple
            onChange={handleFileChange}
            disabled={uploading}
          />
          {uploading && <CircularProgress />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleAddOrUpdateHotel} disabled={uploading}>
            {dialogType === 'Add' ? 'Add' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HotelPage;




