import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActions, CardContent, CardActionArea, CardMedia, Button, Typography, Grid, Dialog, Box, Divider } from '@material-ui/core'
import { getServiceList } from 'api/api'

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
    },
});

const About = (props) => {
    const [services, setServices] = useState([{
        "id": 47,
        "owner": "Emily",
        "name": "City Fitness",
        "address": "No. 93, Dashun 1st Road, Zuoying District, Kaohsiung City",
        "introduction": "The best gym in Kaohsiong. You’ll lose at least 100 kg here.",
        "type": "SH",
        "longitude": 120.3113433,
        "latitude": 22.6558283,
        "rating": 5.0,
        "image": "https://www.grand-hilai.com/en/fac-detail/upload/fac_b/twL_fac_20D03_nji9sm2w8i.jpg",
        "maxCapacity": 5,
        "startTime": 9,
        "closeTime": 12,
        "placeId": "ChIJ8cpmw5wFbjQRzTx6fIXk448",
    },
    {
        "id": 44,
        "owner": "yihan",
        "name": "Melior Aesthetic",
        "address": "106, Taipei City, Da’an District, Section 1, Anhe Rd",
        "introduction": "We were born to make beauties legendary.",
        "type": "SH",
        "longitude": 121.550689,
        "latitude": 25.038403,
        "rating": 5.0,
        "image": "https://www.businessesforsale.com/uploads/d0e2ddd5-008c-4c18-b528-7715a7aedf83.jpg",
        "maxCapacity": 4,
        "startTime": 12,
        "closeTime": 18,
        "placeId": "ChIJIQy9pM-rQjQR8aarSPuE2hU",
    }, {
        "id": 49,
        "owner": "cddho",
        "name": "IF Hair Salon",
        "address": "3F., No. 19, Sec. 1, Kaifeng St., Zhongzheng Dist., Taipei City",
        "introduction": "Beauty",
        "type": "HS",
        "longitude": 121.513746,
        "latitude": 25.046166,
        "rating": 4.8,
        "image": "https://pic.pimg.tw/fanfan1105/1557395045-4015536549_n.jpg",
        "maxCapacity": 15,
        "startTime": 11,
        "closeTime": 20,
        "placeId": "ChIJK7gT1gypQjQRzWnCwbaMeO8",
    },
    {
        "id": 46,
        "owner": "Ruby",
        "name": "Hsu’s Pediatric",
        "address": "No. 46-2, Yangming Street, Banqiao District, New Taipei City",
        "introduction": "Local clinic, always here.",
        "type": "CL",
        "longitude": 121.465685,
        "latitude": 25.022047,
        "rating": 4.0,
        "image": "https://pic.pimg.tw/yupin35/1386055433-805123850.jpg",
        "maxCapacity": 10,
        "startTime": 9,
        "closeTime": 21,
        "placeId": "ChIJbUx1iz-oQjQR2gX8iQU0oMg",
    }])
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

    // useEffect(() => {
    //     getServices()
    // })
    // getServices()

    const classes = useStyles();

    return (
        <Box p={"5%"}>
            <Typography variant="h2" align="center" style={{ marginBottom: "2rem" }}>Find your Services</Typography>
            <Grid container spacing={5} display="flex" justify="flex-start">
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
                                <Button onClick={handleClose}>Close</Button>
                            </Dialog>
                        </Fragment>
                    )
                })}

            </Grid>
        </Box>
    )
}

About.defaultProps = {

}

export default About