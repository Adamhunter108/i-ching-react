import React from 'react';


function GetHex() {

    const Hex = [
        {
            id: 1,
            title: 'The Creative',
            description: 'Quiet your mind.  Kill the noise.  Slow the frantic energy.  This Hexagram is showing you that if you make space for your creative energy, success and good fortune will follow.',
        },
        {
            id: 2,
            title: 'The Receptive',
            description: 'This Hexagram questions if you are balanced.  Are you on the right path?  The things you do and work on, are they fueled by true motivation or are they clouded by concerns of others, desire for recognition, etc.  This is a time for gentleness, modesty, and receptiveness.',
        },
        {
            id: 3,
            title: 'Difficulty at the Beginnging',
            description: 'One of the more straight forward Hexagrams.  This Hexagram was interpreted by ancient sages as a blade of grass trying to break through an obstacle before it sprouts out of the earth.  This Hexagram explicity calls for nonaction.  Bear the discomfort of your situation and the chaos will clear.',
        },

    ]


    const Values = [
        1, 
        2, 
        3, 
        4, 
        5, 
        6, 
        7, 
        8, 
        9, 
        10
    ]

    const randomVal = Values[Math.floor(Math.random()*Values.length)]

    // if (randomVal === 1, 3, 5, 7, 9) {
    //     return 'odd'
    // } else {
    //     return 'even'
    // }


    // hacky garbage
    function refreshPage() {
        window.location.reload(false);
    }


  return <div>

      {/* <h1>Hex</h1> */}

      {/* {Hex.map((data) => (
          <h1>{data.title}</h1>
      ))} */}

      <h1>{randomVal}</h1>

      <h1>{
          randomVal === 1 ? 'The Creative' : null
        }</h1>

        <h1>{
          randomVal === 2 ? 'The Receptive' : null
        }</h1>



        {/* this is shitty code, should be emptying the state */}
        <button onClick={refreshPage}>Refresh</button>

  </div>;
}

export default GetHex;