import React from 'react'
import ShareModal from './ShareModal'
import { Button } from 'react-bootstrap'

function ShareButton() {

    const [modalShow, setModalShow] = React.useState(false)

    return (
        <div>
            <Button variant="outline-success" onClick={() => setModalShow(true)}>
                <i class="fa-solid fa-share-nodes"></i>{' '} Share Results
            </Button>
    
            <ShareModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default ShareButton