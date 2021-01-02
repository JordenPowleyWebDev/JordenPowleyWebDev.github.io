import React from 'react';

export default class PageTitle extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <h1 className={"text-white no-select"}>
                {children}
            </h1>
        );
    }
}