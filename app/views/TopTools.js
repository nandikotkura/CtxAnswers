import React from 'react'
import Search from '../views/Search';
import MainView from '../views/Main';
import XenMobile from '../views/XenMobile';
import ReactDOMServer from 'react';


class TopTools extends React.Component {
    reload = (data, e) => {
        $("#undo").hide();
        location.reload();
    }
    handleSearch = (data, e) => {
        if ($("#inputquestion").val().length > 4) {
            var searchedquestions = (new Search()).searchByTags();
            $("#test").empty();
            var a = this.props.classt
            const htmlcs = ReactDOMServer.renderToStaticMarkup(
                (new this.props.classt).formathtml("hello"))
            document.getElementById('test').innerHTML = htmlcs
            $("#undo").show();
        }

    }
    render() {
        var divStyle = {
            width: '100%'
        }
        var hide = {
            display: 'none'
        }
        return (
            <div className="row">
                <div className="col-lg-5">
                    <div className="input-group" style={divStyle}>
                        <input id="inputquestion" type="text" placeholder="Search" className="input-sm form-control" /> <span className="input-group-btn">
                            <button id="undo" className="btn btn-sm btn-warning" style={hide} onClick={this.reload.bind(this)}>x</button><button type="button" className="btn btn-sm btn-primary" onClick={this.handleSearch.bind(this)}> Go!</button>
                        </span>
                    </div>
                </div>
                <div className="col-lg-5">

                </div>
                <div className="col-lg-2">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Ask Question</button>
                </div>
            </div>
        )
    }
}

export default TopTools