import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import AddReview from './AddReview';

const Details = () => {
    const data = useLoaderData();
    
    return (
        <div className='mt-2'>
            <DetailsCard data={data} />
            <AddReview data={data} />
        </div>
    );
};

export default Details;