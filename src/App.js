import React from 'react';
import './App.css';

import fetchXtions from './fetch.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Content />
      </header>
    </div>
  );
}


class Content extends React.Component{

    state = {
      loading: false,
      transactions: [],
      error: null
    };

    componentDidMount(){
        console.log('componentDidMount loaded');
        this.finalXtions();
    }

    finalXtions(){
        console.log('finalXtions loaded');
        fetchXtions()
        .then( transactions => {
          this.setState({
              transactions: transactions,
              loading: false });
              console.log(transactions);
        })
    }

    render(){
        const totalAmount = this.state.transactions.reduce((x, y) => x + parseFloat(y["Amount"]) || 0,0 )
        return(
            <div className='container'>
                <h3 className='heading'>Bench Test</h3>
                <div className='row'>
                    <div className='col'>
                        <table className="defaultTable" align="center">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Account</th>
                                    <th scope="col">${totalAmount}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.transactions.map( Data => {
                                    return(
                                        <tr>
                                            <td className='col1'>{Data.Date}</td>
                                            <td>{Data.Company}</td>
                                            <td className='col1'>{Data.Ledger}</td>
                                            <td>{Data.Amount}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
