import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function HeroSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    const slides = [
        {
            id: 1,
            title: 'Wireless Bluetooth Headphones',
            description: 'Experience crystal-clear sound and unmatched comfort with our top-of-the-line Bluetooth headphones.',
            image: 'https://images.unsplash.com/photo-1501163109389-abf37ca1276a',
            buttonText: 'Shop Now',
        },
        {
            id: 2,
            title: 'Smart Home Security Camera',
            description: 'Keep your home safe with our advanced security camera, featuring night vision and motion detection.',
            image: 'https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6',
            buttonText: 'Learn More',
        },
        {
            id: 3,
            title: 'Ergonomic Office Chair',
            description: 'Upgrade your workspace with our ergonomic chair designed for maximum support and comfort.',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
            buttonText: 'Buy Now',
        }
    ];

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {slides.map(slide => (
                    <div className="embla__slide">

                        <img src={slide.image} alt={slide.title} className="slide-image" />
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <button>{slide.buttonText}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}