import React from 'react';
import Hamburger from "../icons/Hamburger";
import Email from "../icons/Email";

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

        this.setState({
            navigationOpen: !navigationOpen,
            emailActive:    false,
        });
    }

    handleEmail() {
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
        const { navigationOpen, emailActive } = this.state;

        return (
            <header>
                <Email
                    active={emailActive}
                    onClick={() => this.handleEmail()}
                    disabled={false}
                />
                <Hamburger
                    active={navigationOpen}
                    onClick={() => this.handleHamburger()}
                    disabled={emailActive}
                />
            </header>
        );
    }
}