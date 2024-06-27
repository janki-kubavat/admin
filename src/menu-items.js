// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon
};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      title: 'Materially',
      caption: 'Dashboard',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/dashboard/default'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      caption: 'all Pages',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'user-page',
          title: 'Users',
          type: 'item',
          url: '/user-page',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'hotel-page',
          title: 'Hotels',
          type: 'item',
          url: '/hotel-page',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'bus-page',
          title: 'Buses',
          type: 'item',
          url: '/bus-page',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'flight-page',
          title: 'Flights',
          type: 'item',
          url: '/flight-page',
          icon: icons['ChromeReaderModeOutlinedIcon']
        }, {
          id: 'reservation',
          title: 'Reservation',
          type: 'item',
          url: '/reservation',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'flightTicket',
          title: 'Flight Ticket',
          type: 'item',
          url: '/flightTicket',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'busTicket',
          title: 'Bus Ticket',
          type: 'item',
          url: '/busTicket',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
      
      ]
    },
  ]
};
