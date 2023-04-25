import React, { useState } from 'react';

const AddService = () => {
    const [reviews, setReviews] = useState([])
    const [refetch, setRefetch] = useState(false)

    const modal = <>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </div>
        </div>
    </>

    const handleReviewPost = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const photoUrl = event.target.photoUrl.value
        const description = event.target.description.value

        const service = { name, email, photoUrl, description }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                setRefetch(true)
            })
    }
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleReviewPost} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" class="input input-bordered" name='email' />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Give your photo URL here" class="input input-bordered" name='photoUrl' />
                            </div>
                            <div className='form-contrl'>
                                <label class="label">
                                    <span class="label-text">Service description</span>
                                </label>
                                <textarea className="textarea textarea-bordered" name="description" cols="35" rows="5" placeholder='Service description'></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <input type='submit' value='Post' class="btn btn-outline btn-primary"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;