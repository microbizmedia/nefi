'use client'
import { useTranslation } from 'react-i18next';
import ProductsSwiper from '../components/productsSwiper';
import { ChevronRight } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();
  return (



    <div className="w-full flex justify-center h-[600px] mt-40">
      <div className="relative w-[1600px] max-w-none">
        <div className="absolute left-1/2 -translate-x-1/2 w-[1600px]"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Place content here that should stay in 1200px bounds */}
          <div className='flex justify-between mt-20 global-container'>
            <h2>{t('productsHeader')}</h2>
             <a href="#" className="text-blue-400 flex items-center "> Show all products <ChevronRight  strokeWidth={1.3}/></a>
          </div>

          <ProductsSwiper />
        </div>
      </div>
    </div>



  )
};

export default Products;
