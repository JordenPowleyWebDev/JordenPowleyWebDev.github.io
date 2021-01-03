import React from 'react';

export default class Title extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, noMargin = false } = this.props;

        let classes = "h3 text-white no-select";
        if (noMargin === false) {
            classes += " mb-3 mb-md-4"
        } else {
            classes += " m-0"
        }

        return (
            <h2 className={classes}>
                {children}
            </h2>
        );
    }
}