import React from 'react';
import {Routes} from "../../constants/Routes";

export default class Navigation extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick    = this.handleClick.bind(this);
        this.renderNavItem  = this.renderNavItem.bind(this);
    }

    handleClick(event, route) {
        const { navigate, navigating } = this.props;

        event.preventDefault();
        event.stopPropagation();

        if (navigating === false) {
            navigate(route);
        }
    }

    renderNavItem(route) {
        const { nextRoute, navigating } = this.props;

        let classes = "";
        if (nextRoute && navigating === true) {
            if (route.name === nextRoute.name) {
                classes = "main";
            } else {
                classes = "fade";
            }
        }

        return (
            <a href={route.path} className={classes} onClick={(event) => this.handleClick(event, route)}>{route.label}</a>
        );
    }

    render() {
        const { active, navigating } = this.props;

        let classes = "";
        if (active === true) {
            classes += " active";
        }

        if (navigating === true) {
            classes += " transition";
        }

        return (
            <div id="main-navigation" className={classes}>
                <nav>
                    {this.renderNavItem(Routes.index)}
                    {this.renderNavItem(Routes.about)}
                    {this.renderNavItem(Routes.projects)}
                    {this.renderNavItem(Routes.work)}
                </nav>
            </div>
        );
    }
}