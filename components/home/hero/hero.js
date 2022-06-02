import Image from 'next/image';
import HomeMen from '../../../assets/images/home/home-men.png';
import { SearchIcon, BriefcaseIcon } from '@heroicons/react/outline';

// Image
import AdobeLogo from '../../../assets/images/home/company-logo/Adobe.svg';
import AmazonLogo from '../../../assets/images/home/company-logo/Amazon.svg';
import GoogleLogo from '../../../assets/images/home/company-logo/Google.svg';
import GithubLogo from '../../../assets/images/home/company-logo/Github.svg';
import NetflixLogo from '../../../assets/images/home/company-logo/Netflix.svg';

const Hero = () => {
  return (
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
              <Image src={HomeMen} alt='Login' height={654} width={601.38} className='z-0' priority={true} />
            </div>
          </div>
        </div>
      </div>
      {/* Popup Company */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
        <div className='drop-shadow-c flex w-full bg-white rounded-[10px] overflow-clip'>
          <div className='px-6 py-[15px] text-tl-lg flex item-center font-bold w-56'>
            Perusahaan
            <br />
            Ternama
          </div>
          <div className='py-[15px] flex'>
            <div className='px-6 flex item-center justify-center'>
              <Image src={AdobeLogo} layout='intrinsic' alt=''></Image>
            </div>
            <div className='px-6 flex item-center justify-center'>
              <Image src={AmazonLogo} layout='intrinsic' alt=''></Image>
            </div>
            <div className='px-6 flex item-center justify-center'>
              <Image src={GoogleLogo} layout='intrinsic' alt=''></Image>
            </div>
            <div className='px-6 flex item-center justify-center'>
              <Image src={GithubLogo} layout='intrinsic' alt=''></Image>
            </div>
            <div className='px-6 flex item-center justify-center'>
              <Image src={NetflixLogo} layout='intrinsic' alt=''></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
