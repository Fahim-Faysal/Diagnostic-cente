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
                  <h1>Detalis comming soon : {serviceId}</h1>
                  <h3>Name is : {result?.name}</h3>
                  <p>Description : {result?.description}</p>
            </div>
      );
};

export default Details;