import React from 'react';
import {Routes} from "../../constants/Routes";

export default class Navigation extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick    = this.handleClick.bind(this);
        this.renderNavItem  = this.renderNavItem.bind(this);
    }

    handleClick(event, route) {
        const { navigate } = this.props;

        event.preventDefault();
        event.stopPropagation();

        navigate(route);
    }

    renderNavItem(route, active) {
        return (
            <a href={route.path} className="nav-item" onClick={(event) => this.handleClick(event, route)}>{route.label}</a>
        );
    }

    render() {
        const { active } = this.props;

        let classes = "";
        if (active === true) {
            classes = "active";
        }

        return (
            <div id="main-navigation" className={classes}>
                <nav>
                    {this.renderNavItem(Routes.index, false)}
                    {this.renderNavItem(Routes.about, false)}
                    {this.renderNavItem(Routes.projects, false)}
                    {this.renderNavItem(Routes.work, false)}
                </nav>
            </div>
        );
    }
}