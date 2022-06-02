import Image from 'next/image';
import { LocationMarkerIcon } from '@heroicons/react/outline';

// image
import DropBox from '../../../assets/images/home/company-logo/Adobe.svg';
import PelatihanImg from '../../../assets/images/home/pelatihan/pelatihan-1.png';

const PelatihanCarousel = ({ id, title, courseOwner, courseOwnerIcon, createdAt, price, location, online }) => {
  return (
    <div className='p-5 bg-white rounded-[20px] pb-[-10px]'>
      <div className='flex justify-between pb-[10px]'>
        <div className='flex items-center'>
          <LocationMarkerIcon className='stroke-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
          <h3 className='text-tl-md w-full'>{location}</h3>
        </div>
        <div className={`px-[6px] py-1 text-gray ${online ? 'bg-light-blue' : 'bg-[#FFCCCC]'} rounded`}>{online ? 'Online' : 'Offline'}</div>
      </div>
      <div className='pb-[10px]'>
        <div className='h-[200px] w-full relative'>
          <Image src={PelatihanImg} alt='' layout='fill' objectFit='contain'></Image>
        </div>
      </div>
      <h2 className='text-tl-lg font-bold pb-[10px]'>{title}</h2>
      <p className='text-tl-sm font-bold pb-[10px]'>{price}</p>
      <div className='flex justify-between items-center h-[30px]'>
        <Image src={DropBox} alt='' layout='fixed' width='100%' height='100%' objectFit='contain'></Image>
        <p className='text-lb-md text-gray'>{createdAt}</p>
      </div>
    </div>
  );
};

export default PelatihanCarousel;
