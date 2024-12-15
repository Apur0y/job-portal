import React from 'react';

const JobsCard = () => {
    return (
    

            <div className="max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-40 object-cover"
                src={job?.company_logo}
                alt={`${job?.company} logo`}
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800">{job?.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{job?.company}</p>
            
                <p className="text-sm text-gray-600 mt-1">
                  Category: {job?.category}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Application Deadline: {job?.applicationDeadline}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Salary: {job?.salaryRange.min} - {job?.salaryRange.max} {job?.salaryRange.currency.toUpperCase()}
                </p>
                <p className="text-gray-700 mt-4">{job?.description}</p>
        
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Requirements:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {job?.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
        
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Responsibilities:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {job?.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
        
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Contact:</p>
                  <p className="text-sm text-gray-800 font-semibold">{job?.hr_name}</p>
                  <p className="text-sm text-blue-600 underline">{job?.hr_email}</p>
                </div>
        
                <p className="text-xs text-gray-500 mt-4">
                  Status: {job?.status === "active" ? "Open for Applications" : "Closed"}
                </p>
                  </div>
            </div>
)  }
    
    
export default JobsCard;