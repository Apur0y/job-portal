import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllJobs = () => {
    
    const jobs = useLoaderData();


    return (
        <div className="container mx-auto text-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
            <div 
                key={job._id} 
                className="bg-black  rounded-xl shadow-lg border hover:shadow-2xl transition-shadow p-6 relative overflow-hidden"
            >
                {/* Company Logo */}
                <div className="absolute top-4 right-4">
                    <img 
                        src={job.company_logo || 'https://via.placeholder.com/50'} 
                        alt={`${job.company} logo`} 
                        className="h-12 w-12 object-cover rounded-full border"
                    />
                </div>

                {/* Card Content */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-blue-600 mb-2">
                        {job.title}
                    </h2>
                    <p className=" text-sm mb-4">
                        {job.company} &middot; {job.location}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                            {job.jobType}
                        </span>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            job.status === 'active' 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-red-100 text-red-600'
                        }`}>
                            {job.status}
                        </span>
                        <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
                            {job.category}
                        </span>
                    </div>
                </div>

                <div className=" mb-4">
                    <p>
                        <strong>Salary:</strong> {job.salaryRange?.min || "Negotiable"} - {job.salaryRange?.max || "Negotiable"}
                    </p>
                    <p>
                        <strong>Deadline:</strong> {job.applicationDeadline}
                    </p>
                </div>

                <p className=" text-sm line-clamp-3">
                    {job.description}
                </p>

                {/* Footer with CTA */}
                <div className="mt-6">
                   <Link to={`/alljobs/${job._id}`}>
                   <button 
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                        Apply Now
                    </button>
                   </Link>
                </div>
            </div>
        ))}
    </div>
    );
};

export default AllJobs;