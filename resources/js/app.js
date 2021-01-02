import React from 'react';
import ReactDOM from "react-dom";
import Navigation from "./services/Navigation";

window.$ = window.jQuery = require('jquery');

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { initialRoute } = this.props;

        return <Navigation initialRoute={initialRoute} />;
    }
}

const app = document.getElementById('app');
if (app) {
    const initialRoute = app.dataset.initial;
    ReactDOM.render(<App initialRoute={initialRoute} />, app);
}
