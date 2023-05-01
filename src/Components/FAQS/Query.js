import React from 'react'
import './query.css'
import Images from '../assets/index'
const Query = () => {
  return (
    <div className='query'>
     <div className='query_box'>
     <h1>How To Use</h1>
     </div>
     <div className='note'>
        <h3>Note:</h3>
        <p>*Before start to use this application first make sure that you should have to install the MetaMask Extension and account also should be created</p>
     </div>
     <div className='list'>
    <ul>
        <li>First Connect Your Wallet.</li>
        <li>Create Your Account on click on create account button and the just enter your name and submit it.</li>
        <li>When Your account get created it redirect you the consult application section or refresh it.</li>
        <li>Now its time to consultation, choose your respective doctor from the All User section.</li>
        <li>Connect respective doctor for consultation </li>
        <li>Now both get connected to each other.</li>
        <li>Now you can share your documents, ask for appointment etc .</li>
    </ul>
     </div>
    </div>
   
  )
}

export default Query