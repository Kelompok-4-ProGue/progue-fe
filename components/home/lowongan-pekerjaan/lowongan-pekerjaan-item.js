import Image from 'next/image';
import { LocationMarkerIcon } from '@heroicons/react/outline';

// image
import DropBox from '../../../assets/images/home/company-logo/dropbox.svg';

const LowonganPekerjaanItem = ({ id, title, company, companyIcon, location, workFrom, salary, createdAt }) => {
  return (
    <div className='p-5 bg-white rounded-[20px] pb-[-10px]'>
      <div className='flex justify-between pb-[10px]'>
        <div className='flex items-center'>
          <LocationMarkerIcon className='stroke-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
          <h3 className='text-tl-md w-full'>{location}</h3>
        </div>
        <div className={`px-[6px] py-1 text-gray ${workFrom === 'WFH' ? 'bg-light-blue' : workFrom === 'WFO' ? 'bg-[#FFCCCC]' : 'bg-[#DCCCFF]'} rounded`}>{workFrom}</div>
      </div>
      <h2 className='text-tl-lg font-bold pb-[10px]'>{title}</h2>
      <p className='text-tl-sm font-bold pb-[10px]'>{salary}</p>
      <div className='flex justify-between items-center'>
        <Image src={DropBox} alt='' layout='intrinsic'></Image>
        <p className='text-lb-md text-gray'>{createdAt}</p>
      </div>
    </div>
  );
};

export default LowonganPekerjaanItem;
