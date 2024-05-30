import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui';

const Sidebar = ({ darkMode }) => {
    return (
        <div className={`border-r-[1.5px] border-[#dbe0eb] min-w-[18rem] px-4 sticky top-0 left-0 h-full bg-white dark:bg-gray-900`}>
            <div className="w-full flex justify-center my-6">
                <span className="text-2xl font-bold text-[#0c3ebb] dark:text-white">
                    <a href="/"><img src={"/click-metrics-logo-edited.png"} alt="LOGO" /></a>
                </span>
            </div>
            <a href="/links" className="block w-full mt-4 mb-2">
                <Button className="w-full">Create New</Button>
            </a>

            <hr className="my-4 dark:border-gray-700" />
            <div className="flex flex-col gap-3">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${isActive
                            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] dark:bg-gray-700 border-l-4 border-[#0c3ebb]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                        }`
                    }>
                    <i className="fa-solid fa-house"></i>
                    Home
                </NavLink>
                <NavLink
                    to="/links"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${isActive
                            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] dark:bg-gray-700 border-l-4 border-[#0c3ebb]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                        }`
                    }>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Links
                </NavLink>
                <NavLink
                    to="/qr"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${isActive
                            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] dark:bg-gray-700 border-l-4 border-[#0c3ebb]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                        }`
                    }>
                    <i className="fa-solid fa-qrcode"></i>
                    QR Codes
                </NavLink>
                <NavLink
                    to="/link/in/bio"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${isActive
                            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] dark:bg-gray-700 border-l-4 border-[#0c3ebb]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                        }`
                    }>
                    <i className="fa-solid fa-paperclip"></i>
                    Link-in-bio
                </NavLink>
                <NavLink
                    to="/analytics"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${isActive
                            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] dark:bg-gray-700 border-l-4 border-[#0c3ebb]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                        }`
                    }>
                    <i className="fa-solid fa-chart-simple"></i>
                    Analytics
                </NavLink>
                <NavLink
                    to="/campaigns"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${isActive
                            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] dark:bg-gray-700 border-l-4 border-[#0c3ebb]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                        }`
                    }>
                    <i className="fa-solid fa-compass"></i>
                    Campaigns
                </NavLink>
                <NavLink
                    to="/custom/links"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${isActive
                            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] dark:bg-gray-700 border-l-4 border-[#0c3ebb]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                        }`
                    }>
                    <i className="fa-solid fa-link"></i>
                    Custom Links
                </NavLink>
                <hr className="dark:border-gray-700" />
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${isActive
                            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] dark:bg-gray-700 border-l-4 border-[#0c3ebb]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                        }`
                    }>
                    <i className="fa-solid fa-gear"></i>
                    Settings
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
