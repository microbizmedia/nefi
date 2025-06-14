'use client'
import { useTranslation } from 'react-i18next';
import ImageSlider from '../components/heroSwiper';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  return (
      <div className="w-full flex justify-center h-[600px]">
    <div className="relative w-[1600px] max-w-none">
   {/* <div className="absolute right-1/2 translate-x-1/2 w-[2000px]"></div> */}
      <div className="relative z-10 max-w-[1600px] mx-auto">
      <h1 className='mt-40 global-container'>{t('heroHeader')}</h1>
      <div className='flex justify-start  gap-6 h-[500px] mt-6  w-[1400px]'>
        <div className='w-full lg:w-[75%]  '>
          <ImageSlider />
        </div>
        <div className='lg:w-[25%]   bg-[#dbdbdb]'>
          <img
            src="/DJI_0090.jpg"
            alt="Description"
            className="w-full h-50 object-cover rounded-md"
          />
          <div className="flex flex-col space-y-6 p-6">
            <h3 className=" font-semibold ">{t('renewability')}</h3>
            <h3 className=" font-semibold -mt-6">{t('sustainability')}</h3>
            <a href="#" className="text-blue-400 flex items-center mt-4"> {t('about us')} <ChevronRight  strokeWidth={1.3}/></a>
            <a href="#" className="text-blue-400 flex items-center ">{t('certificates')} <ChevronRight  strokeWidth={1.3}/> </a>
            <a href="#" className="text-blue-400 flex items-center ">{t('get in touch')} <ChevronRight  strokeWidth={1.3}/> </a>
          </div>
        </div>
      </div>
      </div> 
    </div>
  </div>
  );
};

export default Hero;
