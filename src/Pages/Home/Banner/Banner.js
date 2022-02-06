import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Box from '@mui/material/Box';
// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper';
import { Button, Typography } from '@mui/material';
  // install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const bannerData = [
      {title : 'Keeping Your Car New', img : 'https://i.ibb.co/k1WXpwb/benjamin-brunner-K3cj-UOMm-Mhc-unsplash.jpg'},
      {title : 'Interior And Exterior Cleaning ', img :'https://i.ibb.co/RDvQxrS/egor-vikhrev-c-D7n-A-pqj6-E-unsplash.jpg'},
      {title : 'Contactless Car Wash', img : 'https://i.ibb.co/DKBsSps/andre-tan-p-Rpp-MPh4-Zho-unsplash.jpg'},
      {title : 'Quality Service For You', img : 'https://i.ibb.co/K9GDN0W/christian-buehner-Fd6osy-Vbt-G4-unsplash.jpg'},
      {title : 'Care Service For Your Car', img : 'https://i.ibb.co/CsF7Kwb/tory-bishop-v-Y-WNTNf-XR0-unsplash.jpg'}
    ]
const Banner = () => {
    
    return (
        <div>
            <>
                <Swiper  centeredSlides={true} autoplay={{
            "delay": 5000,
            "disableOnInteraction": false
            }} pagination={{
            "clickable": true
            }} navigation={true} className="mySwiper">
            {
                bannerData.map(banner => 
                    <SwiperSlide 
                    style={{background: ` linear-gradient(rgba(34, 65, 124, 0.5),rgba(26, 54, 105, 0.5)) ,url('${banner.img}) `, backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize:'cover', padding:'220px 0px'}}
                    
                    >
                        <Box sx={{mb:3}}>
                            <Typography variant="h5"  component="div">
                                MODERN EQUIPMENT
                            </Typography>
                            <Typography sx={{fontWeight : 'bold', color : 'white'}} variant="h2"  component="div">
                            {banner.title}
                            </Typography>
                            <Box sx={{width : '50%'}}>
                            </Box>
                            <Typography  align='center' variant="body1"  component="div">
                            Find Car Ser vice In Usa. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. 
                        
                            Results  Answers. Types: Best Results, Explore Now, New Sources, Best in Searc
                            </Typography>
                        </Box>
                        <Button sx={{mx : 2}} variant="contained">Read More</Button>
                        <Button sx={{mx : 2}} variant="outlined">Book Now</Button>
                    </SwiperSlide>)
            }
            </Swiper>
                </>
        </div>
    );
};

export default Banner;