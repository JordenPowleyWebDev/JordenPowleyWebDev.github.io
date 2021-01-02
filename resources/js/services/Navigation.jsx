import React from 'react';
import {Routes} from "../constants/Routes";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        let initialRoute = Routes.index;
        switch (props.initialRoute) {
            case Routes.about.name:
                initialRoute = Routes.about;
                break;
            case Routes.projects.name:
                initialRoute = Routes.projects;
                break;
            case Routes.work.name:
                initialRoute = Routes.work;
                break;
            case Routes.index.name:
                initialRoute = Routes.index;
                break;
        }

        this.state = {
            activeRoute:    initialRoute,
            nextRoute:      null,
            navigating:     false,
            navigationOpen: false,
            footerVisible:  true
        };

        this.handleResetNavigation  = this.handleResetNavigation.bind(this);
        this.handleResetFooter      = this.handleResetFooter.bind(this);
        this.handleToggleNavigation = this.handleToggleNavigation.bind(this);
        this.handleToggleFooter     = this.handleToggleFooter.bind(this);
        this.handleNavigation       = this.handleNavigation.bind(this);
    }

    handleResetNavigation() {
        document.body.classList.remove("no-scroll");

        this.setState({
            navigationOpen: false
        });
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

    handleToggleNavigation() {
        const { navigationOpen } = this.state;

        if (!navigationOpen === true) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        this.setState({
            navigationOpen: !navigationOpen
        });
    }

    handleNavigation(route) {
        this.setState({
            nextRoute: route,
            navigating: true,
        }, () => {
            setTimeout(() => {
                // Change the page address
                window.history.pushState("", route.label, route.path);

                // Scroll to the top of the page
                window.scrollTo(0, 0);

                this.setState({
                    activeRoute: route
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            nextRoute: null,
                            navigating: false,
                            footerVisible: true,
                        }, () => this.handleResetNavigation());
                    }, 500);
                });
            }, 500);
        });
    }

    render() {
        const { activeRoute, footerVisible, navigationOpen, navigating, nextRoute } = this.state;

        return (
            <React.Fragment>
                <Header
                    navigationOpen={navigationOpen}
                    activeRoute={activeRoute}
                    nextRoute={nextRoute}
                    navigating={navigating}
                    navigate={(route) => this.handleNavigation(route)}
                    resetNavigation={() => this.handleResetNavigation()}
                    toggleNavigation={() => this.handleToggleNavigation()}
                    resetFooter={() => this.handleResetFooter()}
                    toggleFooter={() => this.handleToggleFooter()}
                />
                {activeRoute.page}
                <Footer
                    visible={footerVisible}
                />
            </React.Fragment>
        )

    }
}