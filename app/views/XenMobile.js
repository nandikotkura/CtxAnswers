import React, { Component } from 'react';
import ReactDOMServer from 'react';
import MainView from '../views/Main';
import QuestionList from '../views/QuestionList';
import QuestionModal from '../views/QuestionModal';
import TopTools from '../views/TopTools';
class XenMobile extends Component {

    formathtml = (dat) => {
        var Question = "How Secure Hub is better than Outlook?";
        var Author = "Indraneel";
        var Votes = "31"
        var divStyle = {
            display: 'none'
        };
        return (
            <QuestionList Question={Question} Votes={Votes} Author={Author} />
        )
    }
    getdata() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            dataType: 'json',
            cache: false,
            success: function (data) {

            }
        });
    }
    render() {
        var rep = [];
        var htmlcont = this.formathtml("hello");
        this.getdata();
        for (var i = 0; i < 5; i++) {
            rep.push(htmlcont);
        }
        var divStyle = {
            width: '100%'
        }
        return (
            <div className="ibox">
                <QuestionModal Tag={[{ name: 'NetScaler' }, { name: 'XenDesktop' }, { name: 'XenMobile' }]} />
                <div className="ibox-title">
                <TopTools classt={XenMobile}/>
                </div>
                <div className="vote-item">
                    <div className="row">
                        <div id="test" className="col-md-12">
                            {rep}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default XenMobile