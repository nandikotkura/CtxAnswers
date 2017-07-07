import React from 'react';

class Answers extends React.Component
{
    AnswersApi = (dat) =>
    {
        return(
            <div>
                   <p>
                        Many desktop publishing packages and web page editors now use <strong>Lorem Ipsum as their default model text</strong>, and a search for 'lorem ipsum' will uncover many web
                    </p>
                    <p>
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops
                    </p>
                    <p>
                        <i>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </i>
                    </p>
                    </div>
        )
    }
    render()
    {
        var answers = this.AnswersApi();
        return(
            <div className="ibox">
                <div className="ibox-title">
                <h1>{sessionStorage.getItem("Question")}</h1><br/>
                <div className = "row">
                                    <div className="vote-actions">
                    <a href="#">
                        <i className="fa fa-chevron-up"> </i>
                    </a>
                    <div>23</div>
                    <a href="#">
                        <i className="fa fa-chevron-down"> </i>
                    </a>
                </div>
                <a className="vote">
                The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks.
                </a>
                <div className="vote-info">
                    <i className="fa fa-comments-o"></i> <a href="#">Comments (21)</a>
                    <i className="fa fa-clock-o"></i> <a href="#">11 Hours ago</a>
                    <i className="fa fa-user"></i> <a href="#">Hello</a>
                </div>
                </div>
                </div>
                 <div className = "ibox-content">
                    {answers}
                </div>
    </div>
        )
    }
}

export default Answers
