// next
import Head from 'next/head';
import Image from 'next/image';

// custom components
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';

// icons
import { UploadIcon } from '@heroicons/react/outline';
import { UserIcon } from '@heroicons/react/solid';
import DropBox from '../../assets/images/home/company-logo/dropbox.svg';

const FormLamar = () => {
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
              <div className='flex justify-center items-center w-full'>
                <label htmlFor='dropzone-profile-pic' className='px-[25px] py-[15px] bg-light-blue text-blue rounded-[10px] cursor-pointer h-48 w-48 border-2 border-dashed border-blue'>
                  <div className='flex flex-col items-center justify-center h-full'>
                    <UserIcon className='h-7 w-7 stroke-blue'></UserIcon>
                  </div>
                  <input id='dropzone-profile-pic' type='file' className='hidden' accept='image/png, image/jpeg' />
                </label>
              </div>

              {/* Text Area */}
              <div className='grid grid-cols-2 gap-[30px]'>
                <input required placeholder='Email' type='email' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full' onChange={(event) => {}} />
                <input required placeholder='No. Telepon' type='number' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full' onChange={(event) => {}} />
              </div>
              <input required placeholder='Alamat' type='text' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full' onChange={(event) => {}} />
              <div className='grid grid-cols-2 gap-[30px]'>
                <input required placeholder='Kota' type='text' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full' onChange={(event) => {}} />
                <input required placeholder='Kode Pos' type='number' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full' onChange={(event) => {}} />
              </div>

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
