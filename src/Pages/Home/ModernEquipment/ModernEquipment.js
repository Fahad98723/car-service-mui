import { Container, Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/modern_equipment.png'

const ModernEquipment = () => {
    const verticle = {
        display : 'flex',
        alignItems : 'center'
    }
    return (
        <div>
            <Container>
            <Grid style = {{...verticle, textAlign : 'left'}} container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box>
                    <Typography variant="h6" gutterBottom component="div">
                        MODERN EQUIPMENT
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        Professional washing and cleaning of your car
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                        Phasellus in arcu dapibus, lobortis est in, suscipit diam. Vivamus faucibus faucibus eros et porttitor. Sed est nulla, tincidunt ac ex eget, dictum mollis tortor. Vivamus faucibus nec ipsum id aliquam lobortis est.
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                    Call for book: 8-800-10-500
                    </Typography>
                    <Button variant = 'contained'>Readmore</Button>
                    </Box>
                </Grid>
                
                <Grid item xs={12} md={7}>
                    <img width='100%' src={img} alt="" />
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default ModernEquipment;