import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div align="center">
                            <img src = "http://icons.iconarchive.com/icons/artua/dragon-soft/512/User-icon.png" className="ImgWidth" />
                            </div>
                            <div align="center" className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Welcome</strong>
                             </span> <span id ="desig" className="text-muted text-xs block">Software Engineer-1<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                CA
                            </div>
                        </li>
                        <li className={this.activeRoute("/main")}>
                            <Link to="/main"><i className="fa fa-television"></i> <span className="nav-label">XenDesktop</span></Link>
                        </li>
                        <li className={this.activeRoute("/minor")}>
                            <Link to="/minor"><i className="fa fa-star fa-lg"></i> <span className="nav-label">XenApp</span></Link>
                        </li>
                        <li className={this.activeRoute("/XenMobile")}>
                            <Link to="/XenMobile"><i className="fa fa-mobile fa-lg"></i> <span className="nav-label">XenMobile</span></Link>
                        </li>
                        <li className={this.activeRoute("/sf")}>
                            <Link to="/minor"><i className="fa fa-th-large"></i> <span className="nav-label">ShareFile</span></Link>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation