import React from 'react';
import ProfileQuestions  from '../views/ProfileBasedQuestions';
var test1;
class Profile extends React.Component
{
formathtml = (dat)=>
    {
        //dat contains the JSON
        var Question = "How Secure Hub is better than Outlook?";
        var Author = "Indraneel";
        var Votes = "31"
        var divStyle = {
        display:'none'
};
              return(  
             <ProfileQuestions Question={Question} Votes ={Votes} Author ={Author} />
              )
    }
getUserQuestions = () =>
{
  
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/1",
      dataType: 'json',
      cache: false,
      success: function(data) {
         global.test1 = "Test";
      }
    });
}
    render()
    {

    this.getUserQuestions;
     var rep = [];
        var htmlcont = this.formathtml("hello");
        for(var i=0;i<5;i++)
        {
            rep.push(htmlcont);
        }
        var divStyle = {
             width:'100%'
                       }
        return(
            <div>
            <div className="row">
            <div className = "col-lg-4">
               <div className="widget style1 navy-bg">
                <div className="p-m">
                    <h3 className="font-bold no-margins">
                        Reward Points
                    </h3><br />
                    <div className="row">
                            <div className="col-lg-5">
                                <i className="fa fa-gift fa-5x" aria-hidden="true"></i>
                            </div>
                        <div className="col-lg-7">
                         <h1>3385</h1>
                            </div>
                        </div>
                 </div>
             </div>
        </div>
        <div className = "col-lg-4">
               <div className="widget style1 blue-bg">
                <div className="p-m">
                    <h3 className="font-bold no-margins">
                        No of Questions Asked
                    </h3><br />
                    <div className="row">
                            <div className="col-lg-5">
                                <i className="fa fa-question-circle fa-5x" aria-hidden="true"></i>
                            </div>
                        <div className="col-lg-7">
                         <h1>15</h1>
                            </div>
                        </div>
                 </div>
             </div>
        </div>
         <div className = "col-lg-4">
               <div className="widget style1 yellow-bg">
                <div className="p-m">
                    <h3 className="font-bold no-margins">
                        No of Questions Answered
                    </h3><br />
                    <div className="row">
                            <div className="col-lg-5">
                                <i className="fa fa-check-square-o fa-5x" aria-hidden="true"></i>
                            </div>
                        <div className="col-lg-7">
                         <h1>35</h1>
                        </div>
                        </div>
                 </div>
             </div>
        </div>
           
    </div>

    <div className="ibox">
    <div className="vote-item">
        <div className="row">
            <div className="col-md-12">
              {rep}
            </div>
        </div>
    </div>
     </div>
     </div>
        )
    }
}

export default Profile