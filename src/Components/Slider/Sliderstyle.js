import styled from "styled-components";

export const Item = styled.div`
  min-height: 10rem;
  cursor: pointer;
  min-width: 15rem;
  margin: 40px;
  background-color: white;
  border-radius: 2rem;
`

export const InnerCarousel = styled.div`
  min-width: max-content;
  display: flex;
  scrollbar-width: 0;
`

export const Carousel = styled.div`
    width: 100vw;
    overflow-x: auto;

    ::-webkit-scrollbar {
  width: 0px;
    }

`