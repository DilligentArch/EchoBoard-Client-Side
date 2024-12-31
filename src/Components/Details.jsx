import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import AddReview from './AddReview';

const Details = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <DetailsCard data={data} />
            <AddReview />
        </div>
    );
};

export default Details;