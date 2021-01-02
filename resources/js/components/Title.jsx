import React from 'react';

export default class Title extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <h2 className={"h3 mb-3 mb-md-4 text-white no-select"}>
                {children}
            </h2>
        );
    }
}