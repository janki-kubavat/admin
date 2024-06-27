import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import Reservation from 'views/Reservation';
import BusTicket from 'views/BusTicket';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/Users')));
const HotelPage = Loadable(lazy(() => import('../views/Hotels')));
const BusPage = Loadable(lazy(() => import('../views/Buses')));
const FlightPage = Loadable(lazy(() => import('../views/Flights')));
const FlightTicket = Loadable(lazy(() => import('../views/FlightTicket')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/user-page', element: <SamplePage /> },
    { path: '/hotel-page', element: <HotelPage /> },
    { path: '/bus-page', element: <BusPage/> },
    { path: '/flight-page', element: <FlightPage/> },
    { path: '/flightTicket', element: <FlightTicket/> },
    { path: '/busTicket', element: <BusTicket/> },
    { path: '/reservation', element: <Reservation/> }

  ]
};

export default MainRoutes;
