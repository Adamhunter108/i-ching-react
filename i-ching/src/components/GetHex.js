import React, {useState} from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import Hex from '../HexInterpretations'


// lets get a random number from 1 - 64

// Between any two numbers
// Math.floor(Math.random() * (max - min + 1)) + min;
// const randoVal = Math.floor(Math.random() * (1 - 64 + 1)) + 1;

// Between 0 and max (including 0)
// Math.floor(Math.random() * (max + 1));
// const randoVal = Math.floor(Math.random() * (4 + 1))

// Between 1 and max
// Math.floor(Math.random() * max) + 1;
// this is the way
// const randomValue = Math.floor(Math.random() * 64) + 1;



function GetHex() {

    // i ching has 64 possible outcomes
    const randomValue = Math.floor(Math.random() * 64) + 1

    // testing output, changed max to 10
    // const randomValue = Math.floor(Math.random() * 10) + 1

    const [value, setValue] = useState()
    
    const getHex = () => {
        setValue(randomValue)
    }

  return (
    <div>

        <h1><i class="fa-solid fa-yin-yang"></i></h1>
        <p>kill the noise</p>




        <Button variant="dark" size="lg" onClick={getHex}>Divinate</Button>
        <br /><br /><br />
        {/* <h1>{value}</h1> */}

        {/* this outputs everything from Hex */}
        {/* {Hex.map((data) => (
            <p>{data.id}: {data.title}, {data.description}</p>
        ))} */}

        {/* need to match value with data.id */}


        {/* image */}
        {Hex.map((data) => (
            value === data.id ? <img src={data.image} alt=''/> : null
        ))}

        {/* hexagram number */}
        {Hex.map((data) => (
            value === data.id ? <p>Hexagram # {value}</p> : null
                ))}


        {/* gets the title */}
        {Hex.map((data) => (
            <h2>{
                value === data.id ? data.title : null
                }</h2>
        ))}

        <Row className="justify-content-md-center">
          <Col xs lg="4">
            {/* gets the description */}
            {Hex.map((data) => (
                <p>{
                    value === data.id ? data.description : null
                    }</p>
            ))}
          </Col>
        </Row>




    </div>
  )
}

export default GetHex