import Image from 'next/image';
import Link from 'next/link';
import CVMakerExample from '../../../assets/images/home/cv-maker-example.png';

const CVMakerHero = () => {
  return (
    <div className='relative'>
      {/* CVMakerHero */}
      <div className='w-full bg-white-blue flex items-center justify-center py-32'>
        <div className='max-w-ds flex w-full'>
          <div className='flex-auto flex flex-col justify-center'>
            <h1 className='text-ds-lg font-bold mb-[10px]'>
              CV ATS Friendly <br />
              <span className='text-blue'>Maker</span>
            </h1>
            <Link href='/'>
              <a className='p-[10px] bg-blue text-white w-fit rounded mt-5'>Buat CV Anda</a>
            </Link>
          </div>
          <div className='flex-none flex items-center -m-[86px]'>
            <Image src={CVMakerExample} alt='' layout='intrinsic' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVMakerHero;
