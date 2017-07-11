import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import XenMobile from '../views/XenMobile';
import XenDesktop from '../views/XenDesktop';
import Answers from '../views/Answers';
import SignIn from '../views/Login';
import ShareFile from '../views/ShareFile';
import Profile from '../views/Profile';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
            <IndexRedirect to="/loginp" />
            <Route path="/" component={Blank}>
            <Route path="loginp" component={SignIn} />
            </Route>
        <Route path="/" component={Main}>        
            <Route path="main" component={MainView}> </Route>
            <Route path="minor" component={MinorView}> </Route>
            <Route path="XenMobile" component={XenMobile}> </Route>
            <Route path="Answers" component={Answers}> </Route>
            <Route path="XenDesktop" component={XenDesktop}> </Route>
            <Route path="ShareFile" component={ShareFile}> </Route>
            <Route path="profile" component={Profile}> </Route>
        </Route>
    </Router>

);