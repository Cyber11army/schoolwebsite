import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <br/>
                        <h5>Our School Information</h5>
                        <hr/>
                        <div ><p className="text-white ">Principal : Mrs Komal Sharma</p>
                        <p className="text-white ">Manager  : Mr Naresh Sharma</p>
                        <p className="text-white ">Director : Mr Nitin Jain</p></div>

                    </div>
                    <div className="col-md-4 text-center">
                        <br/>
                        <h5>Quick Link</h5>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>

                    </div>
                    <div className="col-md-4 text-center">
                        <br/>
                        <h5>Contact information</h5>
                        <hr/>
                        <div><p className="text-white mb-1">Khekra ,Baghpat,Up -250101</p></div>
                        <div><p className="text-white mb-1">Call Us On:</p></div>
                        <div><a className="text-white mb-1" href="tel:+917409488021"> +91 7409488021</a></div>
                        <div><a className="text-white mb-1" href="tel:+917838552727">+91 7838552727</a></div>
                        <div><p className="text-white mb-1">cherryblossomkindergarten@gmail.com</p></div>
           
                    </div>
                </div>

            </div>
        </section>
    );
  

}
export default Footer;