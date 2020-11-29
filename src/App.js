import React from 'react';
import './App.css';
import AppHeader from './Shared/AppHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './components/posts/Posts';
import SinglePost from './components/posts/SinglePost';
import UserProfile from './components/user/UserProfile';
import PostDetail from './components/posts/PostDetails';


function App() {
    return (
      <Router>
        <AppHeader title="Enterprise Minds Forum"></AppHeader>
        <Switch>
          <Route path="/" exact component={Posts}></Route>
          <Route path="/post/:id" exact component={PostDetail}></Route>
          <Route path="/post" component={SinglePost}></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/user-profile" component={UserProfile}></Route>
        </Switch>
      </Router>
    )
}

export default App;
