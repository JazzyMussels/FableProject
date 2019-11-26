import React from 'react';
import '../css/AboutPage.css'
import {NavLink} from 'react-router-dom'


export default class AboutPage extends React.Component {
    render(){
        return(
            <div className='shelf-bg'>
                 <div id='library-button'>
                    <div id='library-button-text'>
                    <NavLink to='/library'>GO TO LIBRARY</NavLink>
                    </div>
                </div>
                <div id='create-button'>
                    <div id='create-button-text'>
                        <NavLink to='/new'>CREATE A STORY</NavLink>
                    </div>
                </div>
               <div className='about-page-bg'>
                <article className='about-text'>
                    This is a sort of Choose Your Own Adventure book-maker.
                    <br></br>
                    They are written as books for very small children, except
                    for all the parts that are very much for adults only. Which
                    is mostly all of the parts. If you let children read these,
                    you are one of the baddies.
                    <br></br>
                    You will be prompted to pick a category from time to time, 
                    and a quote that fits that category will be added to your book. 
                    Some choices you make will lead to very different endings, but no matter
                    what, you will learn a valuable life lesson.  
                    <br></br>
                    Pick an outline and start crafting. 
                </article>
               
              
                </div>
               
            </div>
        )
    }
}

  