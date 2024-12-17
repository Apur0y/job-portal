import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Job = () => {
    
    const job =useLoaderData()

    const {
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        hr_email,
        hr_name,
        company_logo
      } = job;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={company_logo}
                alt={`${company} logo`}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-gray-600">{company} - {location}</p>
                <p className="text-sm text-gray-500">
                  {category} | {jobType} | Deadline: {applicationDeadline}
                </p>
              </div>
            </div>
  
            <p className="text-gray-700 mb-4">{description}</p>
  
            <div className="mb-4">
              <h2 className="font-semibold text-lg mb-2">Requirements:</h2>
              <ul className="list-disc pl-5 text-gray-600">
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
  
            <div className="mb-4">
              <h2 className="font-semibold text-lg mb-2">Responsibilities:</h2>
              <ul className="list-disc pl-5 text-gray-600">
                {responsibilities.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
  
            <div className="mb-4">
              <h2 className="font-semibold text-lg">Salary:</h2>
              <p className="text-gray-600">
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">
                For inquiries, please contact: <strong>{hr_name}</strong>
              </p>
              <p className="text-blue-500 underline">{hr_email}</p>
            </div>
  
            <div className="mt-4 flex justify-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Job;