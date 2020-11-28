import React from 'react';
import './App.css';
import './AppHeader';
import AppHeader from './AppHeader';
import SinglePost from './SinglePost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './Posts';
import UserProfile from './UserProfile';
import PostDetail from './post-details';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      list: []
    };
  }


  render() {
    return (
      <Router>
        <AppHeader></AppHeader>
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

}
