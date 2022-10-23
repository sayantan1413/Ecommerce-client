import styled from 'styled-components';
import {ImArrowRight} from 'react-icons/im'

export const Section = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f6c90e;

    @media screen and (max-width: 1189px) {
       width: 100%;
  }
`

export const Card = styled.div`
    height: 30rem;
    width: 20rem;
    border-radius: 30px;
    margin: 10px;
    background-color: white;
    z-index: 10;
    overflow: hidden;

    img{
        border-radius: 30px;
    }
    
    @media screen and (max-width: 1189px) {
       width: 15rem;
       height: 25rem;
  }
    
`

export const Right = styled(ImArrowRight)`
   color: #f6c90e;
   font-size: xx-large;
   position: relative;
   bottom: 28rem;
   left: 16rem;
   cursor: pointer;
`