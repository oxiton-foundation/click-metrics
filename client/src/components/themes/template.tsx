import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { FacebookIcon, InstagramIcon, LinkedinIcon, ThreadsIcon } from "@/assets/icons";

const Slides = [
    {
        id: 1,
        title: "Classic",
        backgroundImage: 'url("/theme-imgs/Classic.jpg")',
    },
    {
        id: 2,
        title: "Standard",
        backgroundImage: 'url("/theme-imgs/Standard.jpg")',
    },
    {
        id: 3,
        title: "Animated",
        backgroundImage: 'url("/theme-imgs/Cool.jpg")',
    },
    {
        id: 4,
        title: "Floral",
        backgroundImage: 'url("/theme-imgs/Floral.jpg")',
    },
    {
        id: 5,
        title: "Scenic",
        backgroundImage: 'url("/theme-imgs/Scenic.jpg")',
    },
];

const Template = () => {
    return (
        <>
            <div className="relative flex flex-col overflow-x-scroll hide-scroll-bar">
                <div className="flex pb-10">
                    <div className="flex flex-nowrap">
                        {Slides.map((slide, id) => (
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
                                            <p className="ml-1">Facebook</p>
                                        </Button>
                                        <Button className="flex mb-2 px-6 py-5 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl text-white text-sm" onClick={
                                            () => (window.alert("Backend not implemented yet"))
                                        }>
                                            <InstagramIcon />
                                            <p className="ml-1">Instagram</p>
                                        </Button>
                                        <Button className="flex mb-2 px-6 py-5 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl text-white text-sm" onClick={
                                            () => (window.alert("Backend not implemented yet"))
                                        }>
                                            <LinkedinIcon />
                                            <p className="ml-1">Linkedin</p>
                                        </Button>
                                        <Button className="flex mb-2 px-6 py-5 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl text-white text-sm" onClick={
                                            () => (window.alert("Backend not implemented yet"))
                                        }>
                                            <ThreadsIcon />
                                            <p className="ml-1">Threads</p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Template;