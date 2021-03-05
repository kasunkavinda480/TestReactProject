import React, { Component } from 'react';

class Navigation extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                    <div className="container"><a className="navbar-brand" href="#">Company Name</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="/index">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/product">{this.props.Pname}</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">News</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Contact US</a></li>
                                <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">About Us</a>
                                <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navigation;
