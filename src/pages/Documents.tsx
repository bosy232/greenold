import React from 'react';
import { FileText } from 'lucide-react';

const Documents = () => {
  const documents = [
    { year: 2022, title: 'Annual Conference Proceedings', size: '2.4 MB' },
    { year: 2021, title: 'Research Publications', size: '3.1 MB' },
    { year: 2020, title: 'Virtual Conference Materials', size: '1.8 MB' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">Document Archive</h1>
        
        <div className="grid gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-[#1abc9c] mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C3E50]">{doc.year} - {doc.title}</h3>
                    <p className="text-sm text-gray-500">Size: {doc.size}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-[#1abc9c] text-white rounded hover:bg-[#2C3E50] transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;