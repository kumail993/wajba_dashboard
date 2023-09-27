
import React, { useState } from 'react';
import './Registration.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bgimg from './bg/background1.jpg';
import bg from './bg/Interactive.svg';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    restaurantName: '',
    userName: '',
    email: '',
    password: '',
    restaurantAddress: '',
    openingHours: '', // Add opening hours field
    closingHours: '', // Add closing hours field
    restaurantImage: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    restaurantName: '',
    userName: '',
    email: '',
    password: '',
    restaurantAddress: '',
    openingHours: '', // Add opening hours field
    closingHours: '', // Add closing hours field
    restaurantImage: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'restaurantImage' && files) {
      const imageFile = files[0];

      if (imageFile && !imageFile.type.startsWith('image/')) {
        setErrors({ ...errors, restaurantImage: 'Please select a valid image file' });
      } else if (imageFile && imageFile.size > 1024 * 1024) {
        setErrors({ ...errors, restaurantImage: 'Image size should be less than 1MB' });
      } else {
        setFormData({ ...formData, [name]: imageFile });
        setErrors({ ...errors, restaurantImage: '' });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.restaurantName.trim()) {
      newErrors.restaurantName = 'Restaurant name is required';
    }

    if (!formData.userName.trim()) {
      newErrors.userName = 'User name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password.trim() === formData.email.trim()) {
      newErrors.password = 'Password cannot be the same as email';
    }

    if (!formData.restaurantAddress.trim()) {
      newErrors.restaurantAddress = 'Restaurant address is required';
    }

    if (!formData.openingHours.trim()) {
      newErrors.openingHours = 'Opening hours are required';
    }

    if (!formData.closingHours.trim()) {
      newErrors.closingHours = 'Closing hours are required';
    }

    if (!formData.restaurantImage) {
      newErrors.restaurantImage = 'Restaurant image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        // Hash the password on the client-side
        const hashedPassword = await hashPassword(formData.password);
  
        // Prepare the data to send to the backend
        const registrationData = {
          crew_user: formData.userName,
          restaurant_name: formData.restaurantName,
          crew_email: formData.email,
          crew_password: hashedPassword,
        };
  
        // Make a POST request to your backend registration API
        const response = await axios.post('/registration', registrationData);
  
        if (response.status === 201) {
          console.log('Registration successful');
          // navigate('/registrationverification'); // Redirect to verification page on success
        } else if (response.status === 409) {
          console.error('Email already exists:', response.data.error);
        } else {
          console.error('Registration failed:', response.data.error);
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  };
  

  const hashPassword = async (password) => {
    // Use a password hashing library (e.g., bcrypt) on the server-side
    // You should not hash passwords on the client-side in a real application
    // This is just for demonstration purposes
    // NEVER hash passwords on the client-side in a real application
    return password; // Replace with actual hashing logic on the server
  };

  return (
    <div
    style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      opacity: 1.0,
    }}
  >
    <Box
      sx={{
        width: '75%',
        height: '70%',
        backgroundColor: 'background.paper',
        position: 'absolute',
        top: '10%',
        left: '10%',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} lg={6}>
          <Box
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              marginTop: '40px',
              marginLeft: '15px',
              marginRight: '15px',
              height: '60vh',
              width: '73vh',
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Box
            style={{
              backgroundSize: 'cover',
              height: '70vh',
              backgroundColor: 'navy blue',
            }}
          >
            <Container>
              <Box
                sx={{
                  position: 'relative',
                  top: '50%',
                  textAlign: 'center',
                }}
              >
                <h1>Registration</h1>
              </Box>
              <Grid container spacing={1}>
                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Restaurant Name</label>
                      <input
                        type="text"
                        name="restaurantName"
                        value={formData.restaurantName}
                        onChange={handleChange}
                      />
                      {errors.restaurantName && <p className="error">{errors.restaurantName}</p>}
                    </div>
                    <div className="form-group">
                      <label>User Name</label>
                      <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                      />
                      {errors.userName && <p className="error">{errors.userName}</p>}
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <div className="password-input">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          onClick={togglePasswordVisibility}
                          autoComplete="new-password"
                        />
                      </div>
                      {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit"  >Register</button>
                  </form>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </div>
  );
}

