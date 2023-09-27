
// import React, { useState } from 'react';

// function WebsiteSettings() {
//     const initialFormData = {
//         email: '',
//         phone: '',
//         mobile: '',
//         logo: null,
//         footerLogo: null,
//         websiteStatus: 'on',
//         address: '',
//         footerDescription: '',
//     };

//     const [formData, setFormData] = useState(initialFormData);
//     const [originalFormData] = useState(initialFormData); // Store original data for reset
//     const [validationError, setValidationError] = useState('');
//     const [isEditMode, setIsEditMode] = useState(false);

//     const handleInputChange = (e) => {
//         const { name, value, type, files } = e.target;
//         if (type === 'file') {
//             setFormData({ ...formData, [name]: files[0] });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSave = () => {
//         if (
//             !formData.email ||
//             !formData.phone ||
//             !formData.mobile ||
//             !formData.address ||
//             !formData.footerDescription
//         ) {
//             setValidationError('Please fill in all required fields.');
//         } else {
//             // Clear any previous validation messages
//             setValidationError('');

//             // Simulate saving the data (you can replace this with your actual API call)
//             console.log('Form data:', formData);

//             // Disable editing after saving
//             setIsEditMode(false);
//         }
//     };

//     const handleEdit = () => {
//         // Enable editing when the user clicks "Edit"
//         setIsEditMode(true);
//     };

//     const handleReset = () => {
//         // Reset the form data to its original state
//         setFormData({ ...originalFormData });
//         setIsEditMode(false);
//         setValidationError('');
//     };

//     return (
//         <div>
//             <h1>Website Settings</h1>
//             <form>
//                 <label>Email Address:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     disabled={!isEditMode}
//                 />

//                 <label>Phone No:</label>
//                 <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     disabled={!isEditMode}
//                 />

//                 <label>Mobile No:</label>
//                 <input
//                     type="text"
//                     name="mobile"
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                     required
//                     disabled={!isEditMode}
//                 />

//                 <label>Logo Image:</label>
//                 <input
//                     type="file"
//                     name="logo"
//                     onChange={handleInputChange}
//                     accept="image/*"
//                     disabled={!isEditMode}
//                 />

//                 <label>Footer Logo Image:</label>
//                 <input
//                     type="file"
//                     name="footerLogo"
//                     onChange={handleInputChange}
//                     accept="image/*"
//                     disabled={!isEditMode}
//                 />

//                 <label>Website Status:</label>
//                 <select
//                     name="websiteStatus"
//                     value={formData.websiteStatus}
//                     onChange={handleInputChange}
//                     required
//                     disabled={!isEditMode}
//                 >
//                     <option value="on">On</option>
//                     <option value="off">Off</option>
//                 </select>

//                 <label>Address:</label>
//                 <textarea
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     required
//                     disabled={!isEditMode}
//                 ></textarea>

//                 <label>Footer Description:</label>
//                 <textarea
//                     name="footerDescription"
//                     value={formData.footerDescription}
//                     onChange={handleInputChange}
//                     required
//                     disabled={!isEditMode}
//                 ></textarea>

//                 {isEditMode ? (
//                     <div>
//                         <button type="button" onClick={handleSave}>
//                             Save
//                         </button>
//                         <button type="button" onClick={handleReset}>
//                             Reset
//                         </button>
//                     </div>
//                 ) : (
//                     <button type="button" onClick={handleEdit}>
//                         Edit
//                     </button>
//                 )}
//             </form>

//             {validationError && <div style={{ color: 'red' }}>{validationError}</div>}
//         </div>
//     );
// }

// export default WebsiteSettings;

// import React, { useState } from 'react';

// const initialSettings = {
//   email: '',
//   phoneNumber: '',
//   mobileNumber: '',
//   logo: null,
//   footerLogo: null,
//   websiteStatus: false,
//   address: '',
//   footerDetails: '',
// };

// export default function Settings() {
//   const [settings, setSettings] = useState(initialSettings);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, files, checked } = e.target;
//     const newValue = type === 'file' ? files[0] : type === 'checkbox' ? checked : value;
//     setSettings({
//       ...settings,
//       [name]: newValue,
//     });
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleResetClick = () => {
//     setSettings(initialSettings);
//     setIsEditing(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validation logic can be added here

//     // Handle form submission and save settings (e.g., to an API)
//     console.log('Submitted settings:', settings);

//     setIsEditing(false); // Exit edit mode after submission
//   };

//   return (
//     <div>
//       <h1>Website Settings</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email Address:</label>
//           <input
//             type="email"
//             name="email"
//             value={settings.email}
//             onChange={handleChange}
//             required
//             disabled={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={settings.phoneNumber}
//             onChange={handleChange}
//             required
//             disabled={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Mobile Number:</label>
//           <input
//             type="tel"
//             name="mobileNumber"
//             value={settings.mobileNumber}
//             onChange={handleChange}
//             required
//             disabled={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Logo:</label>
//           <input
//             type="file"
//             name="logo"
//             onChange={handleChange}
//             accept="image/*"
//             disabled={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Footer Logo:</label>
//           <input
//             type="file"
//             name="footerLogo"
//             onChange={handleChange}
//             accept="image/*"
//             disabled={!isEditing}
//           />
//         </div>
//         <div>
//           <label>
//             Website Status (On/Off):
//             <input
//               type="checkbox"
//               name="websiteStatus"
//               checked={settings.websiteStatus}
//               onChange={handleChange}
//               disabled={!isEditing}
//             />
//           </label>
//         </div>
//         <div>
//           <label>Address:</label>
//           <textarea
//             name="address"
//             value={settings.address}
//             onChange={handleChange}
//             required
//             disabled={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Footer Details:</label>
//           <textarea
//             name="footerDetails"
//             value={settings.footerDetails}
//             onChange={handleChange}
//             disabled={!isEditing}
//           />
//         </div>
//         <div>
//           {isEditing ? (
//             <>
//               <button type="submit">Save Settings</button>
//               <button type="button" onClick={handleResetClick}>
//                 Reset
//               </button>
//             </>
//           ) : (
//             <button type="button" onClick={handleEditClick}>
//               Edit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }









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

    const initialFormData = {
        email: '',
        phone: '',
        mobile: '',
        logo: null,
        footerLogo: null,
        websiteStatus: 'on',
        address: '',
        footerDescription: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [originalFormData] = useState(initialFormData); // Store original data for reset
    const [validationError, setValidationError] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSave = () => {
        if (
            !formData.email ||
            !formData.phone ||
            !formData.mobile ||
            !formData.address ||
            !formData.footerDescription
        ) {
            setValidationError('Please fill in all required fields.');
        } else {
            // Clear any previous validation messages
            setValidationError('');

            // Simulate saving the data (you can replace this with your actual API call)
            console.log('Form data:', formData);

            // Disable editing after saving
            setIsEditMode(false);
        }
    };

    const handleEdit = () => {
        // Enable editing when the user clicks "Edit"
        setIsEditMode(true);
    };

    const handleReset = () => {
        // Reset the form data to its original state
        setFormData({ ...originalFormData });
        setIsEditMode(false);
        setValidationError('');
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
                                <h1>Website Settings</h1>
                                <small>Website Settings</small>
                            </div>
                        </section>
                    </Grid>
                </Grid>
                <div class='col-sm-12 col-md-8'>
                    <div class='panel panel-bd'>
                        <div class='panel-heading'>
                            <div class='panel-title'>
                                <h4>Website Settings</h4>
                            </div>
                        </div>
                        <div>
      <h1>Website Settings</h1>
      <form>
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={!isEditMode}
        />

        <label>Phone No:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          disabled={!isEditMode}
        />

        <label>Mobile No:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          required
          disabled={!isEditMode}
        />

        <label>Logo Image:</label>
        <input
          type="file"
          name="logo"
          onChange={handleInputChange}
          accept="image/*"
          disabled={!isEditMode}
        />

        <label>Footer Logo Image:</label>
        <input
          type="file"
          name="footerLogo"
          onChange={handleInputChange}
          accept="image/*"
          disabled={!isEditMode}
        />

        <label>Website Status:</label>
        <select
          name="websiteStatus"
          value={formData.websiteStatus}
          onChange={handleInputChange}
          required
          disabled={!isEditMode}
        >
          <option value="on">On</option>
          <option value="off">Off</option>
        </select>

        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          disabled={!isEditMode}
        ></textarea>

        <label>Footer Description:</label>
        <textarea
          name="footerDescription"
          value={formData.footerDescription}
          onChange={handleInputChange}
          required
          disabled={!isEditMode}
        ></textarea>

        {isEditMode ? (
          <div>
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        ) : (
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        )}
      </form>

      {validationError && <div style={{ color: 'red' }}>{validationError}</div>}
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


