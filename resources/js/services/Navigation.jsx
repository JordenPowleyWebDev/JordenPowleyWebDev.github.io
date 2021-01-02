import React from 'react';
import {Routes} from "../constants/Routes";
import Index from "../pages/Index";
import About from "../pages/About";
import Work from "../pages/Work";
import Projects from "../pages/Projects";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: Routes.index.name
        };

        this.renderPage = this.renderPage.bind(this);
    }

    renderPage(currentPage) {
        switch (currentPage) {
            case Routes.about.name:
                return (
                    <About />
                );
            case Routes.projects.name:
                return (
                    <Projects />
                );
            case Routes.work.name:
                return (
                    <Work />
                );
            case Routes.index.name:
            default:
                return (
                    <Index />
                );
        }
    }

    render() {
        const { currentPage } = this.state;

        return (
            <React.Fragment>
                <Header currentPage={currentPage} />
                {this.renderPage(currentPage)}
                <Footer />
            </React.Fragment>
        )

    }
}