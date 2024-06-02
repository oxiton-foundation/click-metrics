import { SlideCards } from "./slides";

const Template = () => {
    return (
        <>
            <div className="relative flex flex-col overflow-x-scroll hide-scroll-bar">
                <div className="flex pb-10">
                    <div className="flex flex-nowrap">
                        {SlideCards.map((slide, id) => (
                            <div key={id} className="inline-block px-3">
                                <div
                                    className="px-4 py-4 w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md b hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    style={{
                                        backgroundImage: slide.backgroundImage,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <h1 className="px-14 py-14 text-white font-bold text-4xl text-center">{slide.title}</h1>
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