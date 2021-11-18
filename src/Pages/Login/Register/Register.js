import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
  return (
    <Box>
      <Navigation />
      <Container sx={{ width: '570px', border: '1px solid black',mt:15 }} >
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <Box>
            <Typography variant="body">
              Siam is a back
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;