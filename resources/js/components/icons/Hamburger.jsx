import React from 'react';
import PropTypes from "prop-types";

export default class Hamburger extends React.PureComponent {
    constructor(props) {
        super(props);

        this.iconColor      = this.iconColor.bind(this);
        this.handleClick    = this.handleClick.bind(this);
    }

    iconColor() {
        const { active } = this.props;

        if (active === true) {
            return "active white";
        }

        return "red-pink";
    }

    handleClick(event) {
        const { onClick, disabled } = this.props;

        event.preventDefault();
        event.stopPropagation();

        if (!disabled) {
            onClick();
        }
    }

    render() {
        return (
            <div
                id="hamburger-icon"
                className={this.iconColor()}
                onClick={(event) => this.handleClick(event)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

Hamburger.propTypes = {
    onClick:    PropTypes.func.isRequired,
    active:     PropTypes.bool.isRequired,
    disabled:   PropTypes.bool,
};