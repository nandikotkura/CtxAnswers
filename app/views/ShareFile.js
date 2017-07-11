import React, { Component } from 'react';
import MainView from '../views/Main';
import QuestionList  from '../views/QuestionList';
import QuestionModal from '../views/QuestionModal';
class ShareFile extends Component {
    formathtml = (dat)=>
    {
        var Question = "What is the most uploaded file format on ShareFile?";
        var Author = "Sangamesh";
        var Votes = "15"
        var divStyle = {
        display:'none'
};
              return(  
             <QuestionList Question={Question} Votes ={Votes} Author ={Author} />
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
              <QuestionModal Tag={[{name: 'NetScaler'}, {name: 'XenDesktop'},{name:'XenMobile'}]} />
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
                            <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Ask Question</button>
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
export default ShareFile