import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div class="card w-96 glass service-card">
                <div class="card-body flex">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='rounded-xl w-60 mx-auto flex justify-center' src={review?.photoUrl} alt="" />
                        </div>
                        <h2 class="card-title ml-5">Name: {review?.name}</h2>
                    </div>

                    <div>
                        <p>{review?.review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;