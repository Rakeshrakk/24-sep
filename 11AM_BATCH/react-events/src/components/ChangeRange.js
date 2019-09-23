import React , {Component} from 'react';

class ChangeRange extends  Component{
    constructor(props){
        super(props);
        this.state = {
            houseLoan : 0,
            carLoan : 0,
            grocery : 0,
            others : 0 ,
            total : 0
        };
    }

    // changeInputField
    changeInputField = (event) => {
        // update the state back
        this.setState({
            [event.target.name] : Number.parseInt(event.target.value)
        });
    };

    // get total
    getTotal = (e) => {
        e.preventDefault();
        this.setState({
            total : this.state.houseLoan + this.state.carLoan + this.state.grocery + this.state.others
        })
    };

    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h3>Expenditure Calculator</h3>
                    </div>
                    <div className="card-body bg-light">
                        <form>
                            <div className="row align-items-center">
                                <div className="col text-white">
                                    House Loan
                                    <input
                                        type='range'
                                        className='custom-range'
                                        style={{width : '400px'}}
                                        min='0'
                                        max='2500000'
                                        name = 'houseLoan'
                                        onChange={this.changeInputField}/>
                                </div>
                                <div className="col">
                                    <h2 className='font-weight-bold text-white'> &#8377; {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.state.houseLoan)}</h2>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col text-white">
                                    Car Loan
                                    <input
                                        type='range'
                                        className='custom-range'
                                        style={{width : '400px'}}
                                        min='0'
                                        max='500000'
                                        name = 'carLoan'
                                        onChange={this.changeInputField}/>
                                </div>
                                <div className="col">
                                    <h2 className='font-weight-bold text-white'> &#8377; {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.state.carLoan)}</h2>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col text-white">
                                    Grocery
                                    <input
                                        type='range'
                                        className='custom-range'
                                        style={{width : '400px'}}
                                        min='0'
                                        max='100000'
                                        name = 'grocery'
                                        onChange={this.changeInputField}/>
                                </div>
                                <div className="col">
                                    <h2 className='font-weight-bold text-white'> &#8377; {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.state.grocery)}</h2>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col text-white">
                                    Others
                                    <input
                                        type='range'
                                        className='custom-range'
                                        style={{width : '400px'}}
                                        min='0'
                                        max='50000'
                                        name = 'others'
                                        onChange={this.changeInputField}/>
                                </div>
                                <div className="col">
                                    <h2 className='font-weight-bold text-white'> &#8377; {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.state.others)}</h2>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col text-white">
                                    <button className='btn btn-primary' onClick={this.getTotal}>Get Total</button>
                                </div>
                                <div className="col">
                                    <h2 className='font-weight-bold text-white'> &#8377; {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.state.total)}</h2>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChangeRange;