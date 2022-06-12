// next
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// custom components
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';

// icons
import { UploadIcon } from '@heroicons/react/outline';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import DropBox from '../../assets/images/home/company-logo/dropbox.svg';

// react
import { useState, useCallback, useEffect } from 'react';

// commons
import addDotEveryThreeDigits from '../../commons/add-dot';

const FormLamar = () => {
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
    <div className='flex flex-col min-h-full items-center'>
      <Head>
        <title>Lamar | Progue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppBar menus={menus} />

      <main className='w-full'>
        <div className='w-full bg-light-white flex justify-center'>
          <div className='w-full max-w-ds h-full py-[50px] flex justify-center'>
            {/* Details */}
            <div className='flex-auto bg-white drop-shadow-c px-10 py-[50px] grid grid-cols-1 gap-[30px] '>
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

              <hr className='divide-gray' />

              {/* Text Area */}
              <textarea className='bg-[#E6EDF3] text-lb-lg text-gray rounded-[10px] px-[25px] py-[15px] focus:border-blue-600 focus:outline-none' rows='5' placeholder='Motivation Letter'></textarea>

              <div className='flex justify-center items-center w-full'>
                <label htmlFor='dropzone-CV' className='px-[25px] py-[15px] bg-light-blue text-blue rounded-[10px] w-full cursor-pointer h-20 border-2 border-dashed border-blue'>
                  <div className='flex flex-row items-center justify-center h-full'>
                    <UploadIcon className='h-5 w-5 mr-3 stroke-blue'></UploadIcon>
                    <p className='text-lb-lg text-blue-500 dark:text-blue-400'>Upload CV (.pdf)</p>
                  </div>
                  <input id='dropzone-CV' type='file' className='hidden' accept='application/pdf' />
                </label>
              </div>

              <div className='flex justify-center items-center w-full'>
                <label htmlFor='dropzone-porto' className='px-[25px] py-[15px] bg-light-blue text-blue rounded-[10px] w-full cursor-pointer h-20 border-2 border-dashed border-blue'>
                  <div className='flex flex-row items-center justify-center h-full'>
                    <UploadIcon className='h-5 w-5 mr-3 stroke-blue'></UploadIcon>
                    <p className='text-lb-lg text-blue-500 dark:text-blue-400'>Upload Portofolio (.pdf)</p>
                  </div>
                  <input id='dropzone-porto' type='file' className='hidden' accept='application/pdf' />
                </label>
              </div>

              {/* Lamar */}
              <button className='p-[10px] bg-blue text-white rounded'>Lamar Sekarang</button>
            </div>
          </div>
        </div>
      </main>

      <Footer menus={menus} />
    </div>
  );
};

export default FormLamar;
