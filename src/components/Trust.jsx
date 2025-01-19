import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Typography, Grid, useMediaQuery } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import SettingsIcon from '@mui/icons-material/Settings';
import WashIcon from '@mui/icons-material/Wash';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import HousekeepingImg from '../assets/housekeeping.png';

const Trust = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Container>
            {/* Section 1 */}
            <Box sx={{ textAlign: 'center', width: '100%', marginBottom: '2em' }}>
                <Typography variant='h5' sx={{ fontWeight: "bold", fontSize: 18, color: 'text.primary', marginTop: '10px' }}>
                    WHY CHOOSE US
                </Typography>
                <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: 24, color: 'text.primary', marginTop: '0.5em' }}>
                    Tradition of Trust
                </Typography>
                <Typography variant='body1' sx={{ fontSize: 16, color: 'text.secondary', width: isMobile ? '100%' : '60%', margin: '1em auto' }}>
                    We specialize in intelligent & effective search and believe in the power of partnerships to grow business.
                </Typography>
            </Box>

            {/* Section 2: Benefits */}
            <Container maxWidth='lg'>
                <Grid container spacing={3} justifyContent="center">
                    {/* Content 1 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center', border: '2px solid blue', borderRadius: '10px', padding: '20px' }}>
                            <Box sx={{ width: '90px', height: '90px', borderRadius: '50%', margin: '0 auto', border: '2px solid black', boxShadow: '0px 0px 10px 2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <GroupsIcon fontSize='large' />
                            </Box>
                            <Typography variant="h6" sx={{ color: '#000', fontSize: 20, fontWeight: 'bold', marginTop: '1em' }}>Professional Team</Typography>
                            <Typography variant='body2' sx={{ color: 'text.secondary', marginTop: '0.5em' }}>
                                Our Team uses a sanitizing solution to wipe down light switches and doorknobs.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Content 2 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center', border: '2px solid blue', borderRadius: '10px', padding: '20px' }}>
                            <Box sx={{ width: '90px', height: '90px', borderRadius: '50%', margin: '0 auto', border: '2px solid black', boxShadow: '0px 0px 10px 2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <AccessAlarmsIcon fontSize='large' />
                            </Box>
                            <Typography variant="h6" sx={{ color: '#000', fontSize: 20, fontWeight: 'bold', marginTop: '1em' }}>24/7 Services</Typography>
                            <Typography variant='body2' sx={{ color: 'text.secondary', marginTop: '0.5em' }}>
                                We encourage our customers to let us know in advance of appointments.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Content 3 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center', border: '2px solid blue', borderRadius: '10px', padding: '20px' }}>
                            <Box sx={{ width: '90px', height: '90px', borderRadius: '50%', margin: '0 auto', border: '2px solid black', boxShadow: '0px 0px 10px 2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <SettingsIcon fontSize='large' />
                            </Box>
                            <Typography variant="h6" sx={{ color: '#000', fontSize: 20, fontWeight: 'bold', marginTop: '1em' }}>Service Guarantee</Typography>
                            <Typography variant='body2' sx={{ color: 'text.secondary', marginTop: '0.5em' }}>
                                We instruct our team members to switch out all cleaning materials and mop heads after each use.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Section 3 */}
            <Box sx={{ marginTop: '3em', display: 'flex', flexWrap: 'wrap' }}>
                {/* Image */}
                <Grid item xs={12} sm={12} md={12}>
                    <Box sx={{
                        flex: 1,
                        padding: '1em',
                        backgroundColor: '#FF8000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img src={HousekeepingImg} alt="Housekeeping" style={{ maxWidth: "100%", borderRadius: "8px" }} />
                    </Box>
                </Grid>

                {/* Text Section */}
                <Box sx={{ flex: 1, padding: '2em' }}>
                    <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: 16, fontWeight: 'bold' }}>
                        MADE FOR YOU
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#000', fontWeight: 'bold', marginTop: '0.5em' }}>
                        A Cleaner Place is a Safer Place.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', marginTop: '0.5em' }}>
                        Washla Cleaning Service is dedicated to giving customers back the time they deserve to enjoy the things they love.
                    </Typography>

                    {/* Cards */}
                    <Grid container spacing={2} marginTop="2em">
                        {/* Card 1 */}
                        <Grid item xs={12} sm={12} md={12}>
                            <Card variant='outlined'>
                                <CardMedia sx={{ textAlign: 'center', marginTop: '0.5em' }}>
                                    <WashIcon fontSize='large' />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Professional Cleaning</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '0.5em' }}>
                                        Housekeeping is responsible for minor security in hotel food ecosystems.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Card 2 */}
                        <Grid item xs={12} sm={12} md={12}>
                            <Card variant='outlined'>
                                <CardMedia sx={{ textAlign: 'center', marginTop: '0.5em' }}>
                                    <FormatPaintIcon fontSize='large' />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Fast and Efficient</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '0.5em' }}>
                                        Our goal is to keep your home clean, efficient, and inviting.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Trust;
