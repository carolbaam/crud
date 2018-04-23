import React from 'react';
import {connect} from 'react-redux';
import {googleLogin, twitterLogin} from '../actions/userAction'

class Login extends React.Component {
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron" style={{marginTop:'-20px'}}>
                        <h1>Login with your favourite <b><br/>
                            Social network</b></h1>
                    </div>

                    <div className="col-sm-6">
                        <button onClick={this.props.googleLogin}className="btn btn-danger btn-lg">
                            Login with Google
                       </button>
                    </div>
                    <div className="col-sm-6">
                        <button onClick={this.props.twitterLogin}className="btn btn-success btn-lg">
                            Login with Twitter
                       </button>

                    </div>
                </div>
            </div>
        )
    }
}



export default connect(null,{googleLogin, twitterLogin})(Login);