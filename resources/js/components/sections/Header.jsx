import React from 'react';
import Hamburger from "../icons/Hamburger";
import Email from "../icons/Email";
import Navigation from "./Navigation";

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            navigationOpen: false,
            emailActive:    false,
        };

        this.handleHamburger    = this.handleHamburger.bind(this);
        this.handleEmail        = this.handleEmail.bind(this);
    }

    handleHamburger() {
        const { navigationOpen } = this.state;
        const { toggleFooter } = this.props;

        if (!navigationOpen === true) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        this.setState({
            navigationOpen: !navigationOpen,
            emailActive:    false,
        }, () => toggleFooter());
    }

    handleEmail() {
        const { resetFooter } = this.props;

        document.body.classList.remove("no-scroll");
        resetFooter();

        this.setState({
            navigationOpen: false,
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
        const { navigate } = this.props;
        const { navigationOpen, emailActive } = this.state;

        return (
            <header>
                <Navigation
                    active={navigationOpen}
                    navigate={(route) => navigate(route)}
                />
                <Email
                    active={emailActive}
                    color={emailActive || navigationOpen ? "white" : "red-pink"}
                    onClick={() => this.handleEmail()}
                    disabled={false}
                />
                <Hamburger
                    active={navigationOpen}
                    color={emailActive || navigationOpen ? "white" : "red-pink"}
                    onClick={() => this.handleHamburger()}
                    disabled={emailActive}
                />
            </header>
        );
    }
}