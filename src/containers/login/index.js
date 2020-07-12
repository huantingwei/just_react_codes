import React from 'react'
import { Typography, Container,  TextField, Paper, Avatar, Button, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({ 
    paper: {
        width: '45%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(6),
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: theme.spacing(3),
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifySelf: 'center',
    }, 
    avatar: {
        height: '4rem',
        width: '4rem',
        margin: theme.spacing(1),
    },
    button: {
        height: '3rem',
        margin: theme.spacing(2),
    },

  }))

export default function Login(props) {
    const classes = useStyles(props);
    
    return (
        <React.Fragment>
        <Container maxWidth="lg">
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>R</Avatar>
                <Typography>Sign In</Typography>
                
                <TextField label="username" variant="outlined" margin="normal" fullWidth></TextField>
                <TextField type="password" label="password" variant="outlined" margin="normal" fullWidth></TextField>
                <Button className={classes.button} type="submit" variant="contained" fullWidth>Login</Button>
                <Link color="default">Create New Account</Link>
            </Paper>
        </Container>
        </React.Fragment>
    );
}