import React , {Component} from 'react';

class ChangeSelect extends  Component{
    constructor(props){
        super(props);
        this.state = {
            technology : ''
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
                    <div className="card-body bg-success">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <select
                                        className='form-control'
                                        value = {this.state.technology}
                                        name = 'technology'
                                        onChange={this.changeInputField}
                                        >
                                        <option value="">Select a Technology</option>
                                        <option value="HTML">HTML</option>
                                        <option value="CSS">CSS</option>
                                        <option value="JavaScript">JavaScript</option>
                                        <option value="JQuery">JQuery</option>
                                        <option value="Bootstrap">Bootstrap</option>
                                        <option value="React JS">React JS</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <h2 className='font-weight-bold text-white'>{this.state.technology}</h2>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChangeSelect;