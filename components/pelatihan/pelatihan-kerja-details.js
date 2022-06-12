// next
import Image from 'next/image';
import { useRouter } from 'next/router';

// common function
import addDotEveryThreeDigits from '../../commons/add-dot';

// icons
import { LocationMarkerIcon } from '@heroicons/react/solid';
import DropBox from '../../assets/images/home/company-logo/dropbox.svg';
import Loker from '../../assets/images/lowongan-pekerjaan/loker.png';

// react
import { useState, useCallback, useEffect } from 'react';

const PelatihanKerjaDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState({ description: '', requirement: '', additional_requirement: '' });

  const getJob = useCallback(async (id) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    try {
      const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/job-training/${id}`, requestOptions);
      const responeJson = await respone.json();

      if (respone.ok && responeJson.data) {
        setData(responeJson.data);
      } else {
        console.log('error', responeJson);
      }
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    if (id) {
      getJob(id);
    }
  }, [getJob, id]);

  if (!id || !data.price) {
    return (
      <div className='flex-auto bg-white drop-shadow-c ml-3 px-10 py-[50px] grid grid-cols-1 gap-[30px] '>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className='flex-auto bg-white drop-shadow-c ml-3 px-10 py-[50px]  '>
      <div className='grid grid-cols-1 gap-[30px]'>
        {/* Image */}
        <div className='block h-[315px] relative rounded-[10px] overflow-clip'>
          <Image src={Loker} alt='' layout='fill' objectFit='cover' objectPosition='left center'></Image>
        </div>

        {/* Head */}
        <div className='grid grid-cols-1 gap-[10px]'>
          <div className={`px-[6px] py-1 text-gray ${data.is_online ? 'bg-light-blue' : 'bg-[#FFCCCC]'} rounded w-fit`}>{data.is_online ? 'Online' : 'Offline'}</div>
          <div className='block h-[50px] relative'>
            <Image src={DropBox} alt='' layout='fill' objectFit='contain' objectPosition='left center'></Image>
          </div>
          <h1 className='text-tl-lg font-bold'>{data.title}</h1>
          <h2 className='text-tl-lg font-normal'>{data.company}</h2>
          <div className='flex items-center'>
            <LocationMarkerIcon className='fill-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
            <h3 className='text-tl-md font-medium w-full'>{data.city}</h3>
          </div>
          <p className='text-tl-md text-black font-medium'>Rp{addDotEveryThreeDigits(data.price)}</p>
        </div>

        {/* Desc */}
        <div className='grid grid-cols-1 gap-[10px]'>
          <h1 className='text-tl-lg font-bold'>Deskripsi Pekerjaan</h1>
          <ul className='list-disc ml-7'>
            {data.description.split('\n').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className='grid grid-cols-1 gap-[10px]'>
          <h1 className='text-tl-lg font-bold'>Requirements</h1>
          <ul className='list-disc ml-7'>
            {data.requirement.split('\n').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Additional Requirements */}
        {data.additional_requirement ? (
          <div className='grid grid-cols-1 gap-[10px]'>
            <h1 className='text-tl-lg font-bold'>Additional Requirements</h1>
            <ul className='list-disc ml-7'>
              {data.additional_requirement.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}

        {/* Daftar */}
        <div className='flex justify-center'>
          <button className='p-[10px] bg-blue text-white w-fit rounded'>Daftar Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default PelatihanKerjaDetails;
