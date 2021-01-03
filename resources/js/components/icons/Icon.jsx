import React from 'react';

export default class Icon extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { className } = this.props;

        return (
            <i className={"text-white "+className}></i>
        );
    }
}