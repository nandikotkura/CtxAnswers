import React from 'react';
class QuestionModal extends React.Component
{
    componentDidMount() {
        this.populateTags();
        $("#selectTags").chosen({width: "95%"});
    }
    
    populateTags = () => {
        var tags = this.props.Tag;
        for(var i =0; i<tags.length; ++i) {
            var option = $('<option/>');
            option.attr({ 'value': tags[i]["name"] }).text(tags[i]["name"]);
            $('#selectTags').append(option);
        }
    }
    render()
    {
     var divStyle = {
             width:'100%'
    }
   return(
            
 <div className="modal inmodal" style={divStyle} id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content animated bounceInRight">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                    <i className="fa fa-question-circle-o fa-5x"></i>
                                    <h4 className="modal-title">Ask a Question</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group"><input type="email"  placeholder="Enter the Question" className="form-control" /></div>
                                    <br />
                                    <select id="selectTags" data-placeholder="Search by tags" multiple>
                                        <option value="blank"></option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-white" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

        )
    }
}

export default QuestionModal