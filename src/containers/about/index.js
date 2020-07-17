import React from 'react';
import { Typography, Container, Paper } from '@material-ui/core';
import './index.scss'

export default function About(props) {

    return (
        <Container>
            <Paper className="about-wrapper">
                <Typography gutterBottom variant="h1">ROSS</Typography>
                <Typography>
                    In this proposal, we would like to present ROSS , an integrated reservation platform for
                    on-site services to overcome COVID-19. Under COVID-19, activities such as teaching or
                    business meetings were transformed online to reduce cluster infections. However, we
                    observed that on-site services such as hair salons, local clinics are experiencing
                    difficulties as the services they provide require physical contact with customers and thus
                    are currently impossible to go online. They are facing extreme challenges to sustain their
                    business under the threat of COVID-19. Moreover, customers have low interest in visiting
                    these services or are forced to put their lives at stake if they do, causing their revenues to
                    decline significantly. To support these on-site services while reducing risks of infections,
                    ROSS presents a service reservation platform that provides real-time and historical
                    crowd data , granting customers the ability to avoid crowded time slots and minimize
                    the probabilities of cluster infections . As an integrated platform with a single entry
                    point, Ross also allows customers to manage various daily life needs , ranging from
                    hairdressing, medical treatment, to food at ease. As for service providers, ROSS could
                    boost the visibility of their businesses and provide a robust online reservation system
                    with simple set up processes . With ROSS, lack of marketing channels or technical
                    knowledge would no longer be a concern.
                </Typography>
            </Paper>
        </Container>
        
        
    )
}