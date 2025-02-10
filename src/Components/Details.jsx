import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import AddReview from './AddReview';
import ShowReview from './ShowReview';

const Details = () => {
    const data = useLoaderData();
   
    const { _id } = data;
   

    return (
        <div className='mt-2 mb-5 max-w-screen-2xl mx-auto'>
            <DetailsCard data={data} />
            <AddReview data={data} />

           
        
            

            
        </div>
    );
};

export default Details;