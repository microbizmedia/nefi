'use client'
import { useTranslation } from 'react-i18next';


const Certificates = () => {
  const { t } = useTranslation();
  return (

    <div className='global-container mt-24 scroll-mt-40' id='certificates'>
      <h2>{t('Certified Precision')}</h2>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 mx-auto mt-8">
        <div className="bg-[#e3e3e3] h-[280px] p-10">
          <img
            src="/icons/progenz.png"
            alt="Description"
            className="object-cover mb-8"
          />
          <h2 className='mb-3'>{t('Progenz Certified')}</h2>
          <p>{t('Ensuring safe and compliant work environments')}</p>
        </div>
        <div className="bg-[#e3e3e3] h-[280px] p-10">
          <img
            src="/icons/FairWear.svg"
            alt="Description"
            className=" h-24 object-cover mb-8"
          />
          <h2 className='mb-3'>{t('FairWear Certified')}</h2>
          <p>{t('Committed to fair labor practices in textile production')}</p>
        </div>
        <div className="bg-[#e3e3e3] h-[280px] p-10">
          <img
            src="/icons/stitch.webp"
            alt="Description"
            className="h-24 object-cover mb-8"
          />
          <h2 className='mb-3'>{t('Stitch Certified')}</h2>
          <p>{t('Promoting sustainable textile initiatives')}</p>
        </div>
        <div className="bg-[#e3e3e3] h-[280px] p-10">
          <img
            src="/icons/ISO9001.jpg"
            alt="Description"
            className="h-24 object-cover mb-8"
          />
          <h2 className='mb-3'>{t('IOS Certified')}</h2>
          <p>{t('Adhering to international quality management standards')}</p>
        </div>
      </div>
    </div>




  )
};

export default Certificates;
