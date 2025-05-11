/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Container,
  MenuItem,
  Select,
  FormControl,
  Box,
} from '@mui/material';
import ContactUsLabel from '../../../../core/components/label/ContactUsLabel';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: 'IND',
    message: '',
    agreeToPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container sx={{ boxShadow: 'none' }} maxWidth="sm">
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 'none',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: '#4E18CD',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            fontWeight: 500,
            lineHeight: '26px',
          }}
        >
          CONTACT US
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#020D2B',
            textAlign: 'center',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '35px',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
        >
          Get in touch
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: '#020D2B',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '29px',
          }}
        >
          We'd love to hear from you. Please fill out this form.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <ContactUsLabel label={'First Name'} />
                <TextField
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <ContactUsLabel label={'Last Name'} />
                <TextField
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <ContactUsLabel label={'Email'} />
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <ContactUsLabel label={'Country Code'} />
                <Select
                  labelId="countryCodeLabel"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  label="Country Code"
                >
                  <MenuItem value="IND">IND</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormControl fullWidth>
                <ContactUsLabel label={'Phone Number'} />
                <TextField
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <ContactUsLabel label={'Message'} />
                <TextField
                  id="message"
                  multiline
                  rows={4}
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onChange={handleChange}
                  />
                }
                label={
                  <Typography variant="body2">
                    You agree to our friendly{' '}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      privacy policy.
                    </a>
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{
                  borderRadius: '10px',
                  border: '2px solid #4E18CD',
                  background: '#4E18CD',
                  ':hover': {
                    background: '#FFF',
                    color: '#4E18CD',
                    border: '2px solid #4E18CD',
                  },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
