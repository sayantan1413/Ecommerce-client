import React from 'react';
import { Container, Image, TextBox } from './BannerStyle';


const Banner = () => {
  return (
    <Container>
        {/* <TextBox>
            Wear What Makes You Confidant
        </TextBox> */}
         <Image src={require('./Banner.png')} alt='banner' height={'50em'}/>
        {/* <CustomButton text={"SHOP NOW"} /> */}
    </Container>
  )
}

export default Banner