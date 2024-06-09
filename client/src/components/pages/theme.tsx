import { Button } from 'antd';
import { SlideCards } from '../themes/slides';
import { Label } from '../ui/label';
import { FacebookIcon, InstagramIcon, LinkedinIcon, ThreadsIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';

const Theme = () => {
    return (
        <>
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col gap-9 bg-white p-8 md:p-12">
                    <Label className="text-4xl font-bold" htmlFor="url">
                        Link-in-bio Themes
                    </Label>
                    <p className="text-gray-600 mx-1">
                        Bitly powers hundreds of thousands of Links-in-bios for creators and bussinesses of all kinds. Take a look at these Link-in-bio examples!
                    </p>
                    <div className="flex flex-wrap pb-10">
                        <div className="grid sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-3 gap-y-5 gap-x-3">
                            {SlideCards.map((slide, id) => (
                                <div key={id} className="inline-block px-2">
                                    <div
                                        className="px-4 py-4 w-64 h-96 max-w-xs overflow-hidden rounded-lg shadow-md b hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                        style={{
                                            backgroundImage: slide.backgroundImage,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backdropFilter: 'blur(12px)',
                                        }}
                                    >
                                        <div className="bg-black bg-opacity-50 justify-center rounded-md h-16 my-6">
                                            <Link to="/theme"><h1 className="py-5 text-white font-bold text-xl text-center shadow-md b hover:shadow-2xl transition-shadow duration-300 ease-in-out">{slide.title}</h1></Link>
                                        </div>
                                        <div className="px-12 py-5">
                                            <Button className="flex mb-2 px-6 py-5 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl text-white text-sm" onClick={
                                                () => (window.alert("Backend not implemented yet"))
                                            }>
                                                <FacebookIcon />
                                                Facebook
                                            </Button>
                                            <Button className="flex mb-2 px-6 py-5 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl text-white text-sm" onClick={
                                                () => (window.alert("Backend not implemented yet"))
                                            }>
                                                <InstagramIcon />
                                                Instagram
                                            </Button>
                                            <Button className="flex mb-2 px-6 py-5 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl text-white text-sm" onClick={
                                                () => (window.alert("Backend not implemented yet"))
                                            }>
                                                <LinkedinIcon />
                                                Linkedin
                                            </Button>
                                            <Button className="flex mb-2 px-6 py-5 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl text-white text-sm" onClick={
                                                () => (window.alert("Backend not implemented yet"))
                                            }>
                                                <ThreadsIcon />
                                                Threads
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Theme;