import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Review from '../Reviews/Review';
import { ToastContainer, toast } from 'react-toastify';

const ServiceDetails = () => {
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    const [details, setDetails] = useState({})
    const [reviews, setReviews] = useState([])
    const [refetch, setRefetch] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [refetch])






    // const reviews = [
    //     {
    //         name: 'alex',
    //         email: 'al@gmail.com',
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReduxTinABlHgWBnXIWA3hw7Xqh5yYxa8LeQ&usqp=CAU',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut ratione facere atque, corrupti voluptatum quod illo itaque iusto architecto illum ad aut nam molestias asperiores modi sunt dicta fugit explicabo. Dolores cumque ullam neque at cupiditate nihil tempore odit.'
    //     },
    //     {
    //         name: 'alex',
    //         email: 'al@gmail.com',
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReduxTinABlHgWBnXIWA3hw7Xqh5yYxa8LeQ&usqp=CAU',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut ratione facere atque, corrupti voluptatum quod illo itaque iusto architecto illum ad aut nam molestias asperiores modi sunt dicta fugit explicabo. Dolores cumque ullam neque at cupiditate nihil tempore odit.'
    //     },
    //     {
    //         name: 'alex',
    //         email: 'al@gmail.com',
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReduxTinABlHgWBnXIWA3hw7Xqh5yYxa8LeQ&usqp=CAU',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut ratione facere atque, corrupti voluptatum quod illo itaque iusto architecto illum ad aut nam molestias asperiores modi sunt dicta fugit explicabo. Dolores cumque ullam neque at cupiditate nihil tempore odit.'
    //     },
    //     {
    //         name: 'alex',
    //         email: 'al@gmail.com',
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReduxTinABlHgWBnXIWA3hw7Xqh5yYxa8LeQ&usqp=CAU',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut ratione facere atque, corrupti voluptatum quod illo itaque iusto architecto illum ad aut nam molestias asperiores modi sunt dicta fugit explicabo. Dolores cumque ullam neque at cupiditate nihil tempore odit.'
    //     },
    //     {
    //         name: 'alex',
    //         email: 'al@gmail.com',
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReduxTinABlHgWBnXIWA3hw7Xqh5yYxa8LeQ&usqp=CAU',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut ratione facere atque, corrupti voluptatum quod illo itaque iusto architecto illum ad aut nam molestias asperiores modi sunt dicta fugit explicabo. Dolores cumque ullam neque at cupiditate nihil tempore odit.'
    //     },
    //     {
    //         name: 'alex',
    //         email: 'al@gmail.com',
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReduxTinABlHgWBnXIWA3hw7Xqh5yYxa8LeQ&usqp=CAU',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut ratione facere atque, corrupti voluptatum quod illo itaque iusto architecto illum ad aut nam molestias asperiores modi sunt dicta fugit explicabo. Dolores cumque ullam neque at cupiditate nihil tempore odit.'
    //     },
    //     {
    //         name: 'alex',
    //         email: 'al@gmail.com',
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReduxTinABlHgWBnXIWA3hw7Xqh5yYxa8LeQ&usqp=CAU',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut ratione facere atque, corrupti voluptatum quod illo itaque iusto architecto illum ad aut nam molestias asperiores modi sunt dicta fugit explicabo. Dolores cumque ullam neque at cupiditate nihil tempore odit.'
    //     },
    // ]

    const handleReviewPost = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const photoUrl = event.target.photoUrl.value
        const review = event.target.review.value

        const fullReview = { name, email, photoUrl, review }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fullReview)
        })
            .then(res => res.json())
            .then(data => {
                // if (data.acknowledged = true) {
                //     setReviews(fullReview)
                // }
                setRefetch(true)
                // toast.success('Your review is succesfully posted!', {
                //     position: "top-center",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                // });
            })
    }



    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={details.photo} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">{details.name}</h1>
                        <p class="py-6">Developer: <span className='font-bold'>{details.developer}</span> </p>
                        <p class="py-6">{details.description}</p>
                    </div>
                </div>
            </div>

            {/* others review */}
            <h1 className='text-center text-primary font-bold text-4xl mb-12'>Reviews on this service</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-col-1 gap-8 place-items-center'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>

            {/* review */}
            <h1 className='text-center text-primary font-bold text-4xl'>Post your own review</h1>

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
                                    <span class="label-text">Your Review</span>
                                </label>
                                <textarea className="textarea textarea-bordered" name="review" cols="35" rows="5" placeholder='Your review'></textarea>
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

export default ServiceDetails;