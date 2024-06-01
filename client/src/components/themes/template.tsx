import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { Slides } from "./slides";


const Template = () => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            <Swiper
                breakpoints={
                    {
                        340: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        700: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
            // className="max-w-[90%] lg:max-w-[80%]"
            >
                {Slides.map((slide) => (
                    <SwiperSlide key={slide.title}>
                        {/* h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] */}
                        <div
                            className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 overflow-hidden cursor-pointer"
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                            }}
                        >
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3">
                                <slide.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                                <h1 className="text-xl lg:text-2xl">{slide.title} </h1>
                                <p className="lg:text-[18px]">{slide.content} </p>
                            </div>
                            <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Template;