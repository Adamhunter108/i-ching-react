import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function About() {
  return (
    <div>
        <Header />

    {/* <LinkContainer to='/'>
        <Button size="sm" variant="light">Back</Button>
    </LinkContainer> 
    <br />
    */}

    <Card className="my-3 p-3">
        <Card.Header as="h1"><i class="fa-solid fa-yin-yang"></i> About <i class="fa-solid fa-yin-yang"></i></Card.Header>
        <br />
        <Card.Title>What is the I Ching?</Card.Title>
        <Card.Text>
            The I Ching, usually translated to Book of Changes, is a book that dates back to 1000 BC making it several thousand years old.  It is regarded as the foundational text of Chinese wisdom and philosophy.
        </Card.Text>
        <Card.Title>How to consult the Book of Changes?</Card.Title>
        <Card.Text>
            Back in the day, people would throw yarrow stalks.  More recently, people often toss coins.  With the results of the stalks or coins, you construct a Hexagram of broken and unbroken lines.  To use this app, all you need to do is press the <i>Divinate</i> button.
        </Card.Text>
            Each Hexagram is unique and has a number.  Feel free to google your Hexagram number to read more about it.  
        <Card.Text>

        </Card.Text>

        {/* <LinkContainer to='/'>
            <Button size="sm" variant="light">Back</Button>
        </LinkContainer> */}
    </Card>


    </div>
  )
}

export default About