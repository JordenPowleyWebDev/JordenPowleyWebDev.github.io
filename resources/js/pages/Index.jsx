import React from 'react';
import Page from "../components/sections/Page";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page
                id={"index"}
                className={"gradient-background d-flex justify-content-center align-items-center"}
            >
                <div className={"text-center"}>
                    <h1 className="display-4 mb-0 text-white no-select">Jorden Powley</h1>
                    <h2 className="h1 mb-0 text-white no-select">Web Developer</h2>
                </div>
            </Page>
        );
    }
}