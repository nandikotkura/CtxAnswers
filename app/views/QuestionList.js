import React from 'react';

class QuestionList extends React.Component
{
    handleClick = (data,e) => {
   sessionStorage.setItem("Question",data["currentTarget"]["innerHTML"]);
   window.location = "/#/Answers";
    }
    render()
    {
        var Question = this.props.Question;
        var Author = this.props.Author;
        var Votes = this.props.Votes;
        return(
            <div className="row">
                <div className="vote-actions">
                    <a onClick={Votes++}>
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
                    <i className="fa fa-user"></i> <a href="#">{Author}</a>
                </div>
                </div>
        )
    }
}

export default QuestionList