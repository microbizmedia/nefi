'use client'
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

const Production = () => {
  const { t } = useTranslation();
  return (

    <div className='global-container mt-24 scroll-mt-40' id='production'>
      <h2>{t('Production and technology')}</h2>
      <div className="flex flex-col gap-6 mx-auto mt-8">



      


        <div className="bg-white h-[320px] flex"  >
          <img
            src="/assets/image2.jpg"
            alt="Description"
            className="object-cover w-[50%]"
          />
          <div className='my-10 mx-6 flex flex-col w-[50%]'>
            <h2 className='mb-3'>{t('Industry Leaders')}</h2>
            <p>Safe work enviroments</p>
            <div className="mt-auto">
              <a href="#" className="text-blue-400 flex items-center"> {t('Read more')} <ChevronRight strokeWidth={1.3} /></a>
            </div>
          </div>
        </div>


          <div className="bg-white h-[320px] flex">
          <div className='my-10 mx-6 flex flex-col w-[50%]'>
            <h2 className='mb-3'>{t('Dedicated Workforce')}</h2>
            <p>Safe work enviroments</p>
            <div className="mt-auto">
              <a href="#" className="text-blue-400 flex items-center"> {t('Read more')} <ChevronRight strokeWidth={1.3} /></a>
            </div>
          </div>
          <img
            src="/assets/personel-01.png"
            alt="Description"
            className="object-cover w-[50%]"
          />
        </div>


        <div className="bg-white h-[320px] flex">
          <img
            src="/assets/sustainability_home.jpeg"
            alt="Description"
            className="object-cover object-bottom w-[52%]"
          />
          <div className='my-10 mx-6 flex flex-col w-[48%]'>
            <h2 className='mb-3'>{t('A Sustainability Pledge')}</h2>
            <p>Safe work enviroments</p>
            <div className="mt-auto">
              <a href="#" className="text-blue-400 flex items-center"> {t('Read more')} <ChevronRight strokeWidth={1.3} /></a>
            </div>
          </div>
        </div>

          <div className="bg-white h-[320px] flex">
          <div className='my-10 mx-6 flex flex-col w-[50%]'>
            <h2 className='mb-3'>{t('The Lab')}</h2>
            <p>Safe work enviroments</p>
            <div className="mt-auto">
              <a href="#" className="text-blue-400 flex items-center"> {t('Read more')} <ChevronRight strokeWidth={1.3} /></a>
            </div>
          </div>
          <img
            src="/assets/facility-01.png"
            alt="Description"
            className="object-cover w-[50%]"
          />
        </div>






      </div>
    </div>




  )
};

export default Production;
