import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Search, Button, Avatar, AvatarFallback } from "../ui/index";
import ProfileDropdown from './profile-dropdown';
import { Box,useTheme } from '@mui/material';

const Header = ({theme}) => {
    const [dropDownIsActive, setDropdownIsActive] = useState(false);

    const closeProfileDropdown = () => {
        setDropdownIsActive(false);
    }
    const themes=useTheme();
    return (
        <>
            <Box className='w-full'bgcolor={themes.palette.background.paper}>
                <Box className='pt-4 pb-3 px-4 border-b-[1.5px] border-[#dbe0eb] sticky top-0'>
                    <nav className='flex justify-between items-center'>
                        <Box className='flex gap-6 items-center'>
                            <Search />
                            <Button className="cursor-pointer bg-green-700 hover:bg-green-800">Upgrade</Button>
                        </Box>
                        <Box className='flex gap-6 items-center'>
                            <button 
                                onClick={theme}
                                className="cursor-pointer border border-blue-500 p-2 rounded ">
                              Theme
                            </button>
                            <Box 
                                onClick={() => setDropdownIsActive(!dropDownIsActive)} 
                                onMouseLeave={closeProfileDropdown} 
                                className={`flex gap-4 items-center cursor-pointer hover:bg-[#f4f6fa] dark:hover:bg-gray-700 ${dropDownIsActive ? 'bg-[#f4f6fa] dark:bg-gray-700' : ''} py-[0.2rem] px-4 rounded-md relative`}
                            >
                                <Avatar>
                                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                                    <AvatarFallback sx={{text:themes.palette.text}}>KS</AvatarFallback>
                                </Avatar>
                                <Box className="flex gap-2">
                                    <h1 sx={{text:themes.palette.text}} >Krishna Singha</h1>
                                    <i className="fa-solid fa-sort-down dark:text-white"></i>
                                </Box>
                                {dropDownIsActive && <ProfileDropdown />}
                            </Box>
                        </Box>
                    </nav>
                </Box>
                <Outlet />
            </Box>
        </>
    );
};

export default Header;
