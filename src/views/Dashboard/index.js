import React, { useEffect, useState } from 'react';
import axios from 'axios';



// material-ui
import { useTheme, Grid } from '@mui/material';

// import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress } from '@mui/material';

//project import
// import SalesLineCard from './SalesLineCard';
// import SalesLineCardData from './chart/sale-chart-1';

// import RevenuChartCard from './RevenuChartCard';
// import RevenuChartCardData from './chart/revenu-chart';
import ReportCard from './ReportCard';
import { gridSpacing } from 'config.js';

// assets
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
// import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
// import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
// import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';

// custom style
// const FlatCardBlock = styled((props) => <Grid item sm={6} xs={12} {...props} />)(({ theme }) => ({
//   padding: '25px 25px',
//   borderLeft: '1px solid' + theme.palette.background.default,
//   [theme.breakpoints.down('sm')]: {
//     borderLeft: 'none',
//     borderBottom: '1px solid' + theme.palette.background.default
//   },
//   [theme.breakpoints.down('md')]: {
//     borderBottom: '1px solid' + theme.palette.background.default
//   }
// }));

// ==============================|| DASHBOARD DEFAULT ||============================== //





const Default = () => {
  const theme = useTheme();
  const [userCount, setUserCount] = useState(0);
  const [hotelCount, setHotelCount] = useState(0);
  const [busCount, setBusCount] = useState(0);
  const [flightCount, setFlightCount] = useState(0);
  const [reservationCount, setreservationCount] = useState(0);
  const [busTicketCount, setbusTicketCount] = useState(0);
  const [FlightTicketCount, setFlightTicketCount] = useState(0);



  // Fetch count from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get('http://localhost:8000/api/users/');
        setUserCount(usersRes.data.length); // Adjust according to your API response structure

        const hotelsRes = await axios.get('http://localhost:8000/api/hotels/');
        setHotelCount(hotelsRes.data.length); // Adjust according to your API response structure

        const busesRes = await axios.get('http://localhost:8000/api/buses/');
        setBusCount(busesRes.data.length); // Adjust according to your API response structure

        const flightsRes = await axios.get('http://localhost:8000/api/flights/');
        setFlightCount(flightsRes.data.length); // Adjust according to your API response structure

        const busTicket = await axios.get('http://localhost:8000/api/buses/booked-tickets/');
        setbusTicketCount(busTicket.data.length); //
        
        
        const flightTicket = await axios.get('http://localhost:8000/api/flights/booked-tickets/');
        setFlightTicketCount(flightTicket.data.length); 

        const Reservation = await axios.get('http://localhost:8000/api/reservation/');



        setreservationCount(Reservation.data.length); // Adjust according to your API response structure
      } catch (error) {
        console.error('Failed to fetch counts:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12} >
            <ReportCard
              primary={`👤${userCount * 1}`}
              secondary="Total Users"
              color={theme.palette.warning.main}
            // footerData="10% changes on profit"
            // iconPrimary={MonetizationOnTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} >
            <ReportCard
              primary={`🏨${hotelCount}`}
              secondary="Hotels"
              color={theme.palette.error.main}
            // footerData="28% task performance"
            // iconPrimary={CalendarTodayTwoTone}
            // iconFooter={TrendingDownIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={`🚌${busCount}`}
              secondary="Buses"
              color={theme.palette.success.main}
            // footerData="10k daily views"
            // iconPrimary={DescriptionTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={`✈️${flightCount}`}
              secondary="Flights"
              color={theme.palette.primary.main}
            // footerData="1k download in App store"
            // iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={`🎫${reservationCount}`}
              secondary="Reservation"
              color={theme.palette.success.main}
            // footerData="1k download in App store"
            // iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={`🎫${FlightTicketCount}`}
              secondary="Flight Tickets "
              color={theme.palette.warning.main}
            // footerData="1k download in App store"
            // iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={`🎫${busTicketCount}`}
              secondary="Bus Tickets"
              color={theme.palette.primary.main}
            // footerData="1k download in App store"
            // iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
        </Grid>
      </Grid>






    </Grid>
  );
};

export default Default;