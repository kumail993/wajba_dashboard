


// import React, { useState } from 'react';
// import './AddFood.css'

// export default function AddFoodForm() {
//     const [foodData, setFoodData] = useState({
//         category: '',
//         kitchen: '',
//         name: '',
//         description: '',
//         image: null,
//     });

//     const [formErrors, setFormErrors] = useState({
//         category: '',
//         kitchen: '',
//         name: '',
//         description: '',
//         image: '',
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFoodData({
//             ...foodData,
//             [name]: value,
//         });
//         // Reset the error message when the user starts typing
//         setFormErrors({ ...formErrors, [name]: '' });
//     };

//     const handleImageChange = (event) => {
//         const imageFile = event.target.files[0];
//         setFoodData({
//             ...foodData,
//             image: imageFile,
//         });
//         // Reset the error message when the user selects an image
//         setFormErrors({ ...formErrors, image: '' });
//     };

//     const validateForm = () => {
//         const errors = {};

//         if (!foodData.category) {
//             errors.category = 'Please select a category';
//         }

//         if (!foodData.kitchen) {
//             errors.kitchen = 'Please select a kitchen';
//         }

//         if (!foodData.name.trim()) {
//             errors.name = 'Food name is required';
//         }

//         if (!foodData.description.trim()) {
//             errors.description = 'Description is required';
//         }

//         if (!foodData.image) {
//             errors.image = 'Please upload an image';
//         }

//         setFormErrors(errors);

//         return Object.keys(errors).length === 0;
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const isValid = validateForm();

//         if (isValid) {
//             // Your form submission logic here
//             console.log('Form submitted:', foodData);
//         } else {
//             console.log('Form validation failed');
//         }
//     };

//     return (
//         <div>
//             <div className="col-sm-12 col-md-8">
//                 <div className="panel panel-bd">
//                     <div className="panel-heading">
//                         <div className="panel-title">
//                             <h4>Add Food</h4>
//                         </div>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <div className='Addfooditem'>
//                                 <label htmlFor="category">Food Category:</label>
//                                 <select
//                                     id="category"
//                                     name="category"
//                                     value={foodData.category}
//                                     onChange={handleInputChange}
//                                     required
//                                 >
//                                     <option value="">Select category</option>
//                                     <option value="breakfast">Breakfast</option>
//                                     <option value="lunch">Lunch</option>
//                                     <option value="dinner">Dinner</option>
//                                     {/* Add other food categories here */}
//                                 </select>
//                                 {formErrors.category && (
//                                     <div className="error">{formErrors.category}</div>
//                                 )}
//                             </div>
//                             <div className='Addfooditem'>
//                                 <label htmlFor="kitchen">Select Kitchen:</label>
//                                 <select
//                                     id="kitchen"
//                                     name="kitchen"
//                                     value={foodData.kitchen}
//                                     onChange={handleInputChange}
//                                     required
//                                 >
//                                     <option value="">Select Kitchen</option>
//                                     <option value="Kitchen1">Kitchen 1</option>
//                                     <option value="Kitchen2">Kitchen 2</option>
//                                     <option value="Kitchen3">Kitchen 3</option>
//                                     {/* Add other kitchen options here */}
//                                 </select>
//                                 {formErrors.kitchen && (
//                                     <div className="error">{formErrors.kitchen}</div>
//                                 )}
//                             </div>
//                             <div className='Addfooditem'>
//                                 <label htmlFor="name">Food Name:</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={foodData.name}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                                 {formErrors.name && <div className="error">{formErrors.name}</div>}
//                             </div>
//                             <div className='Addfooditem'>
//                                 <label htmlFor="description">Description:</label>
//                                 <textarea
//                                     id="description"
//                                     name="description"
//                                     value={foodData.description}
//                                     onChange={handleInputChange}
//                                     required
//                                 ></textarea>
//                                 {formErrors.description && (
//                                     <div className="error">{formErrors.description}</div>
//                                 )}
//                             </div>
//                             <div className='Addfooditem'>
//                                 <label htmlFor="image">Upload Food Image:</label>
//                                 <input
//                                     type="file"
//                                     id="image"
//                                     name="image"
//                                     accept="image/*"
//                                     onChange={handleImageChange}
//                                     required
//                                 />
//                                 {formErrors.image && <div className="error">{formErrors.image}</div>}
//                             </div>
//                             <div className='Addfooditem'>
//                                 <button type="submit">Add Food</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }




import './AddFood.css'
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

    const [foodData, setFoodData] = useState({
        category: '',
        kitchen: '',
        name: '',
        description: '',
        image: null,
    });

    const [formErrors, setFormErrors] = useState({
        category: '',
        kitchen: '',
        name: '',
        description: '',
        image: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFoodData({
            ...foodData,
            [name]: value,
        });
        // Reset the error message when the user starts typing
        setFormErrors({ ...formErrors, [name]: '' });
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setFoodData({
            ...foodData,
            image: imageFile,
        });
        // Reset the error message when the user selects an image
        setFormErrors({ ...formErrors, image: '' });
    };

    const validateForm = () => {
        const errors = {};

        if (!foodData.category) {
            errors.category = 'Please select a category';
        }

        if (!foodData.kitchen) {
            errors.kitchen = 'Please select a kitchen';
        }

        if (!foodData.name.trim()) {
            errors.name = 'Food name is required';
        }

        if (!foodData.description.trim()) {
            errors.description = 'Description is required';
        }

        if (!foodData.image) {
            errors.image = 'Please upload an image';
        }

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            // Your form submission logic here
            console.log('Form submitted:', foodData);
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <div>
            <div className='topbar'>
                <div className='topbarwrapper'>
                    <div className='topLeft'></div>

                    <Stack direction='row' spacing={2}>
                        <Buttons className='boxStyling' variant='outlined'  onClick={() => navigate('/posinvoicetopbar')}
                        >
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
                                <h1>Add Food</h1>
                                <small>Add Food</small>
                            </div>
                        </section>
                    </Grid>
                </Grid>
                <div class='col-sm-12 col-md-8'>
                    
                        
                        <div>
                            <div className="col-sm-12 col-md-8">
                                <div className="panel panel-bd">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <h4>Add Food</h4>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <div className='Addfooditem'>
                                                <label htmlFor="category">Food Category:</label>
                                                <select
                                                    id="category"
                                                    name="category"
                                                    value={foodData.category}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="">Select category</option>
                                                    <option value="breakfast">Breakfast</option>
                                                    <option value="lunch">Lunch</option>
                                                    <option value="dinner">Dinner</option>
                                                    {/* Add other food categories here */}
                                                </select>
                                                {formErrors.category && (
                                                    <div className="error">{formErrors.category}</div>
                                                )}
                                            </div>
                                            <div className='Addfooditem'>
                                                <label htmlFor="kitchen">Select Kitchen:</label>
                                                <select
                                                    id="kitchen"
                                                    name="kitchen"
                                                    value={foodData.kitchen}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="">Select Kitchen</option>
                                                    <option value="Kitchen1">Kitchen 1</option>
                                                    <option value="Kitchen2">Kitchen 2</option>
                                                    <option value="Kitchen3">Kitchen 3</option>
                                                    {/* Add other kitchen options here */}
                                                </select>
                                                {formErrors.kitchen && (
                                                    <div className="error">{formErrors.kitchen}</div>
                                                )}
                                            </div>
                                            <div className='Addfooditem'>
                                                <label htmlFor="name">Food Name:</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={foodData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                {formErrors.name && <div className="error">{formErrors.name}</div>}
                                            </div>
                                            <div className='Addfooditem'>
                                                <label htmlFor="description">Description:</label>
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    value={foodData.description}
                                                    onChange={handleInputChange}
                                                    required
                                                ></textarea>
                                                {formErrors.description && (
                                                    <div className="error">{formErrors.description}</div>
                                                )}
                                            </div>
                                            <div className='Addfooditem'>
                                                <label htmlFor="image">Upload Food Image:</label>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    name="image"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    required
                                                />
                                                {formErrors.image && <div className="error">{formErrors.image}</div>}
                                            </div>
                                            <div className='Addfooditem'>
                                                <button type="submit">Add Food</button>
                                            </div>
                                        </div>
                                    </form>
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



