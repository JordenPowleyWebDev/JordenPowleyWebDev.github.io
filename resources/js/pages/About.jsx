import React from 'react';
import Page from "../components/sections/Page";
import {Routes} from "../constants/Routes";
import PageTitle from "../components/PageTitle";
import Divider from "../components/Divider";
import Title from "../components/Title";
import Text from "../components/Text";

export default class About extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page
                id={Routes.about.name}
                className={"d-flex justify-content-center align-items-center"}
            >
                <div className="container py-4 py-md-5">
                    <div className="row m-0 p-0">
                        <div className="col-12 col-md-6 m-0 p-0">
                            <PageTitle>About</PageTitle>
                            <Divider />
                            <Title>I am a web developer based around Derby</Title>
                            <Text>After graduating Keele University in 2016 with a Bachelor's Degree in BSc Computer Science, I spent two years working form Zonal Marketing technologies (formally TXD Limited). Here I worked on many projects ranging from building marketing email templates to gift card e-commerce systems, for clients include New World Trading Company, Butcombe Brewery and All Star Lanes.</Text>
                            <Text>Following my departure from ZMT I worked for The Together Agency. A creative branding agency based in Nottingham. Here I primarily migrated websites and applications to use a Bitbucket pipeline / AWS architecture with a smattering of smaller projects along the line.</Text>
                            <Text>From October the 21st 2019 I will be working for Langley Foxall on what I believe will be some exciting new projects!</Text>
                            <Text>Occasionally in my spare time I do smaller development projects for myself, however like the typical developer these are usually far to grand a scale and get put down as soon as I get my next big idea...</Text>
                            <Divider />
                            <Title>Doesn't work 100% of the time</Title>
                            <Text>Being an ever evolving individual, verbose way of saying 'short attention span', my hobbies reflect this.</Text>
                            <Text>Currently these include kayaking, running, mediocre djing and repairing my (inflatable) kayak.</Text>
                        </div>
                        <div className="col-12 col-md-6 m-0 p-0">

                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}