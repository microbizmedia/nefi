'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import image1 from '../../../public/assets/DJI_0090.jpg';
import image2 from '../../../public/assets/image.jpg';
import image3 from '../../../public/assets/personel-01.png';

const images = [image1, image2, image3];

export default function ImageSlider() {
    return (
     

        <Swiper modules={[Navigation]}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            className=" "
            spaceBetween={0} slidesPerView={1} loop={true}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <Image src={img}
                        alt={`Slide ${index + 1}`}
                        width={1920}
                        height={1080}
                        className="w-full h-auto object-cover"
                        priority />
                </SwiperSlide>
            ))}
            {/* Left Arrow */}
            <div className="swiper-button-prev 
  !left-2 !top-1/2 
  !w-14 !h-14 !rounded-full !bg-black/40 
  !flex !items-center !justify-center 
  !transform !-translate-y-1/2 
  !z-10">
                <ChevronLeft className="w-6 h-6 text-white/50 transition-transform duration-200 active:scale-90" />
            </div>
            <div className="swiper-button-next 
  !right-2 !top-1/2 
  !w-14 !h-14 !rounded-full !bg-black/40 
  !flex !items-center !justify-center 
  !transform !-translate-y-1/2 
  !z-10">
                <ChevronRight className="w-6 h-6 text-white/50 transition-transform duration-200 active:scale-90" />
            </div>

        </Swiper>
        
    );
}
