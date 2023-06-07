import React, { useState, useEffect } from 'react'

import './Button.css'

const Button = ({data, setText, volume}) => {
    const [styleClick, setStyleClick] = useState({})
    const [audio] = useState(new Audio(data.audio))
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }
    const handleClick = async() =>{
        setStyleClick({
            background: "radial-gradient( #92d5ee 0%, antiquewhite 50%)",
            boxShadow: "0 0 40px -10px #4eb9e0",

        })
        
        audio.volume = volume.toFixed(3);
        audio.play()
        // console.log(volumn.toFixed(3))
        setText(data.name)
        await timeout(100);
        setStyleClick({})
    }
    const handleClick2 = () =>{
        setStyleClick({ 
        })

    }
    useEffect(() => {
        const keyDownHandler = async(event) => {
          if(event.key === data.key.toLowerCase()){
            handleClick();
            await timeout(100);
            handleClick2();
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, [volume]);
  return (
    <div>
      <button onClick={handleClick} onMouseUp={handleClick2} style={styleClick} className="drum-pad">
        {data.key}
      </button>
      <p>{data.name}<span>{data.key}</span></p>
    </div>
  )
}

export default Button
