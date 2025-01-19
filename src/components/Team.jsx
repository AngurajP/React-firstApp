import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid2 } from '@mui/material';
import TeamMember1 from '../assets/Team1.png';
import TeamMember2 from '../assets/Team2.png';
import TeamMember3 from '../assets/Team3.png';

const teamMembers = [
    { name: 'Monica Gordon', role: 'Home Cleaning', image: TeamMember1 },
    { name: 'Laura Jones', role: 'Cleaner', image: TeamMember2 },
    { name: 'Sara Ryan', role: 'House Cleaner', image: TeamMember3 },
];

const Team = () => {
    return (
        <Box p={4}>
            <Box marginBottom={5}>
                <Typography variant="h6" color='text.secondary' textAlign="center" gutterBottom>
                    MEET OUR
                </Typography>
                <Typography variant="h4" fontWeight='bold' textAlign="center" gutterBottom>
                    Our Team
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6" fontSize='18px' width='50%' color='text.secondary' textAlign="center" gutterBottom>
                        The member of highly experienced team is dedicated to providing you with only the best service we can possibly provide
                    </Typography>
                </Box>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Grid2 container justifyContent='center' spacing={4}>
                    {teamMembers.map((member, index) => (
                        <Grid2 item xs={12} md={4} key={index}>
                            <Card sx={{
                                    borderRadius: 3,
                                    boxShadow: "0 5px 15px rgba(194, 246, 9, 0.98)",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}>
                                <CardMedia component="img" height="200" src={member.image} alt={member.name} />
                                <CardContent>
                                    <Typography variant="h6">{member.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {member.role}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Box>
    );
};

export default Team;
