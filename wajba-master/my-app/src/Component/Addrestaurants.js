import './RgistrationVarification.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bgimg from "./bg/background1.jpg";
import bg from "./bg/Interactive.svg";
import { Container } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import axios from "axios"; // Import axios for making HTTP requests

export default function Registration() {

    const [formData, setFormData] = useState({
        restaurantName: '',
        restaurantAddress: '',
        restaurantContact: '',
        openingTime: '',
        openingTimePeriod: 'AM',
        closingTime: '',
        closingTimePeriod: 'AM',
        restaurantImage: null,
        selectedCountry: '', // Added selectedCountry field
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const navigate = useNavigate();
    const handleCountryChange = (selectedOption) => {
        setFormData({ ...formData, selectedCountry: selectedOption.value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.restaurantName.trim()) {
            newErrors.restaurantName = 'Restaurant name is required';
        }

        if (!formData.restaurantAddress.trim()) {
            newErrors.restaurantAddress = 'Restaurant address is required';
        }

        if (!formData.restaurantContact.trim()) {
            newErrors.restaurantContact = 'Restaurant contact number is required';
        } else if (!/^\d{10}$/.test(formData.restaurantContact)) {
            newErrors.restaurantContact = 'Invalid contact number (10 digits)';
        }

        if (!formData.openingTime.trim()) {
            newErrors.openingTime = 'Opening time is required';
        } else if (!/^([1-9]|1[0-2]):[0-5][0-9]$/.test(formData.openingTime)) {
            newErrors.openingTime = 'Invalid opening time format (HH:MM)';
        }

        if (!formData.closingTime.trim()) {
            newErrors.closingTime = 'Closing time is required';
        } else if (!/^([1-9]|1[0-2]):[0-5][0-9]$/.test(formData.closingTime)) {
            newErrors.closingTime = 'Invalid closing time format (HH:MM)';
        }

        if (!formData.restaurantImage) {
            newErrors.restaurantImage = 'Restaurant image is required';
        }

        if (!formData.selectedCountry) {
            newErrors.selectedCountry = 'Country is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Submit the form data to your backend or perform other actions
            console.log('Form data:', formData);
        }
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
                    height: '87%',
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
                                    <h1>Add Restaurant</h1>
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label>Restaurant Name:</label>
                                                <input
                                                    type="text"
                                                    name="restaurantName"
                                                    value={formData.restaurantName}
                                                    onChange={handleChange}
                                                />
                                                {errors.restaurantName && <p className="error">{errors.restaurantName}</p>}
                                            </div>

                                            <div>
                                                <label>Restaurant Address:</label>
                                                <input
                                                    type="text"
                                                    name="restaurantAddress"
                                                    value={formData.restaurantAddress}
                                                    onChange={handleChange}
                                                />
                                                {errors.restaurantAddress && <p className="error">{errors.restaurantAddress}</p>}
                                            </div>

                                            <div>
                                                <label>Restaurant Contact Number:</label>
                                                <div>

                                                    <PhoneInput
                                                        inputProps={{
                                                            name: 'restaurantContact',
                                                            required: true,
                                                        }}
                                                        country={'us'} // Default country, you can change this to any default country
                                                        value={formData.restaurantContact}
                                                        onChange={(phone) => setFormData({ ...formData, restaurantContact: phone })}
                                                    />
                                                </div>
                                                {errors.restaurantContact && <p className="error">{errors.restaurantContact}</p>}
                                                {errors.selectedCountry && <p className="error">{errors.selectedCountry}</p>}
                                            </div>

                                            <div>
                                                <label>Opening Time:</label>
                                                <input
                                                    type="text"
                                                    name="openingTime"
                                                    value={formData.openingTime}
                                                    onChange={handleChange}
                                                />
                                                <select
                                                    name="openingTimePeriod"
                                                    value={formData.openingTimePeriod}
                                                    onChange={handleChange}
                                                >
                                                    <option value="AM">AM</option>
                                                    <option value="PM">PM</option>
                                                </select>
                                                {errors.openingTime && <p className="error">{errors.openingTime}</p>}
                                            </div>

                                            <div>
                                                <label>Closing Time:</label>
                                                <input
                                                    type="text"
                                                    name="closingTime"
                                                    value={formData.closingTime}
                                                    onChange={handleChange}

                                                />
                                                <select
                                                    name="closingTimePeriod"
                                                    value={formData.closingTimePeriod}
                                                    onChange={handleChange}
                                                >
                                                    <option value="AM">AM</option>
                                                    <option value="PM">PM</option>
                                                </select>
                                                {errors.closingTime && <p className="error">{errors.closingTime}</p>}
                                            </div>

                                            <div>
                                                <label>Restaurant Image:</label>
                                                <input
                                                    type="file"
                                                    name="restaurantImage"
                                                    onChange={handleChange}
                                                />
                                                {errors.restaurantImage && <p className="error">{errors.restaurantImage}</p>}
                                            </div>

                                            <button type="submit" onClick={() =>
                                                navigate('/registration')}>Add Restaurant</button>
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
 