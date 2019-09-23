import React , {Component} from 'react';

class Greeting extends  Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
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
                <form>
                    <input
                        type='text'
                        placeholder='username'
                        name = 'username'
                        value={this.state.username}
                        onChange={this.changeInputField}/>
                        <span>{this.state.username}</span>
                    <br/>
                    <input
                        type='password'
                        placeholder='password'
                        name = 'password'
                        value={this.state.password}
                        onChange={this.changeInputField}/>
                        <span>{this.state.password}</span>
                </form>
            </div>
        );
    }
}
export default Greeting;