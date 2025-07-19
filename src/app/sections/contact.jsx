'use client'
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  return (

    <div className='global-container mt-24 scroll-mt-36 ' id='contact'>
      <h2>{t('Contact us')}</h2>
      <div className="bg-[#e3e3e3] flex flex-col-reverse md:flex-row justify-between mx-auto mt-8 overflow-hidden">
        <div className='ml-5 my-15 sm:ml-20'>
            <h3 className='font-semibold'>{t('FAQ and support')}</h3>
            <a href="#" className="text-[#05266b] flex items-center mt-3 mb-6 gap-x-2"> 
              <img
                src="/icons/email.png"
                alt="Description"
                className="w-6 h-4 object-cover"
              />{t('info@nefi.com')} </a>
            <h3  className='font-semibold' >{t('Chief Executive Officer')}</h3>
            <a href="#" className="text-[#05266b] flex items-center mt-3 gap-x-2">  <img
                src="/icons/email.png"
                alt="Description"
                className="w-6 h-4 object-cover"
              />{t('ristovski.david@nefi.com')} </a>
            <a href="#" className="text-[#05266b] flex items-center  mt-2 mb-6 gap-x-2">  <img
                src="/icons/phone.png"
                alt="Description"
                className="w-5 h-5 object-cover"
              />{t('+389 33 411 787')}</a>
            <h3  className='font-semibold'>{t('Chief Operating Officer')}</h3>
            <a href="#" className="text-[#05266b] flex items-center mt-3 gap-x-2">  <img
                src="/icons/email.png"
                alt="Description"
                className="w-6 h-4 object-cover"
              />{t('ristovski.david@nefi.com')} </a>
            <a href="#" className="text-[#05266b] flex items-center mt-2 gap-x-2">  <img
                src="/icons/phone.png"
                alt="Description"
                className="w-5 h-5 object-cover"
              />{t('+389 75 412 788')} </a>
        </div>

         <img
            src="/logo.png"
            alt="Description"
            className="object-cover h-20 m-auto ml-5 sm:ml-20 md:ml-auto  mt-20 md:mt-auto"
          />
      </div>
    </div>




  )
};

export default Contact;
