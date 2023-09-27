
// import React, { useState } from 'react';

// const initialFormData = {
//     serialNumber: '',
//     title: '',
//     bannerImage: null,
//     bannerType: '',
//     bannerSize: '',
//     status: 'Active',
// };

// const BannerManager = () => {
//     const [formData, setFormData] = useState(initialFormData);
//     const [banners, setBanners] = useState([]);
//     const [showPopup, setShowPopup] = useState(false);
//     const [editingIndex, setEditingIndex] = useState(null);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setFormData({ ...formData, bannerImage: file });
//     };

//     const handleAddBanner = () => {
//         if (!validateForm()) {
//             return;
//         }

//         setBanners([...banners, formData]);
//         setFormData(initialFormData);
//         setShowPopup(false);
//     };

//     const handleEditBanner = (index) => {
//         setEditingIndex(index);
//         setFormData({ ...banners[index], bannerImage: null });
//         setShowPopup(true);
//     };

//     const handleUpdateBanner = () => {
//         if (!validateForm()) {
//             return;
//         }

//         const updatedBanners = [...banners];
//         updatedBanners[editingIndex] = formData;
//         setBanners(updatedBanners);
//         setFormData(initialFormData);
//         setEditingIndex(null);
//         setShowPopup(false);
//     };

//     const handleDeleteBanner = (index) => {
//         const updatedBanners = banners.filter((_, i) => i !== index);
//         setBanners(updatedBanners);
//     };

//     const validateForm = () => {
//         const { serialNumber, title, bannerImage, bannerType, bannerSize } = formData;

//         if (!serialNumber || !title || !bannerImage || !bannerType || !bannerSize) {
//             alert('All fields are required.');
//             return false;
//         }

//         return true;
//     };

//     return (
//         <div>
//             <h2>Banner Manager</h2>
//             <button onClick={() => setShowPopup(true)}>Add Banner</button>
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Serial Number</th>
//                             <th>Title</th>
//                             <th>Banner Image</th>
//                             <th>Banner Type</th>
//                             <th>Banner Size</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {banners.map((banner, index) => (
//                             <tr key={index}>
//                                 <td>{banner.serialNumber}</td>
//                                 <td>{banner.title}</td>
//                                 <td>
//                                     <img src={URL.createObjectURL(banner.bannerImage)} alt="Banner" width="100" />
//                                 </td>
//                                 <td>{banner.bannerType}</td>
//                                 <td>{banner.bannerSize}</td>
//                                 <td>{banner.status}</td>
//                                 <td>
//                                     <button onClick={() => handleEditBanner(index)}>Edit</button>
//                                     <button onClick={() => handleDeleteBanner(index)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {showPopup && (
//                 <div className="popup">
//                     <h3>{editingIndex !== null ? 'Edit Banner' : 'Add Banner'}</h3>
//                     <form>
//                         <div>
//                             <label>Serial Number:</label>
//                             <input
//                                 type="text"
//                                 name="serialNumber"
//                                 value={formData.serialNumber}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div>
//                             <label>Title:</label>
//                             <input
//                                 type="text"
//                                 name="title"
//                                 value={formData.title}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div>
//                             <label>Banner Image:</label>
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleImageChange}
//                             />
//                             {formData.bannerImage && (
//                                 <img src={URL.createObjectURL(formData.bannerImage)} alt="Banner" width="100" />
//                             )}
//                         </div>
//                         <div>
//                             <label>Banner Type:</label>
//                             <input
//                                 type="text"
//                                 name="bannerType"
//                                 value={formData.bannerType}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div>
//                             <label>Banner Size:</label>
//                             <input
//                                 type="text"
//                                 name="bannerSize"
//                                 value={formData.bannerSize}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div>
//                             <label>Status:</label>
//                             <select
//                                 name="status"
//                                 value={formData.status}
//                                 onChange={handleInputChange}
//                             >
//                                 <option value="Active">Active</option>
//                                 <option value="Inactive">Inactive</option>
//                             </select>
//                         </div>
//                         {editingIndex !== null ? (
//                             <button type="button" onClick={handleUpdateBanner}>
//                                 Update Banner
//                             </button>
//                         ) : (
//                             <button type="button" onClick={handleAddBanner}>
//                                 Add Banner
//                             </button>
//                         )}
//                         <button
//                             type="button"
//                             onClick={() => {
//                                 setShowPopup(false);
//                                 setFormData(initialFormData);
//                                 setEditingIndex(null);
//                             }}
//                         >
//                             Cancel
//                         </button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BannerManager;





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

const initialFormData = {
    serialNumber: '',
    title: '',
    bannerImage: null,
    bannerType: '',
    bannerSize: '',
    status: 'Active',
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
    // const [userData, setUserData] = useState(user);

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
    const [formData, setFormData] = useState(initialFormData);
    const [banners, setBanners] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, bannerImage: file });
    };

    const handleAddBanner = () => {
        if (!validateForm()) {
            return;
        }

        setBanners([...banners, formData]);
        setFormData(initialFormData);
        setShowPopup(false);
    };

    const handleEditBanner = (index) => {
        setEditingIndex(index);
        setFormData({ ...banners[index], bannerImage: null });
        setShowPopup(true);
    };

    const handleUpdateBanner = () => {
        if (!validateForm()) {
            return;
        }

        const updatedBanners = [...banners];
        updatedBanners[editingIndex] = formData;
        setBanners(updatedBanners);
        setFormData(initialFormData);
        setEditingIndex(null);
        setShowPopup(false);
    };

    const handleDeleteBanner = (index) => {
        const updatedBanners = banners.filter((_, i) => i !== index);
        setBanners(updatedBanners);
    };

    const validateForm = () => {
        const { serialNumber, title, bannerImage, bannerType, bannerSize } = formData;

        if (!serialNumber || !title || !bannerImage || !bannerType || !bannerSize) {
            alert('All fields are required.');
            return false;
        }

        return true;
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
                                <h1>Profile Page</h1>
                                <small>Profile Page</small>
                            </div>
                        </section>
                    </Grid>
                </Grid>
                <div class='col-sm-12 col-md-8'>
                    <div class='panel panel-bd'>
                        <div class='panel-heading'>
                            <div class='panel-title'>
                                <h4>Profile Page</h4>
                            </div>
                        </div>
                        <div>
      <h2>Banner Manager</h2>
      <button onClick={() => setShowPopup(true)}>Add Banner</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Title</th>
              <th>Banner Image</th>
              <th>Banner Type</th>
              <th>Banner Size</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((banner, index) => (
              <tr key={index}>
                <td>{banner.serialNumber}</td>
                <td>{banner.title}</td>
                <td>
                  <img src={URL.createObjectURL(banner.bannerImage)} alt="Banner" width="100" />
                </td>
                <td>{banner.bannerType}</td>
                <td>{banner.bannerSize}</td>
                <td>{banner.status}</td>
                <td>
                  <button onClick={() => handleEditBanner(index)}>Edit</button>
                  <button onClick={() => handleDeleteBanner(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="popup">
          <h3>{editingIndex !== null ? 'Edit Banner' : 'Add Banner'}</h3>
          <form>
            <div>
              <label>Serial Number:</label>
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Banner Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {formData.bannerImage && (
                <img src={URL.createObjectURL(formData.bannerImage)} alt="Banner" width="100" />
              )}
            </div>
            <div>
              <label>Banner Type:</label>
              <input
                type="text"
                name="bannerType"
                value={formData.bannerType}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Banner Size:</label>
              <input
                type="text"
                name="bannerSize"
                value={formData.bannerSize}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Status:</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            {editingIndex !== null ? (
              <button type="button" onClick={handleUpdateBanner}>
                Update Banner
              </button>
            ) : (
              <button type="button" onClick={handleAddBanner}>
                Add Banner
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setShowPopup(false);
                setFormData(initialFormData);
                setEditingIndex(null);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
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





