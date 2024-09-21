export const Login_Component = () => {
    return (
        <div className="login-page sidebar-collapse">
            <nav className="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll="500">
                <div className="container">
                    <div className="dropdown button-dropdown">
                        <a href="#pablo" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                        </a>
                    </div>
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit-pro/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
                            PORTFOLIO
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" data-nav-image="../assets/img//blurred-image-1.jpg" data-color="orange">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* // <!-- End Navbar --> */}
            <div className="page-header header-filter" filter-color="orange">
                <div className="page-header-image" style={{backgroundImage:"url(../assets/img/login.jpg)"}}></div>
                <div className="content">
                    <div className="container">
                        <div className="col-md-5 ml-auto mr-auto">
                            <div className="card card-login card-plain">
                                <form className="form" method="" action="">
                                    <div className="card-header text-center">
                                        <div className="logo-container">
                                            <img src="./assets/img/now-logo.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body" >
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                            </div>
                                            <input type="text" className="form-control " placeholder="Email" />
                                        </div>
                                        <div className="input-group no-border input-lg"> 
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons text_caps-small"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Password" />
                                        </div> 
                                    </div>
                                    <div className="card-footer text-center">
                                        <a href="#pablo" className="btn btn-primary btn-round btn-lg btn-block">Login</a>
                                    </div>
                                    <div className="pull-center mt-3">
                                        <h6>
                                            <p className="child">Don't have an account?</p><a href="#pablo" className="link footer-link">Register</a>
                                        </h6>
                                    </div>
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        
    )
}
