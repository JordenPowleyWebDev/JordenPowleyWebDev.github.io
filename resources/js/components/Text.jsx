import React from 'react';

export default class Text extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, className = "" } = this.props;

        return (
            <p className={"text-white no-select "+className}>
                {children}
            </p>
        );
    }
}