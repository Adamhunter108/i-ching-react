import React, {useState} from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Hex from '../HexInterpretations'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ParticlesBg from 'particles-bg'



function GetHex() {

    // i ching has 64 possible outcomes
    const randomValue = Math.floor(Math.random() * 64) + 1

    const [value, setValue] = useState()
    
    const handleDivinateClick = () => {
        setValue(randomValue)
    }

    // this is for the share button
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2500);
        }

    // none of these work, it would be cool to get a working link copied to clipboard...
    // const appLink = "<a href={https://bookofchanges.app}>bookofchanges.app</a>"
    // const appLink = { href: 'https://bookofchanges.app' }
    // const appLink = ('a', { href: 'https://bookofchanges.app' }, 'bookofchanges.app');
    // const appLink = React.createElement('a', { href: 'https://bookofchanges.app' }, 'bookofchanges.app')

  return (
    <div>

        {/* if there is a value change particle background to blue and reduce amount*/}
        {value ? 
        <ParticlesBg color="#29EEC6" num={25} type="cobweb" bg={true} />
         : <ParticlesBg color="#838383" num={35} type="cobweb" bg={true} />}


        <Link to='/'><h1><i class="fa-solid fa-yin-yang"></i></h1></Link>

        {value ? null : <p>kill the noise</p>}


        {/* <h1>{value}</h1> */}

        {/* this outputs everything from Hex */}
        {/* {Hex.map((data) => (
            <p>{data.id}: {data.title}, {data.description}</p>
        ))} */}

        {/* match value with data.id */}


        {/* gets the trigrams */}
        {Hex.map((data) => (
            value === data.id ? <p>{data.upper} over {data.lower}</p> : null
                ))}

        {/* gets the image */}
        {Hex.map((data) => (
            value === data.id ? <img src={data.image} alt=''/> : null
        ))}

        {/* gets hexagram number */}
        {Hex.map((data) => (
            value === data.id ? <p>Hexagram # {value}</p> : null
                ))}

        {/* gets the title */}
        {Hex.map((data) => (
            <h2>{
                value === data.id ? data.title : null
                }</h2>
        ))}

        {/* gets the description and is contained with Bootstrap */}
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            {Hex.map((data) => (
                <p>{
                    value === data.id ? data.description : null
                    }</p>
            ))}
          </Col>
        </Row>

        {/* share button */}
        {Hex.map((data) => (
            value === data.id ? 
              <CopyToClipboard text={`My Daily I Ching reading is 
    Hexagram ${data.id} 
    ${data.title}
☯️ ☯️ ☯️ ☯️ ☯️ ☯️ ☯️ 
bookofchanges.app`}>

              {isCopied ?
                <Button variant="outline-success" onClick={handleCopyClick}>Copied! Paste anywhere <i class="fa-solid fa-paste"></i></Button> 
              : <Button variant="outline-success" onClick={handleCopyClick}>Share reading  <i class="fa-solid fa-share-nodes"></i></Button>}
            </CopyToClipboard> : null
        ))}
        {/* the crazy formatting in the CopyToClipboard component is due to the template literals */}

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        {value ? null : <Button variant="dark" size="lg" onClick={handleDivinateClick}>☽ Divinate ☾</Button>}
    </div>
  )
}

export default GetHex