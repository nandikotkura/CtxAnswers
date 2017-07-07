import React, { Component } from 'react';

class Main extends Component {
    render() {
        var rep = [];
        var qsts = <div className="vote-item">
        <div className="row">
            <div className="col-md-10">
                <div className="vote-actions">
                    <a href="#">
                        <i className="fa fa-chevron-up"> </i>
                    </a>
                    <div>34</div>
                    <a href="#">
                        <i className="fa fa-chevron-down"> </i>
                    </a>
                </div>
                <a href="#" className="vote-title">
                    What is Xen Desktop
                </a>
                <div className="vote-info">
                    <i className="fa fa-comments-o"></i> <a href="#">Comments (21)</a>
                    <i className="fa fa-clock-o"></i> <a href="#">11 Hours ago</a>
                    <i className="fa fa-user"></i> <a href="#">Indraneel</a>
                </div>
            </div>
            <div className="col-md-2 ">
                <div className="vote-icon">
                    <i className="fa fa-tumblr"> </i>
                </div>
            </div>
        </div>
    </div>
    for(var i=0;i<5;i++)
    {
    rep.push(qsts);
}
var divStyle = {
    width:'100%'
    
}
        return (
            <div className="ibox">
                <div className = "ibox-title">
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
                <div className ="ibox-content">
                {rep}
                </div>
                
            </div>
        )

        
    }

}

export default Main