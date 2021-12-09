import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import PrimaryButton from '../../../CoustomStyle/MuiButton';

const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logOut } = useAuth()
  console.log(admin);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      {admin.admin ? " " : <List List >
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText >
              Home
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/dashboard/book" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText >
              Book
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/dashboard/bookingList" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText >
              BookingList
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/dashboard/review" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText >
              Review
            </ListItemText>
          </ListItem>
        </Link>
        <ListItem >
          <ListItemText >
            <PrimaryButton sx={{ width: '100%' }} color="inherit" onClick={logOut}>Log Out</PrimaryButton>
          </ListItemText>
        </ListItem>
      </List>}

      {admin.admin &&
        <List>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText >
                Home
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard/orderList" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText >
                Order List
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard/addService" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText >
                Add Service
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard/makeAdmin" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText >
                Make Admin
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard/manageService" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText >
                Manage Service
              </ListItemText>
            </ListItem>
          </Link>
          <ListItem >
            <ListItemText >
              <PrimaryButton sx={{ width: '100%' }} color="inherit" onClick={logOut}>Log Out</PrimaryButton>
            </ListItemText>
          </ListItem>
        </List>}
    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
