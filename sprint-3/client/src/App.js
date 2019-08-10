import React from 'react';
import './App.css';

import Main from './Components/Main';
import UploadPage from './Components/UploadPage';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/upload" component={UploadPage} />
        <Route path="/:id" component={Main} />
    </Switch>
    );
  }
}

export default App;