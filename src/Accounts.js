import React from 'react'
import './Accounts.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Accounts({user_name}) {
    return (
        <div className='accounts'>
            <h1>Who's Watching?</h1>
            <div className="accounts__img">
            <figure>
            <img className="accounts__image"
           src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
           alt="Netflix Avatar"></img>
           <figcaption>{user_name}</figcaption>
            </figure>
           <figure>
           <img className="accounts__image"
           src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
           alt="Netflix Avatar"></img>
           <figcaption>{user_name}</figcaption>
           </figure>
           <figure>
           <img className="accounts__image"
           src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
           alt="Netflix Avatar"></img>
           <figcaption>{user_name}</figcaption>
           </figure>
           <div>
           <AddCircleIcon  fontSize='large'/>
           </div>
            </div>
            
           <button className='accounts__button'>MANAGE PROFILES</button>
        </div>
        
    )
}

export default Accounts;
