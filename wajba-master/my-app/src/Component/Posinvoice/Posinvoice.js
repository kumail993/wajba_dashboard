// import React, { Component } from 'react';

// class POSInvoice extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       currentItem: { name: '', price: 0 },
//       totalAmount: 0,
//       invoiceNumber: '', // Added for invoice number
//       validationErrors: {
//         itemName: '',
//         itemPrice: '',
//         invoiceNumber: '', // Validation for invoice number
//       },
//     };
//   }

//   handleAddItem = () => {
//     const { currentItem, items } = this.state;
//     if (currentItem.name && currentItem.price > 0) {
//       const updatedItems = [...items, currentItem];
//       const updatedTotalAmount = this.calculateTotal(updatedItems);
//       this.setState({
//         items: updatedItems,
//         currentItem: { name: '', price: 0 },
//         totalAmount: updatedTotalAmount,
//       });
//     }
//   };

//   calculateTotal = (items) => {
//     return items.reduce((total, item) => total + item.price, 0);
//   };

//   handlePrintInvoice = () => {
//     // You can implement invoice generation logic here
//     // For simplicity, we'll just print the details to the console
//     console.log('Invoice Number:', this.state.invoiceNumber);
//     console.log('Items:', this.state.items);
//     console.log('Total Amount:', this.state.totalAmount);
//   };

//   handleInvoiceNumberChange = (e) => {
//     this.setState({
//       invoiceNumber: e.target.value,
//     });
//   };

//   render() {
//     const { items, currentItem, totalAmount, invoiceNumber, validationErrors } = this.state;

//     return (
//       <div>
//         <h1>POS Invoice</h1>
//         <div>
//           {/* Invoice Number Input */}
//           <input
//             type="text"
//             placeholder="Invoice Number"
//             value={invoiceNumber}
//             onChange={this.handleInvoiceNumberChange}
//           />
//           {validationErrors.invoiceNumber && (
//             <div className="error">{validationErrors.invoiceNumber}</div>
//           )}
//           {/* Item Inputs */}
//           <input
//             type="text"
//             placeholder="Item Name"
//             value={currentItem.name}
//             onChange={(e) =>
//               this.setState({
//                 currentItem: { ...currentItem, name: e.target.value },
//               })
//             }
//           />
//           {validationErrors.itemName && (
//             <div className="error">{validationErrors.itemName}</div>
//           )}
//           <input
//             type="number"
//             placeholder="Item Price"
//             value={currentItem.price}
//             onChange={(e) =>
//               this.setState({
//                 currentItem: { ...currentItem, price: parseFloat(e.target.value) },
//               })
//             }
//           />
//           {validationErrors.itemPrice && (
//             <div className="error">{validationErrors.itemPrice}</div>
//           )}
//           <button onClick={this.handleAddItem}>Add Item</button>
//         </div>
//         <div>
//           <h2>Invoice</h2>
//           <ul>
//             {items.map((item, index) => (
//               <li key={index}>
//                 {item.name}: ${item.price.toFixed(2)}
//               </li>
//             ))}
//           </ul>
//           <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//         </div>
//         <button onClick={this.handlePrintInvoice}>Print Invoice</button>
//       </div>
//     );
//   }
// }

// export default POSInvoice;












// import React, { useState, useEffect } from 'react';
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
//     email: 'example@example.com',
//     password: '********', // You should never display passwords like this in a real app
//     lastLogin: '2023-09-01 14:30:00',
//     lastLogout: '2023-09-02 09:15:00',
// };

// const Buttons = styled(Button)(({ theme }) => ({
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 14,
//     color: 'orange',
//     padding: '6px 12px',
//     border: '1px solid',
//     lineHeight: 1.5,
//     borderColor: 'orange',
//     fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//         backgroundColor: 'orange',
//         borderColor: 'orange',
//         color: 'white',
//         boxShadow: 'none',
//     },
//     '&:active': {
//         boxShadow: 'none',
//         backgroundColor: '#0062cc',
//         borderColor: '#005cbf',
//     },
//     '&:focus': {
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
// }));

// const ContentWrapper = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     flexGrow: 1,
//     overflowX: 'hidden',
//     marginLeft: '240px', // Adjust this value based on your sidebar width
//     padding: theme.spacing(2), // Add padding for content
//     backgroundColor: theme.palette.background.default, // Set background color
//     marginTop: '64px', // Adjust this value to remove space between top bar and content
// }));

// const SidebarContainer = styled(Box)(({ theme }) => ({
//     position: 'fixed',
//     top: '64px', // Adjust this value to match the top bar's height
//     left: 0,
//     width: '240px', // Set the width of your sidebar
//     height: '100%',
//     backgroundColor: theme.palette.background.default, // Set the sidebar's background color
//     zIndex: 1,
//     overflowY: 'auto', // Enable vertical scrolling
// }));

// export default function Admin() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     const navigate = useNavigate();
//     const handleProfileClick = () => {
//         // Handle the profile menu item click logic here
//         // For example, redirect to the profile page
//         navigate('/profile');
//         handleClose();
//     };

//     const handleSettingsClick = () => {
//         // Handle the settings menu item click logic here
//         // For example, open a settings modal
//         // You can add your own logic for handling settings
//         handleClose();
//     };

//     const handleLogoutClick = () => {
//         // Handle the logout menu item click logic here
//         // For example, log the user out and redirect to the login page
//         // You can add your own logout logic
//         navigate('/');
//         handleClose();
//     };
//     const [userData, setUserData] = useState(user);

//     // Simulate fetching user data from a backend
//     useEffect(() => {
//         // In a real application, you would make an API call to fetch user data
//         // For this example, we use the hardcoded user data
//     }, []);

//     const [selectedImage, setSelectedImage] = useState(null);

//     // Simulate fetching user data from a backend
//     useEffect(() => {
//         // In a real application, you would make an API call to fetch user data
//         // For this example, we use the hardcoded user data
//     }, []);

//     const [items, setItems] = useState([]);
//     const [itemName, setItemName] = useState('');
//     const [itemPrice, setItemPrice] = useState('');
//     const [totalAmount, setTotalAmount] = useState(0);

//     const addItem = () => {
//         if (itemName && itemPrice) {
//             const newItem = {
//                 name: itemName,
//                 price: parseFloat(itemPrice),
//             };
//             setItems([...items, newItem]);
//             setItemName('');
//             setItemPrice('');
//             setTotalAmount(totalAmount + newItem.price);
//         }
//     };

//     const printInvoice = () => {
//         window.print();
//     };


//     return (
//         <div>
//             <div className='topbar'>
//                 <div className='topbarwrapper'>
//                     <div className='topLeft'></div>

//                     <Stack direction='row' spacing={2}>
//                         <Buttons className='boxStyling' variant='outlined'>
//                             Pos Invoice
//                         </Buttons>
//                         <Buttons
//                             className='boxStyling'
//                             variant='outlined'
//                             onClick={() => navigate('/orderlist')}
//                         >
//                             Order list
//                         </Buttons>
//                         <Buttons
//                             className='boxStyling'
//                             variant='outlined'
//                             onClick={() => navigate('/kitchen')}
//                         >
//                             Kitchen dashboard
//                         </Buttons>
//                         <Buttons
//                             className='boxStyling'
//                             variant='outlined'
//                             onClick={() => navigate('/counter')}
//                         >
//                             Counter dashboard
//                         </Buttons>
//                     </Stack>

//                     <div className='topRight'>
//                         <div className='topbarIconContainer'>
//                             <NotificationsNoneIcon />
//                             <span className='topIconBadge'>2</span>
//                         </div>
//                         <div className='topbarIconContainer'>
//                             <LanguageIcon />
//                             <span className='topIconBadge'>2</span>
//                         </div>
//                         <React.Fragment>
//                             <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//                                 <Tooltip title='Account settings'>
//                                     <IconButton
//                                         onClick={handleClick}
//                                         size='small'
//                                         sx={{ ml: 2 }}
//                                         aria-controls={open ? 'account-menu' : undefined}
//                                         aria-haspopup='true'
//                                         aria-expanded={open ? 'true' : undefined}
//                                     >
//                                         <Avatar sx={{ width: 32, height: 32, color: 'white', backgroundColor: 'orange' }}>N</Avatar>
//                                     </IconButton>
//                                 </Tooltip>
//                             </Box>
//                             <Menu
//                                 anchorEl={anchorEl}
//                                 id='account-menu'
//                                 open={open}
//                                 onClose={handleClose}
//                                 onClick={handleClose}
//                                 PaperProps={{
//                                     elevation: 0,
//                                     sx: {
//                                         overflow: 'visible',
//                                         filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                                         mt: 1.5,
//                                         '& .MuiAvatar-root': {
//                                             width: 32,
//                                             height: 32,
//                                             ml: -0.5,
//                                             mr: 1,
//                                         },
//                                         '&:before': {
//                                             content: '""',
//                                             display: 'block',
//                                             position: 'absolute',
//                                             top: 0,
//                                             right: 14,
//                                             width: 10,
//                                             height: 10,
//                                             bgcolor: 'background.paper',
//                                             transform: 'translateY(-50%) rotate(45deg)',
//                                             zIndex: 0,
//                                         },
//                                     },
//                                 }}
//                                 transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                                 anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//                             >
//                                 <MenuItem onClick={handleProfileClick}>
//                                     <Avatar
//                                         onClick={() => navigate('/profile')}
//                                     /> Profile
//                                 </MenuItem>
//                                 <Divider />
//                                 <MenuItem onClick={handleSettingsClick} onClick={() => navigate('/setting')}>
//                                     <ListItemIcon>
//                                         <Settings fontSize='small' />
//                                     </ListItemIcon>
//                                     Settings
//                                 </MenuItem>
//                                 <MenuItem onClick={handleLogoutClick}>
//                                     <ListItemIcon>
//                                         <Logout fontSize='small' />
//                                     </ListItemIcon>
//                                     Logout
//                                 </MenuItem>
//                             </Menu>
//                         </React.Fragment>
//                     </div>
//                 </div>
//             </div>

//             <ContentWrapper>
//                 <Grid container spacing={2} columns={16} paddingLeft={2} paddingRight={2} paddingTop={3}>
//                     <Grid item xs={16}>
//                         <section className='content-header'>
//                             <div className='header-icon'><i className='bi bi-house'></i></div>
//                             <div className='header-title'>
//                                 <h1>Profile Page</h1>
//                                 <small>Profile Page</small>
//                             </div>
//                         </section>
//                     </Grid>
//                 </Grid>
//                 <div class='col-sm-12 col-md-8'>
//                     <div class='panel panel-bd'>
//                         <div class='panel-heading'>
//                             <div class='panel-title'>
//                                 <h4>Profile Page</h4>
//                             </div>
//                         </div>
//                         <div>
//       <h2>Point of Sale Invoice</h2>
//       <div>
//         <label>Item Name:</label>
//         <input
//           type="text"
//           value={itemName}
//           onChange={(e) => setItemName(e.target.value)}
//         />
//         <label>Item Price:</label>
//         <input
//           type="number"
//           value={itemPrice}
//           onChange={(e) => setItemPrice(e.target.value)}
//         />
//         <button onClick={addItem}>Add Item</button>
//       </div>
//       <div>
//         <h3>Invoice Items</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Item Name</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>${item.price.toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <p>Total Amount: ${totalAmount.toFixed(2)}</p>
//       </div>
//       <button onClick={printInvoice}>Print Invoice</button>
//     </div>

//                     </div>
//                 </div>
//             </ContentWrapper>
//             <SidebarContainer>
//                 <Sidebar />
//             </SidebarContainer>
//         </div>
//     );
// }





import React, { Component } from 'react';

class POSInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [], // List of selected items for the current order
      invoice: null, // The generated invoice for the current order
    };
  }

  // Simulated function to place an order
  placeOrder = () => {
    const { selectedItems } = this.state;
    // In a real application, you would send the selected items to a server
    // to generate an invoice and return it.
    // For this example, we'll simulate it by calculating the total locally.
    const total = selectedItems.reduce((acc, item) => acc + item.price, 0);
    
    const invoice = {
      items: selectedItems,
      total,
      date: new Date().toLocaleDateString(),
    };

    this.setState({ invoice });
  };

  // Simulated function to add items to the order
  addItemToOrder = (item) => {
    this.setState((prevState) => ({
      selectedItems: [...prevState.selectedItems, item],
    }));
  };

  render() {
    const { selectedItems, invoice } = this.state;

    return (
      <div>
        <h1>POS Invoice</h1>

        <div className="item-list">
          {/* Display a list of available items */}
          {/* In a real application, you would fetch items from a database */}
          <div className="item">
            <span>Item 1</span>
            <button onClick={() => this.addItemToOrder({ name: 'Item 1', price: 10 })}>
              Add to Order
            </button>
          </div>
          <div className="item">
            <span>Item 2</span>
            <button onClick={() => this.addItemToOrder({ name: 'Item 2', price: 15 })}>
              Add to Order
            </button>
          </div>
          {/* Add more items here */}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          {invoice && (
            <div className="invoice">
              <h3>Invoice Date: {invoice.date}</h3>
              <h3>Total: ${invoice.total.toFixed(2)}</h3>
              <button onClick={this.placeOrder}>Place Order</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default POSInvoice;
