import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
    Box,
    Typography,
    TextField,
    Button,
    Link,
    Grid2,
    Grid,
} from "@mui/material";
import { Stack } from '@mui/material';


const Footer = () => {
    return (
        <Box
            sx={{
                py: 5,
                px: 2,
                backgroundColor: "#212529",
                color: "#ffffff",
            }}
        >
            <Grid2 container spacing={4} justifyContent="space-between">
                {/* Logo and Address Section */}
                <Grid2 item xs={12} sm={6} md={3}>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", mb: 2, color: "#ffc107" }}
                    >
                        Amiso
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, width: '130px' }}>
                        Washla customers has a tremendous opportunity to answer the call of logistic.
                    </Typography>
                </Grid2>

                {/* get in touch */}
                <Grid2 item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Get In Touch
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        5278 NW South Street, Florida, USA
                    </Typography>
                    <Typography variant="body2">info@amiso.com</Typography>
                    <Typography variant="body2">+1 502-836-5254</Typography>
                </Grid2>
                {/* Quick Links */}
                <Grid2 item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Quick Links
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly',gap:'15px' }}>
                        <Box>
                            <Typography variant="body2">
                                <Link href="#" sx={{ color: "#ffffff", textDecoration: "none" }}>
                                    Home
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" sx={{ color: "#ffffff", textDecoration: "none" }}>
                                    About
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" sx={{ color: "#ffffff", textDecoration: "none" }}>
                                    Services
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" sx={{ color: "#ffffff", textDecoration: "none" }}>
                                    Team
                                </Link>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2">
                                <Link href="#" sx={{ color: "#ffffff", textDecoration: "none" }}>
                                    FAQ
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" sx={{ color: "#ffffff", textDecoration: "none" }}>
                                    Terms of Services
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" sx={{ color: "#ffffff", textDecoration: "none" }}>
                                    Support
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" sx={{ color: "#ffffff", textDecoration: "none" }}>
                                    Privacy Policy
                                </Link>
                            </Typography>
                        </Box>
                    </Box>

                </Grid2>

                {/* Newsletter Subscription */}
                <Grid2 item xs={12} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Our Newsletter
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Subscribe to our newsletter to receive updates on new cleaning tips,
                        trends, and offers.
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                        }}
                        noValidate
                    >
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Enter your email"
                            variant="outlined"
                            sx={{
                                backgroundColor: "#ffffff",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 1,
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ textTransform: "none", borderRadius: 1, minWidth: "100%" }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Grid2>
            </Grid2>

            {/* Copyright Section */}
            <Box
            sx={{
                width: '100%',
                textAlign: 'center',
                mt: 4,
                borderTop: '1px solid rgba(255,255,255,0.2)',
                pt: 2,
                backgroundColor: '#333',
                color: 'rgba(255,255,255,0.7)',
            }}
        >
            <Grid container spacing={3} alignItems="center">
                {/* Left Section: Copyright */}
                <Grid item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'left' }}>
                    <Typography variant="body2">
                        &copy; 2025 Amiso. All rights reserved.
                    </Typography>
                </Grid>

                {/* Right Section: Social Media and Back to Top Button */}
                <Grid item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'right' }}>
                    <Stack
                        direction="row"
                        spacing={3}
                        justifyContent={{ xs: 'center', sm: 'flex-end' }}
                        alignItems="center"
                    >
                        {/* Social Media Icons */}
                        <FacebookIcon fontSize="small" sx={{ cursor: 'pointer', color: 'white' }} />
                        <TwitterIcon fontSize="small" sx={{ cursor: 'pointer', color: 'white' }} />
                        <InstagramIcon fontSize="small" sx={{ cursor: 'pointer', color: 'white' }} />
                        <LinkedInIcon fontSize="small" sx={{ cursor: 'pointer', color: 'white' }} />
                        
                        {/* Back to Top Button */}
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: '#1976d2',
                                '&:hover': { backgroundColor: '#1565c0' },
                            }}
                        >
                            <Link
                                href="#"
                                sx={{
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <ArrowUpIcon fontSize="small" />
                            </Link>
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
        </Box>
    );
};

export default Footer;
