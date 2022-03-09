import React, {useState} from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import Hex from '../HexInterpretations'



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

        {/* gets the description and contained with Bootstrap */}
        <Row className="justify-content-md-center">
          <Col xs lg="4">
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