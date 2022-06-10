import Image from 'next/image';
import { LocationMarkerIcon } from '@heroicons/react/outline';

// commons function
import timeSince from '../../commons/time-since';
import addDotEveryThreeDigits from '../../commons/add-dot';

// image
import DropBox from '../../assets/images/home/company-logo/dropbox.svg';

const PelatihanKerjaItem = ({ iid, company_id, title, description, requirement, additional_requirement, city, price, is_online, created_at, updated_at, company }) => {
  return (
    <div className='p-5 bg-white rounded-[20px] pb-[-10px]'>
      <div className='flex justify-between pb-[10px]'>
        <div className='flex items-center'>
          <LocationMarkerIcon className='stroke-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
          <h3 className='text-tl-md w-full'>{city}</h3>
        </div>
        <div className={`px-[6px] py-1 text-gray ${is_online ? 'bg-light-blue' : 'bg-[#FFCCCC]'} rounded`}>{is_online ? 'Online' : 'Offline'}</div>
      </div>
      <h2 className='text-tl-lg font-bold pb-[10px]'>{title}</h2>
      <p className='text-tl-sm font-bold pb-[10px]'>Rp{addDotEveryThreeDigits(price)}</p>
      <div className='flex justify-between items-center'>
        <div className='flex-auto block h-[30px] w-full relative'>
          <Image src={DropBox} alt='' layout='fill' objectFit='contain' objectPosition='left center'></Image>
        </div>
        <p className='text-lb-md text-gray flex-none'>{timeSince(new Date(created_at))}</p>
      </div>
    </div>
  );
};

export default PelatihanKerjaItem;
