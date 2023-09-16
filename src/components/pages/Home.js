import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from '../inc/Vmc';
import Service1 from '../images/Art & Craft Room.jpg';
import Service2 from '../images/Music Room.jpg';
import Service3 from '../images/Play Area.jpg';

function Home() {
    return (

    <div>
        <Slider />
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading"> Our School</h3>
                        <div className="underline mx-auto"></div>
                            <p className="container" id="text-responsive"><strong>

                                "Welcome to [Cherry Blossom Kinder Garten], where childhood dreams take flight! 
                                Our play school is a nurturing and vibrant environment designed to inspire curiosity,
                                creativity, and a love for learning in young children. We believe that every child is unique,
                                and we provide a safe and supportive space for them to explore, play, and grow.

                                At [Cherry Blossom Kinder Garten], we focus on holistic development, encompassing social,
                                emotional, cognitive, and physical aspects of a child's growth. Our experienced and caring 
                                educators create engaging activities that foster imagination, critical thinking, and 
                                problem-solving skills. We understand the importance of a child's early years in shaping their 
                                future, and we are committed to providing a foundation for lifelong learning.

                                Our play school features age-appropriate facilities, stimulating play areas, and a curriculum 
                                that promotes hands-on exploration and fun. We prioritize safety, hygiene, and a warm, 
                                welcoming atmosphere to ensure both children and parents feel at ease.

                                Join us at [Cherry Blossom Kinder Garten] and embark on an exciting journey of discovery, 
                                friendship, and joy. Together, we'll nurture young minds and prepare them for a bright future 
                                filled with endless possibilities."
                                </strong>
                            </p>
                        <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        

                    </div>

                </div>

            </div>

        </section>
        {/* Our Vision,mission and values */}
        <VMC />
        {/* Our Services */}
        <section className="VMC">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-5 text-center">
                    <h3 className="main-heading">Our Services</h3>
                    <div className="underline mx-auto"></div>
                     <div className="col-md-3" id="inner-card">
                        <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom " alt="Services"/>
                            <div className="card-body">
                                <h6>Art & Craft Room</h6>
                                <div className="underline mx-auto"></div>
                                <p>
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                        graphic or web designs. The passage is attributed to an unknown typesetter 
                        
                                </p>
                                <Link to="/about" className="btn btn-primary">Read More</Link>
                        </div>
                        </div>
                           
                           
                           
                           
                     </div>
                     <div className="col-md-3" id="inner-card">
                        <div className="card shadow">
                                <img src={Service2} className="w-100 border-bottom " alt="Services"/>
                            <div className="card-body">
                                <h6>Music Room</h6>
                                <div className="underline mx-auto"></div>
                                <p>
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                        graphic or web designs. The passage is attributed to an unknown typesetter 
                        
                                </p>
                                <Link to="/about" className="btn btn-primary">Read More</Link>
                        </div>
                        </div>
                           
                           
                           
                           
                     </div>
                     <div className="col-md-3" id="inner-card">
                        <div className="card shadow">
                                <img src={Service3} className="w-100 border-bottom " alt="Services"/>
                            <div className="card-body">
                                <h6>Play Area</h6>
                                <div className="underline mx-auto"></div>
                                <p>
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                        graphic or web designs. The passage is attributed to an unknown typesetter 
                        
                                </p>
                                <Link to="/about" className="btn btn-primary">Read More</Link>
                        </div>
                        </div>
                           
                           
                           
                           
                     </div>

                    

                </div>

            </div>

        </div>

    </section>

    </div>
    );
   
}

export default Home;