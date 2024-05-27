import { Avatar, AvatarFallback, Button } from "../ui/index"

const ProfileDropdown = () => {

    return (
        <>
            <div className='absolute right-0 top-full w-64 flex gap-4 flex-col justify-around py-6 px-8 bg-white border-2 border-gray-300 shadow-md rounded-md cursor-default'>
                <div className='flex flex-col h-42 gap-4 items-center'>
                    <Avatar>
                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                        <AvatarFallback>KS</AvatarFallback>
                    </Avatar>
                    <h1 className="font-bold">Krishna Singha</h1>
                </div>
                <div className="flex flex-col">
                    <Button variant='link' className='text-green-700' onClick={() => alert('Placeholder')}>Unlock Premium</Button>
                    <Button variant='link' onClick={() => alert('Profile page still needs to be implemented.')}>View Profile</Button>
                    <Button variant='link' onClick={() => alert('Settings page still needs to be implemented.')}>Settings</Button>
                    <Button variant='link' onClick={() => alert('Placeholder')}>Help</Button>
                </div>
                <Button variant='destructive' onClick={() => alert('Auth still needs to be implemented.')}>Log Out</Button>
            </div>
        </>
    );
};

export default ProfileDropdown;
