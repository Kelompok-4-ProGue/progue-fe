// next
import Image from 'next/image';

// icons
import { LocationMarkerIcon } from '@heroicons/react/solid';
import DropBox from '../../assets/images/home/company-logo/dropbox.svg';
import Loker from '../../assets/images/lowongan-pekerjaan/loker.png';

// dummy
const detailPelatihan = `Gather, understand and evaluate user requirements based on business objective and analytics tools in collaboration with Product Owner (PO)/ stakeholders/ related working units
Illustrate design ideas and translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.
Design and deliver wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interfaces
UI/UX maintenance and troubleshooting
Adhere to style standards on fonts, colors and images and make sure all the design comply with brand guidelines`;

const PelatihanKerjaDetails = () => {
  return (
    <div className='flex-auto bg-white drop-shadow-c ml-3 px-10 py-[50px] grid grid-cols-1 gap-[30px] '>
      {/* Image */}
      <div className='block h-[315px] relative rounded-[10px] overflow-clip'>
        <Image src={Loker} alt='' layout='fill' objectFit='cover' objectPosition='left center'></Image>
      </div>

      {/* Head */}
      <div className='grid grid-cols-1 gap-[10px]'>
        <div className={`px-[6px] py-1 text-gray bg-light-blue rounded w-fit`}>WFH</div>
        <div className='block h-[50px] relative'>
          <Image src={DropBox} alt='' layout='fill' objectFit='contain' objectPosition='left center'></Image>
        </div>
        <h1 className='text-tl-lg font-bold'>UI/UX Designer</h1>
        <h2 className='text-tl-lg font-normal'>Dropbox</h2>
        <div className='flex items-center'>
          <LocationMarkerIcon className='fill-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
          <h3 className='text-tl-md font-medium w-full'>Jakarta, Indonesia</h3>
        </div>
        <p className='text-tl-md text-black font-medium'>5-10 Juta</p>
      </div>

      {/* Desc */}
      <div className='grid grid-cols-1 gap-[10px]'>
        <h1 className='text-tl-lg font-bold'>Deskripsi Pekerjaan</h1>
        <ul className='list-disc ml-7'>
          {detailPelatihan.split('\n').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className='grid grid-cols-1 gap-[10px]'>
        <h1 className='text-tl-lg font-bold'>Requirements</h1>
        <ul className='list-disc ml-7'>
          {detailPelatihan.split('\n').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Daftar */}
      <div className='flex justify-center'>
        <button className='p-[10px] bg-blue text-white w-fit rounded'>Daftar Sekarang</button>
      </div>
    </div>
  );
};

export default PelatihanKerjaDetails;
