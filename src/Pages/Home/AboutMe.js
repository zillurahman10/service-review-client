import React from 'react';

const AboutMe = () => {
    return (
        <div className='mx-12'>
            <h1 className='text-3xl text-left text-primary text-center mt-12'>About the developer</h1>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-11/12'>
                        <h1 class="text-5xl font-bold">Md. Zillur Rahman</h1>
                        <p class="py-6">I'm a professional full-stack web developer who is seeking to gain new skills all around the day. My core skills based on ReactJS. I'm also a video editor.</p>
                        <button class="btn btn-outline btn-primary">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;