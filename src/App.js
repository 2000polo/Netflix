import React from 'react';
import Home from './Pages/Home/Home';
import Landing from './Pages/Landing/Landing';
import Signin from './Pages/Signin/Signin';
import View from './Pages/View/View';
import { HashRouter as Router,Route} from 'react-router-dom';
import Viewmovie from './Context/Context';
import UtubeVedio from './Context/Youtube';

function App() {
  return (
    <div className="App">

      <Router>
        <UtubeVedio >
          <Viewmovie >
            <Route exact path = '/'>
              <Landing />
            </Route>
            <Route path = '/home'>
              <Home />
            </Route>
            <Route path = '/signin'>
              <Signin />
            </Route>
            <Route path = '/view'>
              <View />
            </Route>
          </Viewmovie>
        </UtubeVedio>
      </Router>
      
    </div>
  );
}

export default App;