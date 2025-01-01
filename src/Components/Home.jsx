import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';
import MeetOurPartners from './MeetOurPartners';
import HowItWorks from './HowItWorks';
import ImpactSection from './ImpactSection';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="bg-gray-50">
               {/* Slider Section */}
               <div>
                <Slider />
            </div>
            {/* Welcome Section */}
            <div className="text-center  text-white py-12 px-6 shadow-lg">
                <h1 className="text-5xl font-extrabold mb-6 text-black">
                    Welcome to <span className="text-cyan-300">EchoBoard</span>
                </h1>
                <p className="text-xl font-light italic text-black">
                    "Your voice matters. Together, we shape a world of honest feedback and trustworthy services."
                </p>
            </div>

         

            {/* Heading for Random Cards */}
            <div className="text-center mt-16 mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Explore Top Services Selected Just for You
                </h2>
                <p className="text-gray-600 mt-2">
                    Here are six outstanding services that you might love.
                </p>
            </div>

            {/* Random 6 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-16">
                {data.length > 0 ? (
                    data.map((singleData) => (
                        <HomeCard key={singleData._id} singleData={singleData} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No services found.</p>
                )}
            </div>
            <MeetOurPartners> </MeetOurPartners>
            <HowItWorks> </HowItWorks>
            <ImpactSection> </ImpactSection>
        </div>
    );
};

export default Home;
