import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography,
    Grid,
    useMediaQuery,
  } from "@mui/material";
  import React from "react";
  import serviceImg from "../assets/service-bg.png";
  import HouseIcon from "@mui/icons-material/House";
  import WindowIcon from "@mui/icons-material/Window";
  import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
  
  const Service = () => {
    // Check if the screen is small using Material-UI's useMediaQuery hook
    const isMobile = useMediaQuery("(max-width:600px)");
  
    return (
      <Box
        sx={{
          backgroundImage: `url(${serviceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "80vh",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          {/* Section 1 */}
          <Box
            sx={{
              textAlign: "center",
              border: "2px solid transparent",
              marginBottom: "2em",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: 18,
                color: "#1D1616",
                marginTop: "30px",
                marginBottom: "1em",
              }}
            >
              WHY CHOOSE US
            </Typography>
            <Typography
              variant="h1"
              component="h3"
              sx={{
                fontWeight: "bold",
                fontSize: isMobile ? 20 : 24,
                color: "#000",
                marginBottom: "10px",
              }}
            >
              Our Great Service
            </Typography>
            <Typography
              variant="h6"
              component="h5"
              sx={{
                fontSize: isMobile ? 16 : 18,
                color: "text.secondary",
                width: isMobile ? "100%" : "60%",
                margin: "0 auto",
              }}
            >
              We specialise in intelligent & effective search and believe in the
              power of partnerships to grow business.
            </Typography>
          </Box>
  
          {/* Section 2 */}
          <Grid container spacing={3} justifyContent="center">
            {/* Card 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                sx={{
                  maxHeight: 240,
                  background: "transparent",
                  textAlign: "center",
                }}
              >
                <CardMedia>
                  <HouseIcon fontSize="large" sx={{ marginTop: "15px" }} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#000",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    Home Cleaning
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#500073", fontSize: 16 }}
                  >
                    Housekeeping is responsible for minor security in hotel
                    ecosystems for food and cleaner through.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
  
            {/* Card 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                sx={{
                  maxHeight: 230,
                  background: "transparent",
                  textAlign: "center",
                }}
              >
                <CardMedia>
                  <WindowIcon fontSize="large" sx={{ marginTop: "15px" }} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#000",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    Window Cleaning
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#500073", fontSize: 16 }}
                  >
                    Our aim is to keep the house clean. Your aim will help
                    through digital innovation world summits.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
  
            {/* Card 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                sx={{
                  maxHeight: 230,
                  background: "transparent",
                  textAlign: "center",
                }}
              >
                <CardMedia>
                  <MeetingRoomIcon fontSize="large" sx={{ marginTop: "15px" }} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#000",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    Office Cleaning
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#500073", fontSize: 16 }}
                  >
                    Our aim is to keep the office clean. Your aim will help
                    through digital innovation world summits.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default Service;
  