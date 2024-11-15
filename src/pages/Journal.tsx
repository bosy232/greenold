import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

const Journal = () => {
  const journals = [
    {
      id: 1,
      title: "Current Advances in Fertility Treatments",
      issue: "Volume 24, Issue 2",
      date: "March 2024",
      abstract: "This issue covers the latest developments in fertility treatments...",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Special Edition: IVF Technologies",
      issue: "Volume 24, Issue 1",
      date: "January 2024",
      abstract: "A comprehensive review of modern IVF technologies...",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">EFSS Journal</h1>
        
        <div className="grid gap-6">
          {journals.map((journal) => (
            <div key={journal.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <FileText className="h-6 w-6 text-[#1abc9c] mr-2" />
                    <h2 className="text-xl font-semibold text-[#2C3E50]">{journal.title}</h2>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{journal.date} - {journal.issue}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{journal.abstract}</p>
                  <button className="inline-flex items-center text-[#1abc9c] hover:text-[#2C3E50] transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;