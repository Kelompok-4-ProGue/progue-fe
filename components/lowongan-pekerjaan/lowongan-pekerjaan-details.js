// next
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

// icons
import { LocationMarkerIcon } from '@heroicons/react/solid';
import DropBox from '../../assets/images/home/company-logo/dropbox.svg';
import Loker from '../../assets/images/lowongan-pekerjaan/loker.png';

// react
import { useState, useCallback, useEffect } from 'react';

// commons
import addDotEveryThreeDigits from '../../commons/add-dot';

const LowonganPekerjaanDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [jobData, setJobData] = useState({ description: '', requirement: '', additional_requirement: '' });

  const getJob = useCallback(async (id) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    try {
      const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/job-vacancy/${id}`, requestOptions);
      const responeJson = await respone.json();

      if (respone.ok) {
        setJobData(responeJson.data);
        console.log(responeJson.data);
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

  if (!id) {
    return (
      <div className='flex-auto bg-white drop-shadow-c ml-3 px-10 py-[50px] grid grid-cols-1 gap-[30px] '>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className='flex-auto bg-white drop-shadow-c ml-3 px-10 py-[50px]'>
      <div className='grid grid-cols-1 gap-[30px]'>
        {/* Head */}
        <div className='grid grid-cols-1 gap-[10px]'>
          <div className={`px-[6px] py-1 text-gray ${jobData.category === 'WFH' ? 'bg-light-blue' : jobData.category === 'WFO' ? 'bg-[#FFCCCC]' : 'bg-[#DCCCFF]'} rounded w-fit`}>{jobData.category}</div>
          <div className='block h-[50px] relative'>
            <Image src={DropBox} alt='' layout='fill' objectFit='contain' objectPosition='left center'></Image>
          </div>
          <h1 className='text-tl-lg font-bold'>{jobData.position}</h1>
          <h2 className='text-tl-lg font-normal'>{jobData.company}</h2>
          <div className='flex items-center'>
            <LocationMarkerIcon className='fill-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
            <h3 className='text-tl-md font-medium w-full'>{jobData.city}</h3>
          </div>
          <p className='text-tl-md text-black font-medium'>Rp{addDotEveryThreeDigits(jobData.salary ?? 0)}</p>
        </div>

        {/* Desc */}
        <div className='grid grid-cols-1 gap-[10px]'>
          <h1 className='text-tl-lg font-bold'>Deskripsi Pekerjaan</h1>
          <ul className='list-disc ml-7'>
            {jobData.description.split('\n').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className='grid grid-cols-1 gap-[10px]'>
          <h1 className='text-tl-lg font-bold'>Requirements</h1>
          <ul className='list-disc ml-7'>
            {jobData.requirement.split('\n').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Additional Requirements */}
        {jobData.additional_requirement ? (
          <div className='grid grid-cols-1 gap-[10px]'>
            <h1 className='text-tl-lg font-bold'>Additional Requirements</h1>
            <ul className='list-disc ml-7'>
              {jobData.additional_requirement.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}

        {/* Image */}
        <div className='block h-[315px] relative rounded-[10px] overflow-clip'>
          <Image src={Loker} alt='' layout='fill' objectFit='cover' objectPosition='left center'></Image>
        </div>

        {/* Lamar */}
        <div className='flex justify-center'>
          <Link href={{ pathname: 'lowongan-pekerjaan/lamar', query: { id } }}>
            <button className='p-[10px] bg-blue text-white w-fit rounded'>Lamar Sekarang</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LowonganPekerjaanDetails;
