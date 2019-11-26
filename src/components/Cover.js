import React from 'react';
import '../css/Cover.css'
import {NavLink} from 'react-router-dom'

export default class Cover extends React.Component {

    // renderPage = () => {
    //     return(
    //    !this.props.openBook ?
    //    <div className='shelf-bg'>
    //    <div id='cover-page' onClick={() => this.props.openSesame()}>
    //    </div>
    //    </div>:
    //    <AboutPage />
    //     ) 
    //    }
    
    render(){
        return(
               <div className='shelf-bg'>
       <NavLink className='cover-page' to='/about'>
       </NavLink>
       </div>
        )
    }
}
