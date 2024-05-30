import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Search, Button, Avatar, AvatarFallback } from "../ui/index";
import ProfileDropdown from './profile-dropdown';

const Header = () => {
    const [dropDownIsActive, setDropdownIsActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const closeProfileDropdown = () => {
        setDropdownIsActive(false);
    }

    return (
        <>
            <div className='w-full'>
                <div className='pt-4 pb-3 px-4 border-b-[1.5px] border-[#dbe0eb] bg-white dark:bg-gray-800 sticky top-0'>
                    <nav className='flex justify-between items-center'>
                        <div className='flex gap-6 items-center'>
                            <Search />
                            <Button className="cursor-pointer bg-green-700 hover:bg-green-800">Upgrade</Button>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <button 
                                onClick={toggleTheme}
                                className="cursor-pointer border border-blue-500 p-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white">
                                {darkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                            <div 
                                onClick={() => setDropdownIsActive(!dropDownIsActive)} 
                                onMouseLeave={closeProfileDropdown} 
                                className={`flex gap-4 items-center cursor-pointer hover:bg-[#f4f6fa] dark:hover:bg-gray-700 ${dropDownIsActive ? 'bg-[#f4f6fa] dark:bg-gray-700' : ''} py-[0.2rem] px-4 rounded-md relative`}
                            >
                                <Avatar>
                                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                                    <AvatarFallback>KS</AvatarFallback>
                                </Avatar>
                                <div className="flex gap-2">
                                    <h1 className="dark:text-white">Krishna Singha</h1>
                                    <i className="fa-solid fa-sort-down dark:text-white"></i>
                                </div>
                                {dropDownIsActive && <ProfileDropdown />}
                            </div>
                        </div>
                    </nav>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Header;
