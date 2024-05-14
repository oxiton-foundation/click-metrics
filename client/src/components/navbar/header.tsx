import { Outlet } from 'react-router-dom';
import { Search, Button, Avatar, AvatarFallback } from "../ui/index"


const Header = () => {
    return (
        <>
            <div className='w-full'>
                <div className='pt-4 pb-3 px-4 border-b-[1.5px] border-[#dbe0eb]'>
                    <nav className='flex justify-end gap-6 items-center'>

                        <Search />

                        <Button className="cursor-pointer bg-green-700 hover:bg-green-800">Upgrade</Button>

                        <div className="flex gap-4 items-center cursor-pointer hover:bg-[#f4f6fa] py-[0.2rem] px-4 rounded-md">
                            <Avatar>
                                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                                <AvatarFallback>KS</AvatarFallback>
                            </Avatar>
                            <div className="flex gap-2">
                                <h1>Krishna Singha</h1>
                                <i className="fa-solid fa-sort-down"></i>
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