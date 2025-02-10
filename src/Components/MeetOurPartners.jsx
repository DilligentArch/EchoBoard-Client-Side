import React from 'react';

const MeetOurPartners = () => {
  const partners = [
    {
      name: 'Quentin Tarantino',
      logo: 'https://i.ibb.co.com/gmfPGRG/quentin-tarantino-director-view-wallpaper-preview.jpg', 
      description: 'Providing top-notch IT solutions for our platform.',
    },
    {
      name: 'Greta Gorr',
      logo: 'https://i.ibb.co.com/0YPTF1F/American-actress-director-screenwriter-Greta-Gerwig-2019.webp', // Replace with your image path
      description: 'Experts in logistics and seamless service integration.',
    },
    {
      name: 'Christopher Nakoz',
      logo: 'https://i.ibb.co.com/ZTy9YkH/Christopher-Nolan.webp', // Replace with your image path
      description: 'Leaders in customer support and user engagement.',
    },
  ];

  return (
    <div className="bg-blue-50 py-16 px-6 max-w-screen-2xl mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Partners</h2>
        <p className="text-lg text-gray-600 mb-12">
          We are proud to collaborate with industry leaders who share our vision of excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-72  mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurPartners;
