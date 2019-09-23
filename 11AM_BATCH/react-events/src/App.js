import React from 'react';
import './App.css';
import ChangeRange from "./components/ChangeRange";

function App() {
  return (
    <div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                   <ChangeRange/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
