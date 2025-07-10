"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function GalleryCarousel({ images }: {images: string[]}){
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )
    return (
    <Carousel plugins={[plugin.current]} className="rounded-lg overflow-hidden">
        <CarouselContent>
            {images.map((src, index) => (
            <CarouselItem key={index}>
                <Image
                    src={src}
                    width={1920}
                    height={1080}
                    alt={`Image ${index + 1}`}
                    className="rounded-lg"
                />
            </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>
    )
}