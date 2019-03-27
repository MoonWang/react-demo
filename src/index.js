import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
    render () {
        return (
            <div>hello react</div>
        )
    }
}

ReactDOM.render(<Test/>, document.getElementById('app'));