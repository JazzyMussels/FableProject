import React from 'react';
import '../css/Enter.css'
import {NavLink} from 'react-router-dom'

export default class Enter extends React.Component {

  

    render(){
        return(
            <div className='background-main-image'>
           
            <div id='text-box-1'>
            Hey there little buddy. If you are sensitive, or just generally a kind-hearted, decent person, 
            you probably shouldn't smash that baby button.</div>

            <div id='text-box-2'>  But if you want to read morbid, depressing, and, I hope, funny content,
            well then come on in! </div>

            <div className='warning-page'></div>
            <NavLink className='baby-button' to='/cover'></NavLink>
           

            </div>
        )
    }
}