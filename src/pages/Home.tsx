import React from 'react';
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-black/60 relative overflow-hidden"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
        <div className="h-full flex items-center px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Egyptian Fertility And <span className="text-[#1abc9c]">Sterility Society</span>
            </h1>
            <p className="text-white text-xl mb-8 leading-relaxed">
              Advancing reproductive medicine through research, education, and clinical excellence.
            </p>
            <div className="flex gap-4">
              <a href="#register" className="btn-primary inline-flex items-center">
                Join EFSS Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#learn-more" className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, stat: "2,500+", label: "Active Members" },
              { icon: BookOpen, stat: "150+", label: "Publications" },
              { icon: Award, stat: "30+", label: "Years of Excellence" }
            ].map(({ icon: Icon, stat, label }, index) => (
              <div key={index} className="card text-center p-8">
                <Icon className="w-12 h-12 text-[#1abc9c] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#2C3E50] mb-2">{stat}</h3>
                <p className="text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Membership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community of leading professionals in reproductive medicine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Virtual Conference Access",
                description: "Unlimited access to our virtual conference platform with lectures from leading experts.",
                price: "$299/year"
              },
              {
                title: "Full Membership",
                description: "Complete access to all EFSS resources, conferences, and networking opportunities.",
                price: "$499/year",
                featured: true
              },
              {
                title: "Research Membership",
                description: "Focus on research with access to our databases and publication opportunities.",
                price: "$399/year"
              }
            ].map((plan, index) => (
              <div key={index} className={`card p-8 ${plan.featured ? 'border-[#1abc9c] border-2' : ''}`}>
                {plan.featured && (
                  <span className="bg-[#1abc9c] text-white px-4 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <p className="text-3xl font-bold text-[#2C3E50] mb-6">{plan.price}</p>
                <button className={`w-full ${plan.featured ? 'btn-primary' : 'bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all'}`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;