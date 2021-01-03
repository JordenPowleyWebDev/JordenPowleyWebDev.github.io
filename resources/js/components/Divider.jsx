import React from 'react';

export default class Divider extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {className = "border-red-pink" } = this.props;

        return (
            <div className={"m-0 my-4 my-md-5 border-bottom "+className} />
        );
    }
}