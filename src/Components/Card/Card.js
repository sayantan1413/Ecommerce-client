import React from 'react'
import { Section, Card, Right} from './CardStyle'

const Cards = () => {
  return (
    <Section>
    <Card>
        <img src={require('./Images/card1.png')} alt='card1' height={'480rem'}/>
        <Right />
    </Card>
    <Card>
        <img src={require('./Images/card2.png')} alt='card1' height={'480rem'}/>
        <Right />
    </Card>
    <Card>
        <img src={require('./Images/card3.png')} alt='card1' height={'480rem'}/>
        <Right />
    </Card>
    </Section>
  )
}

export default Cards