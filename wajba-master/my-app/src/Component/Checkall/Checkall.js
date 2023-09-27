
// import React from 'react';
// import './Checkall.css'
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

// const ContentWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   flexGrow: 1,
//   overflowX: 'hidden',
//   marginLeft: '240px', // Adjust this value based on your sidebar width
//   padding: theme.spacing(2), // Add padding for content
//   backgroundColor: theme.palette.background.default, // Set background color
//   marginTop: '64px', // Adjust this value to remove space between top bar and content
// }));

// const SidebarContainer = styled(Box)(({ theme }) => ({
//   position: 'fixed',
//   top: '64px', // Adjust this value to match the top bar's height
//   left: 0,
//   width: '240px', // Set the width of your sidebar
//   height: '100%',
//   backgroundColor: theme.palette.background.default, // Set the sidebar's background color
//   zIndex: 1,
// }));

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

//   return (
//     <div>
//       <div className='topbar'>
//         <div className='topbarwrapper'>
//           <div className='topLeft'>
//             {/* Add your top bar content here */}
//           </div>
//           <Stack direction="row" spacing={2}>
//             <Buttons className="boxStyling" variant="outlined">
//               Pos Invoice
//             </Buttons>
//             <Buttons className="boxStyling" variant="outlined" onClick={() => navigate('/orderlist')}>
//               Order list
//             </Buttons>
//             <Buttons className="boxStyling" variant="outlined" onClick={() => navigate('/kitchen')}>
//               Kitchen dashboard
//             </Buttons>
//             <Buttons className="boxStyling" variant="outlined" onClick={() => navigate('/counter')}>
//               Counter dashboard
//             </Buttons>
//           </Stack>
//           <div className='topRight'>
//             <div className="topbarIconContainer">
//               <NotificationsNoneIcon />
//               <span className="topIconBadge">2</span>
//             </div>
//             <div className="topbarIconContainer">
//               <LanguageIcon />
//               <span className="topIconBadge">2</span>
//             </div>
//             <React.Fragment>
//               <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//                 <Tooltip title="Account settings">
//                   <IconButton
//                     onClick={handleClick}
//                     size="small"
//                     sx={{ ml: 2 }}
//                     aria-controls={open ? 'account-menu' : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={open ? 'true' : undefined}
//                   >
//                     <Avatar sx={{ width: 32, height: 32, color: 'white', backgroundColor: 'orange' }}>N</Avatar>
//                   </IconButton>
//                 </Tooltip>
//               </Box>
//               <Menu
//                 anchorEl={anchorEl}
//                 id="account-menu"
//                 open={open}
//                 onClose={handleClose}
//                 onClick={handleClose}
//                 PaperProps={{
//                   elevation: 0,
//                   sx: {
//                     overflow: 'visible',
//                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                     mt: 1.5,
//                     '& .MuiAvatar-root': {
//                       width: 32,
//                       height: 32,
//                       ml: -0.5,
//                       mr: 1,
//                     },
//                     '&:before': {
//                       content: '""',
//                       display: 'block',
//                       position: 'absolute',
//                       top: 0,
//                       right: 14,
//                       width: 10,
//                       height: 10,
//                       bgcolor: 'background.paper',
//                       transform: 'translateY(-50%) rotate(45deg)',
//                       zIndex: 0,
//                     },
//                   },
//                 }}
//                 transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                 anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//               >
//                 <MenuItem onClick={handleClose}>
//                   <Avatar /> Profile
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                   <Avatar /> My account
//                 </MenuItem>
//                 <Divider />
//                 <MenuItem onClick={handleClose}>
//                   <ListItemIcon>
//                     <PersonAdd fontSize="small" />
//                   </ListItemIcon>
//                   Add another account
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                   <ListItemIcon>
//                     <Settings fontSize="small" />
//                   </ListItemIcon>
//                   Settings
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                   <ListItemIcon>
//                     <Logout fontSize="small" />
//                   </ListItemIcon>
//                   Logout
//                 </MenuItem>
//               </Menu>
//             </React.Fragment>
//           </div>
//         </div>
       
//       </div>
      
//       <ContentWrapper>
//         <Grid container spacing={2} columns={16} paddingLeft={2} paddingRight={2} paddingTop={3}>
//           <Grid item xs={16}>
//             <section className="content-header">
//               <div className="header-icon"><i className="bi bi-house"></i></div>
//               <div className="header-title">
//                 <h1>Order</h1>
//                 <small>Order</small>
//               </div>
//             </section>
//           </Grid>
//         </Grid>
       
//       </ContentWrapper>
//       <SidebarContainer>
//         <Sidebar />
        
//       </SidebarContainer>
//     </div>
//   );
// }


// import React, { useState } from 'react';

// const KitchenDashboard = () => {
//   const [kitchens, setKitchens] = useState([
//     { id: 1, name: 'Kitchen 1', orders: [], completedOrders: [] },
//     { id: 2, name: 'Kitchen 2', orders: [], completedOrders: [] },
//   ]);
//   const [newOrder, setNewOrder] = useState('');
//   const [selectedKitchen, setSelectedKitchen] = useState(1);

//   const addOrder = () => {
//     if (newOrder.trim() !== '') {
//       const updatedKitchens = kitchens.map((kitchen) => {
//         if (kitchen.id === selectedKitchen) {
//           return {
//             ...kitchen,
//             orders: [...kitchen.orders, newOrder],
//           };
//         }
//         return kitchen;
//       });
//       setKitchens(updatedKitchens);
//       setNewOrder('');
//     }
//   };

//   const completeOrder = (kitchenId, index) => {
//     const updatedKitchens = kitchens.map((kitchen) => {
//       if (kitchen.id === kitchenId) {
//         const completedOrder = kitchen.orders[index];
//         return {
//           ...kitchen,
//           orders: kitchen.orders.filter((_, i) => i !== index),
//           completedOrders: [...kitchen.completedOrders, completedOrder],
//         };
//       }
//       return kitchen;
//     });
//     setKitchens(updatedKitchens);
//   };

//   const removeCompletedOrder = (kitchenId, index) => {
//     const updatedKitchens = kitchens.map((kitchen) => {
//       if (kitchen.id === kitchenId) {
//         return {
//           ...kitchen,
//           completedOrders: kitchen.completedOrders.filter((_, i) => i !== index),
//         };
//       }
//       return kitchen;
//     });
//     setKitchens(updatedKitchens);
//   };

//   return (
//     <div className="kitchen-dashboard">
//       <h1>Kitchen Dashboard</h1>
//       <div className="kitchen-selector">
//         <label>Select Kitchen: </label>
//         <select
//           value={selectedKitchen}
//           onChange={(e) => setSelectedKitchen(Number(e.target.value))}
//         >
//           {kitchens.map((kitchen) => (
//             <option key={kitchen.id} value={kitchen.id}>
//               {kitchen.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="order-form">
//         <input
//           type="text"
//           placeholder="New Order"
//           value={newOrder}
//           onChange={(e) => setNewOrder(e.target.value)}
//         />
//         <button onClick={addOrder}>Add Order</button>
//       </div>
//       <div className="orders">
//         <h2>Orders</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Order</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {kitchens[selectedKitchen - 1].orders.map((order, index) => (
//               <tr key={index}>
//                 <td>{order}</td>
//                 <td>
//                   <button onClick={() => completeOrder(selectedKitchen, index)}>
//                     Complete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="completed-orders">
//         <h2>Completed Orders</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Order</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {kitchens[selectedKitchen - 1].completedOrders.map((order, index) => (
//               <tr key={index}>
//                 <td>{order}</td>
//                 <td>
//                   <button
//                     onClick={() =>
//                       removeCompletedOrder(selectedKitchen, index)
//                     }
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default KitchenDashboard;







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
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Buttons = styled(Button)({
//   // ... (your button styles)
// });

// export default function KitchenTable() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const navigate = useNavigate();

//   // Simulated data for the menu categories
//   const [menuCategories, setMenuCategories] = useState([
//     'Pos Invoice',
//     'Desi',
//     'Beverage',
//     'Chinese',
//     'Common',
//     'French',
//     'Indian',
//     'Italian',
//     'main',
//   ]);

//   const handleRefresh = () => {
//     // Simulate a data refresh by resetting the menu categories
//     setMenuCategories([
//       'Pos Invoice',
//       'Desi',
//       'Beverage',
//       'Chinese',
//       'Common',
//       'French',
//       'Indian',
//       'Italian',
//       'main',
//     ]);
//   };

//   return (
//     <div>
//       {/* Topbar */}
//       {/* ... (your topbar code) */}
//       {/* Main content */}
//       <Box sx={{ flexGrow: 1 }}>
//         {/* ... (your main content header) */}
//       </Box>
//       <div className="container-1 mt-5">
//         <div className="col-sm-12 col-md-8">
//           <Buttons className="Refreshpage" variant="outlined" onClick={handleRefresh}>
//             Refresh Page
//           </Buttons>
//           <div className="panel panel-bd">
//             <div className="panel-heading">
//               <div className="panel-title">
//                 <div className="text-end">
//                 </div>
//                 <Stack direction="row" spacing={2}>
//                   {menuCategories.map((category, index) => (
//                     <Buttons
//                       key={index}
//                       className="boxStyling"
//                       variant="outlined"
//                     >
//                       {category}
//                     </Buttons>
//                   ))}
//                 </Stack>
//               </div>
//             </div>
//           </div>
//         </div>
//         <h3 className='OrderNotFound'>Order Not Found!!</h3>
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Table, Button, FormControl, Pagination } from 'react-bootstrap';
import { random } from 'lodash';



const initialFoods = [
  { id: 1, category: 'Breakfast', name: 'Pancakes', status: 'Available' },
  { id: 2, category: 'Lunch', name: 'Burger', status: 'Available' },
  // Add more food items here
];

const foodImages = [
  'https://picsum.photos/100/100?food=1',
  'https://picsum.photos/100/100?food=2',
  // Add more image URLs here
];

export default function Admin() {
  const [foods, setFoods] = useState(initialFoods);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [selectedFood, setSelectedFood] = useState({});
  const [updatedName, setUpdatedName] = useState('');
  const [updatedStatus, setUpdatedStatus] = useState('');

  const fetchData = () => {
    // Replace this with your data fetching logic, e.g., API call
    const updatedFoods = [
      { id: 1, category: 'Breakfast', name: 'Updated Pancakes', status: 'Available' },
      { id: 2, category: 'Lunch', name: 'Updated Burger', status: 'Available' },
      // Add more updated food items here
    ];

    setFoods(updatedFoods);
  };

  const handleRefresh = () => {
    fetchData();
  };

  const handleSearch = () => {
    const filteredFoods = initialFoods.filter((food) =>
      food.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  const handleUpdate = () => {
    const updatedFoods = foods.map((food) => {
      if (food.id === selectedFood.id) {
        return { ...food, name: updatedName, status: updatedStatus };
      }
      return food;
    });
    setFoods(updatedFoods);
    handleClose();
  };

  const handleDelete = () => {
    const updatedFoods = foods.filter((food) => food.id !== selectedFood.id);
    setFoods(updatedFoods);
    handleClose();
  };
 

  const renderFoods = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedFoods = foods.slice(startIndex, endIndex);

    return slicedFoods.map((food, index) => (
      <tr key={food.id}>
        <td>{startIndex + index + 1}</td>
        <td>
          <img
            src={foodImages[random(0, foodImages.length - 1)]}
            alt={food.name}
            style={{ width: '100px', height: '100px' }}
          />
        </td>
        <td>{food.category}</td>
        <td>{food.name}</td>
        <td>{food.status}</td>
        <td>
          <Button
            variant="danger"
            onClick={() => handleDeleteClick(food)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  };

  const handleDeleteClick = (food) => {
    setSelectedFood(food);
    setShowModal(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="col-sm-12 col-md-8">
        <div className="panel panel-bd">
          <div className="panel-heading">
            <div className="panel-title">
              <h4>Add Food</h4>
            </div>
            <Button
              variant="primary"
              onClick={handleRefresh}
              style={{ marginLeft: '10px' }}
              className="btn-sm"
            >
              Refresh
            </Button>
          </div>
          <div className="App">
            <div className="search-bar">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button variant="outline-success" onClick={handleSearch}>
                Search
              </Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>Food Image</th>
                  <th>Category</th>
                  <th>Food Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{renderFoods()}</tbody>
            </Table>
            <Pagination>
              {/* Implement pagination controls here */}
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

