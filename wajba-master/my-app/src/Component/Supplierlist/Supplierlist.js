// import './Supplierlist.css'
// import React, { useState, useEffect } from 'react';
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
//   Typography,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material';

// const generateRandomData = () => {
//   // Generates random supplier data for demonstration
//   const randomData = [];
//   for (let i = 1; i <= 10; i++) {
//     randomData.push({
//       id: i,
//       serialNumber: i,
//       supplierName: `Supplier ${i}`,
//       emailAddress: `supplier${i}@example.com`,
//       mobile: `123-456-${i * 111}`,
//       address: `Address ${i}`,
//       balance: `$${Math.floor(Math.random() * 10000)}`,
//     });
//   }
//   return randomData;
// };

// export default function Admin() {
//   const [suppliers, setSuppliers] = useState(generateRandomData());
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [dataNotFound, setDataNotFound] = useState(false);

//   const [openAddDialog, setOpenAddDialog] = useState(false);
//   const [newSupplier, setNewSupplier] = useState({
//     serialNumber: '',
//     supplierName: '',
//     emailAddress: '',
//     mobile: '',
//     address: '',
//     balance: '',
//   });

//   const [editingSupplier, setEditingSupplier] = useState(null);

//   const handleDelete = (id) => {
//     const updatedSuppliers = suppliers.filter((supplier) => supplier.id !== id);
//     setSuppliers(updatedSuppliers);
//   };

//   const validateSupplier = (supplier) => {
//     // Implement validation logic for user fields
//     const errors = {};

//     // Check if the serial number is unique
//     const isSerialNumberUnique = !suppliers.some(
//       (existingSupplier) => existingSupplier.serialNumber === supplier.serialNumber
//     );

//     if (!isSerialNumberUnique) {
//       errors.serialNumber = 'Serial Number must be unique.';
//     }

//     // Validate other fields, e.g., required fields
//     if (!supplier.serialNumber.trim()) {
//       errors.serialNumber = 'Serial Number is required.';
//     }
//     if (!supplier.supplierName.trim()) {
//       errors.supplierName = 'Supplier Name is required.';
//     }
//     if (!supplier.emailAddress.trim()) {
//       errors.emailAddress = 'Email Address is required.';
//     }
//     if (!supplier.mobile.trim()) {
//       errors.mobile = 'Mobile is required.';
//     }
//     if (!supplier.address.trim()) {
//       errors.address = 'Address is required.';
//     }
//     if (!supplier.balance.trim()) {
//       errors.balance = 'Balance is required.';
//     }

//     // If there are errors, return false
//     if (Object.keys(errors).length > 0) {
//       setNewSupplier({ ...newSupplier, errors });
//       return false;
//     }

//     return true;
//   };

//   const handleOpenAddDialog = () => {
//     setOpenAddDialog(true);
//   };

//   const handleCloseAddDialog = () => {
//     setOpenAddDialog(false);
//     // Clear the new supplier form and errors
//     setNewSupplier({
//       serialNumber: '',
//       supplierName: '',
//       emailAddress: '',
//       mobile: '',
//       address: '',
//       balance: '',
//       errors: {},
//     });
//     setEditingSupplier(null); // Clear the editing supplier
//   };

//   const handleAddSupplier = () => {
//     // Implement validation here
//     if (validateSupplier(newSupplier)) {
//       if (editingSupplier) {
//         // Editing an existing supplier
//         const updatedSuppliers = suppliers.map((s) =>
//           s.id === editingSupplier.id ? newSupplier : s
//         );
//         setSuppliers(updatedSuppliers);
//       } else {
//         // Adding a new supplier
//         const newId = suppliers.length + 1;
//         setSuppliers([...suppliers, { id: newId, ...newSupplier }]);
//       }
//       handleCloseAddDialog();
//     }
//   };

//   useEffect(() => {
//     const filteredSuppliers = suppliers.filter((supplier) => {
//       const { serialNumber, supplierName, emailAddress, mobile, address, balance } = supplier;
//       const search = searchQuery.toLowerCase();
//       return (
//         serialNumber.toString().includes(search) ||
//         supplierName.toLowerCase().includes(search) ||
//         emailAddress.toLowerCase().includes(search) ||
//         mobile.toLowerCase().includes(search) ||
//         address.toLowerCase().includes(search) ||
//         balance.toLowerCase().includes(search)
//       );
//     });

//     setSearchResults(filteredSuppliers);
//     setDataNotFound(filteredSuppliers.length === 0);
//   }, [suppliers, searchQuery]);

//   return (
//     <div>
//       <div>
//         <TextField
//           label="Search"
//           variant="outlined"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <Button variant="contained" color="primary" onClick={handleOpenAddDialog}>
//           Add Supplier
//         </Button>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Serial Number</TableCell>
//                 <TableCell>Supplier Name</TableCell>
//                 <TableCell>Email Address</TableCell>
//                 <TableCell>Mobile</TableCell>
//                 <TableCell>Address</TableCell>
//                 <TableCell>Balance</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {dataNotFound ? (
//                 <TableRow>
//                   <TableCell colSpan={7}>
//                     <Typography variant="subtitle1">
//                       Data not found for the given search criteria.
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 searchResults.map((supplier) => (
//                   <TableRow key={supplier.id}>
//                     <TableCell>{supplier.serialNumber}</TableCell>
//                     <TableCell>{supplier.supplierName}</TableCell>
//                     <TableCell>{supplier.emailAddress}</TableCell>
//                     <TableCell>{supplier.mobile}</TableCell>
//                     <TableCell>{supplier.address}</TableCell>
//                     <TableCell>{supplier.balance}</TableCell>
//                     <TableCell>
//                       <Button
//                         variant="outlined"
//                         color="secondary"
//                         onClick={() => handleDelete(supplier.id)}
//                       >
//                         Delete
//                       </Button>
//                       <Button
//                         variant="outlined"
//                         color="primary"
//                         onClick={() => {
//                           setEditingSupplier(supplier);
//                           handleOpenAddDialog();
//                         }}
//                       >
//                         Edit
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
//           <DialogTitle>{editingSupplier ? 'Edit Supplier' : 'Add New Supplier'}</DialogTitle>
//           <DialogContent>
//             <TextField
//               label="Serial Number"
//               variant="outlined"
//               fullWidth
//               value={newSupplier.serialNumber}
//               onChange={(e) =>
//                 setNewSupplier({ ...newSupplier, serialNumber: e.target.value })
//               }
//               error={!!newSupplier.errors?.serialNumber}
//               helperText={newSupplier.errors?.serialNumber}
//             />
//             <TextField
//               label="Supplier Name"
//               variant="outlined"
//               fullWidth
//               value={newSupplier.supplierName}
//               onChange={(e) =>
//                 setNewSupplier({ ...newSupplier, supplierName: e.target.value })
//               }
//               error={!!newSupplier.errors?.supplierName}
//               helperText={newSupplier.errors?.supplierName}
//             />
//             <TextField
//               label="Email Address"
//               variant="outlined"
//               fullWidth
//               value={newSupplier.emailAddress}
//               onChange={(e) =>
//                 setNewSupplier({ ...newSupplier, emailAddress: e.target.value })
//               }
//               error={!!newSupplier.errors?.emailAddress}
//               helperText={newSupplier.errors?.emailAddress}
//             />
//             <TextField
//               label="Mobile"
//               variant="outlined"
//               fullWidth
//               value={newSupplier.mobile}
//               onChange={(e) => setNewSupplier({ ...newSupplier, mobile: e.target.value })}
//               error={!!newSupplier.errors?.mobile}
//               helperText={newSupplier.errors?.mobile}
//             />
//             <TextField
//               label="Address"
//               variant="outlined"
//               fullWidth
//               value={newSupplier.address}
//               onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
//               error={!!newSupplier.errors?.address}
//               helperText={newSupplier.errors?.address}
//             />
//             <TextField
//               label="Balance"
//               variant="outlined"
//               fullWidth
//               value={newSupplier.balance}
//               onChange={(e) => setNewSupplier({ ...newSupplier, balance: e.target.value })}
//               error={!!newSupplier.errors?.balance}
//               helperText={newSupplier.errors?.balance}
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseAddDialog} color="secondary">
//               Cancel
//             </Button>
//             <Button onClick={handleAddSupplier} color="primary">
//               {editingSupplier ? 'Update' : 'Add'}
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </div>
//   );
// }




import './Supplierlist.css'
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
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
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


const generateRandomData = () => {
  // Generates random supplier data for demonstration
  const randomData = [];
  for (let i = 1; i <= 10; i++) {
    randomData.push({
      id: i,
      serialNumber: i,
      supplierName: `Supplier ${i}`,
      emailAddress: `supplier${i}@example.com`,
      mobile: `123-456-${i * 111}`,
      address: `Address ${i}`,
      balance: `$${Math.floor(Math.random() * 10000)}`,
    });
  }
  return randomData;
};
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

  const [suppliers, setSuppliers] = useState(generateRandomData());
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [dataNotFound, setDataNotFound] = useState(false);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newSupplier, setNewSupplier] = useState({
    serialNumber: '',
    supplierName: '',
    emailAddress: '',
    mobile: '',
    address: '',
    balance: '',
  });

  const [editingSupplier, setEditingSupplier] = useState(null);

  const handleDelete = (id) => {
    const updatedSuppliers = suppliers.filter((supplier) => supplier.id !== id);
    setSuppliers(updatedSuppliers);
  };

  const validateSupplier = (supplier) => {
    // Implement validation logic for user fields
    const errors = {};

    // Check if the serial number is unique
    const isSerialNumberUnique = !suppliers.some(
      (existingSupplier) => existingSupplier.serialNumber === supplier.serialNumber
    );

    if (!isSerialNumberUnique) {
      errors.serialNumber = 'Serial Number must be unique.';
    }

    // Validate other fields, e.g., required fields
    if (!supplier.serialNumber.trim()) {
      errors.serialNumber = 'Serial Number is required.';
    }
    if (!supplier.supplierName.trim()) {
      errors.supplierName = 'Supplier Name is required.';
    }
    if (!supplier.emailAddress.trim()) {
      errors.emailAddress = 'Email Address is required.';
    }
    if (!supplier.mobile.trim()) {
      errors.mobile = 'Mobile is required.';
    }
    if (!supplier.address.trim()) {
      errors.address = 'Address is required.';
    }
    if (!supplier.balance.trim()) {
      errors.balance = 'Balance is required.';
    }

    // If there are errors, return false
    if (Object.keys(errors).length > 0) {
      setNewSupplier({ ...newSupplier, errors });
      return false;
    }

    return true;
  };

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
    // Clear the new supplier form and errors
    setNewSupplier({
      serialNumber: '',
      supplierName: '',
      emailAddress: '',
      mobile: '',
      address: '',
      balance: '',
      errors: {},
    });
    setEditingSupplier(null); // Clear the editing supplier
  };

  const handleAddSupplier = () => {
    // Implement validation here
    if (validateSupplier(newSupplier)) {
      if (editingSupplier) {
        // Editing an existing supplier
        const updatedSuppliers = suppliers.map((s) =>
          s.id === editingSupplier.id ? newSupplier : s
        );
        setSuppliers(updatedSuppliers);
      } else {
        // Adding a new supplier
        const newId = suppliers.length + 1;
        setSuppliers([...suppliers, { id: newId, ...newSupplier }]);
      }
      handleCloseAddDialog();
    }
  };

  useEffect(() => {
    const filteredSuppliers = suppliers.filter((supplier) => {
      const { serialNumber, supplierName, emailAddress, mobile, address, balance } = supplier;
      const search = searchQuery.toLowerCase();
      return (
        serialNumber.toString().includes(search) ||
        supplierName.toLowerCase().includes(search) ||
        emailAddress.toLowerCase().includes(search) ||
        mobile.toLowerCase().includes(search) ||
        address.toLowerCase().includes(search) ||
        balance.toLowerCase().includes(search)
      );
    });

    setSearchResults(filteredSuppliers);
    setDataNotFound(filteredSuppliers.length === 0);
  }, [suppliers, searchQuery]);

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
                <h1> Add Supplier</h1>
                <small> Add Supplier</small>
              </div>
            </section>
          </Grid>
        </Grid>
        <div class='col-sm-12 col-md-8'>
          <div class='panel panel-bd'>
            <div class='panel-heading'>
              <div class='panel-title'>
                <h4>Add Supplier</h4>
              </div>
            </div>
            <div>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleOpenAddDialog}>
          Add Supplier
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Serial Number</TableCell>
                <TableCell>Supplier Name</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Balance</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataNotFound ? (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography variant="subtitle1">
                      Data not found for the given search criteria.
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                searchResults.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell>{supplier.serialNumber}</TableCell>
                    <TableCell>{supplier.supplierName}</TableCell>
                    <TableCell>{supplier.emailAddress}</TableCell>
                    <TableCell>{supplier.mobile}</TableCell>
                    <TableCell>{supplier.address}</TableCell>
                    <TableCell>{supplier.balance}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDelete(supplier.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                          setEditingSupplier(supplier);
                          handleOpenAddDialog();
                        }}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
          <DialogTitle>{editingSupplier ? 'Edit Supplier' : 'Add New Supplier'}</DialogTitle>
          <DialogContent>
            <TextField
              label="Serial Number"
              variant="outlined"
              fullWidth
              value={newSupplier.serialNumber}
              onChange={(e) =>
                setNewSupplier({ ...newSupplier, serialNumber: e.target.value })
              }
              error={!!newSupplier.errors?.serialNumber}
              helperText={newSupplier.errors?.serialNumber}
            />
            <TextField
              label="Supplier Name"
              variant="outlined"
              fullWidth
              value={newSupplier.supplierName}
              onChange={(e) =>
                setNewSupplier({ ...newSupplier, supplierName: e.target.value })
              }
              error={!!newSupplier.errors?.supplierName}
              helperText={newSupplier.errors?.supplierName}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              value={newSupplier.emailAddress}
              onChange={(e) =>
                setNewSupplier({ ...newSupplier, emailAddress: e.target.value })
              }
              error={!!newSupplier.errors?.emailAddress}
              helperText={newSupplier.errors?.emailAddress}
            />
            <TextField
              label="Mobile"
              variant="outlined"
              fullWidth
              value={newSupplier.mobile}
              onChange={(e) => setNewSupplier({ ...newSupplier, mobile: e.target.value })}
              error={!!newSupplier.errors?.mobile}
              helperText={newSupplier.errors?.mobile}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={newSupplier.address}
              onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
              error={!!newSupplier.errors?.address}
              helperText={newSupplier.errors?.address}
            />
            <TextField
              label="Balance"
              variant="outlined"
              fullWidth
              value={newSupplier.balance}
              onChange={(e) => setNewSupplier({ ...newSupplier, balance: e.target.value })}
              error={!!newSupplier.errors?.balance}
              helperText={newSupplier.errors?.balance}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleAddSupplier} color="primary">
              {editingSupplier ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
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


