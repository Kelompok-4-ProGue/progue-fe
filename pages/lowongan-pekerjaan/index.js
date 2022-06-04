// next
import Head from 'next/head';

// custom components
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';
import LowonganPekerjaanItem from '../../components/home/lowongan-pekerjaan/lowongan-pekerjaan-item';
import LowonganPekerjaanDetails from '../../components/lowongan-pekerjaan/lowongan-pekerjaan-details';

// icons
import { BriefcaseIcon, SearchIcon, LocationMarkerIcon, HomeIcon } from '@heroicons/react/solid';

// data
import jobs from '../../data/jobs';

const LowonganPekerjaan = () => {
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
              {jobs.map((job, index) => (
                <LowonganPekerjaanItem key={index} id={job.id} title={job.title} company={job.company} companyIcon={job.companyIcon} location={job.location} workFrom={job.workFrom} salary={job.salary} createdAt={job.createdAt} />
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
