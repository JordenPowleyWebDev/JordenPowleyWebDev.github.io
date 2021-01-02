import React from 'react';
import ReactDOM from "react-dom";
import Navigation from "./services/Navigation";

window.$ = window.jQuery = require('jquery');

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Navigation />;
    }
}

const app = document.getElementById('app');
if (app) {
    ReactDOM.render(<App />, app);
}
