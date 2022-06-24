import React from 'react';

const Newsletter = () => {
    return (
      <div className="py-20 bg-orange-300">
        <div className="flex flex-col items-center ">
          <h2 className="text-2xl font-bold mb-5">
            Join our newsletter and get 20% off
          </h2>
          <p className="mb-5">
            Join us and notified by exciting offer and deal which you wouldn't
            want to miss
          </p>
          <form className='relative w-2/4'>
            <input
              placeholder="Enter Email"
              className="w-full border-2 border-solid border-slate-900 py-2.5"
            />
            <button className='absolute btn btn-primary rounded-none right-0 bottom-0 py-4'>Submit</button>
          </form>
        </div>
      </div>
    );
};

export default Newsletter;