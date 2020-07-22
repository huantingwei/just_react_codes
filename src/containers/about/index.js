import React from 'react';
import { Typography, Box, Paper } from '@material-ui/core';

export default function About(props) {

    return (
        <Box pt={20} pb={15} px={10}>
            <Paper>
                <Typography gutterBottom variant="h1">Hello React!</Typography>
                <Typography>
                    Hi this is an experimental site for React learning...
                </Typography>
            </Paper>
        </Box>
    )
}