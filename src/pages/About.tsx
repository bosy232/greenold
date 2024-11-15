import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-[#2C3E50] to-[#1abc9c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">About EFSS</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The Egyptian Fertility and Sterility Society has been established for more than twenty years, 
              dedicated to the promotion of women's reproductive health.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To advance the science and practice of reproductive medicine in Egypt through 
                research, education, and clinical excellence, while promoting the highest 
                standards of patient care.
              </p>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading authority in reproductive medicine in Egypt and the Middle East, 
                fostering innovation and collaboration in fertility treatment and research.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">
              Welcome Message from the President
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                It is my pleasure and honour to welcome you to the website of the Egyptian 
                Fertility and Sterility Society (EFSS). The society is dedicated to the 
                education, training and research in various disciplines of reproductive health.
              </p>
              <p>
                The society activity varied between holding an annual international conference, 
                to running workshops and organizing national regional meetings. The society also 
                releases its journal twice yearly which hosts review articles written by invited 
                international figures in their fields as well as peer reviewed research articles.
              </p>
              <p className="mt-4 text-[#2C3E50] font-semibold">
                Prof. Dr. Mohamed El-Nashar<br />
                President, EFSS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, stat: "1,100+", label: "Active Members" },
              { icon: BookOpen, stat: "28+", label: "Years of Excellence" },
              { icon: Award, stat: "100+", label: "Research Publications" }
            ].map(({ icon: Icon, stat, label }, index) => (
              <div key={index} className="card text-center p-8">
                <Icon className="w-12 h-12 text-[#1abc9c] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#2C3E50] mb-2">{stat}</h3>
                <p className="text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;