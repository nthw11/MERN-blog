import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostsList from '../src/components/PostsList';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/posts' component={PostsList} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
