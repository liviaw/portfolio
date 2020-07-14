import React from 'react';
import './App.css';
import { Blog, Navigation, Experiment, Home, Resume, Social, NoMatch } from './components'
// this is renaming the components you import as something else
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Nav, NavBar} from  'react-bootstrap';
import {Layout} from './components/Layout';
import logo from './images/logo.gif';

class App extends React.Component {
  render() {
    return (
      <React.Fragment> 
        {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          ></button> */}
        <Social />
        <Router>
          
          
          <Layout>
          <Navigation/>
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
