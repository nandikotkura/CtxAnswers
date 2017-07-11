import React from 'react';

class ProfileQuestions extends React.Component {
    handleClick = (data, e) => {
        sessionStorage.setItem("Question", data["currentTarget"]["innerHTML"]);
        window.location = "/#/Answers";
    }
    render() {
        var Question = this.props.Question;
        var Votes = this.props.Votes;
        return (
            <div className="row">
                <div className="col-lg-10">
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
                        <i className="fa fa-comments-o"></i> <a href="#">Answers (21)</a>
                        <i className="fa fa-clock-o"></i> <a href="#">11 Hours ago</a>
                    </div>
                </div>
                <div className="col-lg-2">
                    <button className="btn btn-danger"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;&nbsp;Delete</button>
                </div>
            </div>
        )
    }
}

export default ProfileQuestions