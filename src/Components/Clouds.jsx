import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

import cloud from "../images/cloud.png";
import bird from "../images/bird.gif";


const Clouds = () => {
    const { ref } = useWebAnimations({
        keyframes: {
            transform: ['translate(0,0)'],
            transform: ['translate(1000px,0)'],
        },
        animationOptions: {
            duration: 4000, // Run for 1000ms
            iterations: 3, // Repeat once
            direction: "reverse", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        },
    });

    const { ref: birds } = useWebAnimations({
        keyframes: {
            transform: ['translate(0,0)'],
            transform: ['translate(1000px,0)'],
        },
        animationOptions: {
            duration: 4000, // Run for 1000ms
            iterations: 3, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        },
    });

    return (
        <>
            <div ref={ref} className="clouds">
                <img src={cloud} className='cloud' alt="" />
                <img src={cloud} className='cloud' alt="" />
                <img src={cloud} className='cloud' alt="" />
            </div>
            <br />
            <br />
            <div ref={birds} className="bird">
                <img src={bird} width='30px' alt="" />
                <br />
                <img src={bird} width='30px' alt="" />
            </div>
        </>
    )
}

export default Clouds;