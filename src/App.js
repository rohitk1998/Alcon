import React, { Component } from 'react';
import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';

import Login from './component/Screens/Login';

import Product from './component/Screens/product';
import Search from './component/Screens/search';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
            <Route exact path='/' component={Login} />
            
            <Route exact path='/product' component={Product} />
            <Route exact path='/search' component={Search} />
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;