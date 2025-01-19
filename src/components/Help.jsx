import React from 'react';
import { Box, Typography, Button, Container, Grid, } from '@mui/material';
import HelpImage from '../assets/Help-bg.png';
import HappyIcon from '@mui/icons-material/EmojiEmotions';
import HouseIcon from '@mui/icons-material/WaterDamage';
import WindowIcon from '@mui/icons-material/Window';
import AwardIcon from '@mui/icons-material/EmojiEvents';

const Help = () => {
    return (
        <Box>
            <Box
                sx={{
                    // backgroundColor: '#f0f8ff',
                    // opacity: 0.5,
                    p: 5,
                    height: '60vh',
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                {/* Image Background */}
                <Box
                    sx={{
                        backgroundImage: `url(${HelpImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: 380,
                        opacity: 1,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -2,
                    }}
                />

                {/* Content */}
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    Cleaning your Worries Away
                </Typography>
                <Typography variant="h4" color="text.secondary" fontWeight='bold' gutterBottom>
                    Need Help With Cleaning?
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        mt: 2,
                        paddingX: 4,
                        borderRadius: '20px',
                        textTransform: 'none',
                    }}
                >
                    Request Call Back
                </Button>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#f0f8ff',
                    p: 5,
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            width: '100%',
                            border: '1px solid transparent',
                            backgroundColor: '#4CC9FE',
                            borderRadius: '10px',
                            p: 3,
                        }}
                    >
                        <Grid container spacing={4}>
                            {/* Happy Customers */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <HappyIcon fontSize="large" />
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h4" color="#000">
                                            385
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" fontWeight="bold" gutterBottom>
                                            Happy customers
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Houses Cleaned */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <HouseIcon fontSize="large" />
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h4" color="#000">
                                            842
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" fontWeight="bold" gutterBottom>
                                            Houses Cleaned
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Awards Received */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <AwardIcon fontSize="large" />
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h4" color="#000">
                                            489
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" fontWeight="bold" gutterBottom>
                                            Awards Received
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Glass Cleaned */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <WindowIcon fontSize="large" />
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h4" color="#000">
                                            1344
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" fontWeight="bold" gutterBottom>
                                            Glass cleaned
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Help;
