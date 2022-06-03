// next
import Head from 'next/head';
import Image from 'next/image';

// custom components
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';
import LowonganPekerjaanItem from '../../components/home/lowongan-pekerjaan/lowongan-pekerjaan-item';

// icons
import { BriefcaseIcon, SearchIcon, LocationMarkerIcon, HomeIcon } from '@heroicons/react/solid';
import DropBox from '../../assets/images/home/company-logo/dropbox.svg';
import Loker from '../../assets/images/lowongan-pekerjaan/loker.png';

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
            <aside className='w-[343px] flex-none drop-shadow-c h-screen sticky top-0 overflow-auto mr-3 grid grid-cols-1 gap-5 rounded-[20px]'>
              {jobs.map((job, index) => (
                <LowonganPekerjaanItem key={index} id={job.id} title={job.title} company={job.company} companyIcon={job.companyIcon} location={job.location} workFrom={job.workFrom} salary={job.salary} createdAt={job.createdAt} />
              ))}
            </aside>

            {/* Details */}
            <div className='flex-auto bg-white drop-shadow-c ml-3 px-10 py-[50px] grid grid-cols-1 gap-[30px] '>
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
                  {detailPekjerjaan.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className='grid grid-cols-1 gap-[10px]'>
                <h1 className='text-tl-lg font-bold'>Requirements</h1>
                <ul className='list-disc ml-7'>
                  {detailPekjerjaan.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className='block h-[315px] relative rounded-[10px] overflow-clip'>
                <Image src={Loker} alt='' layout='fill' objectFit='cover' objectPosition='left center'></Image>
              </div>

              {/* Lamar */}
              <div className='flex justify-center'>
                <button className='p-[10px] bg-blue text-white w-fit rounded mt-5'>Lamar Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer menus={menus} />
    </div>
  );
};

const detailPekjerjaan = `Gather, understand and evaluate user requirements based on business objective and analytics tools in collaboration with Product Owner (PO)/ stakeholders/ related working units
Illustrate design ideas and translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.
Design and deliver wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interfaces
UI/UX maintenance and troubleshooting
Adhere to style standards on fonts, colors and images and make sure all the design comply with brand guidelines`;

export default LowonganPekerjaan;
