
// import React, { useState } from 'react';
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
// import { Form, Button, Table } from 'react-bootstrap';



// export default function Admin() {
//   const [supplierName, setSupplierName] = useState('Supplier A');
//   const [purchaseDate, setPurchaseDate] = useState('2023-09-01');
//   const [expireDate, setExpireDate] = useState('2023-10-01');
//   const [invoiceNo, setInvoiceNo] = useState('INV-001');
//   const [paymentType, setPaymentType] = useState('Cash');
//   const [items, setItems] = useState([]);
//   const [itemName, setItemName] = useState('');
//   const [itemCategory, setItemCategory] = useState('Category A');
//   const [itemStockQuantity, setItemStockQuantity] = useState('');
//   const [itemRate, setItemRate] = useState('');
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [paidAmount, setPaidAmount] = useState(0);

//   const addItem = () => {
//     if (!itemName || !itemCategory || !itemStockQuantity || !itemRate) {
//       alert('Please fill in all item information.');
//       return;
//     }

//     const newItem = {
//       name: itemName,
//       category: itemCategory,
//       stockQuantity: itemStockQuantity,
//       rate: itemRate,
//     };

//     setItems([...items, newItem]);

//     // Calculate and update grand total
//     const total = grandTotal + itemStockQuantity * itemRate;
//     setGrandTotal(total);

//     // Clear item input fields
//     setItemName('');
//     setItemCategory('Category A');
//     setItemStockQuantity('');
//     setItemRate('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!supplierName || !purchaseDate || !expireDate || !invoiceNo || !paymentType) {
//       alert('Please fill in all purchase information.');
//       return;
//     }

//     if (paidAmount < grandTotal) {
//       alert('Paid amount should be equal to or greater than the grand total.');
//       return;
//     }

//     // Create a purchase object with all the information
//     const purchase = {
//       supplierName,
//       purchaseDate,
//       expireDate,
//       invoiceNo,
//       paymentType,
//       items,
//       grandTotal,
//       paidAmount,
//     };

//     // In a real application, you would typically send this purchase object to a backend API
//     // Here, we'll just log it to the console for demonstration purposes
//     console.log('Purchase Submitted:', purchase);

//     // Reset form fields
//     setSupplierName('');
//     setPurchaseDate('');
//     setExpireDate('');
//     setInvoiceNo('');
//     setPaymentType('Cash');
//     setItems([]);
//     setItemName('');
//     setItemCategory('Category A');
//     setItemStockQuantity('');
//     setItemRate('');
//     setGrandTotal(0);
//     setPaidAmount(0);
//   };
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const navigate = useNavigate();

//   return (
//     <div>



//       <div class="col-sm-12 col-md-8">
//         <div class="panel panel-bd">
//           <div class="panel-heading">
//             <div class="panel-title">
//               <h4 >Add Food</h4>
//             </div>
//           </div>
//           <div className="App">
//             <h1>Add Purchase</h1>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="supplierName">
//                 <Form.Label>Supplier Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={supplierName}
//                   onChange={(e) => setSupplierName(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="purchaseDate">
//                 <Form.Label>Purchase Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   value={purchaseDate}
//                   onChange={(e) => setPurchaseDate(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="expireDate">
//                 <Form.Label>Expire Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   value={expireDate}
//                   onChange={(e) => setExpireDate(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="invoiceNo">
//                 <Form.Label>Invoice No</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={invoiceNo}
//                   onChange={(e) => setInvoiceNo(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="paymentType">
//                 <Form.Label>Payment Type</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={paymentType}
//                   onChange={(e) => setPaymentType(e.target.value)}
//                   required
//                 >
//                   <option>Cash</option>
//                   <option>Credit Card</option>
//                   <option>Bank Transfer</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group controlId="addItem">
//                 <Form.Label>Add Item</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Item Name"
//                   value={itemName}
//                   onChange={(e) => setItemName(e.target.value)}
//                 />
//                 <Form.Control
//                   as="select"
//                   value={itemCategory}
//                   onChange={(e) => setItemCategory(e.target.value)}
//                 >
//                   <option>Category A</option>
//                   <option>Category B</option>
//                   <option>Category C</option>
//                 </Form.Control>
//                 <Form.Control
//                   type="number"
//                   placeholder="Stock Quantity"
//                   value={itemStockQuantity}
//                   onChange={(e) => setItemStockQuantity(e.target.value)}
//                 />
//                 <Form.Control
//                   type="number"
//                   placeholder="Rate"
//                   value={itemRate}
//                   onChange={(e) => setItemRate(e.target.value)}
//                 />
//                 <Button variant="primary" onClick={addItem}>
//                   Add More Item
//                 </Button>
//               </Form.Group>
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Category</th>
//                     <th>Stock Quantity</th>
//                     <th>Rate</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {items.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.name}</td>
//                       <td>{item.category}</td>
//                       <td>{item.stockQuantity}</td>
//                       <td>{item.rate}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//               <Form.Group controlId="grandTotal">
//                 <Form.Label>Grand Total</Form.Label>
//                 <Form.Control type="number" value={grandTotal} readOnly />
//               </Form.Group>
//               <Form.Group controlId="paidAmount">
//                 <Form.Label>Paid Amount</Form.Label>
//                 <Form.Control
//                   type="number"
//                   value={paidAmount}
//                   onChange={(e) => setPaidAmount(e.target.value)}
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }



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
import { Form, Button, Table } from 'react-bootstrap';

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

  const [supplierName, setSupplierName] = useState('Supplier A');
  const [purchaseDate, setPurchaseDate] = useState('2023-09-01');
  const [expireDate, setExpireDate] = useState('2023-10-01');
  const [invoiceNo, setInvoiceNo] = useState('INV-001');
  const [paymentType, setPaymentType] = useState('Cash');
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Category A');
  const [itemStockQuantity, setItemStockQuantity] = useState('');
  const [itemRate, setItemRate] = useState('');
  const [grandTotal, setGrandTotal] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);

  const addItem = () => {
    if (!itemName || !itemCategory || !itemStockQuantity || !itemRate) {
      alert('Please fill in all item information.');
      return;
    }

    const newItem = {
      name: itemName,
      category: itemCategory,
      stockQuantity: itemStockQuantity,
      rate: itemRate,
    };

    setItems([...items, newItem]);

    // Calculate and update grand total
    const total = grandTotal + itemStockQuantity * itemRate;
    setGrandTotal(total);

    // Clear item input fields
    setItemName('');
    setItemCategory('Category A');
    setItemStockQuantity('');
    setItemRate('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!supplierName || !purchaseDate || !expireDate || !invoiceNo || !paymentType) {
      alert('Please fill in all purchase information.');
      return;
    }

    if (paidAmount < grandTotal) {
      alert('Paid amount should be equal to or greater than the grand total.');
      return;
    }

    // Create a purchase object with all the information
    const purchase = {
      supplierName,
      purchaseDate,
      expireDate,
      invoiceNo,
      paymentType,
      items,
      grandTotal,
      paidAmount,
    };

    // In a real application, you would typically send this purchase object to a backend API
    // Here, we'll just log it to the console for demonstration purposes
    console.log('Purchase Submitted:', purchase);

    // Reset form fields
    setSupplierName('');
    setPurchaseDate('');
    setExpireDate('');
    setInvoiceNo('');
    setPaymentType('Cash');
    setItems([]);
    setItemName('');
    setItemCategory('Category A');
    setItemStockQuantity('');
    setItemRate('');
    setGrandTotal(0);
    setPaidAmount(0);
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
                <h1>Add Purchase</h1>
                <small>Add Purchase</small>
              </div>
            </section>
          </Grid>
        </Grid>
        <div class="col-sm-12 col-md-8">
                <div class="panel panel-bd">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 >Add Purchase</h4>
                        </div>
                    </div>
                    <div className="App">
    
     <Form onSubmit={handleSubmit}>
         <Form.Group controlId="supplierName">
           <Form.Label>Supplier Name</Form.Label>
          <Form.Control
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="purchaseDate">
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="expireDate">
          <Form.Label>Expire Date</Form.Label>
          <Form.Control
            type="date"
            value={expireDate}
            onChange={(e) => setExpireDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="invoiceNo">
          <Form.Label>Invoice No</Form.Label>
          <Form.Control
            type="text"
            value={invoiceNo}
            onChange={(e) => setInvoiceNo(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="paymentType">
          <Form.Label>Payment Type</Form.Label>
          <Form.Control
            as="select"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            required
          >
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Bank Transfer</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="addItem">
          <Form.Label>Add Item</Form.Label>
          <Form.Control
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <Form.Control
            as="select"
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
          >
            <option>Category A</option>
            <option>Category B</option>
            <option>Category C</option>
          </Form.Control>
          <Form.Control
            type="number"
            placeholder="Stock Quantity"
            value={itemStockQuantity}
            onChange={(e) => setItemStockQuantity(e.target.value)}
          />
          <Form.Control
            type="number"
            placeholder="Rate"
            value={itemRate}
            onChange={(e) => setItemRate(e.target.value)}
          />
          <Button variant="primary" onClick={addItem}>
            Add More Item
          </Button>
        </Form.Group>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Stock Quantity</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.stockQuantity}</td>
                <td>{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Form.Group controlId="grandTotal">
          <Form.Label>Grand Total</Form.Label>
          <Form.Control type="number" value={grandTotal} readOnly />
        </Form.Group>
        <Form.Group controlId="paidAmount">
          <Form.Label>Paid Amount</Form.Label>
          <Form.Control
            type="number"
            value={paidAmount}
            onChange={(e) => setPaidAmount(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
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



