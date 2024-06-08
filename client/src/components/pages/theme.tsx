import { Button } from 'antd';
import { SlideCards } from '../themes/slides';
import { Label } from '../ui/label';

const Theme = () => {
    return (
        <>
            <div className="container mx-auto md:px-0">
                <div className="flex flex-col gap-9 bg-white p-8 md:p-12">
                    <Label className="text-4xl text-center font-bold" htmlFor="url">
                        Link-in-bio Themes
                    </Label>
                    <p className="text-gray-600 mx-2">
                        Bitly powers hundreds of thousands of Links-in-bios for creators and bussinesses of all kinds. Take a look at these Link-in-bio examples!
                    </p>
                    <div className="flex flex-wrap">
                        <div className="grid grid-cols-3 gap-y-5 gap-x-3">
                            {SlideCards.map((slide, id) => (
                                <div key={id} className="inline-block px-2">
                                    <div
                                        className="px-4 py-4 w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md b hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                        style={{
                                            backgroundImage: slide.backgroundImage,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backdropFilter: 'blur(12px)',
                                        }}
                                    >
                                        <div className="px-16 py-14">
                                            <Button className="px-4 py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl border-none text-white font-bold text-xl" onClick={
                                                () => (window.alert("Backend not implemented yet"))
                                            }>
                                                {slide.title}
                                            </Button>
                                            <Button className="my-2 px-4 py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl border-none text-white font-bold text-xl" onClick={
                                                () => (window.alert("Backend not implemented yet"))
                                            }>
                                                {slide.title}
                                            </Button>
                                            <Button className="px-4 py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl border-none text-white font-bold text-xl" onClick={
                                                () => (window.alert("Backend not implemented yet"))
                                            }>
                                                {slide.title}
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