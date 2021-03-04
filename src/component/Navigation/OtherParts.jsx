import React, { Component } from 'react'

class OtherParts extends Component {
    render() {
        return (
            <div>
                <section id="carousel">
                    <div className="carousel slide" data-ride="carousel" id="carousel-1">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <div className="jumbotron pulse animated hero-nature carousel-hero">
                                    <h1 className="hero-title">Hero Nature</h1>
                                    <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                                    <p><a className="btn btn-primary hero-button plat" role="button" href="#">Learn more</a></p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="jumbotron pulse animated hero-photography carousel-hero">
                                    <h1 className="hero-title">Hero Photography</h1>
                                    <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                                    <p><a className="btn btn-primary hero-button plat" role="button" href="#">Learn more</a></p>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <div className="jumbotron pulse animated hero-technology carousel-hero">
                                    <h1 className="hero-title">Hero Technology</h1>
                                    <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                                    <p><a className="btn btn-primary hero-button plat" role="button" href="#">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><i className="fa fa-chevron-left" /><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><i className="fa fa-chevron-right" /><span className="sr-only">Next</span></a></div>
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-1" data-slide-to={0} />
                            <li data-target="#carousel-1" data-slide-to={1} />
                            <li data-target="#carousel-1" data-slide-to={2} className="active" />
                        </ol>
                    </div>
                </section>
                <div className="article-list">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Latest Articles</h2>
                            <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                        </div>
                        <div className="row articles">
                            <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src="assets/img/desk.jpg" /></a>
                                <h3 className="name">Article Title</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a className="action" href="#"><i className="fa fa-arrow-circle-right" /></a></div>
                            <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src="assets/img/building.jpg" /></a>
                                <h3 className="name">Article Title</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a className="action" href="#"><i className="fa fa-arrow-circle-right" /></a></div>
                            <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src="assets/img/loft.jpg" /></a>
                                <h3 className="name">Article Title</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a className="action" href="#"><i className="fa fa-arrow-circle-right" /></a></div>
                        </div>
                    </div>
                </div>
                <div className="features-clean">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Features</h2>
                            <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                        </div>
                        <div className="row features">
                            <div className="col-sm-6 col-lg-4 item"><i className="fa fa-map-marker icon" />
                                <h3 className="name">Works everywhere</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 item"><i className="fa fa-clock-o icon" />
                                <h3 className="name">Always available</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 item"><i className="fa fa-list-alt icon" />
                                <h3 className="name">Customizable</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 item"><i className="fa fa-leaf icon" />
                                <h3 className="name">Organic</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 item"><i className="fa fa-plane icon" />
                                <h3 className="name">Fast</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 item"><i className="fa fa-phone icon" />
                                <h3 className="name">Mobile-first</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-horizontal">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Projects </h2>
                            <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                        </div>
                        <div className="row projects">
                            <div className="col-sm-6 item">
                                <div className="row">
                                    <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/desk.jpg" /></a></div>
                                    <div className="col">
                                        <h3 className="name">Project Name</h3>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 item">
                                <div className="row">
                                    <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/building.jpg" /></a></div>
                                    <div className="col">
                                        <h3 className="name">Project Name</h3>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 item">
                                <div className="row">
                                    <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/loft.jpg" /></a></div>
                                    <div className="col">
                                        <h3 className="name">Project Name</h3>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 item">
                                <div className="row">
                                    <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/minibus.jpeg" /></a></div>
                                    <div className="col">
                                        <h3 className="name">Project Name</h3>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-clean">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Team </h2>
                            <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                        </div>
                        <div className="row people">
                            <div className="col-md-6 col-lg-4 item"><img className="rounded-circle" src="assets/img/1.jpg" />
                                <h3 className="name">Ben Johnson</h3>
                                <p className="title">Musician</p>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                                <div className="social"><a href="#"><i className="fa fa-facebook-official" /></a><a href="#"><i className="fa fa-twitter" /></a><a href="#"><i className="fa fa-instagram" /></a></div>
                            </div>
                            <div className="col-md-6 col-lg-4 item"><img className="rounded-circle" src="assets/img/2.jpg" />
                                <h3 className="name">Emily Clark</h3>
                                <p className="title">Artist</p>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                                <div className="social"><a href="#"><i className="fa fa-facebook-official" /></a><a href="#"><i className="fa fa-twitter" /></a><a href="#"><i className="fa fa-instagram" /></a></div>
                            </div>
                            <div className="col-md-6 col-lg-4 item"><img className="rounded-circle" src="assets/img/3.jpg" />
                                <h3 className="name">Carl Kent</h3>
                                <p className="title">Stylist</p>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                                <div className="social"><a href="#"><i className="fa fa-facebook-official" /></a><a href="#"><i className="fa fa-twitter" /></a><a href="#"><i className="fa fa-instagram" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 footer-navigation">
                            <h3><a href="#">Company<span>logo </span></a></h3>
                            <p className="links"><a href="#">Home</a><strong> · </strong><a href="#">Blog</a><strong> · </strong><a href="#">Pricing</a><strong> · </strong><a href="#">About</a><strong> · </strong><a href="#">Faq</a><strong> · </strong><a href="#">Contact</a></p>
                            <p className="company-name">Company Name © 2015 </p>
                        </div>
                        <div className="col-sm-6 col-md-4 footer-contacts">
                            <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
                                <p><span className="new-line-span">21 Revolution Street</span> Paris, France</p>
                            </div>
                            <div><i className="fa fa-phone footer-contacts-icon" />
                                <p className="footer-center-info email text-left"> +1 555 123456</p>
                            </div>
                            <div><i className="fa fa-envelope footer-contacts-icon" />
                                <p> <a href="#" target="_blank">support@company.com</a></p>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="col-md-4 footer-about">
                            <h4>About the company</h4>
                            <p> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. </p>
                            <div className="social-links social-icons"><a href="#"><i className="fa fa-facebook" /></a><a href="#"><i className="fa fa-twitter" /></a><a href="#"><i className="fa fa-linkedin" /></a><a href="#"><i className="fa fa-github" /></a></div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}
export default OtherParts;