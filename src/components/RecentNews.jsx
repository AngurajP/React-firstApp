import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid2 } from "@mui/material";
import NewsImage1 from '../assets/News1.png';
import NewsImage2 from '../assets/News2.png';
import NewsImage3 from '../assets/News3.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {  green } from '@mui/material/colors';

const newsData = [
    {
        title: "Temporary Ruling Issued",
        description: "Washio has met the demands of a growing world.",
        date: "10 Nov",
        category: "Cleaning",
        author: "Martha Smith",
        image: NewsImage1,
    },
    {
        title: "The Expands California",
        description: "We planned and executed our expansion for better services.",
        date: "11 Nov",
        category: "Cleaning",
        author: "Laura Jones",
        image: NewsImage2,
    },
    {
        title: "Temporary Ruling Issued",
        description: "Washio has met the demands of a growing world.",
        date: "10 Nov",
        category: "Cleaning",
        author: "Matt Ryan",
        image: NewsImage3,
    },
];

const RecentNews = () => {
    return (
        <Box sx={{ py: 5, px: 2, backgroundColor: "#f8f9fa" }}>
            {/* Title Section */}
            <Typography variant="h6" color='text.secondary' textAlign="center">
                WHY CHOOSE US
            </Typography>
            <Typography variant="h4" sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}>
                Recent News
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    maxWidth: "600px",
                    mx: "auto",
                    mb: 4,
                    color: "text.secondary",
                }}
            >
                We specialize in intelligent & effective cleaning and believe in the power of partnerships to grow business.
            </Typography>

            {/* News Cards */}
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Grid2 container justifyContent='center' spacing={3}>
                    {newsData.map((news, index) => (
                        <Grid2 item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: "0 4px 12px rgba(13, 102, 245, 0.8)",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={news.image}
                                    alt={news.title}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="primary" sx={{ fontWeight: "bold" }}>
                                        {news.category} | {news.date}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                                        {news.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mt: 1, mb: 2, fontSize: "0.9rem" }}
                                    >
                                        {news.description}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                    <Stack spacing={2} >
                                        <Box sx={{display:'flex', gap:'10px'}}>
                                        <Avatar
                                                alt={news.author}
                                                src="/static/images/avatar/1.jpg"
                                                sx={{ width: 40, height: 40 ,bgcolor: green[500]}}
                                            /> 
                                        <Typography variant="h6" component='span' fontWeight='bold' marginTop='5px'> {news.author}</Typography>
                                        </Box>
                                        </Stack>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>

            {/* View More Button */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: "none", borderRadius: "20px", px: 5, py: 1 }}
                >
                    View More
                </Button>
            </Box>
        </Box>
    );
};

export default RecentNews;
