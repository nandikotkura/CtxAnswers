import React, { Component } from 'react';
import QuestionList from '../views/QuestionList';
import QuestionModal from '../views/QuestionModal';
import TopTools from '../views/TopTools';
import ReactDOMServer from 'react';
class MainView extends Component {
    formathtml = (dat) => {
        var Question = "Popular Questions here~!";
        var Author = "John Doe";
        var Votes = "28"
        return (
            <QuestionList Question={Question} Author={Author} Votes={Votes} />
        )
    }
    render() {
        var rep = [];
        var htmlcont = this.formathtml("hello");
        for (var i = 0; i < 5; i++) {
            rep.push(htmlcont);
        }
        return (
            <div className="ibox">
                <div className="ibox-title">
                <TopTools classt={MainView}/>
                </div>
                <QuestionModal Tag={[{ name: 'NetScaler' }, { name: 'XenDesktop' }, { name: 'XenMobile' }]} />
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
export default MainView