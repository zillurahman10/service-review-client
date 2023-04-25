import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({ serviceData }) => {
    const navigate = useNavigate()
    const details = () => {
        navigate(`/servicedetails/${serviceData._id}`)
    }
    return (
        <div>
            <div class="card w-96 glass service-card">
                <div class="card-body">
                    <img className='rounded-xl w-60 mx-auto' src={serviceData?.photo} alt="" />
                    <h2 class="card-title">{serviceData?.name}</h2>
                    <p>Developer: {serviceData?.developer}</p>
                    <p>{serviceData?.description}</p>
                    <div class="card-actions ">
                        <button onClick={() => details()} class="btn btn-outline btn-primary w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;