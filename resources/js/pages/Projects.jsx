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
            <div className={"d-flex justify-content-center"}>
                <div className={side === "left" ? "row m-0 p-0 justify-content-start" : "row m-0 p-0 justify-content-end"} style={{maxWidth: "1200px"}}>
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
                    {this.renderRow("left", "EH Joinery", "Langley Foxall", [
                        {
                            title:  "Laravel",
                            icon:   "fab fa-laravel"
                        }, {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        }, {
                            title:  "Bootstrap 4",
                            icon:   "fab fa-bootstrap"
                        }, {
                            title:  "React",
                            icon:   "fab fa-react"
                        }, {
                            title:  "Generates PDF's",
                            icon:   "fab fa-file-pdf"
                        },
                    ], [
                        "This is the latest project I have worked on, involving building a bespoke Order Management System.",
                        "The main functionality is built using Laravel with large portions of the site built using React following a DRY approach.",
                        "An companion React Native (Expo) has been built for their staff to management their workload remotely, syncing the data back to the server seamlessly."
                    ])}
                    <Divider />
                    {this.renderRow("right", "Goldilock", "Langley Foxall", [
                        {
                            title:  "Laravel",
                            icon:   "fab fa-laravel"
                        }, {
                            title:  "Minio",
                            icon:   "fab fa-aws"
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
                        "The clients are specialists in server security & hardware and had created a unique storage server system where the drives could physically be disconnected from the internet via an automated mechanism.",
                        "Working closely with the client, we built a bespoke frontend for this storage system to facilitate a user uploading files & managing files."
                    ])}
                    <Divider />

                    <Divider className={"border-dark-blue"} />
                    <Divider className={"border-dark-blue"} />
                    <PageTitle align={"center"}>Previous Projects</PageTitle>
                    <Divider />

                    {this.renderRow("left", "CicloZone", "Langley Foxall", [
                        {
                            title:  "Laravel",
                            icon:   "fab fa-laravel"
                        }, {
                            title:  "Stripe",
                            icon:   "fab fa-stripe"
                        }, {
                            title:  "Apple App Store",
                            icon:   "fab fa-app-store-ios"
                        }, {
                            title:  "Google Play",
                            icon:   "fab fa-google-play"
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
                        "CicloZone is an ambitious project aimed at cycling and fitness enthusiasts, consisting of multiple sites and multiple mobile applications.",
                        "The main system is built using Laravel with any bespoke frontend work built in React. Both apps were built initially using Expo but were subsequently ejected when 3rd party packages were required for bluetooth & in-app subscriptions.",
                        "This system also involves a localized subscription system built using Stripe."
                    ])}
                    <Divider />
                    {this.renderRow("right", "Expeditious Services", "Langley Foxall", [
                        {
                            title:  "Laravel",
                            icon:   "fab fa-laravel"
                        }, {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        }, {
                            title: "Bootstrap 4",
                            icon: "fab fa-bootstrap"
                        }, {
                            title:  "React",
                            icon:   "fab fa-react"
                        },
                    ], [
                        "Expeditious Services required a bespoke system to manage contact between them and their clients as well as managing their staff's schedules & reporting.",
                        "Laravel and React make up the bulk of the system, with operators having access to an off-market app which assists them with their day-to-day duties."
                    ])}
                    <Divider />
                    {this.renderRow("left", "Penny Hydraulics (OMS)", "Langley Foxall", [
                        {
                            title:  "Laravel",
                            icon:   "fab fa-laravel"
                        }, {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        }, {
                            title: "Bootstrap 4",
                            icon: "fab fa-bootstrap"
                        }, {
                            title:  "React",
                            icon:   "fab fa-react"
                        },
                    ], [
                        "Penny Hydraulics needed a new order management system building so that they could move away from the paper based system they were using.",
                        "This system syncs to ProspectSoft where Penny Hydraulics manage their sales pipeline."
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
                        "Entrego is a platform for smaller companies to manage deliveries and their delivery drivers.",
                        "A Xero integration is used to retrieve invoices and create deliveries from the line items. These deliveries can then be scheduled to individual drivers.",
                        "This platform requires a subscription which was built in using Stripe and includes subscription seats.",
                        "The drivers using this platform have access to an iOS and Google Play appm where they can see and manage today's deliveries."
                    ])}
                    <Divider />
                    {/*{this.renderRow("left", "Heightworks", "Langley Foxall", [*/}
                    {/*    {*/}
                    {/*        title:  "React Native",*/}
                    {/*        icon:   "fab fa-react"*/}
                    {/*    }, {*/}
                    {/*        title:  "Apple App Store",*/}
                    {/*        icon:   "fab fa-app-store"*/}
                    {/*    }, {*/}
                    {/*        title:  "Google Play Store",*/}
                    {/*        icon:   "fab fa-google-play"*/}
                    {/*    }, {*/}
                    {/*        title:  "Laravel",*/}
                    {/*        icon:   "fab fa-laravel"*/}
                    {/*    }, {*/}
                    {/*        title:  "PHP",*/}
                    {/*        icon:   "fab fa-php"*/}
                    {/*    },*/}
                    {/*], [])}*/}
                    {/*<Divider />*/}
                    {this.renderRow("left", "Divine Chocolate", "Together", [
                        {
                            title:  "PHP - Craft CMS",
                            icon:   "fab fa-php"
                        }, {
                            title:  "Bootstrap 4",
                            icon:   "fab fa-bootstrap"
                        },
                    ], [
                        "This was a bespoke marketing site build for Divine Chocolate UK. This system was built using Craft CMS, based on designs provided by the in-house design team.",
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
                        "This involved migrating legacy sites along with recently acquired client websites so that they were optimised for Bitbucket Pipelines and Amazon ECS servers running Docker.",
                    ])}
                    <Divider />
                    {this.renderRow("left", "NWTC Gift Card System", "Zonal", [
                        {
                            title:  "PHP",
                            icon:   "fab fa-php"
                        },
                    ], [
                        "This was a bespoke gift card solution built for New World Trading Company. It utilised Secure Trading to take payments for the Gift Cards.",
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