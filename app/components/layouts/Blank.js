import React from 'react';

class Blank extends React.Component {
    handleClick = (data,e) => {
   sessionStorage.setItem("Question",data["currentTarget"]["innerHTML"]);
   window.location = "/#/main";
    }
    render() {
        return (
            <div>
                 <div className="middle-box text-center loginscreen  animated fadeInDown">
        <div>
            <div>

                <h1 className="logo-name"><img src="https://www.sociostark.com/assets/images/engineer.svg" className="widthadj" /></h1>

            </div><br />
            <h3>Welcome to Citrix Answers</h3>
            <form className="m-t" role="form" action="#">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Username" required="" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="" />
                </div>
                <button type="submit" onClick={this.handleClick.bind(this)} className="btn btn-primary block full-width m-b">Login</button>

                <a href="#"><small>Forgot password?</small></a>
                <p className="text-muted text-center"><small>Do not have an account?</small></p>
                <a className="btn btn-sm btn-white btn-block">Create an account</a>
            </form>
            <p className="m-t"> <small>Citrix Systems &copy; 2017</small> </p>
        </div>
    </div>
            </div>
        )
    }

    componentDidMount(){
        $('body').addClass('gray-bg');
    }

    componentWillUnmount(){
        $('body').removeClass('gray-bg');
    }
}

export default Blank