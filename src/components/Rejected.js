import React from 'react';
import '../css/Rejected.css'
import {NavLink} from 'react-router-dom'

export default class Rejected extends React.Component {
    render(){
        return(
            <div className='reject-page'>
                <img className='trash-pic' src={require('../images/trash.gif')} alt='trash' ></img>
                <p className='reject-text-main'>We Value Your Feedback</p>
                    <NavLink className='back' to='/new'>Get Out</NavLink>
            </div>
        )
    }
}

