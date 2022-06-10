// next
import Head from 'next/head';
import { useRouter } from 'next/router';

// custom components
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';
import LowonganPekerjaanItem from '../../components/home/lowongan-pekerjaan/lowongan-pekerjaan-item';
import LowonganPekerjaanDetails from '../../components/lowongan-pekerjaan/lowongan-pekerjaan-details';

// icons
import { BriefcaseIcon, SearchIcon, LocationMarkerIcon, HomeIcon } from '@heroicons/react/solid';

// react
import { useState, useCallback, useEffect } from 'react';

const LowonganPekerjaan = () => {
  const router = useRouter();
  const { id } = router.query;

  const [jobsData, setJobsData] = useState([]);

  const getJobs = useCallback(
    async (id) => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      try {
        const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/job-vacancy`, requestOptions);
        const responseJson = await respone.json();

        if (respone.ok) {
          setJobsData(responseJson.data);
          console.log(responseJson.data);
          if (!id && !window.location.search) {
            console.log(id);
            _setIdCallback(responseJson.data[0]);
          }
        } else {
          console.log('error', responseJson);
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    [id]
  );

  const _setIdCallback = (data) => {
    console.log('_setIdCallback called');
    console.log(data);
    router.push({
      pathname: 'lowongan-pekerjaan/',
      query: { id: data.id },
    });
  };

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return (
    <div className='flex flex-col min-h-full items-center'>
      <Head>
        <title>Lowongan Pekerjaan | Progue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppBar menus={menus} />

      <main className='w-full'>
        {/* Search Bar */}
        <div className='w-full bg-light-blue flex items-end justify-center'>
          <div className='w-full max-w-ds h-full py-[50px]'>
            {/* Title */}
            <h1 className='text-ds-sm font-bold'>
              Lowongan <span className='text-blue'>Pekerjaan</span>
            </h1>

            {/* Filter & Search */}
            <div className='flex rounded-[10px] overflow-clip my-[30px]'>
              <div className='px-5 flex border-gray/50 bg-white text-gray border-r items-center justify-center flex-auto'>
                <BriefcaseIcon className='w-5 h-5 stroke-gray mr-2'></BriefcaseIcon>
                <input required placeholder='Posisi/Jabatan' type='text' className='py-[15px] bg-transparent focus:outline-none w-full' />
              </div>
              <div className='px-5 flex border-gray/50 bg-white text-gray border-r items-center justify-center flex-auto'>
                <LocationMarkerIcon className='w-5 h-5 stroke-gray mr-2'></LocationMarkerIcon>
                <input required placeholder='Lokasi' type='text' className='py-[15px] bg-transparent focus:outline-none w-full' />
              </div>
              <div className='px-5 flex border-gray/50 bg-white text-gray border-r items-center justify-center flex-auto'>
                <HomeIcon className='w-5 h-5 stroke-gray mr-2'></HomeIcon>
                <input required placeholder='WFH/WFO/Hybrid' type='text' className='py-[15px] bg-transparent focus:outline-none w-full' />
              </div>
              <button className='bg-blue text-white font-bold py-[15px] px-5 hover:bg-blue-dark focus:outline-none focus:shadow-outline flex-none'>
                <SearchIcon className='h-5 w-5'></SearchIcon>
              </button>
            </div>

            {/* Sort */}
            <div className='flex -mr-5'>
              <div className='border-2 border-black py-[10px] px-[25px] text-black text-lb-lg w-fit rounded-[10px] font-medium mr-5'>Gaji</div>
              <div className='border-2 border-black py-[10px] px-[25px] text-black text-lb-lg w-fit rounded-[10px] font-medium mr-5'>Jenis Pekerjaan</div>
              <div className='border-2 border-black py-[10px] px-[25px] text-black text-lb-lg w-fit rounded-[10px] font-medium mr-5'>Tanggal Ditayangkan</div>
              <div className='flex items-center text-black text-lb-lg w-fit font-medium mr-5'>Urut berdasarkan: Tanggal Ditayangkan</div>
            </div>
          </div>
        </div>

        <div className='w-full bg-light-white flex justify-center'>
          <div className='w-full max-w-ds h-full py-[50px] flex justify-center'>
            {/* Select */}
            <aside className='w-[343px] flex-none drop-shadow-c h-screen sticky top-16 overflow-auto mr-3 grid grid-cols-1 gap-5 rounded-[20px]'>
              {jobsData.map((job, index) => (
                <LowonganPekerjaanItem
                  key={index}
                  additional_requirement={job.additional_requirement}
                  category={job.category}
                  city={job.city}
                  company={job.company}
                  company_id={job.company_id}
                  created_at={job.created_at}
                  description={job.description}
                  id={job.id}
                  position={job.position}
                  requirement={job.requirement}
                  salary={job.salary}
                  updated_at={job.updated_at}
                  onClick={() => setSelectedJob(job)}
                />
              ))}
            </aside>

            {/* Details */}
            <LowonganPekerjaanDetails />
          </div>
        </div>
      </main>

      <Footer menus={menus} />
    </div>
  );
};

export default LowonganPekerjaan;
