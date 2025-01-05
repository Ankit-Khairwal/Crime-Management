import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Reports } from './Reports';
import Category from './Category';
import Static from './Static';
import News from './News';

const LandingPage = () => {
  const navigate = useNavigate();
  const idToken = localStorage.getItem('idToken')
  const handleReportClick = () => {
    if (idToken){
      navigate('/form'); 
    }else{
      navigate('/register')
    }
  };

  return (
    <div>
      <div className="relative w-full h-[50vh]">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/038/909/979/large/dangerous-hacker-with-hands-raised-after-breaking-government-firewall-video.jpg" // Replace with your desired image URL
          alt="Crime Prevention"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl text-white font-semibold text-center px-4">
            Report, Track, Prevent – For a Safer Tomorrow
          </h1>
        </div>
      </div>

      <div className="flex justify-between items-center px-8 py-6 bg-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Recent Crimes Happened</h2>
        </div>
        <div>
          <button
            onClick={handleReportClick}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Report
          </button>
        </div>
      </div>
      <Reports/>
      <Category/>
      <Static/>
      <News/>
    </div>
  );
};

export default LandingPage;
