import { Container, Grid, List, ListItem } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/system';


const Footer = () => {
  return (
    <Box sx={{ background: '#F63E7B', pt: 5, pb: 10 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} >
            <List sx={{ color: '#fff' }}>
              <ListItem>
                <LocationOnIcon sx={{ mr: 1 }} />  H#000 (0th Floor), Road #00,
                New DOHS, Mohakhali, Dhaka, Bangladesh
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={2} >
            <List sx={{ color: '#fff' }}>
              <ListItem>
                Company
              </ListItem>
              <ListItem>
                About
              </ListItem>
              <ListItem>
                Project
              </ListItem>
              <ListItem>
                Our Team
              </ListItem>
              <ListItem>
                Terms Conditions
              </ListItem>
              <ListItem>
                Submit Listing
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={2} >
            <List sx={{ color: '#fff' }}>
              <ListItem>
                Quick Links
              </ListItem>
              <ListItem>
                Quick Links
              </ListItem>
              <ListItem>
                Rentals
              </ListItem>
              <ListItem>
                Sales
              </ListItem>
              <ListItem>
                Contact
              </ListItem>
              <ListItem>
                Our blog
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4} >
            <List sx={{ color: '#fff' }}>
              <ListItem>
                About us
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Purus commodo ipsum
                duis laoreet maecenas. Feugiat
              </ListItem>
              <ListItem>
                <FacebookIcon sx={{ mx: 1 }} />
                <InstagramIcon sx={{ mx: 1 }} />
                <LinkedInIcon sx={{ mx: 1 }} />
                <YouTubeIcon sx={{ mx: 1 }} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer