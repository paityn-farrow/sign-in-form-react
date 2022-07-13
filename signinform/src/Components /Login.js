import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar,Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock'
import avatarStyle from '@mui/icons-material'

const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: '70vh',
        width: 280,
        margin: "20px auto"
    }

    const avatarStyle={
        backgroundColor: "green"
    }
    return(
        <Grid>
        <TextField label='Username' placeholder='Enter Username' fullWidth required></TextField>
        <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required></TextField>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
                <h2>Sign In</h2>
                </Grid>
            </Paper>
        </Grid>
        
    )
}

export default Login;