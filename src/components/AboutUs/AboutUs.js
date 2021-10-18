import React from 'react';
import about from '../../Images/about.jpg'
const AboutUs = () => {
      return (
            <div>

                  <div class="container">
                        <div class="row row-col-6">
                              <div class="col">
                                    <p>
                                          Our Mission is to provide excellent health care services to all of our clients with dedication to meet their expectation.

                                          After inauguration in the year 1993 COMFORT started to take a lead in providing advanced health care services. The professional standard and the expertise on health care facilities are the pillars of success of Comfort. It is noticeable that a gap exists between patient expectations and provided health care services in Bangladesh. As a result, a remarkable number of people go abroad to avail quality medical services.
                                    </p>
                              </div>
                              <div class="col">
                                    <img className='img-fluid' src={about} alt="" />
                              </div>

                        </div>
                  </div>


            </div >
      );
};

export default AboutUs;