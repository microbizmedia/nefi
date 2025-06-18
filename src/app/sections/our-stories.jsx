'use client'
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

const Production = () => {
  const { t } = useTranslation();
  return (

    <div className='global-container my-24'>
      <h2>{t('Our Stories')}</h2>
       <div className="grid grid-cols-2 gap-6 mx-auto mt-8">



      


        <div className="bg-[#e3e3e3]"  >
          <img
            src="/assets/20-years.jpg"
            alt="Description"
            className="object-cover h-[280px] w-full"
          />
          <div className='my-7 mx-8 flex flex-col '>
            <h2 className='mb-2'>{t('20 Years in Business')}</h2>
            <p>{t('Read about our story, how we started and the events that un...')}</p>
          </div>
        </div>


           <div className="bg-[#e3e3e3]"  >
          <img
            src="/assets/sustainability.jpg"
            alt="Description"
            className="object-cover h-[280px] w-full"
          />
          <div className='my-7 mx-8 flex flex-col '>
            <h2 className='mb-2'>{t('Sustainability forward')}</h2>
            <p>{t('Sustainability is among our top priorities and here we share o...')}</p>
          </div>
        </div>


         <div className="bg-[#e3e3e3]"  >
          <img
            src="/assets/safety.jpg"
            alt="Description"
            className="object-cover object-top h-[280px] w-full"
          />
          <div className='my-7 mx-8 flex flex-col '>
            <h2 className='mb-2'>{t('Safety First')}</h2>
            <p>{t('We take safety very seriously, take a tour with us and learn w...')}</p>
          </div>
        </div>
         <div className="bg-[#e3e3e3]"  >
          <img
            src="/assets/development.jpg"
            alt="Description"
            className="object-cover h-[280px] w-full"
          />
          <div className='my-7 mx-8 flex flex-col '>
            <h2 className='mb-2'>{t('Development')}</h2>
            <p>{t('Our most recent upgrade and the technology aroud it will en...')}</p>
          </div>
        </div>




      </div>
    </div>




  )
};

export default Production;
