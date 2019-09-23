import React , {Component} from 'react';

class ChangePassword extends  Component{
    constructor(props){
        super(props);
        this.state = {
            inputType : 'password'
        };
    }

    // changeInputField
    changeInputField = (event) => {
        this.setState({
            inputType : (this.state.inputType === 'password') ? 'text' : 'password'
        });
    };

    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h3>Change Password</h3>
                    </div>
                    <div className="card-body bg-light">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="input-group mb-3">
                                        <input
                                            type= {this.state.inputType}
                                            className="form-control"/>
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <input type="checkbox" className="mr-3" onChange={this.changeInputField}/> Show Password
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChangePassword;