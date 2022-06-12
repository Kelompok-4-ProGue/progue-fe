import Image from 'next/image';
import Link from 'next/link';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import timeSince from '../../../commons/time-since';
import addDotEveryThreeDigits from '../../../commons/add-dot';

// image
import DropBox from '../../../assets/images/home/company-logo/dropbox.svg';

const LowonganPekerjaanItem = ({ additional_requirement, category, city, company, company_id, created_at, description, id, position, requirement, salary, updated_at }) => {
  return (
    <Link href={{ pathname: 'lowongan-pekerjaan/', query: { id } }}>
      <div className='p-5 bg-white rounded-[20px] pb-[-10px] flex flex-col justify-between cursor-pointer'>
        <div>
          <div className='flex justify-between pb-[10px]'>
            <div className='flex items-center'>
              <LocationMarkerIcon className='stroke-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
              <h3 className='text-tl-md w-full'>{city}</h3>
            </div>
            <div className={`px-[6px] py-1 text-gray ${category === 'WFH' ? 'bg-light-blue' : category === 'WFO' ? 'bg-[#FFCCCC]' : 'bg-[#DCCCFF]'} rounded`}>{category}</div>
          </div>
          <h2 className='text-tl-lg font-bold pb-[10px]'>{position}</h2>
          <p className='text-tl-sm font-bold pb-[10px]'>{`Rp${addDotEveryThreeDigits(salary)}`}</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex-auto block h-[30px] w-full relative'>
            <img src={`${process.env.NEXT_PUBLIC_API_BASE}/${company.company_logo_big}`} className='h-[30px]' alt={`${company} logo`}></img>
          </div>
          <p className='text-lb-md text-gray flex-none'>{timeSince(new Date(created_at))}</p>
        </div>
      </div>
    </Link>
  );
};

export default LowonganPekerjaanItem;
