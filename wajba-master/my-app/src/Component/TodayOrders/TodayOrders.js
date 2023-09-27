// import React, { useState } from 'react';


// function App() {
//   // Sample order data for today
//   const todayOrdersData = [
//     {
//       serialNumber: 1,
//       customerName: 'John Doe',
//       waiter: 'Waiter 1',
//       tableNumber: 1,
//       orderDate: '2023-09-08',
//       amount: 50.0,
//     },
//     {
//       serialNumber: 2,
//       customerName: 'Alice Smith',
//       waiter: 'Waiter 2',
//       tableNumber: 2,
//       orderDate: '2023-09-08',
//       amount: 65.0,
//     },
//     // Add more orders for today as needed
//   ];

//   const [todayOrders, setTodayOrders] = useState(todayOrdersData);

//   // Function to calculate the total amount from orders
//   const calculateTotalAmount = () => {
//     return todayOrders.reduce((total, order) => total + order.amount, 0);
//   };

//   return (
//     <div>
//       {/* Your existing code */}
      
//       <div className="today-orders-table">
//         <h2>Today's Orders</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Serial Number</th>
//               <th>Customer Name</th>
//               <th>Waiter</th>
//               <th>Table Number</th>
//               <th>Order Date</th>
//               <th>Amount</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {todayOrders.map((order, index) => (
//               <tr key={index}>
//                 <td>{order.serialNumber}</td>
//                 <td>{order.customerName}</td>
//                 <td>{order.waiter}</td>
//                 <td>{order.tableNumber}</td>
//                 <td>{order.orderDate}</td>
//                 <td>${order.amount.toFixed(2)}</td>
//                 <td>
//                   {/* You can add action buttons here */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <p>Total Amount: ${calculateTotalAmount().toFixed(2)}</p>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ViewListIcon from '@mui/icons-material/ViewList';
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
import { useNavigate } from "react-router-dom";



const Buttons = styled(Button)({
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
  });

function App() {
  // Sample order data for today
  const todayOrdersData = [
    {
      serialNumber: 1,
      customerName: 'John Doe',
      waiter: 'Waiter 1',
      tableNumber: 1,
      orderDate: '2023-09-08',
      amount: 50.0,
    },
    {
      serialNumber: 2,
      customerName: 'Alice Smith',
      waiter: 'Waiter 2',
      tableNumber: 2,
      orderDate: '2023-09-08',
      amount: 65.0,
    },
    // Add more orders for today as needed
  ];

  const [todayOrders, setTodayOrders] = useState(todayOrdersData);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

  // Function to calculate the total amount from orders
  const calculateTotalAmount = () => {
    return todayOrders.reduce((total, order) => total + order.amount, 0);
  };

  // Function to handle order deletion
  const handleDeleteOrder = () => {
    if (orderToDelete !== null) {
      const updatedOrders = [...todayOrders];
      updatedOrders.splice(orderToDelete, 1);
      setTodayOrders(updatedOrders);
      setOrderToDelete(null);
      setShowDeleteConfirmation(false);
    }
  };
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

  return (
    <div>
      {/* Your existing code */}
      <div>
      <div className='topbar'>
      
        <div className='topbarwrapper'>
        <div class="header-icon-pos-topbar" onClick={() =>
              navigate('/admin')}><i class="bi bi-house"></i></div>
          <div className='topLeft'>

          </div>

          <Stack direction="row" spacing={2} >
            <Buttons className="boxStyling" variant="outlined" onClick={() =>
              navigate('/posinvoicetopbar')}>
              New Order
            </Buttons>
            
            <Buttons className="boxStyling" variant="outlined" onClick={() =>
              navigate('/kitchenstatus')} >
              Kitchen Status
            </Buttons>
            <Buttons className="boxStyling" variant="outlined" onClick={() =>
              navigate('/todayorder')}>
              Today Order
            </Buttons>
            
          </Stack>

          <div className='topRight'>
            <div className="topbarIconContainer">
              <NotificationsNoneIcon />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <LanguageIcon />
              <span className="topIconBadge">2</span>
            </div>
            <React.Fragment>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32, color: 'white', backgroundColor: 'orange' }}>N</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
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
                <MenuItem onClick={handleProfileClick } >
                  <Avatar  onClick={() =>
                      navigate('/profile')}/> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSettingsClick} onClick={() =>
                      navigate('/setting')}>
                  <ListItemIcon >
                    <Settings fontSize="small"    />
                  </ListItemIcon >
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </div>
        </div>
      </div>
      <div className='container'>
        
        
      
        
    
      </div>
    </div>
      <div className="today-orders-table">
        <h2>Today's Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Customer Name</th>
              <th>Waiter</th>
              <th>Table Number</th>
              <th>Order Date</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todayOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.serialNumber}</td>
                <td>{order.customerName}</td>
                <td>{order.waiter}</td>
                <td>{order.tableNumber}</td>
                <td>{order.orderDate}</td>
                <td>${order.amount.toFixed(2)}</td>
                <td>
                  <button onClick={() => setOrderToDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Amount: ${calculateTotalAmount().toFixed(2)}</p>
      </div>

      {/* Confirmation modal for delete */}
      {showDeleteConfirmation && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this order?</p>
          <button onClick={handleDeleteOrder}>Yes</button>
          <button onClick={() => setShowDeleteConfirmation(false)}>No</button>
        </div>
      )}
    </div>
  );
}

export default App;
