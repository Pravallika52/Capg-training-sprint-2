import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ElderlyIcon from '@mui/icons-material/Elderly';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { mainListItems } from './listItems';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Fade from '@mui/material/Fade';
// import Link from '@mui/material/Link'
import { NavLink } from 'react-router-dom';

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

const mdTheme = createTheme();

function AdminDashboard() {
  // const [open, setOpen] = React.useState(true);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open1 = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={5} md={2} lg={4} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <NavLink to="/doctor">
                  <LocalHospitalIcon />
                  <h2>Doctors</h2>
                  </NavLink>
                </Paper>
              </Grid>
              <Grid item xs={5} md={2} lg={4} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <RecordVoiceOverIcon />
                  <h2>Reporters</h2>
                </Paper>
              </Grid>
              <Grid item xs={5} md={2} lg={4} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <ElderlyIcon />
                  <h2>Patients</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <VaccinesIcon />
                  <h2>Medicins</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <NavLink to="/admin">
                  <AdminPanelSettingsIcon />
                  <h2>Admins</h2>
                  </NavLink>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AdminDashboard;