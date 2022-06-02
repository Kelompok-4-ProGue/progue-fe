import Image from 'next/image';
import PelatihanGirl from '../../../assets/images/home/pelatihan-girl.png';

const PelatihanHero = () => {
  return (
    <div className='relative'>
      {/* PelatihanHero */}
      <div className='w-full bg-white flex items-center justify-center'>
        <div className='max-w-ds flex w-full'>
          <div className='flex-auto flex flex-col justify-center'>
            <h1 className='text-ds-lg font-bold mb-[10px]'>
              Aasah <span className='text-blue'>Skillmu</span>
            </h1>
            <p className='text-hl-md font-normal'>
              Ikuti pelatihan kerja dan
              <br /> raih sertifikasi profesional
            </p>
          </div>
          <div className='flex-none flex items-center'>
            <Image src={PelatihanGirl} alt='' layout='intrinsic' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PelatihanHero;
