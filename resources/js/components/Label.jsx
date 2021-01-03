import React from 'react';

export default class Label extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <div className={"p mb-3 mb-md-4 text-light-blue no-select"}>
                {children}
            </div>
        );
    }
}