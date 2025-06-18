'use client'
import { useTranslation } from 'react-i18next';


const Certificates = () => {
  const { t } = useTranslation();
  return (

    <div className='global-container mt-24 scroll-mt-40' id='certificates'>
      <h2>Certified Precision</h2>
      <div className="grid grid-cols-2 gap-6 mx-auto mt-8">
        <div className="bg-[#e3e3e3] h-[280px] p-10">
          <img
            src="/icons/progenz.png"
            alt="Description"
            className="object-cover mb-8"
          />
          <h2 className='mb-3'>Progenz Certified</h2>
          <p>Safe work enviroments</p>
        </div>
        <div className="bg-[#e3e3e3] h-[280px] p-10">
          <img
            src="/icons/FairWear.svg"
            alt="Description"
            className=" h-24 object-cover mb-8"
          />
          <h2 className='mb-3'>Fair Wear Certified</h2>
          <p>Fair working conditions in the textile industry</p>
        </div>
        <div className="bg-[#e3e3e3] h-[280px] p-10">
          <img
            src="/icons/stitch.webp"
            alt="Description"
            className="h-24 object-cover mb-8"
          />
          <h2 className='mb-3'>Stitch Certified</h2>
          <p>Sustainable textile initiative</p>
        </div>
        <div className="bg-[#e3e3e3] h-[280px] p-10">
          <img
            src="/icons/ISO9001.jpg"
            alt="Description"
            className="h-24 object-cover mb-8"
          />
          <h2 className='mb-3'>ISO Certified</h2>
          <p>Consistent quality managment systems</p>
        </div>
      </div>
    </div>




  )
};

export default Certificates;
