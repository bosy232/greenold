import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, Download } from 'lucide-react';

const AnnualMeeting = () => {
  const { year } = useParams();

  const meetingDetails = {
    location: 'Cairo International Convention Center',
    date: `October 15-17, ${year}`,
    attendees: '500+ Expected Attendees',
    highlights: [
      'Keynote Speakers from Leading Institutions',
      'Interactive Workshops',
      'Research Presentations',
      'Networking Events'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-8">
          EFSS Annual Meeting {year}
        </h1>

        {/* Meeting Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#1abc9c] mr-3" />
              <h3 className="text-xl font-semibold text-[#2C3E50]">Date</h3>
            </div>
            <p className="text-gray-600">{meetingDetails.date}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-[#1abc9c] mr-3" />
              <h3 className="text-xl font-semibold text-[#2C3E50]">Location</h3>
            </div>
            <p className="text-gray-600">{meetingDetails.location}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#1abc9c] mr-3" />
              <h3 className="text-xl font-semibold text-[#2C3E50]">Attendance</h3>
            </div>
            <p className="text-gray-600">{meetingDetails.attendees}</p>
          </div>
        </div>

        {/* Meeting Highlights */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Meeting Highlights</h2>
          <ul className="space-y-4">
            {meetingDetails.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#1abc9c] rounded-full mr-3"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Registration CTA */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#1abc9c] rounded-lg shadow-md p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Register Now</h2>
              <p className="mb-4 md:mb-0">Secure your spot at EFSS Annual Meeting {year}</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white text-[#2C3E50] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Register
              </button>
              <button className="flex items-center border border-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors">
                <Download className="h-5 w-5 mr-2" />
                Program PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualMeeting;