import React from 'react';
import Hamburger from "../icons/Hamburger";
import Email from "../icons/Email";
import Navigation from "./Navigation";

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            emailActive:    false,
        };

        this.handleHamburger    = this.handleHamburger.bind(this);
        this.handleEmail        = this.handleEmail.bind(this);
    }

    handleHamburger() {
        const { toggleFooter, toggleNavigation } = this.props;

        this.setState({
            emailActive:    false,
        }, () => {
            toggleFooter();
            toggleNavigation();
        });
    }

    handleEmail() {
        const { resetFooter, resetNavigation } = this.props;

        resetNavigation();
        resetFooter();

        this.setState({
            emailActive:    true,
        }, () => {
            $([document.documentElement, document.body]).animate({
                scrollTop: $($('body footer')).offset().top,
                complete: () => this.setState({
                    emailActive: false,
                })
            }, {
                duration: 500,
                complete: () => this.setState({
                    emailActive: false,
                })
            });
        });
    }

    render() {
        const { navigate, activeRoute, nextRoute, navigating, navigationOpen } = this.props;
        const { emailActive } = this.state;

        return (
            <header className={"px-5 pt-5 d-flex justify-content-end align-content-center"}>
                <Navigation
                    active={navigationOpen}
                    activeRoute={activeRoute}
                    nextRoute={nextRoute}
                    navigating={navigating}
                    navigate={(route) => navigate(route)}
                />
                <Email
                    active={emailActive}
                    color={emailActive || navigationOpen ? "white" : "red-pink"}
                    onClick={() => this.handleEmail()}
                    disabled={navigating}
                    className={"mr-4"}
                />
                <Hamburger
                    active={navigationOpen}
                    color={emailActive || navigationOpen ? "white" : "red-pink"}
                    onClick={() => this.handleHamburger()}
                    disabled={navigating || emailActive}
                />
            </header>
        );
    }
}