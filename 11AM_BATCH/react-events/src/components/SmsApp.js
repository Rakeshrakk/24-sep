import React , {Component} from 'react';

class SmsApp extends  Component{
    constructor(props){
        super(props);
        this.state = {
            textEntered : ''
        };
    }

    // changeInputField
    changeInputField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-header bg-primary text-white text-center">
                        <h3>SMS App</h3>
                    </div>
                    <div className="card-body bg-light">
                        <form>
                            <div className="form-group">
                                <textarea
                                    className='form-control'
                                    rows='4'
                                    maxLength='100'
                                    value={this.state.textEntered}
                                    name = 'textEntered'
                                    onChange={this.changeInputField}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer bg-light">
                        <h2>The Characters Remaining : <span className='font-weight-bold text-white'>{100 - this.state.textEntered.length}</span></h2>
                    </div>
                </div>
            </div>
        );
    }
}
export default SmsApp;