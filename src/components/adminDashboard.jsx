import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ElderlyIcon from '@mui/icons-material/Elderly';
import { NavLink } from 'react-router-dom';

const mdTheme = createTheme();

function AdminDashboard() {
 
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