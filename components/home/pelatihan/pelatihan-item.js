import Image from 'next/image';
import Link from 'next/link';
import { LocationMarkerIcon } from '@heroicons/react/outline';

// commons function
import timeSince from '../../../commons/time-since';
import addDotEveryThreeDigits from '../../../commons/add-dot';

// image
import DropBox from '../../../assets/images/home/company-logo/Adobe.svg';
import PelatihanImg from '../../../assets/images/home/pelatihan/pelatihan-1.png';

const PelatihanCarousel = ({ id, company_id, title, description, requirement, additional_requirement, city, price, is_online, created_at, updated_at, company }) => {
  return (
    <Link href={{ pathname: 'pelatihan/', query: { id } }}>
      <div className='p-5 bg-white rounded-[20px] mb-[-10px] flex flex-col justify-between cursor-pointer'>
        <div>
          <div className='flex justify-between mb-[10px]'>
            <div className='flex items-center'>
              <LocationMarkerIcon className='stroke-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
              <h3 className='text-tl-md w-full'>{city}</h3>
            </div>
            <div className={`px-[6px] py-1 text-gray ${is_online ? 'bg-light-blue' : 'bg-[#FFCCCC]'} rounded`}>{is_online ? 'Online' : 'Offline'}</div>
          </div>
          <div className='mb-[10px] rounded-[10px] overflow-clip'>
            <div className='block h-[200px] w-full relative'>
              <Image src={PelatihanImg} alt='' layout='fill' objectFit='cover'></Image>
            </div>
          </div>
          <h2 className='text-tl-lg font-bold mb-[10px]'>{title}</h2>
          <p className='text-tl-sm font-bold mb-[10px]'>Rp{addDotEveryThreeDigits(price)}</p>
        </div>
        <div className='flex justify-between items-center '>
          <div className='flex-auto block h-[30px] w-full relative'>
            <img src={`${process.env.NEXT_PUBLIC_API_BASE}/${company.company_logo_big}`} className='h-[30px]' alt={`${company} logo`}></img>
          </div>
          <p className='text-lb-md text-gray flex-none'>{timeSince(new Date(created_at))}</p>
        </div>
      </div>
    </Link>
  );
};

export default PelatihanCarousel;
