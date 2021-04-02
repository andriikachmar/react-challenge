import { createBrowserHistory } from 'history';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NewPost from './NewPost';
import PostList from './PostList';

export const history = createBrowserHistory({ forceRefresh: true });

const style = {
  display: 'flex',
  justifyContent: 'center'
};

const App = () => (
  <BrowserRouter>
    <div style={style}>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/card/:id" component={NewPost} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
