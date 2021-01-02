import React from 'react';
import Page from "../components/sections/Page";
import {Routes} from "../constants/Routes";

export default class Index extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page
                id={Routes.index.name}
                className={"position-fixed d-flex justify-content-center align-items-center gradient-background"}
            >
                <div className={"text-center"}>
                    <h1 className="display-3 mb-0 text-white no-select">Jorden Powley</h1>
                    <h2 className="h1 mb-0 text-white no-select">Web Developer</h2>
                </div>
            </Page>
        );
    }
}