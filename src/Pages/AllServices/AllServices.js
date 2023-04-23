import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const AllServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full mx-auto'>
            {
                services.map(
                    singleService => <SingleService service={singleService}></SingleService>
                )
            }
        </div>
    );
};

export default AllServices;