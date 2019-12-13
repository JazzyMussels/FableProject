import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import '../css/App.css'
import Enter from './Enter'
import Choose from './Choose'
import Library from './Library'
import Cover from './Cover'
import AboutPage from './AboutPage'
import ParkStory from './ParkStory';
import Rate from './Rate'
import Rejected from './Rejected'


const QUOTE_API = 'https://d-for-darkness-api.herokuapp.com/'

export default class App extends React.Component {

    constructor() {
      super();
      this.state = {
        data: [],
      }
    }

    componentDidMount(){
      fetch(QUOTE_API)
      .then(resp => resp.json())
      .then(data => {
          this.setState({
            data: [...data]
        })
      })
    }

  render(){
    return (
      <div>
     <BrowserRouter>
      <Switch>
                <Route path='/park'><ParkStory quotes={this.state.data} /></Route>
                <Route path='/library'><Library/></Route>
                <Route path='/about'><AboutPage/></Route>
                <Route path='/cover'><Cover/></Route>
                <Route path='/new'><Choose/></Route>
                <Route path='/rate'><Rate/></Route>
                <Route path='/rejected'><Rejected/></Route>
                <Route path='/'><Enter/></Route>
            </Switch>
     </BrowserRouter>
     </div>
    )
  }
    
}