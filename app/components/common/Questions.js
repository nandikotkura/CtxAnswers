import React, { Component } from 'react';

class Questions extends Component {
    render() {
        return (
            <div className="ibox">
                <div className="ibox-title">
                    <div className="row">
                        <div className="col-lg-5">
                            Question
                            </div>
                            <div className="col-lg-5">
                                Author
                            </div>
                            <div className="col-lg-2">
                                No of Times Asked
                            </div>
                         </div>
                     </div>
                <div className="ibox-content">
                <div>
            <div className="row">
                <div className="col-lg-5">
                    <a data-toggle="collapse" href="#faq4" className="faq-question">What is NetScaler ?</a>
                </div>
                <div className="col-lg-5">
                    <span className="font-bold">Robert Nowak</span>
                </div>
                <div className="col-lg-2">
                    <span className="small font-bold">Voting </span><br />
                    65
                </div>
            </div>
        </div>
        </div>
        </div>
        )
    }

}

export default Main