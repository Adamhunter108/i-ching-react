import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ParticlesBg from 'particles-bg'


function HomeScreen() {
  return (
    <div>
        <Header />
        <ParticlesBg color="#838383" num={15} type="cobweb" bg={true} />

        <img src={'/assets/images/yinyang.png'} className="Yin-Yang" alt='yin yang' width='250'/>
        
        <h1><i class="fa-solid fa-yin-yang"></i> I Ching <i class="fa-solid fa-yin-yang"></i></h1>
        <br /><br /><br /><br />


        <h4>Consult the Book of Changes</h4>
        <br />
        <LinkContainer to='/gethex'>
                <Button variant="light" size="lg">Daily Digital Divination</Button>
        </LinkContainer>

    </div>
  )
}

export default HomeScreen