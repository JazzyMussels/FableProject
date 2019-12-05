import React from 'react';
import '../css/Choose.css'
import {NavLink} from 'react-router-dom'

export default class Choose extends React.Component {
  
    render(){
        console.log(this.state)
        return(
            <div className='shelf-bg'>
            <div id='select-page-header'>Select A Story Template Below</div>
            <div className='story-template-covers'>
               <NavLink to='park'><img src={require('../images/ParkTheme.jpg')} alt='park'/></NavLink> 
                <img id='school-book' src={require('../images/school.png')} alt='school' />
                <img id='twin-book' src={require('../images/twins.png')} alt='twins' />
            </div>
            <div id='not-avail-1'><p>This title is not available in your country</p></div>
            <div id='not-avail-2'><p>This title is not available in your country</p></div>
        </div>
        )
    }
}