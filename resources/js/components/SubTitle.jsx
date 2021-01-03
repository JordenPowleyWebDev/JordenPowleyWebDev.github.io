import React from 'react';

export default class SubTitle extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <h3 className={"h4 mb-3 mb-md-4 text-white no-select"}>
                {children}
            </h3>
        );
    }
}