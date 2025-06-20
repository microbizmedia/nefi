'use client'
import { useTranslation } from 'react-i18next';
import ImageSlider from '../components/heroSwiper';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center overflow-hidden" id='home'>
      <div className="relative w-full xl:w-[1600px]">
          <h1 className='mt-44 global-container'>{t('heroHeader')}</h1>
          <div className='flex justify-start  gap-6 h-[400px] lg:h-[500px] mt-10  w-full xl:w-[1400px]'>
            <div className=' w-full xl:w-[75%]  '>
              <ImageSlider />
            </div>
            <div className='invisible xl:visible w-full  bg-[#e3e3e3]'>
              <img
                src="/DJI_0090.jpg"
                alt="Description"
                className="w-full h-50 object-cover"
              />
              <div className="flex flex-col space-y-6 p-6">
                <h3 className=" font-semibold ">{t('renewability')}</h3>
                <h3 className=" font-semibold -mt-6">{t('sustainability')}</h3>
                <a href="#stories" className="text-blue-400 flex items-center mt-4"> {t('about us')} <ChevronRight strokeWidth={1.3} /></a>
                <a href="#certificates" className="text-blue-400 flex items-center ">{t('certificates')} <ChevronRight strokeWidth={1.3} /> </a>
                <a href="#contact" className="text-blue-400 flex items-center ">{t('get in touch')} <ChevronRight strokeWidth={1.3} /> </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
