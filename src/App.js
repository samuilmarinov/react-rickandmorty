import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Episodes from './components/Episodes';
import Characters from './components/Characters';
import Locations from './components/Locations';
import Episode from './components/Episode';
import Location from './components/Location';
import Footer from './components/Footer';
import Character from './components/Character';
import Searchform from './components/Searchform';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/Login/Login';
import useToken from './useToken';




function App() {
  const { token, setToken } = useToken();

  if(!token) {
    
    return <Login setToken={setToken} />

  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
            
             <Route path="/" component={Home} exact/>
             <Route path="/episodes/:page" component={Episodes}/>
             <Route path="/characters/:page" component={Characters}/>
             <Route path="/locations/:page" component={Locations}/>
             <Route path="/location/:name" component={Location}/>
             <Route path="/episode/:name" component={Episode}/>
             <Route path="/character/:name" component={Character}/>
             <Route path="/search/" component={Searchform}/>
             <Route component={Error}/>
           
           </Switch>
      
        </div> 
      </BrowserRouter>

    <Footer /> 
    </React.Fragment>
    
  );
}

export default App;
