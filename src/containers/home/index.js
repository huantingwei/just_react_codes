import React from 'react'
import { Typography, Container, TextField, Button, Card, CardActionArea,
     CardMedia, CardContent, CardActions, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles =  makeStyles((theme) => ({
    card: {
        maxWidth: 345,
    },
    main: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(8),
    },
    cardMedia: {
        height: 140,
    },
    serviceList: {
        marginTop: theme.spacing(5),
        justifyContent: 'space-around',
    }
}))
const services = [
    {
        "id": 47,
        "owner": "Emily",
        "name": "City Fitness",
        "address": "No. 93, Dashun 1st Road, Zuoying District, Kaohsiung City",
        "introduction": "The best gym in Kaohsiong. You’ll lose at least 100 kg here.",
        "image": "https://www.grand-hilai.com/en/fac-detail/upload/fac_b/twL_fac_20D03_nji9sm2w8i.jpg",
    }, 
    {
        "id": 44,
        "owner": "yihan",
        "name": "Melior Aesthetic",
        "address": "106, Taipei City, Da’an District, Section 1, Anhe Rd",
        "introduction": "We were born to make beauties legendary.",
        "image": "https://www.businessesforsale.com/uploads/d0e2ddd5-008c-4c18-b528-7715a7aedf83.jpg",
    }, 
    {
        "id": 50,
        "owner": "Emily",
        "name": "Let’s Go Gym",
        "address": "2F-1, No. 50, Chenggong Road, Section 4, Neihu District, Taipei City",
        "introduction": "Enjoy workout? Here is your perfect place to go!",
        "image": "https://miuhospitality.com/wp-content/uploads/2016/10/WhatsApp-Image-2016-10-18-at-21.17.26.jpeg",
    },
]
export default function Home(props) {
    const classes = useStyles()
    return (
        <React.Fragment>
        <Container className={classes.main}>
            <Typography variant='h3' >ROSS</Typography>
            <Typography gutterBottom variant='h5'>An Integrated Reservation Platform for On-Site Services</Typography>
            <TextField label='What service do you need?' variant="outlined" margin="normal" fullWidth></TextField>
            <Button variant="contained">Search</Button>

            <Grid container className={classes.serviceList} alignItems="center">
                <Grid item xs={1}>
                    <Button><ArrowBackIosIcon></ArrowBackIosIcon></Button>
                </Grid>
                {services.map((service, index) => {
                    return (
                    <Grid item xs={3} key={index}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.cardMedia}
                            image={service.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    {service.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {service.introduction}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{justifyContent: "flex-end"}}>
                            <Button size="small" color="default">
                                Reserve Now
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    )
                })}
                <Grid item xs={1}>
                    <Button><ArrowForwardIosIcon></ArrowForwardIosIcon></Button>
                </Grid>
            </Grid>

        </Container>
        </React.Fragment>
    )
    
}