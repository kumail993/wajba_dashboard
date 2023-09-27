
// import React, { useState } from 'react';
// import './KitchenTable.css';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

// const Buttons = styled(Button)(({ theme }) => ({
//   boxShadow: 'none',
//   textTransform: 'none',
//   fontSize: 14,
//   color: 'orange',
//   padding: '6px 12px',
//   border: '1px solid',
//   lineHeight: 1.5,
//   borderColor: 'orange',
//   fontFamily: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     '"Segoe UI"',
//     'Roboto',
//     '"Helvetica Neue"',
//     'Arial',
//     'sans-serif',
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//   ].join(','),
//   '&:hover': {
//     backgroundColor: 'orange',
//     borderColor: 'orange',
//     color: 'white',
//     boxShadow: 'none',
//   },
//   '&:active': {
//     boxShadow: 'none',
//     backgroundColor: '#0062cc',
//     borderColor: '#005cbf',
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//   },
// }));

// export default function Admin() {
//   const [menuCategories, setMenuCategories] = useState([
//     'Desi',
//     'Beverage',
//     'Chinese',
//     'Common',
//     'French',
//     'Indian',
//     'Italian',
//     'main',
//   ]);

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [orders, setOrders] = useState([]);

//   const generateRandomOrders = (category) => {
//     const randomOrders = [];
//     for (let i = 1; i <= 5; i++) {
//       randomOrders.push({
//         orderId: i,
//         customerName: `Customer ${i}`,
//         itemName: `${category} Food ${i}`,
//         // Add more random data as needed
//       });
//     }
//     return randomOrders;
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     const randomOrders = generateRandomOrders(category);
//     setOrders(randomOrders);
//   };

//   return (
//     <div>
//       <div className="container-1 mt-5">
//         <div className="col-sm-12 col-md-8">
//           <Buttons
//             className="Refreshpage"
//             variant="outlined"
//             onClick={() => handleCategoryClick(selectedCategory)}
//           >
//             Refresh Page
//           </Buttons>
//           <div className="panel panel-bd">
//             <div className="panel-heading">
//               <div className="panel-title">
//                 <Stack direction="row" spacing={2}>
//                   {menuCategories.map((category, index) => (
//                     <Buttons
//                       key={index}
//                       className="boxStyling"
//                       variant="outlined"
//                       onClick={() => handleCategoryClick(category)}
//                     >
//                       {category}
//                     </Buttons>
//                   ))}
//                 </Stack>
//               </div>
//             </div>
//           </div>
//           {selectedCategory && orders.length > 0 ? (
//           <div className="order-table">
//             <h2>{selectedCategory} Orders</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Order ID</th>
//                   <th>Customer Name</th>
//                   <th>Item Name</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order.orderId}>
//                     <td>{order.orderId}</td>
//                     <td>{order.customerName}</td>
//                     <td>{order.itemName}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <h3 className='OrderNotFound'>Order Not Found!!</h3>
//         )}
//         </div>

//       </div>
//     </div>
//   );
// }




import './KitchenTable.css';
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

import Grid from '@mui/material/Grid';
import Sidebar from '../Sidebar';

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
  const [menuCategories, setMenuCategories] = useState([
    'Desi',
    'Beverage',
    'Chinese',
    'Common',
    'French',
    'Indian',
    'Italian',
    'main',
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [orders, setOrders] = useState([]);

  const generateRandomOrders = (category) => {
    const randomOrders = [];
    for (let i = 1; i <= 5; i++) {
      randomOrders.push({
        orderId: i,
        customerName: `Customer ${i}`,
        itemName: `${category} Food ${i}`,
        // Add more random data as needed
      });
    }
    return randomOrders;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const randomOrders = generateRandomOrders(category);
    setOrders(randomOrders);
  };
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

  return (
    <div>
      <div className='topbar'>
        <div className='topbarwrapper'>
          <div className='topLeft'></div>

          <Stack direction='row' spacing={2}>
            <Buttons className='boxStyling' variant='outlined' onClick={() => navigate('/posinvoicetopbar')}>
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
                <h1>Kitchen Dashboard</h1>
                <small>Kitchen Dashboard</small>
              </div>
            </section>
          </Grid>
        </Grid>
        <div class='col-sm-12 col-md-8'>
          
            
            <div>
              <div className="container-1 mt-5">
                <div className="col-sm-12 col-md-8">
                  <Buttons
                    className="Refreshpage"
                    variant="outlined"
                    onClick={() => handleCategoryClick(selectedCategory)}
                  >
                    Refresh Page
                  </Buttons>
                  <div className="panel panel-bd">
                    <div className="panel-heading">
                      <div className="panel-title">
                        <Stack direction="row" spacing={2}>
                          {menuCategories.map((category, index) => (
                            <Buttons
                              key={index}
                              className="boxStyling"
                              variant="outlined"
                              onClick={() => handleCategoryClick(category)}
                            >
                              {category}
                            </Buttons>
                          ))}
                        </Stack>
                      </div>
                    </div>
                  </div>
                  {selectedCategory && orders.length > 0 ? (
                    <div className="order-table">
                      <h2>{selectedCategory} Orders</h2>
                      <table>
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Item Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr key={order.orderId}>
                              <td>{order.orderId}</td>
                              <td>{order.customerName}</td>
                              <td>{order.itemName}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <h3 className='OrderNotFound'>Order Not Found!!</h3>
                  )}
                </div>

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



