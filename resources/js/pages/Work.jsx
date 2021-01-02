import React from 'react';
import Page from "../components/sections/Page";
import {Routes} from "../constants/Routes";

export default class Work extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page
                id={Routes.work.name}
                className={"d-flex justify-content-center align-items-center"}
            >
                <div className={"text-center"}>
                    <h1 className="display-3 mb-0 text-white no-select">Work</h1>
                    <h2 className="h1 mb-0 text-white no-select">In Progress</h2>
                </div>
            </Page>
        );
    }
}