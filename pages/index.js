import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AppBar from '../components/app-bar';
import Footer from '../components/footer';
import menus from '../data/menus';
import HomeMen from '../assets/images/home/home-men.png';
import { SearchIcon, BriefcaseIcon, LocationMarkerIcon } from '@heroicons/react/outline';

// Image
import Company0 from '../assets/images/home/company-logo/Company logo.svg';
import Company1 from '../assets/images/home/company-logo/Company logo-1.svg';
import Company2 from '../assets/images/home/company-logo/Company logo-2.svg';
import Company3 from '../assets/images/home/company-logo/Company logo-3.svg';
import Company4 from '../assets/images/home/company-logo/Company logo-4.svg';

export default function Home() {
  return (
    <div className='flex flex-col min-h-full items-center'>
      <Head>
        <title>Login | Progue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppBar menus={menus} active='Login' />

      <main className='w-full'>
        {/* Hero And Popup Company */}
        <div className='relative'>
          {/* Hero */}
          <div className='h-[702px] w-full bg-light-blue flex items-end justify-center '>
            <div className='flex items-end justify-center w-full max-w-ds h-full '>
              <div className='flex items-end justify-start flex-1 h-full max-w-ds'>
                <div className='h-full flex items-center justify-center flex-auto max-w-[560px]'>
                  <div className='flex flex-col w-full'>
                    <div className='mb-[19px]'>
                      <h1 className='text-ds-lg font-bold'>
                        Temukan <span className='text-blue'>Karirmu</span>
                      </h1>
                      <p className='text-hl-md font-normal'>Cari pekerjaan sesuai pilihan karirmu</p>
                    </div>
                    <div className='flex rounded-[10px] overflow-clip mb-[19px]'>
                      <div className='px-[25px] flex border-gray/50 bg-white text-gray border-r items-center justify-center flex-auto'>
                        <BriefcaseIcon className='w-5 h-5 stroke-gray mr-2'></BriefcaseIcon>
                        <input required placeholder='Posisi/Jabatan' type='text' className='py-[15px] bg-transparent focus:outline-none w-full' />
                      </div>
                      <div className='px-[25px] flex border-gray/50 bg-white text-gray border-r items-center justify-center flex-auto'>
                        <BriefcaseIcon className='w-5 h-5 stroke-gray mr-2'></BriefcaseIcon>
                        <input required placeholder='Lokasi' type='text' className='py-[15px] bg-transparent focus:outline-none w-full' />
                      </div>
                      <button className='bg-blue text-white font-bold py-[15px] px-[25px] hover:bg-blue-dark focus:outline-none focus:shadow-outline flex-none'>
                        <SearchIcon className='h-5 w-5'></SearchIcon>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex-none flex justify-end w-[607.67px] mr-[-65px]'>
                  <Image src={HomeMen} alt='Login' height={654} width={601.38} className='z-0' />
                </div>
              </div>
            </div>
          </div>
          {/* Popup Company */}
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-11'>
            <div className='drop-shadow-c flex w-full bg-white rounded-[10px] overflow-clip'>
              <div className='px-6 py-[15px] text-tl-lg flex item-center font-bold w-56'>
                Perusahaan
                <br />
                Ternama
              </div>
              <div className='py-[15px] flex'>
                <div className='px-6 flex item-center justify-center'>
                  <Image src={Company0} layout='intrinsic' alt=''></Image>
                </div>
                <div className='px-6 flex item-center justify-center'>
                  <Image src={Company1} layout='intrinsic' alt=''></Image>
                </div>
                <div className='px-6 flex item-center justify-center'>
                  <Image src={Company2} layout='intrinsic' alt=''></Image>
                </div>
                <div className='px-6 flex item-center justify-center'>
                  <Image src={Company3} layout='intrinsic' alt=''></Image>
                </div>
                <div className='px-6 flex item-center justify-center'>
                  <Image src={Company4} layout='intrinsic' alt=''></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lowongan pekerjaan */}
        <div className='w-full bg-light-white flex items-end justify-center'>
          <div className='w-full max-w-ds h-full pt-36 pb-20'>
            <div className='flex justify-between items-center'>
              <h1 className='text-ds-sm font-bold'>
                Lowongan <span className='text-blue'>Pekerjaan</span>
              </h1>
              <Link href='/lowongan-pekerjaan'>
                <a className='text-blue text-tl-lg'>Lihat Semua</a>
              </Link>
            </div>
            <div className='my-10 grid grid-cols-3 gap-10'>
              <div className='p-5 bg-white rounded-[20px] drop-shadow-c'>
                <div className='flex justify-between'>
                  <div className='flex items-center'>
                    <LocationMarkerIcon className='stroke-blue h-6 w-6 mr-[2px]'></LocationMarkerIcon>
                    <h3 className='text-tl-md w-full'>Jakarta, Indonesia</h3>
                  </div>
                  <div className='px-[6px] py-1 text-gray bg-light-blue rounded'>WFH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer menus={menus} />
    </div>
  );
}
