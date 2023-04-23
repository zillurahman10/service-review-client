import React from 'react';
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='mx-24'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img style={{ width: '500px' }} src={banner} class="rounded-xl" alt="" />
                    <div>
                        <h1 class="text-5xl font-bold text-left">Build your website with
                            <br />
                            <span className='text-6xl text-red-500'>ZILLUR</span></h1>
                        <p class="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;