import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui';
import { Box ,useTheme} from '@mui/material';

const Sidebar = ({ darkMode }) => {
    const theme=useTheme()
    return (
        <Box bgcolor={theme.palette.background.paper}className={`border-r-[1.5px] border-[#dbe0eb] min-w-[18rem] px-4 sticky top-0 left-0 h-full `}>
            <Box bgcolor={theme.palette.background.paper}className="w-full flex justify-center my-6">
                <span className="text-2xl font-bold text-[#0c3ebb] dark:text-white">
                    <a href="/"><img src={"/click-metrics-logo-edited.png"} alt="LOGO" /></a>
                </span>
            </Box>
            <a href="/links" className="block w-full mt-4 mb-2">
                <Button className="w-full" sx={{text:theme.palette.text}}>Create New</Button>
            </a>

            <hr className="my-4 dark:border-gray-700" />
            <Box bgcolor={theme.palette.background.paper}className="flex flex-col gap-3">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${isActive
                            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] dark:bg-gray-700 border-l-4 border-[#0c3ebb]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                        }`
                    }>
                    <i className="fa-solid fa-house" sx={{text:theme.palette.text}}></i>
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
                    <i className="fa-solid fa-arrow-up-right-from-square" sx={{text:theme.palette.text}}></i>
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
                    <i className="fa-solid fa-qrcode" sx={{text:theme.palette.text}}></i>
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
                    <i className="fa-solid fa-paperclip"sx={{text:theme.palette.text}}></i>
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
                    <i className="fa-solid fa-chart-simple"sx={{text:theme.palette.text}}></i>
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
                    <i className="fa-solid fa-compass"sx={{text:theme.palette.text}}></i>
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
                    <i className="fa-solid fa-link"sx={{text:theme.palette.text}}></i>
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
                    <i className="fa-solid fa-gear" sx={{text:theme.palette.text}}></i>
                    Settings
                </NavLink>
            </Box>
        </Box>
    );
}

export default Sidebar;
