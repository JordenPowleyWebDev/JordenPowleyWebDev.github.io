import React from 'react';
import Page from "../components/sections/Page";
import {Routes} from "../constants/Routes";
import PageTitle from "../components/PageTitle";
import Divider from "../components/Divider";
import Title from "../components/Title";

export default class Projects extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page
                id={Routes.projects.name}
                className={"d-flex justify-content-center align-items-center"}
            >
                <div className="container py-4 py-md-5">
                    <div className="row m-0 p-0">
                        <div className="col-12 col-md-6 m-0 p-0">
                            <PageTitle>Projects</PageTitle>
                            <Divider />
                            <Title>In Progress</Title>
                        </div>
                        <div className="col-12 col-md-6 m-0 p-0">

                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}