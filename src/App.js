import React from 'react';
import './App.css';
import { Blog, Nav, Experiment, Home, Resume } from './components'
// this is renaming the components you import as something else
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>

          <Switch>
            <Route path="/" component={Home}/>
            <Route path="/experiment" component={Experiment}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/blog" component={Blog}/>
        
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
