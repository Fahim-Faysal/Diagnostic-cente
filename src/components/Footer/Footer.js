import React from 'react';

const Footer = () => {
      return (
            <div className='bg-info p-4 mt-5 '>
                  <div className='d-flex mx-5 justify-content-between'>
                        <div>
                              <h3>Faysal Diagostic Center</h3>
                              <p>Mobile : <small>01785448325</small></p>
                        </div>
                        <div>
                              <h2>Head Office</h2>
                              <p> Green Road, Dhanmondi, Dhaka, Bangladesh</p>
                              <h5>Phone : 02-222246338, 02-222246339, 02-222246340</h5>
                              <p>fayslasiyam@gmail.com</p>
                        </div>
                        <div>
                              <h5>Enter Your Email</h5>
                              <input type="text" placeholder='Enter your Email' />
                        </div>

                  </div>
                  <p className='text-success'>Copyright@ Fahim Faysal Siyam</p>
            </div>
      );
};

export default Footer;