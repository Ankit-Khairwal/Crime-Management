import React from "react";

const Static = () => {
  return (
    <div>
      {/* First Section */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        {/* Left Image */}
        <div className="px-10 w-full sm:w-1/2 mb-6 sm:mb-0">
          <img
            src="https://softment.com/wp-content/uploads/2024/05/logistics-1024x682.webp" // Replace with actual image path
            alt="Community Safety"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Enhancing Community Safety Together
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            In our shared mission to enhance community safety, collaboration is
            key. By working together, residents, law enforcement, and local
            organizations can create a proactive approach to crime prevention.
            Our platform encourages open communication and reporting, empowering
            everyone to contribute to a safer environment. With access to
            real-time data and resources, community members can stay informed
            about potential risks. Together,we can build a resilient community
            that prioritizes safety and well-being. Join us in fostering a
            culture of vigilance and support, where everyone plays a role in
            keeping our neighborhoods secure .
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="w-full sm:w-1/2 text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Uniting for Safety: Your Portal to Crime-Free Living
            </h2>
            <p className="text-base sm:text-lg text-pink-700">
              In our shared mission to enhance community safety, collaboration
              is key. By working together, residents, law enforcement, and local
              organizations can create a proactive approach to crime prevention.
              Our platform encourages open communication and reporting,
              empowering everyone to contribute to a safer environment. With
              access to real-time data and resources, community members can stay
              informed about potential risks. Together, we can build a resilient
              community that prioritizes safety and well-being. Join us in
              fostering a culture of vigilance and support, where everyone plays
              a role in keeping our neighborhoods secure.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full sm:w-1/2 text-center px-10">
            <img
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600
" // Replace with actual image path
              alt="Uniting for Safety"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
