import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function HomeScreen() {
  return (
    <div>

        <img src={'/assets/images/yinyang.png'} className="Yin-Yang" alt='yin yang' width='250'/>
        
        <h1>☯️ Welcome to the I Ching ☯️</h1>


        {/* <a href={'/gethex'}>get hex</a> */}


        {/* <Card>

            <Link to='/gethex'>get hex</Link>            

        </Card> */}

        <Card className="my-3 p-3">
        <Card.Body>
            <Card.Title>Consult the Book of Changes</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Digital Divination</Card.Subtitle>
            <Card.Text>
            
            </Card.Text>

            <LinkContainer to='/about'>
                <Card.Link>About</Card.Link>
            </LinkContainer>

            <LinkContainer to='/gethex'>
                <Card.Link>Daily Hexagram</Card.Link>
            </LinkContainer>
        </Card.Body>
        </Card>


    </div>
  )
}

export default HomeScreen