import React from 'react';
import Page from "../components/sections/Page";
import {Routes} from "../constants/Routes";
import PageTitle from "../components/PageTitle";
import Divider from "../components/Divider";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Icon from "../components/icons/Icon";
import Label from "../components/Label";
import Text from "../components/Text";

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
                <div className="container-fluid py-4 py-md-5">
                    <PageTitle align={"center"}>Current Projects</PageTitle>
                    <Divider />
                    <div className="row m-0 p-0 justify-content-start">
                        <div className="col-12 col-md-10 col-xl-8 m-0 p-0">
                            <Title noMargin={true}>
                                <div className="row m-0 p-0">
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0">
                                        Heightworks
                                    </div>
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0 d-flex justify-content-md-end align-items-center align-content-center">
                                        <Icon className={"fab fa-react mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-app-store mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-google-play mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-laravel mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-php"} />
                                    </div>
                                </div>
                            </Title>
                            <Label>Langley Foxall</Label>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </div>
                    </div>
                    <Divider />
                    <div className="row m-0 p-0 justify-content-end">
                        <div className="col-12 col-md-10 col-xl-8 m-0 p-0">
                            <Title noMargin={true}>
                                <div className="row m-0 p-0">
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0">
                                        Entrego
                                    </div>
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0 d-flex justify-content-md-end align-items-center align-content-center">
                                        <Icon className={"fab fa-laravel mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-php mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-bootstrap mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-react"} />
                                    </div>
                                </div>
                            </Title>
                            <Label>Langley Foxall</Label>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </div>
                    </div>
                    <Divider />
                    <div className="row m-0 p-0 justify-content-start">
                        <div className="col-12 col-md-10 col-xl-8 m-0 p-0">
                            <Title noMargin={true}>
                                <div className="row m-0 p-0">
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0">
                                        Expeditious Services
                                    </div>
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0 d-flex justify-content-md-end align-items-center align-content-center">
                                        <Icon className={"fab fa-laravel mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-php mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-react"} />
                                    </div>
                                </div>
                            </Title>
                            <Label>Langley Foxall</Label>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </div>
                    </div>
                    <Divider />
                    <div className="row m-0 p-0 justify-content-end">
                        <div className="col-12 col-md-10 col-xl-8 m-0 p-0">
                            <Title noMargin={true}>
                                <div className="row m-0 p-0">
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0">
                                        Penny Hydraulics
                                    </div>
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0 d-flex justify-content-md-end align-items-center align-content-center">
                                        <Icon className={"fab fa-laravel mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-php"} />
                                    </div>
                                </div>
                            </Title>
                            <Label>Langley Foxall</Label>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </div>
                    </div>
                    <Divider />
                    <Divider className={"border-dark-blue"} />
                    <Divider className={"border-dark-blue"} />
                    <PageTitle align={"center"}>Previous Projects</PageTitle>
                    <Divider />
                    <div className="row m-0 p-0 justify-content-start">
                        <div className="col-12 col-md-10 col-xl-8 m-0 p-0">
                            <Title noMargin={true}>
                                <div className="row m-0 p-0">
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0">
                                        Divine Chocolate
                                    </div>
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0 d-flex justify-content-md-end align-items-center align-content-center">
                                        <Icon className={"fab fa-php"} />
                                    </div>
                                </div>
                            </Title>
                            <Label>Together</Label>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </div>
                    </div>
                    <Divider />
                    <div className="row m-0 p-0 justify-content-end">
                        <div className="col-12 col-md-10 col-xl-8 m-0 p-0">
                            <Title noMargin={true}>
                                <div className="row m-0 p-0">
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0">
                                        Project Migrations
                                    </div>
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0 d-flex justify-content-md-end align-items-center align-content-center">
                                        <Icon className={"fab fa-php mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-symfony mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-wordpress mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-docker mr-2 mr-md-3"} />
                                        <Icon className={"fab fa-bitbucket"} />
                                    </div>
                                </div>
                            </Title>
                            <Label>Together</Label>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </div>
                    </div>
                    <Divider />
                    <div className="row m-0 p-0 justify-content-start">
                        <div className="col-12 col-md-10 col-xl-8 m-0 p-0">
                            <Title noMargin={true}>
                                <div className="row m-0 p-0">
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0">
                                        New World Trading<br />Gift Card System
                                    </div>
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0 d-flex justify-content-md-end align-items-center align-content-center">
                                        <Icon className={"fab fa-php"} />
                                    </div>
                                </div>
                            </Title>
                            <Label>Zonal Marketing Technologies</Label>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </div>
                    </div>
                    <Divider />
                    <div className="row m-0 p-0 justify-content-end">
                        <div className="col-12 col-md-10 col-xl-8 m-0 p-0">
                            <Title noMargin={true}>
                                <div className="row m-0 p-0">
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0">
                                        Email Marketing
                                    </div>
                                    <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0 d-flex justify-content-md-end align-items-center align-content-center">
                                        <Icon className={"fab fa-html5 mr-2 mr-md-3"} />
                                        <Icon className={"fas fa-at"} />
                                    </div>
                                </div>
                            </Title>
                            <Label>Zonal Marketing Technologies</Label>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}