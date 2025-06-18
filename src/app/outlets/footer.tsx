'use client'
import { useTranslation } from 'react-i18next';
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative  m-auto w-full bg-[#303030] overflow-hidden text-[#ffffffe8]" id="footer">
      <div className='global-container'>
        <div className="flex lg:justify-between flex-wrap gap-8 py-14 ">

          <p className="text-normal text-[2rem] pb-2">{t('heroHeader')}</p>




          <div ></div>


        </div>
        <div className="">
          <ul className="flex flex-wrap gap-8 pb-14 text-xl">
            <Link href="/" ><li>{t('Home')}</li></Link>
            <Link href="/" ><li>{t('Products')}</li></Link>
            <Link href="/" ><li>{t('Company')}</li></Link>
            <Link href="/" ><li>{t('Contact')}</li></Link>
          </ul>
        </div>
        <div className='h-[1px] w-full bg-[#ffffffe8] opacity-25' />
        {/* Footer Bottom */}
        <div className=' pt-8 pb-12  text-md flex justify-between'>
          <p>© Nefi Doel Delchevo {new Date().getFullYear()} </p>
          <p >Designed by MicroBiz Media LLC ©</p>
        </div>


        {/* Footer Bottom */}
      </div>


    </footer >

  );
};

export default Footer;
