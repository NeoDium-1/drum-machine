import React, { useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import './styles.css'
import data1 from './data'
import Button from './Button/Button'

const App = () => {
    const [text, setText] = useState("")
    const [volume, setVolume] = useState(1)
  return (
    <div className='main' id="drum-machine">
        <div className='container'>
            <div className='button-container'>
                {data1.map((data) => <Button data={data} setText={setText} volume={volume}/>)}
            </div>
            <div className='info'>
                <p className='name'>Drum Machine</p>
                <input 
                className='slider'
                    min={0}
                    max={1}
                    step={0.02}
                    value={volume} 
                    onChange={event => {setVolume(event.target.valueAsNumber); console.log(volume)}} type='range'/>

                <VolumeUpIcon className='icon'/>

                    <div className='display' id='display'>
                        <p className='text'>{text}</p>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default App
