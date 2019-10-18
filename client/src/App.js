/**
 * MERN全栈开发-社交网络应用程序(Mongo+Express+React+Redux+Node)
 * 微信公众号: 米修在线
 * vw: 27732357
 * qq: 27732357
 * 群: 27732356
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import PrivateRoute from './common/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './actions/authActions';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import CreateProfile from './components/create-profile/CreateProfile';
import Post from './components/post/Post';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  // 解析token
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // 检测token是否过期

  // 获取当前时间
  const currentTime = Date.now() / 1000;

  // 判断当前是否大于token过期时间
  if (decoded.exp < currentTime) {
    // 过期
    store.dispatch(logoutUser());

    // TODO: 清楚用户信息

    // 页面跳转
    window.location.href = "/login";
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="contaier">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-experience" component={AddExperience} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-education" component={AddEducation} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
