import React from 'react';
import PropTypes from 'prop-types';

export default class Page extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, className, children } = this.props;

        return (
            <div className={"wrapper"}>
                <div id={id} className={"container-fluid p-4 p-md-5 page "+className}>
                    {children}
                </div>
            </div>
        );
    }
}

Page.defaultProps = {
    className: "",
};

Page.propTypes = {
    id:         PropTypes.string.isRequired,
    className:  PropTypes.string,
};