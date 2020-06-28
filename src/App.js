import React from 'react';
import './App.css';
import { Blog, Navigation, Experiment, Home, Resume, NoMatch } from './components'
// this is renaming the components you import as something else
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Nav, NavBar} from  'react-bootstrap';
import {Layout} from './components/Layout';
import logo from './images/logo.gif';

class App extends React.Component {
  render() {
    return (
      <React.Fragment> 
        
        
        
        <Router>
          <Navigation/>
          <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/experiment" component={Experiment}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/blog" component={Blog}/>
            <Route component={NoMatch}/>
        
          </Switch>
          
        
        </Layout>
        </Router>
        </React.Fragment> 
    )
  }
}

export default App;
