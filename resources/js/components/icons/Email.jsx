import React from 'react';
import PropTypes from "prop-types";

export default class Email extends React.PureComponent {
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
                id="email-icon"
                className={this.iconColor()}
                onClick={(event) => this.handleClick(event)}
            >
                <span className="top-line"></span>
                <span className="bottom-line"></span>
                <span className="left-line"></span>
                <span className="right-line"></span>
                <span className="left-env-line"></span>
                <span className="right-env-line"></span>
            </div>
        );
    }
}

Email.propTypes = {
    onClick:    PropTypes.func.isRequired,
    active:     PropTypes.bool.isRequired,
    disabled:   PropTypes.bool,
};