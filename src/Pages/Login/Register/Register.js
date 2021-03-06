import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../CoustomStyle/MuiButton';
import Navigation from '../../Shared/Navigation/Navigation';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Register = () => {
  return (
    <Box>
      <Navigation />
      <Container sx={{ width: '570px', border: '1px solid black', mt: 15 }} >
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <Box>
            <Typography sx={{ fontSize: 24, fontWeight: 700, py: 5 }}>
              Create an account
            </Typography>
            <TextField sx={{ width: "100%", my: 2 }} label="First Name" variant="standard" />
            <TextField sx={{ width: "100%", my: 2 }} label="Last Name" variant="standard" />
            <TextField sx={{ width: "100%", my: 2 }} label="Email" variant="standard" />
            <TextField sx={{ width: "100%", my: 2 }} label="Password" variant="standard" />
            <TextField sx={{ width: "100%", my: 2 }} label="Confirm Password" variant="standard" />
            <PrimaryButton variant="contained" sx={{ width: "100%", my: 3 }} >Create an account</PrimaryButton>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ fontSize: "16px", pb: 3 }}>
                Already have an account? <Link style={{ color: '#F63E7B' }} to="/login">login</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography sx={{ pb: 3 }}>
          ----------------------------------------or----------------------------------------
        </Typography>
        <Button variant="outlined"><FacebookIcon/>  Continue with Facebook</Button>
        <br />
        <Button variant="outlined"><GoogleIcon/>  Continue with Google</Button>
      </Box>
    </Box>
  );
};

export default Register;