import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton
  } from "react-share";
  import {
    FacebookIcon,
    RedditIcon,
    TwitterIcon
  } from "react-share";

// https://react-bootstrap.github.io/components/modal/
// https://github.com/nygardk/react-share

function ShareModal(props) {

    const shareUrl = 'https://bookofchanges.app'

  return (
    <div>
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ☯️  🔮
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>

            {/* quote (string): A quote to be shared along with the link.
            hashtag (string): A hashtag specified by the developer to be added to the shared content. People will still have the opportunity to remove this hashtag in the dialog. The hashtag should include the hash symbol. */}
            <FacebookShareButton
                url={shareUrl}
                quote='Check this shit out'
                // className="facebook-share-button"
            >
                <FacebookIcon size={75} round />
            </FacebookShareButton>{' '}

            {/* title (string): Title of the shared page
                via: (string)
                hashtags (array): Hashtags
                related (array): Accounts to recommend following */}
            <TwitterShareButton
                url={shareUrl}
                title='Check this shit out'
                // hashtags = '[#dope]'
                // via='wut dis one'
                // title={title}
                // className="Demo__some-network__share-button"
            >
                <TwitterIcon size={75} round />
            </TwitterShareButton>{' '}

            {/* title (string): Title of the shared page */}
            <RedditShareButton
                url={shareUrl}
                title='Check this shit out'
                // windowWidth={660}
                // windowHeight={460}
                // className="Demo__some-network__share-button"
            >
                <RedditIcon size={75} round />
            </RedditShareButton>
            <br />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ShareModal