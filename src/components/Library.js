import React from 'react';
import '../css/Library.css'
import {NavLink} from 'react-router-dom'


export default class Library extends React.Component {
    render(){
        return(
            <div>
                <img className='burn-books' src='https://media.giphy.com/media/wbQNGTFstNx84/giphy.gif' alt='books' ></img>
                <p className='burn-text-main'>“Sometimes people write novels and they just be so wordy and so
                    self-absorbed. I am not a fan of books. I would never want a book’s
                    autograph. I am a proud non-reader of books.”</p>
                    <p className='burn-text-signature'>-Kanye West</p>
                    <NavLink className='return-to-choose' to='/new'>Get Out</NavLink>
            </div>
        )
    }
}