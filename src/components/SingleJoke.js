import React from 'react';

const SingleJoke = ({ joke }) => {
  return(
    <section className='w-[60%] mx-auto pt-20'>
      <p className='text-lg font-bold text-center'>Here you have your joke:</p>
      <p className='pt-4 text-center text-lg'>{joke}</p>
    </section>
  )
};

export default SingleJoke;