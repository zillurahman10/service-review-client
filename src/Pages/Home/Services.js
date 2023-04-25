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
        <>
            <div className='flex justify-center'>
                <div>
                    <h1 className='text-3xl text-primary font-bold mb-12 text-center'>My services</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 mx-12'>
                        {
                            services.slice(0, 3).map(service => <Service key={service._id} serviceData={service}></Service>)
                        }
                    </div>

                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Link to="/allservices" className='btn btn-outline btn-success w-52'>See all</Link>
            </div>
        </>
    );
};

export default Services;