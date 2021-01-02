import React from "react";
import Index from "../pages";
import Projects from "../pages/Projects";
import About from "../pages/About";

export const Routes = {
    index:  {
        path: "/",
        name: "index",
        label: "Home",
        page: <Index />
    },
    about:  {
        path: "/about",
        name: "about",
        label: "About",
        page: <About />
    },
    projects:  {
        path: "/projects",
        name: "projects",
        label: "Projects",
        page: <Projects />
    },
}