import Image from 'next/image';
import { LocationMarkerIcon } from '@heroicons/react/outline';

// image
import DropBox from '../../../assets/images/home/company-logo/Adobe.svg';
import PelatihanImg from '../../../assets/images/home/pelatihan/pelatihan-1.png';

const PelatihanCarousel = ({ id, title, courseOwner, courseOwnerIcon, createdAt, price, location, online }) => {
  return (
    <div className='p-5 bg-white rounded-[20px] mb-[-10px]'>
      <div className='flex justify-between mb-[10px]'>
        <div className='flex items-center'>
          <LocationMarkerIcon className='stroke-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
          <h3 className='text-tl-md w-full'>{location}</h3>
        </div>
        <div className={`px-[6px] py-1 text-gray ${online ? 'bg-light-blue' : 'bg-[#FFCCCC]'} rounded`}>{online ? 'Online' : 'Offline'}</div>
      </div>
      <div className='mb-[10px] rounded-[10px] overflow-clip'>
        <div className='block h-[200px] w-full relative'>
          <Image src={PelatihanImg} alt='' layout='fill' objectFit='cover'></Image>
        </div>
      </div>
      <h2 className='text-tl-lg font-bold mb-[10px]'>{title}</h2>
      <p className='text-tl-sm font-bold mb-[10px]'>{price}</p>
      <div className='flex justify-between items-center '>
        <div className='flex-auto block h-[30px] w-full relative'>
          <Image src={DropBox} alt='' layout='fill' objectFit='contain' objectPosition='left center'></Image>
        </div>
        <p className='text-lb-md text-gray flex-none'>{createdAt}</p>
      </div>
    </div>
  );
};

export default PelatihanCarousel;
