import { SlideCards } from "./slides";

const Template = () => {
    return (
        <>
            <div className="relative flex flex-col m-3 overflow-x-auto hide-scroll-bar">
                <div className="flex pb-10 hide-scroll-bar">
                    <div className="flex flex-nowrap">
                        {SlideCards.map((slide, id) => (
                            <div key={id} className="inline-block px-3">
                                <div
                                    className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md b hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    style={{ backgroundImage: slide.backgroundImage }}
                                >
                                    <h2>{slide.title}</h2>
                                    <p>{slide.content}</p>

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