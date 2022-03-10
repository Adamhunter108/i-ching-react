import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


function CopyToClipboard({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    // asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // if successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Button variant="outline-success" onClick={handleCopyClick}>
        <span>{isCopied ? 'Hex copied to clipboard' : 'Share Your Hex'}</span>
      </Button>
    </div>
  );
}


export default CopyToClipboard

// use like this
// <ClipboardCopy copyText="string to copy" />