import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActions, CardContent, CardActionArea, CardMedia, Button, Typography, Grid, Dialog, Box, TextField } from '@material-ui/core'
import { getServiceList } from 'api/api'
import { serviceList } from './fakeData/services'

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
    },
});

const Home = (props) => {
    const [services, setServices] = useState(serviceList)
    const [dialogStatus, setDialogStatus] = useState(false)
    const getServices = async () => {
        try {
            const response = await getServiceList()
            const svcs = response.data
            setServices(svcs)
        } catch (err) {
            console.log("Error in ross API request");
            console.log(err);
        }
    }

    const handleOnClick = (id) => {
        setDialogStatus(true)
        console.log(id)
    }

    const handleClose = () => {
        setDialogStatus(false)
    }

    const classes = useStyles();

    return (
        <Box p={5}>
            <Grid container spacing={3} direction="column">
                <Grid item>
                    <Typography variant="h2" align="center">Find your Services</Typography>
                </Grid>
                <Grid item container direction="row" alignItems="center" space={2}>
                    <Grid item lg={11} md={11} sm={11} xs={10}>
                        <TextField label="What are you looking for?" variant="outlined" fullWidth></TextField>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1} xs={2}>
                        <Button variant="contained" style={{ marginLeft: "1rem" }}>Search</Button>
                    </Grid>
                </Grid>
                <Grid item container spacing={5} display="flex" justify="flex-start">
                    {services.map((service) => {
                        const { id, owner, name, address, introduction, type, longitude, latitude, rating, image, maxCapacity, startTime, closeTime, placeId } = service
                        return (
                            <Fragment key={id}>
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt={name}
                                                height="140"
                                                image={image}
                                                title={name}
                                            />
                                            <CardContent style={{ height: "100px" }}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {introduction}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={(id) => handleOnClick(id)}>
                                                Reserve
                                </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Dialog open={dialogStatus} onClose={handleClose}>
                                    <Box p={2}>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <Typography variant="h4">{name}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1">{address}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1">{introduction}</Typography>
                                            </Grid>
                                            <Grid item container justify="flex-end">
                                                <Button onClick={handleClose}>Close</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Dialog>
                            </Fragment>
                        )
                    })}

                </Grid>
            </Grid>
        </Box>
    )
}



export default Home