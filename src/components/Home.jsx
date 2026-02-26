import React from 'react'
import img from '../components/Images/Muzammil.jpeg'
export default function Home() {
  return (
    <>
      <div className="hero">
          <div className="hero-text">
               <h1>
                    Find The Best <br /> Credit Card
               </h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore fugiat qui debitis ullam eaque consequuntur sunt explicabo quam placeat consectetur doloribus, corporis facilis quo iure quaerat deserunt facere deleniti.</p>
          </div>
         <div className="hero-img">
          <img src={img} alt="" />

         </div>
      </div>
    </>
  )
}
