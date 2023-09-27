import './RgistrationVarification.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bgimg from "./bg/background1.jpg";
import bg from "./bg/Interactive.svg";
import { Container } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests

export default function Registration() {
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
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
    setVerificationError('');
  };

  const handleVerify = () => {
    // Simulate API call to verify the code (replace with actual logic)
    if (verificationCode === '123456') {
      setIsVerified(true);
    } else {
      setVerificationError('Invalid verification code. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "restaurantImage" && files) {
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

    if (!formData.openingHours.trim()) { // Validate opening hours
      newErrors.openingHours = 'Opening hours are required';
    }

    if (!formData.closingHours.trim()) { // Validate closing hours
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // const formDataToSend = new FormData();
      // for (const key in formData) {
      //   formDataToSend.append(key, formData[key]);
      // }

      // // Make a POST request to your backend
      // axios.post('http://localhost:8081/registration', formDataToSend)
      //   .then(res => {
      //     console.log(res.data); // Log the response from the backend
      //     navigate('/'); // Navigate to another page on successful registration
      //   })
      //   .catch(err => {
      //     console.error(err);
      //     // Handle any errors that occur during registration
      //   });
    }
  }

  const navigate = useNavigate();

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
                </Box>
                <Grid container spacing={1}>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                  <div className="verification-container">
      {isVerified ? (
        <div className="verification-success">
          <h2>Email Verified Successfully</h2>
          <p>Your email has been successfully verified.</p>
        </div>
      ) : (
        <div className="verification-form">
          <h2>Email Verification</h2>
          <p>Please enter the verification code sent to your email.</p>
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
          />
          {verificationError && <p className="error">{verificationError}</p>}
          <button onClick={() =>
                      navigate('/')}>Verify</button>
        </div>
      )}
    </div>
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
