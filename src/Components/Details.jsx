import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <DetailsCard data={data} />
        </div>
    );
};

export default Details;