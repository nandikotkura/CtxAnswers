import React, { Component } from 'react';
import MainView from '../views/Main';
class XenMobile extends Component {
    handleClick = (data,e)=> {
   sessionStorage.setItem("Question",data["currentTarget"]["innerHTML"]);
   window.location = "/#/Answers";
    }
    formathtml = (dat)=>
    {
        var Question = "How Secure Hub is better than Outlook?";
        var Author = "Indraneel";
        var Votes = "31"
              return(  
                  <div className="row">
                <div className="vote-actions">
                    <a href="#">
                        <i className="fa fa-chevron-up"> </i>
                    </a>
                    <div>{Votes}</div>
                    <a href="#">
                        <i className="fa fa-chevron-down"> </i>
                    </a>
                </div>
                <a onClick={this.handleClick.bind(this)} className="vote-title">
                    {Question}
                </a>
                <div className="vote-info">
                    <i className="fa fa-comments-o"></i> <a href="#">Comments (21)</a>
                    <i className="fa fa-clock-o"></i> <a href="#">11 Hours ago</a>
                    <i className="fa fa-user"></i> <a href="#">{Author}</a>
                </div>
                </div>
              )
    }
    render() {
        var rep = [];
        var htmlcont = this.formathtml("hello");
        for(var i=0;i<5;i++)
        {
            rep.push(htmlcont);
        }
        var divStyle = {
             width:'100%'
                       }
        return (
            <div className="ibox">
                <div className="ibox-title">
                    <div className="row">
                        <div className="col-lg-5">                          
                                <div className="input-group" style={divStyle}>
                                    <input type="text" placeholder="Search" className="input-sm form-control" /> <span className="input-group-btn">
                                        <button type="button" className="btn btn-sm btn-primary"> Go!</button>
                                    </span>
                                </div>
                        </div>
                        <div className ="col-lg-5">
                            
                        </div>
                        <div className = "col-lg-2">
                            <button className="btn btn-primary">Ask Question</button>
                        </div>
                    </div>
                </div>
<div className="vote-item">
        <div className="row">
            <div className="col-md-10">
              {rep}
            </div>
            <div className="col-md-2 ">
                <div className="vote-icon">
                    <i className="fa fa-tumblr"> </i>
                </div>
            </div>
        </div>
    </div>
    </div>
        )
    }

}
export default XenMobile