import React from 'react';
import PropTypes from "prop-types";

export default class Email extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
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
        const { active, color, className = "" } = this.props;

        let classes = color;
        if (active) {
            classes += " active";
        }
        if (className) {
            classes += " "+className;
        }

        return (
            <div
                id="email-icon"
                className={classes}
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
    color:      PropTypes.string.isRequired,
    onClick:    PropTypes.func.isRequired,
    active:     PropTypes.bool.isRequired,
    disabled:   PropTypes.bool,
};