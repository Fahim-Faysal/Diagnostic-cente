import React from 'react';
import notFound from '../../Images/notFound.jpg'

const NotFound = () => {
      return (
            <div>
                  <h1>Sorry Page Not Found</h1>

                  <img className='img-fluid' src={notFound} alt="" />
            </div>
      );
};

export default NotFound;