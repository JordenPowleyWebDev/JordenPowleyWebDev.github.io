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
            activeRoute:    Routes.index,
            footerVisible:  true
        };

        this.handleResetFooter  = this.handleResetFooter.bind(this);
        this.handleToggleFooter = this.handleToggleFooter.bind(this);
        this.handleNavigation   = this.handleNavigation.bind(this);
        this.renderPage         = this.renderPage.bind(this);
    }

    handleResetFooter() {
        this.setState({
            footerVisible: true
        });
    }

    handleToggleFooter() {
        const { footerVisible } = this.state;

        this.setState({
            footerVisible: !footerVisible
        });
    }

    handleNavigation(route) {

    }

    renderPage(activeRoute) {
        switch (activeRoute.name) {
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
        const { activeRoute, footerVisible } = this.state;

        return (
            <React.Fragment>
                <Header
                    activeRoute={activeRoute}
                    navigate={(route) => this.handleNavigation(route)}
                    resetFooter={() => this.handleResetFooter()}
                    toggleFooter={() => this.handleToggleFooter()}
                />
                {this.renderPage(activeRoute)}
                <Footer
                    visible={footerVisible}
                />
            </React.Fragment>
        )

    }
}