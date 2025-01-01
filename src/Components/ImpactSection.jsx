import React from 'react';
import CountUp from 'react-countup';

const ImpactSection = () => {
  return (
    <section className="bg-indigo-100 py-12 px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-8">
          EchoBoard: Building Connections & Trust
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stats */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-700">
              <CountUp end={1500} duration={10} />+
            </h3>
            <p className="text-gray-600 mt-2">Verified Services</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-700">
              <CountUp end={25000} duration={10} />+
            </h3>
            <p className="text-gray-600 mt-2">Reviews Shared</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-700">
              <CountUp end={10000} duration={10} />+
            </h3>
            <p className="text-gray-600 mt-2">Happy Users</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-indigo-800 mb-6">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "EchoBoard made it easy to find reliable services. The reviews
                helped me choose the right option with confidence."
              </p>
              <h4 className="mt-4 font-bold text-indigo-700">— Sarah L.</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "I love how simple and secure the platform is. Sharing my
                experience has been seamless."
              </p>
              <h4 className="mt-4 font-bold text-indigo-700">— John D.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
