import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        super(props);
        
        // state object
        this.state= { lat: null };
    }

    // React says we have to define render!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err, "error")
        );
        
        return <div>Latitude: </div>
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)