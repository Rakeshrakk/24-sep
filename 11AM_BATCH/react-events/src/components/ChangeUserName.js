import React , {Component} from 'react';

class ChangeUserName extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username : ''
        };
    }

    changeInputField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <form>
                            <div className="form-group">
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='User Name'
                                    value={this.state.username}
                                    name = 'username'
                                    onChange={this.changeInputField}/>
                            </div>
                        </form>
                    </div>
                    <div className="card-body bg-light">
                        <h3 className='display-3 text-white'>{this.state.username}</h3>
                    </div>
                </div>
            </div>
        );
    }

}
export default ChangeUserName;