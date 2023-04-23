import React from 'react';
import './Service.css'

const Service = ({ serviceData }) => {
    return (
        <div>
            <div class="card w-96 glass service-card">
                <div class="card-body">
                    <img className='rounded-xl w-60 mx-auto' src={serviceData?.photo} alt="" />
                    <h2 class="card-title">{serviceData?.name}</h2>
                    <p>Developer: {serviceData?.developer}</p>
                    <p>{serviceData?.description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-outline btn-primary w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;