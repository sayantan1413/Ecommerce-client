import React from 'react';
import Images from './Images';
import { Item, InnerCarousel, Carousel } from './Sliderstyle';

const Slider = () => {
  return (
<Carousel>
    <InnerCarousel>
        {Images.map(image => {
          return(
            <Item>
            </Item>
          )
        })}
   </InnerCarousel>
   </Carousel>
  )
}

export default Slider