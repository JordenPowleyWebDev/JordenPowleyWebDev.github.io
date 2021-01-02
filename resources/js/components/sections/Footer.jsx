import React from 'react';

export default class Footer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleScrollTop = this.handleScrollTop.bind(this);
    }

    handleScrollTop(event) {
        event.stopPropagation();

        $([document.documentElement, document.body]).animate({
            scrollTop: $($('body')).offset().top,
        }, {
            duration: 500,
        });
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
                        <a className="d-block position-relative mb-3 text-white"
                           href="mailto:jorden.powley.webdev@gmail.com"
                        >
                            <i className="far fa-envelope fa-fw mr-2 mr-md-3"></i>
                            <span>jorden.powley.webdev@gmail.com</span>
                        </a>
                        <a className="d-block position-relative mb-4 mb-md-5 text-white"
                           href="tel:+447446899186"
                        >
                            <i className="fas fa-mobile-alt fa-fw mr-2 mr-md-3"></i>
                            <span>07446 899186</span>
                        </a>
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