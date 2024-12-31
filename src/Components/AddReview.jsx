import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '@smastrom/react-rating/style.css'; // Import the Rating component's styles
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddReview = () => {
  const { user } = useContext(AuthContext); // Access user info from AuthContext
  const currentDate = new Date().toLocaleDateString();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      review: '',
      rating: 0,
    },
  });

  function onSubmit(data) {
    const enrichedData = {
      ...data,
      userImage: user?.photoURL || 'https://via.placeholder.com/50',
      userName: user?.displayName || 'Anonymous',
      addedDate: currentDate,
    };
    alert(JSON.stringify(enrichedData, undefined, 2));
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4 bg-white shadow-lg rounded-md"
    >
      {/* User info and profile image */}
      <div className="flex items-start space-x-4">
        <img
          src={user?.photoURL || 'https://via.placeholder.com/50'}
          alt="User Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">{user?.displayName || 'Anonymous'}</p>
          <p className="text-xs text-gray-500">Added on: {currentDate}</p>
        </div>
      </div>

      {/* Review Text Area */}
      <div>
        <label htmlFor="review" className="block text-gray-700 font-medium mb-1">
          Your Review
        </label>
        <textarea
          id="review"
          {...register('review', { required: true, minLength: 10 })}
          placeholder="Write your review here..."
          rows="4"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.review && (
          <div className="text-red-600 text-sm mt-1">
            {errors.review.type === 'required' && 'Review is required.'}
            {errors.review.type === 'minLength' && 'Review must be at least 10 characters long.'}
          </div>
        )}
      </div>

      {/* Rating Component */}
      <div>
        <div id="rating_label" className="block text-gray-700 font-medium mb-1">
          Rating
        </div>
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
                style={{ display: 'inline-flex' }}
              />
              <span className="text-sm text-gray-500">{value} / 5</span>
            </div>
          )}
        />
        {errors.rating && <div className="text-red-600 text-sm mt-1">Rating is required.</div>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Submit Review
      </button>
    </form>
  );
};

export default AddReview;
