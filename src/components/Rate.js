import React from 'react';
import '../css/Rate.css'
import {NavLink} from 'react-router-dom'


export default class Rate extends React.Component {
    render(){
        return(
            <div className='rate-page'>
                <p className='rate-text-main'>Please Rate This Title</p>
                <div className='rate-covers'>
               <NavLink to='rejected'><img id='no-rate' src={require('../images/NO.png')} alt='abomination'/></NavLink> 
               <NavLink to='rejected'><img id='no-2-rate'src={require('../images/no3.png')} alt='turd' /></NavLink> 
               <NavLink to='rejected'><img id='neutral-rate' src={require('../images/WTFisthis.png')} alt='wtf' /></NavLink> 
               <NavLink to='rejected'><img id='yes-rate' src={require('../images/Yes.png')} alt='dad' /></NavLink> 
               <NavLink to='rejected'><img id='yes-2-rate' src={require('../images/yes4.png')} alt='chief' /></NavLink> 
            </div>
                <img className='kids-pic' src={require('../images/kids-read.png')} alt='kids' ></img>
            </div>
        )
    }
}

