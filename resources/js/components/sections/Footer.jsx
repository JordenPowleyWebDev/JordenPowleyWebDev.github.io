import React from 'react';
import ReactGA from "react-ga";

export default class Footer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleScrollTop    = this.handleScrollTop.bind(this);
        this.handleClick        = this.handleClick.bind(this);
    }

    handleScrollTop(event) {
        event.stopPropagation();

        $([document.documentElement, document.body]).animate({
            scrollTop: $($('body')).offset().top,
        }, {
            duration: 500,
        });
    }

    handleClick(event, tracking) {
        ReactGA.pageview(tracking, null, tracking);
    }

    render() {
        const { visible } = this.props;

        let classes = "w-100 d-block position-relative py-5 px-3 px-md-5 bg-red-pink";
        if (visible === false) {
            classes = "w-100 d-block position-relative py-5 px-3 px-md-5 bg-red-pink transparent";
        }

        return (
            <footer className={classes}>
                <div className="row m-0 p-0">
                    <div className="col m-0 p-0 p-md-4 pt-0">
                        <h4 className="h5 mb-4 mb-md-5 text-white no-select">Get In Touch</h4>
                        <div className={"mb-3"}>
                            <a className="text-white cursor-pointer"
                               href={"mailto:jorden.powley.webdev@gmail.com"}
                               onClick={(event) => this.handleClick(event, "/contact/email")}
                            >
                                <i className="far fa-envelope fa-fw mr-2 mr-md-3"></i>
                                <span>jorden.powley.webdev@gmail.com</span>
                            </a>
                        </div>
                        <div className={"mb-3"}>
                            <a className="text-white cursor-pointer"
                               href={"tel:+447446899186"}
                               onClick={(event) => this.handleClick(event, "/contact/mobile")}
                            >
                                <i className="fas fa-mobile-alt fa-fw mr-2 mr-md-3"></i>
                                <span>07446 899186</span>
                            </a>
                        </div>
                        <div className={"mb-4 mb-md-5"}>
                            <a className="text-white cursor-pointer"
                               href={"https://github.com/JordenPowleyWebDev"}
                               target="_blank"
                               onClick={(event) => this.handleClick(event, "/contact/github")}
                            >
                                <i className="fab fa-github fa-fw mr-2 mr-md-3"></i>
                                <span>JordenPowleyWebDev</span>
                            </a>
                        </div>
                        <div className={"w-100 border-bottom border-white"}></div>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col m-0 p-0 p-md-4 pt-4 pb-0">
                        <div className="row m-0 p-0">
                            <div className="col-12 col-md-6 m-0 mb-4 mb-md-0 p-0">
                                <div className="text-white no-select">&copy; Jorden Powley - {new Date().getFullYear()}</div>
                            </div>
                            <div className="col-12 col-md-6 m-0 p-0 d-flex align-content-center align-items-center justify-content-start justify-content-md-end">
                                <div
                                    className={"text-white h5 m-0 cursor-pointer no-select"}
                                    style={{fontSize: "0.8rem"}}
                                    onClick={(event) => this.handleScrollTop(event)}>
                                    Back To Top
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}