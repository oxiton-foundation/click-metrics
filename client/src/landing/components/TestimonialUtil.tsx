import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function TestimonialUtil() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

interface TestimonialType {
    id: number;
    name: string;
    review: string;
    imageUrl: string;
    rating: number;
}

const testimonials:TestimonialType[] = [
    {
      id: 0,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://via.placeholder.com/100',
      rating: 5
    },
    {
      id: 1,
      name: 'Jane Smith',
      review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/100',
      rating: 4
    },
    {
      id: 2,
      name: 'Alice Johnson',
      review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageUrl: 'https://via.placeholder.com/100',
      rating: 5
    },
    {
      id: 3,
      name: 'Bob Brown',
      review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl: 'https://via.placeholder.com/100',
      rating: 3
    },
    {
      id: 4,
      name: 'Carol White',
      review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      imageUrl: 'https://via.placeholder.com/100',
      rating: 4
    }
  ]

  return (
    <>
    <Carousel
      plugins={[plugin.current]}
      className="w-full p-8 w-1/2 mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <div className="p-4">
              <Card className="flex flex-col sm:flex-row items-center py-8">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover sm:mr-4 ml-16"
                />
                <CardContent className="flex flex-col sm:flex-row items-center sm:items-start mx-auto">
                  <div className="sm:w-2/3 mx-auto">
                    <p className="font-semibold mb-2">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.review}</p>
                    <div className="flex mx-auto justify-center mt-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.528 4.684a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.974 2.885a1 1 0 00-.364 1.118l1.528 4.684c.3.921-.755 1.688-1.538 1.118l-3.974-2.885a1 1 0 00-1.175 0l-3.974 2.885c-.783.57-1.838-.197-1.538-1.118l1.528-4.684a1 1 0 00-.364-1.118L2.486 10.11c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.528-4.684z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}
