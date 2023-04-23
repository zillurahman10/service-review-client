import React, { useEffect, useState } from 'react';
import Service from './Service';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-3xl text-primary font-bold mb-12 text-center'>My services</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 mx-12'>
                    {
                        services.slice(0, 3).map(service => <Service key={service._id} serviceData={service}></Service>)
                    }
                </div>
                <Link to="/allservices" className='btn btn-outline btn-success'>See all</Link>
            </div>
        </div>
    );
};

export default Services;