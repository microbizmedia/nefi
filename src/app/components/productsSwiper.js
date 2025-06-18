'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Image from 'next/image';
import image1 from '../../../public/products/1.jpg';
import image2 from '../../../public/products/2.png';
import image3 from '../../../public/products/3.webp';
import image4 from '../../../public/products/4.jpg';
import image5 from '../../../public/products/5.png';
import image6 from '../../../public/products/6.png';
import image7 from '../../../public/products/7.png';
import image8 from '../../../public/products/8.jpg';
import image9 from '../../../public/products/9.webp';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

export default function ProductsSwiper() {
  return (
<div className="relative mt-8 ">
  {/* Swiper Slider */}
  <Swiper
    modules={[Navigation, Pagination]}
    navigation={{
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    }}
     pagination={{
        el: '.custom-swiper-pagination', // 👈 custom container
    clickable: true, // Allows clicking dots
  }}
    spaceBetween={40}
    slidesPerView={5}
     slidesPerGroup={5}  // ✅ Move 5 slides at a time
  loop={false}         // ✅ Optional: disable loop to show clean separation
    className="h-full   w-[1400px]"
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <Image
          src={img}
          alt={`Slide ${index + 1}`}
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </SwiperSlide>
    ))}
  </Swiper>
<div className="global-container mt-4 flex justify-between items-center max-w-[1200px] mx-auto">
  {/* Pagination Dots */}
  <div className="custom-swiper-pagination flex justify-center w-full"></div>

  {/* Arrows */}
  <div className="flex gap-4 ml-4">
    <button
      className="custom-swiper-button-prev w-10 h-10 flex items-center justify-center"
      style={{ all: 'unset', cursor: 'pointer' }}
    >
      <ChevronLeft className="w-6 h-6 text-black dark:text-white" strokeWidth={1.3} />
    </button>
    <button
      className="custom-swiper-button-next w-10 h-10 flex items-center justify-center"
      style={{ all: 'unset', cursor: 'pointer' }}
    >
      <ChevronRight className="w-6 h-6 text-black dark:text-white" strokeWidth={1.3} />
    </button>
  </div>
</div>
   <div className="pointer-events-none absolute right-[-200px] top-0 h-full w-[300px] bg-gradient-to-l from-white to-transparent z-10" />

</div>

  );
}
