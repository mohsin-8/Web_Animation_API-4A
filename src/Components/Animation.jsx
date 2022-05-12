import React from 'react';
import "../App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

import plane from "../images/plane.gif";

const Animation = () => {

  const { ref } = useWebAnimations({
    keyframes: {
      transform: ['translate(1000px, 200px)'],
      transform: ['translate(500px, 380px)'],
      transform: ['translate(1000px, 380px)'],
    },
    animationOptions: {
      duration: 4000, // Run for 1000ms
      iterations: 3, // Repeat once
      direction: "normal", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });


  return (
    <>
      <div className='main_container'>
        {/* <button onClick={play}>play</button> */}
        <div ref={ref} className="plane">
          <img src={plane} width="300px" alt="" />
        </div>
        <div className='runway'></div>

      </div>
    </>
  )
}

export default Animation;