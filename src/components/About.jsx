import { Box, CardMedia, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WashIcon from '@mui/icons-material/Wash';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import HomeIcon from '@mui/icons-material/Home';

const About = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#FADA7A',
                width: '100%',
                minHeight: '100vh',
                textAlign: 'center',
                color: '#fff',
                py: 4,
            }}
        >
            {/* Section 1 */}
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    marginTop="5px"
                >
                    {/* Card 1 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                border: '1px solid black',
                                mx: 'auto',
                            }}
                        >
                            <CardMedia>
                                <WashIcon fontSize="large" sx={{ marginTop: '8px' }} />
                            </CardMedia>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: '#000',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginBottom: '8px',
                                    }}
                                >
                                    Professional Cleaning
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="div"
                                    sx={{ color: 'text.secondary', fontSize: 16 }}
                                >
                                    Housekeeping is responsible for minor security in hotel
                                    Ecosystem for food and cleaner through.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Card 2 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                border: '1px solid black',
                                mx: 'auto',
                            }}
                        >
                            <CardMedia>
                                <FormatPaintIcon fontSize="large" sx={{ marginTop: '8px' }} />
                            </CardMedia>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: '#000',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginBottom: '8px',
                                    }}
                                >
                                    Fast and Efficient
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="div"
                                    sx={{ color: 'text.secondary', fontSize: 16 }}
                                >
                                    Our aim is to keep the house clean - Your aim will Help!
                                    the through digital innovation world summit.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Card 3 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                border: '1px solid black',
                                mx: 'auto',
                            }}
                        >
                            <CardMedia>
                                <HomeIcon fontSize="large" sx={{ marginTop: '8px' }} />
                            </CardMedia>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: '#000',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginBottom: '8px',
                                    }}
                                >
                                    Renew your Look
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="div"
                                    sx={{ color: 'text.secondary', fontSize: 16 }}
                                >
                                    Both of us take a lot of time in getting cleaned and
                                    beautified clean home. Professional service.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Section 2 */}
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    {/* Content 1 */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    color: 'red',
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    marginBottom: '8px',
                                }}
                            >
                                A Clean House is a<br /> Happy Place!
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 16, fontWeight: 'bold', }}>
                                Washla has met the demands of a growing world.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Content 2 */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                }}
                            >
                                Washla customers have a tremendous opportunity to answer
                                the call of logistic needs across the globe. Has 26
                                affiliated state soybean associations representing 30
                                soybean-producing states.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Content 3 */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                }}
                            >
                                World's leading non-asset-based supply chain management
                                companies, we design and implement industry-leading
                                solutions. We specialize in intelligent & effective
                                searches and believe in the power of partnerships to grow
                                business.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
