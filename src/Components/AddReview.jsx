import { Rating } from '@smastrom/react-rating';
import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import ShowReview from './ShowReview';

const AddReview = ({ data }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString();
  const { _id, title } = data;
  const [reviews, setReviews] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      review: '',
      rating: 0,
    },
  });

  // Fetch existing reviews
  useEffect(() => {
    fetch(`https://echoboard-server-side.vercel.app/reviews/${_id}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [_id]);

  // Handle form submission
  function onSubmit(data) {
    if (!user) {
      toast.error('You must be logged in to submit a review.');
      navigate('/auth/login');
      return;
    }

    const enrichedData = {
      ...data,
      userImage: user.photoURL || 'https://via.placeholder.com/50',
      userName: user.displayName || 'Anonymous',
      addedDate: currentDate,
      id: _id,
      userEmail: user.email,
      service: title,
    };

    axios
      .post('https://echoboard-server-side.vercel.app/reviews', enrichedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.insertedId) {
          toast.success('Review posted successfully!');
          setReviews((prevReviews) => [
            ...prevReviews,
            { ...enrichedData, _id: data.insertedId },
          ]);
          reset();
        } else {
          toast.error('Failed to post review. Please try again.');
        }
      })
      .catch(() => {
        toast.error('Failed to post review.');
      });
  }

  return (
    <div className="mt-6 space-y-6 w-full max-w-screen-2xl mx-auto p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-xl rounded-md ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-lg mx-auto p-6"
      >
        {/* User info and profile image */}
        <div className="flex items-center space-x-4">
          <img
            src={user?.photoURL || 'https://via.placeholder.com/50'}
            alt="User Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <p className="text-lg font-semibold text-blue-800">
              {user?.displayName || 'Anonymous'}
            </p>
            <p className="text-sm text-gray-600">Added on: {currentDate}</p>
          </div>
        </div>

        {/* Rating Component */}
        <div>
          <label htmlFor="rating" className="block text-blue-800 font-medium mb-2">
            Overall Rating
          </label>
          <Controller
            control={control}
            name="rating"
            rules={{
              validate: (rating) => rating > 0,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <div className="flex items-center space-x-2">
                <Rating
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  style={{ display: 'inline-flex', maxWidth: 150 }}
                />
                <span className="text-sm text-gray-600">{value} / 5</span>
              </div>
            )}
          />
          {errors.rating && (
            <div className="text-red-500 text-sm mt-1">Rating is required.</div>
          )}
        </div>

        {/* Review Text Area */}
        <div>
          <label htmlFor="review" className="block text-blue-800 font-medium mb-2">
            Your Review
          </label>
          <textarea
            id="review"
            {...register('review', { required: true, minLength: 10 })}
            placeholder="Describe your experience with this service..."
            rows="6"
            className="w-full border border-blue-300 rounded-md p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
          />
          {errors.review && (
            <div className="text-red-500 text-sm mt-1">
              {errors.review.type === 'required' && 'Feedback is required.'}
              {errors.review.type === 'minLength' &&
                'Feedback must be at least 10 characters long.'}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="mx-auto bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <h1 className="text-2xl font-semibold text-center">
          Total Reviews: {reviews.length}
        </h1>
        {reviews.map((review) => (
          <ShowReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AddReview;
