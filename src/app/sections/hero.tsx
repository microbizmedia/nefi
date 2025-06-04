'use client'
import { useTranslation } from 'react-i18next';
import ImageSlider from '../components/carouselSwiper'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <h1 className='mt-40 global-container'>{t('heroHeader')}</h1>
      <div className='flex justify-start w-full md:w-[800px] h-[300px] md:h-[400px] my-6'>
        <ImageSlider />
      </div>

    </div>
  );
};

export default Hero;
