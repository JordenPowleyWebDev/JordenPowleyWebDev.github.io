import React from 'react';
import Hamburger from "../icons/Hamburger";
import Email from "../icons/Email";

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            navigationOpen: false
        };

        this.handleHamburger    = this.handleHamburger.bind(this);
        this.handleEmail        = this.handleEmail.bind(this);
    }

    handleHamburger() {
        const { navigationOpen } = this.state;

        this.setState({
            navigationOpen: !navigationOpen
        });
    }

    handleEmail() {
        console.log("TODO - Handle Email Icon Click");
    }

    render() {
        const { navigationOpen } = this.state;

        return (
            <header>
                <Email
                    /* TODO - Include Active Scrolling To Footer */
                    active={false}
                    onClick={() => this.handleEmail()}
                    /* TODO - Include Correct Disabled Status */
                    disabled={false}
                />
                <Hamburger
                    active={navigationOpen}
                    onClick={() => this.handleHamburger()}
                    /* TODO - Include Correct Disabled Status */
                    disabled={false}
                />
            </header>
        );
    }
}