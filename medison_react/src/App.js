import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Country from "./pages/Country";
import EditCountry from "./pages/EditCountry";

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/" exact component={Country}/>
              <Route path="/edit-country/:id" component={EditCountry}/>
          </Switch>
      </Router>
  );
}

export default App;
