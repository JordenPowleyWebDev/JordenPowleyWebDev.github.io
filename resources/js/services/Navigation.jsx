import React from 'react';
import {Routes} from "../constants/Routes";
import Index from "../pages/Index";
import About from "../pages/About";
import Work from "../pages/Work";
import Projects from "../pages/Projects";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentRoute: Routes.index.name
        };

        this.switcher = this.switcher.bind(this);
    }

    switcher() {
        const { currentRoute } = this.state;

        switch (currentRoute) {
            case Routes.about.name:
                return (
                    <About />
                );
            case Routes.projects.name:
                return (
                    <Projects />
                );
            case Routes.work.name:
                return (
                    <Work />
                );
            case Routes.index.name:
            default:
                return (
                    <Index />
                );
        }
    }

    render() {
        return this.switcher();
    }
}