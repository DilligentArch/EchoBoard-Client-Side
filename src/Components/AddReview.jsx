import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '@smastrom/react-rating/style.css'; // Import the Rating component's styles
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddReview = ({data}) => {
  const { user } = useContext(AuthContext); // Access user info from AuthContext
  const currentDate = new Date().toLocaleDateString();
  const {_id}=data;

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

  function onSubmit(data) {
    const enrichedData = {
      ...data,
      userImage: user?.photoURL || 'https://via.placeholder.com/50',
      userName: user?.displayName || 'Anonymous',
      addedDate: currentDate,
      id:_id,
    };
    alert(JSON.stringify(enrichedData, undefined, 2));
    reset();
  }

  return (
    <div className='mt-6'>
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
        Share Your Experience
      </h1>
      <p className="text-center text-gray-600 mb-6">
        We value your feedback! Please provide a detailed review of the service and rate your experience.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-xl rounded-md"
      >
        {/* User info and profile image */}
        <div className="flex items-center space-x-4">
          <img
            src={user?.photoURL || 'https://via.placeholder.com/50'}
            alt="User Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <p className="text-lg font-semibold text-blue-800">{user?.displayName || 'Anonymous'}</p>
            <p className="text-sm text-gray-600">Added on: {currentDate}</p>
          </div>
        </div>

        {/* Review Text Area */}
        <div>
          <label htmlFor="review" className="block text-blue-800 font-medium mb-1">
            Your Review
          </label>
          <textarea
            id="review"
            {...register('review', { required: true, minLength: 10 })}
            placeholder="Describe your experience with this service..."
            rows="4"
            className="w-full border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          {errors.review && (
            <div className="text-red-500 text-sm mt-1">
              {errors.review.type === 'required' && 'Feedback is required.'}
              {errors.review.type === 'minLength' && 'Feedback must be at least 10 characters long.'}
            </div>
          )}
        </div>

        {/* Rating Component */}
        <div>
          <label htmlFor="rating" className="block text-blue-800 font-medium mb-1">
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
                  style={{ display: 'inline-flex' }}
                />
                <span className="text-sm text-gray-600">{value} / 5</span>
              </div>
            )}
          />
          {errors.rating && <div className="text-red-500 text-sm mt-1">Rating is required.</div>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
