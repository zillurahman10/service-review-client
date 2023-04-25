import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyReviews = () => {
    const [user, loading, error] = useAuthState(auth);
    const [reviews, setReviews] = useState([])

    const url = `http://localhost:5000/reviews?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [url])

    return (
        <div>
            {
                reviews.map(review => <>
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
                </>)
            }
        </div>
    );
};

export default MyReviews;