import React from 'react';

const SingleService = ({ service }) => {
    return (
        <div>
            <div class="card w-96 glass service-card">
                <div class="card-body">
                    <img className='rounded-xl w-60 mx-auto' src={service?.photo} alt="" />
                    <h2 class="card-title">{service?.name}</h2>
                    <p>Developer: {service?.developer}</p>
                    <p>{service?.description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-outline btn-primary w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;