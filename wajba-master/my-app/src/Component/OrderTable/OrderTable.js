

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faEdit, faInfo, faCashRegister } from '@fortawesome/free-solid-svg-icons';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { styled } from '@mui/material/styles';
// import LanguageIcon from '@mui/icons-material/Language';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../sidebar/Sidebar';
// import Grid from '@mui/material/Grid';

// const user = {
//   email: 'example@example.com',
//   password: '********',
//   lastLogin: '2023-09-01 14:30:00',
//   lastLogout: '2023-09-02 09:15:00',
// };

// const Buttons = styled(Button)(({ theme }) => ({
//   // Styles for Buttons
// }));

// const ContentWrapper = styled(Box)(({ theme }) => ({
//   // Styles for ContentWrapper
// }));

// const SidebarContainer = styled(Box)(({ theme }) => ({
//   // Styles for SidebarContainer
// }));

// export default function Admin() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const navigate = useNavigate();

//   const handleProfileClick = () => {
//     navigate('/profile');
//     handleClose();
//   };

//   const handleSettingsClick = () => {
//     // Handle settings click logic
//     handleClose();
//   };

//   const handleLogoutClick = () => {
//     // Handle logout click logic
//     navigate('/');
//     handleClose();
//   };

//   const [userData, setUserData] = useState(user);

//   useEffect(() => {
//     // Simulate fetching user data from a backend
//   }, []);

//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     // Simulate fetching user data from a backend
//   }, []);

//   const [orders, setOrders] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     // Generate random data for orders
//     const randomOrders = [];
//     for (let i = 1; i <= 10; i++) {
//       const order = {
//         serialNumber: i,
//         customerName: `Customer ${i}`,
//         waiter: `Waiter ${i}`,
//         state: `State ${i}`,
//         amount: Math.floor(Math.random() * 1000) + 1,
//         actions: (
//           <div>
//             <button onClick={() => handleDelete(i)}>
//               <FontAwesomeIcon icon={faTrash} />
//             </button>
//             <button onClick={() => handleEdit(i)}>
//               <FontAwesomeIcon icon={faEdit} />
//             </button>
//             <button onClick={() => handleDetails(i)}>
//               <FontAwesomeIcon icon={faInfo} />
//             </button>
//             <button onClick={() => handlePOS(i)}>
//               <FontAwesomeIcon icon={faCashRegister} />
//             </button>
//           </div>
//         ),
//       };
//       randomOrders.push(order);
//     }
//     setOrders(randomOrders);
//   }, []);

//   const handleDelete = (orderId) => {
//     // Implement delete logic here
//     alert(`Delete clicked for order with ID ${orderId}`);
//   };

//   const handleEdit = (orderId) => {
//     // Implement edit logic here
//     alert(`Edit clicked for order with ID ${orderId}`);
//   };

//   const handleDetails = (orderId) => {
//     // Implement details logic here
//     alert(`Details clicked for order with ID ${orderId}`);
//   };

//   const handlePOS = (orderId) => {
//     // Implement POS logic here
//     alert(`POS clicked for order with ID ${orderId}`);
//   };

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const filteredOrders = orders.filter((order) =>
//     order.customerName.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <div className='topbar'>
//         {/* Topbar content */}
//       </div>

//       <ContentWrapper>
//         <Grid container spacing={2} columns={16} paddingLeft={2} paddingRight={2} paddingTop={3}>
//           <Grid item xs={16}>
//             <section className='content-header'>
//               <div className='header-icon'><i className='bi bi-house'></i></div>
//               <div className='header-title'>
//                 <h1>Profile Page</h1>
//                 <small>Profile Page</small>
//               </div>
//             </section>
//           </Grid>
//         </Grid>

//         <div className='col-sm-12 col-md-8'>
//           <div className='panel panel-bd'>
//             <div className='panel-heading'>
//               <div className='panel-title'>
//                 <h4>Profile Page</h4>
//               </div>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Search by customer name..."
//                 onChange={handleSearchChange}
//               />
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Serial Number</th>
//                     <th>Customer Name</th>
//                     <th>Waiter</th>
//                     <th>State</th>
//                     <th>Amount</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredOrders.map((order) => (
//                     <tr key={order.serialNumber}>
//                       <td>{order.serialNumber}</td>
//                       <td>{order.customerName}</td>
//                       <td>{order.waiter}</td>
//                       <td>{order.state}</td>
//                       <td>{order.amount}</td>
//                       <td>{order.actions}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </ContentWrapper>
//       <SidebarContainer>
//         <Sidebar />
//       </SidebarContainer>
//     </div>
//   );
// }





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faInfo, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Grid from '@mui/material/Grid';

const user = {
  email: 'example@example.com',
  password: '********', // You should never display passwords like this in a real app
  lastLogin: '2023-09-01 14:30:00',
  lastLogout: '2023-09-02 09:15:00',
};

const Buttons = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  color: 'orange',
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  borderColor: 'orange',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'orange',
    borderColor: 'orange',
    color: 'white',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  overflowX: 'hidden',
  marginLeft: '240px', // Adjust this value based on your sidebar width
  padding: theme.spacing(2), // Add padding for content
  backgroundColor: theme.palette.background.default, // Set background color
  marginTop: '64px', // Adjust this value to remove space between top bar and content
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '64px', // Adjust this value to match the top bar's height
  left: 0,
  width: '240px', // Set the width of your sidebar
  height: '100%',
  backgroundColor: theme.palette.background.default, // Set the sidebar's background color
  zIndex: 1,
  overflowY: 'auto', // Enable vertical scrolling
}));

export default function Admin() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleProfileClick = () => {
    // Handle the profile menu item click logic here
    // For example, redirect to the profile page
    navigate('/profile');
    handleClose();
  };

  const handleSettingsClick = () => {
    // Handle the settings menu item click logic here
    // For example, open a settings modal
    // You can add your own logic for handling settings
    handleClose();
  };

  const handleLogoutClick = () => {
    // Handle the logout menu item click logic here
    // For example, log the user out and redirect to the login page
    // You can add your own logout logic
    navigate('/');
    handleClose();
  };
  const [userData, setUserData] = useState(user);

  // Simulate fetching user data from a backend
  useEffect(() => {
    // In a real application, you would make an API call to fetch user data
    // For this example, we use the hardcoded user data
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  // Simulate fetching user data from a backend
  useEffect(() => {
    // In a real application, you would make an API call to fetch user data
    // For this example, we use the hardcoded user data
  }, []);




  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Generate random data for orders
    const randomOrders = [];
    for (let i = 1; i <= 10; i++) {
      const order = {
        serialNumber: i,
        customerName: `Customer ${i}`,
        waiter: `Waiter ${i}`,
        state: `State ${i}`,
        amount: Math.floor(Math.random() * 1000) + 1,
        actions: (
          <div>
            <button onClick={() => handleDelete(i)} onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button onClick={() => handleEdit(i)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => handleDetails(i)}  onClick={() => navigate('/orderdetail')}>
              <FontAwesomeIcon icon={faInfo} />
            </button>
            <button onClick={() => handlePOS(i)} onClick={() => navigate('/posinvoice')}>
              <FontAwesomeIcon icon={faCashRegister} />
            </button>
          </div>
        ),
      };
      randomOrders.push(order);
    }
    setOrders(randomOrders);
  }, []);

  const handleDelete = (orderId) => {
    // Implement delete logic here
    alert(`Delete clicked for order with ID ${orderId}`);
  };

  const handleEdit = (orderId) => {
    // Implement edit logic here
    alert(`Edit clicked for order with ID ${orderId}`);
  };

  const handleDetails = (orderId) => {
    // Implement details logic here
    alert(`Details clicked for order with ID ${orderId}`);
  };

  const handlePOS = (orderId) => {
    // Implement POS logic here
    alert(`POS clicked for order with ID ${orderId}`);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className='topbar'>
        <div className='topbarwrapper'>
          <div className='topLeft'></div>

          <Stack direction='row' spacing={2}>
            <Buttons className='boxStyling' variant='outlined'  onClick={() => navigate('/posinvoicetopbar')}>
              Pos Invoice
            </Buttons>
            <Buttons
              className='boxStyling'
              variant='outlined'
              onClick={() => navigate('/orderlist')}
            >
              Order list
            </Buttons>
            <Buttons
              className='boxStyling'
              variant='outlined'
              onClick={() => navigate('/kitchen')}
            >
              Kitchen dashboard
            </Buttons>
            <Buttons
              className='boxStyling'
              variant='outlined'
              onClick={() => navigate('/counter')}
            >
              Counter dashboard
            </Buttons>
          </Stack>

          <div className='topRight'>
            <div className='topbarIconContainer'>
              <NotificationsNoneIcon />
              <span className='topIconBadge'>2</span>
            </div>
            <div className='topbarIconContainer'>
              <LanguageIcon />
              <span className='topIconBadge'>2</span>
            </div>
            <React.Fragment>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title='Account settings'>
                  <IconButton
                    onClick={handleClick}
                    size='small'
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32, color: 'white', backgroundColor: 'orange' }}>N</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleProfileClick}>
                  <Avatar
                    onClick={() => navigate('/profile')}
                  /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSettingsClick} onClick={() => navigate('/setting')}>
                  <ListItemIcon>
                    <Settings fontSize='small' />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>
                  <ListItemIcon>
                    <Logout fontSize='small' />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </div>
        </div>
      </div>

      <ContentWrapper>
        <Grid container spacing={2} columns={16} paddingLeft={2} paddingRight={2} paddingTop={3}>
          <Grid item xs={16}>
            <section className='content-header'>
              <div className='header-icon'><i className='bi bi-house'></i></div>
              <div className='header-title'>
                <h1>Order list</h1>
                <small>Order list</small>
              </div>
            </section>
          </Grid>
        </Grid>
        
            
            <div className='col-sm-12 col-md-8'>
          <div className='panel panel-bd'>
            <div className='panel-heading'>
              <div className='panel-title'>
                <h4>Order list</h4>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search by customer name..."
                onChange={handleSearchChange}
              />
              <table>
                <thead>
                  <tr>
                    <th>Serial Number</th>
                    <th>Customer Name</th>
                    <th>Waiter</th>
                    <th>State</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.serialNumber}>
                      <td>{order.serialNumber}</td>
                      <td>{order.customerName}</td>
                      <td>{order.waiter}</td>
                      <td>{order.state}</td>
                      <td>{order.amount}</td>
                      <td>{order.actions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

         
      </ContentWrapper>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
    </div>
  );
}


