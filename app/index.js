import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';
import {chosen, style} from 'chosen-js';

import XenMobile from './views/XenMobile';
import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';
import TopHeader from './components/common/TopHeader';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css';
import './../node_modules/chosen-js/chosen.css'

ReactDOM.render(
<Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
);