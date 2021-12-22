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

    renderRow(side, project, owner, icons, paragraphs) {
        return (
            <div className={side === "left" ? "row m-0 p-0 justify-content-start" : "row m-0 p-0 justify-content-end"}>
                <div className="col-12 col-md-10 col-xl-8 m-0 p-0">
                    <Title noMargin={true}>
                        <div className="row m-0 p-0">
                            <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0" dangerouslySetInnerHTML={{ __html: project}} />
                            <div className="col-12 col-md-6 m-0 mb-2 mb-md-0 p-0 d-flex justify-content-md-end align-items-center align-content-center">
                                {!!icons && icons.map((icon, index) => {
                                    let classes = icon.icon;
                                    if ((index + 1) !== icons.length) {
                                        classes = classes+" mr-2 mr-md-3"
                                    }

                                    return (
                                        <Icon title={icon.title} className={classes} key={index} />
                                    );
                                })}
                            </div>
                        </div>
                    </Title>
                    <Label>{owner}</Label>
                    {!!paragraphs && paragraphs.map((item, index) => (
                        <Text key={index}>{item}</Text>
                    ))}
                </div>
            </div>
        );
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
                    {this.renderRow("left", "Heightworks", "Langley Foxall", [
                        {
                            title:  "React Native",
                            icon:   "fab fa-react"
                        }, {
                            title:  "Apple App Store",
                            icon:   "fab fa-app-store"
                        }, {
                            title:  "Google Play Store",
                            icon:   "fab fa-google-play"
                        }, {
                            title:  "Laravel",
                            icon:   "fab fa-laravel"
                        }, {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        },
                    ], [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    ])}
                    <Divider />
                    {this.renderRow("right", "Entrego", "Langley Foxall", [
                        {
                            title:  "Laravel",
                            icon:   "fab fa-laravel"
                        }, {
                            title:  "Stripe",
                            icon:   "fab fa-stripe"
                        }, {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        }, {
                            title:  "Bootstrap 4",
                            icon:   "fab fa-bootstrap"
                        }, {
                            title:  "React",
                            icon:   "fab fa-react"
                        },
                    ], [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    ])}
                    <Divider />
                    {this.renderRow("left", "Expeditious Services", "Langley Foxall", [
                        {
                            title:  "Laravel",
                            icon:   "fab fa-laravel"
                        }, {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        }, {
                            title:  "React",
                            icon:   "fab fa-react"
                        },
                    ], [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    ])}
                    <Divider />
                    {this.renderRow("right", "Penny Hydraulics", "Langley Foxall", [
                        {
                            title:  "Laravel",
                            icon:   "fab fa-laravel"
                        }, {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        }, {
                            title:  "React",
                            icon:   "fab fa-react"
                        },
                    ], [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    ])}
                    <Divider />
                    <Divider className={"border-dark-blue"} />
                    <Divider className={"border-dark-blue"} />
                    <PageTitle align={"center"}>Previous Projects</PageTitle>
                    <Divider />
                    {this.renderRow("left", "Divine Chocolate", "Together", [
                        {
                            title:  "PHP - Craft CMS",
                            icon:   "fab fa-php"
                        }, {
                            title:  "Bootstrap 4",
                            icon:   "fab fa-bootstrap"
                        },
                    ], [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    ])}
                    <Divider />
                    {this.renderRow("right", "Project Migrations", "Together", [
                        {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        }, {
                            title:  "Symfony",
                            icon:   "fab fa-symfony"
                        }, {
                            title:  "Wordpress",
                            icon:   "fab fa-wordpress"
                        }, {
                            title:  "Docker",
                            icon:   "fab fa-docker"
                        }, {
                            title:  "Bitbucket Pipelines",
                            icon:   "fab fa-bitbucket"
                        },
                    ], [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    ])}
                    <Divider />
                    {this.renderRow("left", "New World Trading<br />Gift Card System", "Zonal", [
                        {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        },
                    ], [
                        "This ",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    ])}
                    <Divider />
                    {this.renderRow("right", "Email Marketing", "Zonal", [
                        {
                            title:  "HTML",
                            icon:   "fab fa-html5"
                        }, {
                            title:  "In House ECRM Solution",
                            icon:   "fas fa-at"
                        },
                    ], [
                        "This involved building the initial HTML email templates to be used within an in-house ECRM solution. The ECRM solution in questions was used by hospitality giants such as Stonegate and Mitchell & Butlers.",
                        "Templates and email components were built and tested by myself, so that clients using the software could build and send their own marketing communications.",
                        "The main difficulty with these projects was translating modern designs into functionality HTMl emails that would render as expected in non-standardised email browsers.",
                    ])}
                </div>
            </Page>
        );
    }
}