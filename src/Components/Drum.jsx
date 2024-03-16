import React, { useState } from 'react'
import './Drum.css'
import m1 from './music/Heater-1.mp3'
import m2 from './music/Heater-2.mp3'
import m3 from './music/Heater-3.mp3'
import m4 from './music/Heater-4.mp3'
import m5 from './music/Heater-6.mp3'
import m6 from './music/Dsc_Oh.mp3'
import m7 from './music/Kick_n_Hat.mp3'
import m8 from './music/Kick.mp3'
import m9 from './music/Cev_H2.mp3'


function Drum() {

    const [power,setPower] = useState(true);

  return (
    <div id='drum-machine'>
        <div id='drum-pads'>
            <div id='inner-drum-pads'>
                <button className='drum-pad' id='Heater-1'>Q</button>
                <button className='drum-pad' id='Heater-2'>W</button>
                <button className='drum-pad' id='Heater-3'>E</button>
                <button className='drum-pad' id='Heater-4'>A</button>
                <button className='drum-pad' id='Clap'>S</button>
                <button className='drum-pad' id='Open-HH'>D</button>
                <button className='drum-pad' id="Kick-n'-Hat">Z</button>
                <button className='drum-pad' id='Kick'>X</button>
                <button className='drum-pad' id='Closed-HH'>C</button>
            </div>
        </div>
        <div id='settings'>
            <div id='powerButton' >
                <div id='toggle' className='rightToggle'>

                </div>
            </div>
            <div id='display'>heater-1</div>
            <input type='range' id='volume' min={0} max={100} defaultValue={80}/>
        
        </div>      
    </div>
  )
}

export default Drum;
