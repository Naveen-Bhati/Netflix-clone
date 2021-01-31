import React from 'react'
import './Preloader.css'

const Prealoder=() =>{
    return (
        <div class="cardcontainer">
         <img class="galleryImg"
        src={window.location.origin + '/images/Logo.jfif'} 
      id="preloader" />
     </div>
    )
}

export default Prealoder;
