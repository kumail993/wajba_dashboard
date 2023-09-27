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
  // Sample order data
  const ordersData = [
    {
      tableNumber: 1,
      customerName: 'John Doe',
      tokenNumber: 123,
      orderNumber: 101,
      kitchenStatus: 'Pending', // Default status
    },
    // Add more orders with similar structure
  ];

  const [orders, setOrders] = useState(ordersData);

  // Function to update the kitchen status for an order
  const handleKitchenStatusChange = (index, status) => {
    const updatedOrders = [...orders];
    updatedOrders[index].kitchenStatus = status;
    setOrders(updatedOrders);
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
      <div className="kitchen-status-box">
        <h2>Kitchen Status</h2>
        <table>
          <thead>
            <tr>
              <th>Table Number</th>
              <th>Customer Name</th>
              <th>Token Number</th>
              <th>Order Number</th>
              <th>Kitchen Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.tableNumber}</td>
                <td>{order.customerName}</td>
                <td>{order.tokenNumber}</td>
                <td>{order.orderNumber}</td>
                <td>
                  <select
                    value={order.kitchenStatus}
                    onChange={(e) => handleKitchenStatusChange(index, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Ready">Ready</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default App;
