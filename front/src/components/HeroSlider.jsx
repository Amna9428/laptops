import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function HeroSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    const slides = [
        {
            id: 1,
            title: 'Microsoft Surface',
            description: 'Microsoft’s Surface lineup provides premium, ultra-portable devices with touchscreen functionality and excellent build quality.',
            image: 'https://images.unsplash.com/photo-1501163109389-abf37ca1276a',
            buttonText: 'Shop Now',
        },
        {
            id: 2,
            title: 'ASUS',
            description: 'ASUS is known for its powerful gaming laptops (ROG series) and ultrathin ZenBooks. They provide great value for gamers, professionals.',
            image: 'https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6',
            buttonText: 'Learn More',
        },
        {
            id: 3,
            title: 'Apple MacBook',
            description: 'Perfect for professionals, designers, and creatives who need powerful hardware and seamless ecosystem integration.',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
            buttonText: 'Buy Now',
        }
    ];

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {slides.map(slide => (
                    <div className="embla__slide relative" key={slide.id}>
                        <img 
                            src={slide.image} 
                            alt={slide.title} 
                            className="slide-image w-full h-[600px] object-cover"
                        />
                        {/* Overlay div moved before the content */}
                        <div className="absolute inset-0 bg-black/20" /> {/* Using the modern opacity syntax */}
                        <div className="slide-content absolute top-1/2 left-16 transform -translate-y-1/2 text-white z-10">
                            <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
                            <p className="text-lg mb-6 max-w-lg drop-shadow-lg">{slide.description}</p>
                            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}