

// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { styled } from '@mui/material/styles';
// import LanguageIcon from '@mui/icons-material/Language';
// import Avatar from '@mui/material/Avatar';
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
// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material';

// export default function Admin() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const navigate = useNavigate();
//   const [customers, setCustomers] = useState([]);
//   const [newCustomer, setNewCustomer] = useState({
//     id: Date.now(),
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//   });

//   const [editMode, setEditMode] = useState(false);
//   const [editedCustomer, setEditedCustomer] = useState({});

//   const [openAddDialog, setOpenAddDialog] = useState(false);

//   const handleOpenAddDialog = () => {
//     setOpenAddDialog(true);
//   };

//   const handleCloseAddDialog = () => {
//     setOpenAddDialog(false);
//   };

//   const handleAddCustomer = () => {
//     setCustomers([...customers, newCustomer]);
//     handleCloseAddDialog();
//     setNewCustomer({
//       id: Date.now(),
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//     });
//   };

//   const handleEdit = (customer) => {
//     setEditMode(true);
//     setEditedCustomer(customer);
//   };

//   const handleSaveEdit = () => {
//     const updatedCustomers = customers.map((customer) =>
//       customer.id === editedCustomer.id ? editedCustomer : customer
//     );
//     setCustomers(updatedCustomers);
//     setEditMode(false);
//     setEditedCustomer({});
//   };

//   const handleDelete = (customerId) => {
//     const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
//     setCustomers(updatedCustomers);
//   };

//   return (
//     <div>
//       <div class="col-sm-12 col-md-8">
//         <div class="panel panel-bd">
//           <div class="panel-heading">
//             <div class="panel-title">
//               <h4>Supplier List</h4>
//             </div>
//           </div>
//           <div>
//             <h1>Customer Management</h1>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>ID</TableCell>
//                     <TableCell>Name</TableCell>
//                     <TableCell>Email</TableCell>
//                     <TableCell>Phone</TableCell>
//                     <TableCell>Address</TableCell>
//                     <TableCell>Actions</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {customers.map((customer) => (
//                     <TableRow key={customer.id}>
//                       <TableCell>{customer.id}</TableCell>
//                       <TableCell>{customer.name}</TableCell>
//                       <TableCell>{customer.email}</TableCell>
//                       <TableCell>{customer.phone}</TableCell>
//                       <TableCell>{customer.address}</TableCell>
//                       <TableCell>
//                         {/* <Button variant="outlined" color="primary" onClick={() => handleEdit(customer)}>
//                           Edit
//                         </Button> */}
//                         <Button
//                           variant="outlined"
//                           color="secondary"
//                           onClick={() => handleDelete(customer.id)}
//                         >
//                           Delete
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//             <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
//               <DialogTitle>Add New Customer</DialogTitle>
//               <DialogContent>
//                 <TextField
//                   label="Name"
//                   variant="outlined"
//                   fullWidth
//                   value={newCustomer.name}
//                   onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
//                 />
//                 <TextField
//                   label="Email"
//                   variant="outlined"
//                   fullWidth
//                   value={newCustomer.email}
//                   onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
//                 />
//                 <TextField
//                   label="Phone"
//                   variant="outlined"
//                   fullWidth
//                   value={newCustomer.phone}
//                   onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
//                 />
//                 <TextField
//                   label="Address"
//                   variant="outlined"
//                   fullWidth
//                   value={newCustomer.address}
//                   onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
//                 />
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={handleCloseAddDialog} color="secondary">
//                   Cancel
//                 </Button>
//                 <Button onClick={handleAddCustomer} color="primary">
//                   Add
//                 </Button>
//               </DialogActions>
//             </Dialog>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
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


  const [selectedImage, setSelectedImage] = useState(null);

  // Simulate fetching user data from a backend


  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    id: Date.now(),
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [editMode, setEditMode] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState({});

  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleAddCustomer = () => {
    setCustomers([...customers, newCustomer]);
    handleCloseAddDialog();
    setNewCustomer({
      id: Date.now(),
      name: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  const handleEdit = (customer) => {
    setEditMode(true);
    setEditedCustomer(customer);
  };

  const handleSaveEdit = () => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === editedCustomer.id ? editedCustomer : customer
    );
    setCustomers(updatedCustomers);
    setEditMode(false);
    setEditedCustomer({});
  };

  const handleDelete = (customerId) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
    setCustomers(updatedCustomers);
  };

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
                <h1>Customer Management</h1>
                <small>Customer Management</small>
              </div>
            </section>
          </Grid>
        </Grid>
        <div class='col-sm-12 col-md-8'>
          
           
            <div class="col-sm-12 col-md-8">
              <div class="panel panel-bd">
                <div class="panel-heading">
                  <div class="panel-title">
                    <h4>Customer Management</h4>
                  </div>
                </div>
                <div>
                  <h1>Customer Management</h1>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Phone</TableCell>
                          <TableCell>Address</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {customers.map((customer) => (
                          <TableRow key={customer.id}>
                            <TableCell>{customer.id}</TableCell>
                            <TableCell>{customer.name}</TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{customer.phone}</TableCell>
                            <TableCell>{customer.address}</TableCell>
                            <TableCell>
                              {/* <Button variant="outlined" color="primary" onClick={() => handleEdit(customer)}>
                          Edit
                        </Button> */}
                              <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => handleDelete(customer.id)}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
                    <DialogTitle>Add New Customer</DialogTitle>
                    <DialogContent>
                      <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={newCustomer.name}
                        onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                      />
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={newCustomer.email}
                        onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                      />
                      <TextField
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        value={newCustomer.phone}
                        onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                      />
                      <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        value={newCustomer.address}
                        onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseAddDialog} color="secondary">
                        Cancel
                      </Button>
                      <Button onClick={handleAddCustomer} color="primary">
                        Add
                      </Button>
                    </DialogActions>
                  </Dialog>
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


