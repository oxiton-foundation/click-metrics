import React from 'react';

const Settings = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-64 bg-white p-4 border-r border-gray-200">
        <div className="flex items-center mb-6">
          <img
            className="w-16 h-16 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Krishna Singha</h2>
            <p className="text-gray-500">@krish</p>
          </div>
        </div>
        <nav className="flex flex-col space-y-2">
          <a href="#" className="flex items-center text-blue-500 p-2 rounded bg-gray-100">
            <span className="ml-2">Profile</span>
          </a>
          <a href="#" className="flex items-center text-gray-600 p-2 rounded hover:bg-gray-100">
            <span className="ml-2">Work Opportunities</span>
          </a>
          <a href="#" className="flex items-center text-gray-600 p-2 rounded hover:bg-gray-100">
            <span className="ml-2">Password</span>
          </a>
          <a href="#" className="flex items-center text-gray-600 p-2 rounded hover:bg-gray-100">
            <span className="ml-2">Social Profiles</span>
          </a>
          <a href="#" className="flex items-center text-gray-600 p-2 rounded hover:bg-gray-100">
            <span className="ml-2">Invitations</span>
          </a>
          <a href="#" className="flex items-center text-gray-600 p-2 rounded hover:bg-gray-100">
            <span className="ml-2">Sessions</span>
          </a>
          <a href="#" className="flex items-center text-gray-600 p-2 rounded hover:bg-gray-100">
            <span className="ml-2">Applications</span>
          </a>
        </nav>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <header className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-3xl font-semibold">Profile</h1>
          <div className="flex items-center">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  strokeWidth="4"
                  fill="none"
                  stroke="currentColor"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blueGray-900"
                  strokeWidth="4"
                  strokeDasharray="75, 100"
                  fill="none"
                  strokeLinecap="round"
                  stroke="currentColor"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="text-blueGray-900 text-lg font-semibold" textAnchor="middle">
                  75%
                </text>
              </svg>
            </div>
          </div>
        </header>
        <div className="flex-1">
          <form className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value="Krishna Singha"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-700">Username</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value="krish"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                value="example@example.com"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-700">Location</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value="India"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-700">Website</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value="example.com"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-700">Bio</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
                placeholder="Maximum 200 characters"
              />
            </div>
             <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
          >
            Save
          </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
