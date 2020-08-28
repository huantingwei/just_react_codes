import React from 'react'
import { Button, AppBar, Toolbar, Grid, } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import logo from 'static/images/ross.jpg'

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: "#FFF",
    },
    menuBar: {
        justifyContent: "flex-end",
    },
    menuBtn: {
        textDecoration: 'none',
        '&:hover': {
            color: '#FFF'
        }
    },

}))

export default function Nav(props) {
    const classes = useStyles(props)
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <img src={logo} alt="logo" height="30rem"/>
                <Grid container className={classes.menuBar} spacing={1}>
                    <Grid item lg={1} md={1} sm={2} xs={2}>
                        <Link to='/' className={classes.menuBtn}>
                            <Button color="default">Home</Button>
                        </Link>
                    </Grid>
                    <Grid item lg={1} md={1} sm={2} xs={2}>
                        <Link to='/about' className={classes.menuBtn}>
                            <Button color="default">About</Button>
                        </Link>
                    </Grid>
                    <Grid item lg={1} md={1} sm={2} xs={2}>
                        <Link to='/apod' className={classes.menuBtn}>
                            <Button color="default">APOD</Button>
                        </Link>
                    </Grid>
                    <Grid item lg={1} md={1} sm={2} xs={2}>
                        <Link to='/quote' className={classes.menuBtn}>
                            <Button color="default">Quote</Button>
                        </Link>
                    </Grid>
                    <Grid item lg={1} md={1} sm={2} xs={2}>
                        <Link to='/login' className={classes.menuBtn}>
                            <Button color="default" variant="outlined">Login</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}