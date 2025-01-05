import React from 'react';

const News = () => {
  const redirectToNewsPage = () => {
    window.location.href = 'https://www.hindustantimes.com/india-news/pm-narendra-modis-kuwait-visit-from-today-to-interact-with-indian-diaspora-meet-emir-details-101734742839486.html';
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        News and Blog Of Recent Crimes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div
          className="cursor-pointer rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300"
          onClick={redirectToNewsPage}
        >
          <img
            src="https://www.marketresearchintellect.com/images/blogs/navigating-efficiency-the-growth-of-the-marine-engine-monitoring-system-market.webp" // Replace with actual image URL
            alt="CCTV footage: Thief uses child as a cover while lifting bike in Karachi"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              CCTV footage: Thief uses child as a cover while lifting bike in Karachi
            </h3>
          </div>
        </div>

        {/* Second Box */}
        <div
          className="cursor-pointer rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300"
          onClick={redirectToNewsPage}
        >
          <img
            src="https://s3.envato.com/files/487045813/65bcc4603c087a54449e0b2d_withmeta.jpg" // Replace with actual image URL
            alt="Lyari gang war criminals among 25 arrested in Karachi"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Lyari gang war criminals among 25 arrested in Karachi
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
