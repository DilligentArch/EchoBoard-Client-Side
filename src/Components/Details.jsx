import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import AddReview from './AddReview';
import ShowReview from './ShowReview';

const Details = () => {
    const data = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const { _id } = data;
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(response => response.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div className='mt-2 mb-5'>
            <DetailsCard data={data} />

            <div className='lg:flex lg:justify-center items-center'>
            <div className='lg:mt-36'>
                <h1 className='text-2xl font-semibold text-center  mt-5 lg:mt-0 md:mb-24'>Total Reviews: {reviews.length}</h1>
            {reviews.map(review => <ShowReview key={review._id} review={review} />)}
            </div>
            <AddReview data={data} />

            </div>
        </div>
    );
};

export default Details;