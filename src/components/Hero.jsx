import React from 'react';
import {
    Box,
    Typography,
    Button,
    AppBar,
    Toolbar,
    Stack,
    Container,
    createTheme,
    useMediaQuery,
    MenuItem,
    Menu,
    IconButton,
    Drawer,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import backgroundImg from '../assets/home-bg1.png';
import { deepPurple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';



const Hero = () => {
    // navabr 1 section1
    const theme1 = createTheme({
        palette: {
            primary: {
                light: '#606060',
                main: '#494646',
                dark: '#666969',
                darker: '#282625',
            },
        },
    });
    // navabr 1 section 2

    const isMobile1 = useMediaQuery(theme1.breakpoints.down('sm')); 
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{
                width: 250,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 2,
            }}
            role="presentation"
        >
            <Typography variant="h6" color="primary">
                Contact
            </Typography>
            <Typography>
                <PhoneIcon /> +123-456-789
            </Typography>
            <Typography>
                <MailIcon /> angurajp51@gmail.com
            </Typography>
            <Stack direction="row" spacing={2}>
                <FacebookIcon color="action" />
                <TwitterIcon color="action" />
                <InstagramIcon color="action" />
                <LinkedInIcon color="action" />
            </Stack>
            <Button color="primary" startIcon={<EditCalendarIcon />} size="small" variant="contained">
                GET A QUOTE
            </Button>
        </Box>
    );

    // navbar 2  section 1
    const theme2 = createTheme({
        palette: {
            primary: {
                light: deepPurple[300],
                main: deepPurple[500],
                dark: deepPurple[700],
                darker: deepPurple[900],
            },
        },
    });

    //   navbar 2 section 2
    const isMobile2 = useMediaQuery(theme2.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = ['HOME', 'ABOUT', 'PAGES', 'GALLERY', 'BLOG', 'CONTACT'];


    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '70vh',
                color: '#fff',
            }}
        >
            {/* Navbar1 */}

            <Container maxWidth="lg">
                <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <Toolbar>
                        {isMobile1 ? (
                            <>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={toggleDrawer(true)}
                                    sx={{ color: theme1.palette.primary.main }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                                    {drawerContent}
                                </Drawer>
                            </>
                        ) : (
                            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    <Typography sx={{ display: 'flex', alignItems: 'center', color: theme2.palette.primary.dark }}>
                                        <PhoneIcon sx={{ marginRight: '0.5em', color: theme1.palette.primary.dark}} /> +123-456-789
                                    </Typography>
                                    <Typography sx={{ display: 'flex', alignItems: 'center', color: theme2.palette.primary.dark }}>
                                        <MailIcon sx={{ marginRight: '0.5em' , color: theme1.palette.primary.dark}} /> angurajp51@gmail.com
                                    </Typography>
                                </Box>
                                <Stack direction="row" spacing={3} alignItems="center">
                                    <FacebookIcon color="action" />
                                    <TwitterIcon color="action" />
                                    <InstagramIcon color="action" />
                                    <LinkedInIcon color="action" />
                                    <Button color="primary" startIcon={<EditCalendarIcon />} size="small" variant="contained">
                                        GET A QUOTE
                                    </Button>
                                </Stack>
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
            </Container>


            {/* Navigation Menu */}
            <Container maxWidth="lg">
                <AppBar position="static" sx={{ backgroundColor: '#EAE2C6', borderRadius:'5px',opacity:'0.8', boxShadow: 'none' }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, color: theme2.palette.primary.main, fontWeight: 'bold' }}
                        >
                            Amiso
                        </Typography>
                        {isMobile2 ? (
                            <Box>
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    onClick={handleMenuOpen}
                                    sx={{ color: theme2.palette.primary.main }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    sx={{ mt: 2 }}
                                >
                                    {menuItems.map((item, index) => (
                                        <MenuItem key={index} onClick={handleMenuClose}>
                                            {item}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {menuItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        sx={{
                                            color: theme2.palette.primary.main,
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
            </Container>

            {/* Hero Section */}
            <Box>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            ml: { xs: '1em', sm: '4em', md: '6em' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#fff',
                                mb: 1,
                                textTransform: 'uppercase',
                                textAlign: { xs: 'center', sm: 'left' },
                            }}
                        >
                            Renew Your Look
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: '#fff',
                                lineHeight: 1.2,
                                mb: 2,
                                textAlign: { xs: 'center', sm: 'left' },
                                fontSize: { xs: '2rem', sm: '3.5rem', md: '4rem' },
                            }}
                        >
                            A Tradition of <br />
                            Quality Cleaning
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', sm: 'left' },
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    '&:hover': {
                                        borderColor: '#ccc',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Hero;
