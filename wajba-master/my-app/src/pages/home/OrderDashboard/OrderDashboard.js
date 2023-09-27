import './OrderDashboard.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Dashboardhome() {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16} paddingLeft={2} paddingRight={2} paddingTop={3}>
                <Grid item xs={16}>
                    <section class="content-header">
                        <div class="header-icon"><i class="bi bi-house"></i></div>
                        <div class="header-title">
                            <h1>  Order</h1>
                            <small>Order</small>
                        </div>
                    </section>
                </Grid>

            </Grid>
        </Box>

    )
}

