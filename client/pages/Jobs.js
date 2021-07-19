import React, { useState, useEffect, Fragment } from 'react';
import ApiJobs from '../api/ApiJobs'
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'
import { useHistory, Link } from "react-router-dom";

import NavBar from '../components/NavBar';

export default function Jobs() {
    let history = useHistory();
    const [jobs, setJobs] = useState([]);
    const [values, setValues] = useState({
        job_desc: undefined,
        location: undefined,
        fulltime: false,
        filter: false
    });



    useEffect(() => {
        // fetch data jobs
        ApiJobs.list().then(data => {
            setJobs(data);
        })
    }, []);


    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const filterParams = {
            desc: values.job_desc || null,
            location: values.location || null,
            fullTime: values.fulltime === 'on' ? true : false
        }

        ApiJobs.findByParams(filterParams).then(data => {
            setJobs(data);
        });




    }


    return (
        <>
            <NavBar />

            <div className="flex-1 px-2 flex gap-x-4 justify-center lg:ml-6 lg:justify-start mt-5">
                {/* Search section */}
                <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="job_desc" className="block text-sm font-medium text-gray-700">
                        Job Description
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="job_desc"
                            id="job_desc"
                            autoComplete="job_desc"
                            placeholder="Filter by title,benefit,companies,expertise"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            onChange={handleOnChange('job_desc')}
                        />
                    </div>

                </div>
                <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Filter by city,state, zip code or country"
                            autoComplete="family-name"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            onChange={handleOnChange('location')}
                        />
                    </div>

                </div>

                <div className="relative flex items-start">
                    <div className="flex items-center py-9">
                        <input
                            id="fulltime"
                            name="fulltime"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            onChange={handleOnChange('fulltime')}
                        />
                    </div>
                    <div className="ml-3 text-sm py-8">
                        <label htmlFor="fulltime" className="font-medium text-gray-700">
                            Full Time Only
                        </label>
                    </div>
                </div>

                <div className="relative flex items-start py-5">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={onSubmit}
                        >
                            Search
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => history.push('/gitjobs/')}
                        >
                            Logout
                        </button>
                    </div>

                </div>

            </div>

            <div className="flex flex-col">

                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Job List</h3>
                </div>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {jobs && jobs.map((job) => (
                                        <tr key={job.id}>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Link to={`/gitjobs/detail/${job.id}`}>
                                                    <div className="text-sm font-medium text-indigo-600">{job.title}</div>
                                                </Link>
                                                <div className="text-sm text-gray-500">{job.company} - {job.type}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="text-sm text-gray-900">{job.location}</div>
                                                <div className="text-sm text-gray-500">{job.created_at}</div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
