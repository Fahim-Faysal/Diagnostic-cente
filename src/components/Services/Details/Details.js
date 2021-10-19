import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
      const { serviceId } = useParams()

      const value = parseInt(serviceId);
      console.log(typeof (value))
      const [serviceDetails, setServiceDetails] = useState([])

      useEffect(() => {
            fetch('/service.json')
                  .then(res => res.json())
                  .then(data => setServiceDetails(data))
      }, [])

      const result = serviceDetails.find(service => service.id === value);


      return (
            <div>
                  <h2>Service Code is : {serviceId}</h2>
                  <br />
                  <img className='img-fluid' style={{ width: '50rem', height: '40rem' }} src={result?.img} alt="" />
                  <h3> {result?.name}</h3>
                  <p>{result?.description}</p>
                  <h3 className='text-danger'>Cost:$ {result?.price}</h3>
            </div >
      );
};

export default Details;