import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';
import RegisterMen from '../../assets/images/register/register-men.png';
import { useState } from 'react';
import { UploadIcon } from '@heroicons/react/outline';

export default function Register() {
  const [isCompany, setIsCompany] = useState(false);

  return (
    <div className='flex flex-col min-h-full items-center'>
      <Head>
        <title>Register | Progue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppBar menus={menus} active='Register' />

      <main className='w-full'>
        <div className='h-[835px] w-full bg-light-blue flex items-end justify-center'>
          <div className='flex items-end justify-center h-full max-w-[1175px] ml-[-65px]'>
            <div className='flex-none flex justify-end w-[607.67px]'>
              <Image src={RegisterMen} alt='Register' height={782.9} width={607.67} className='flex-none ' />
            </div>
            <div className='h-full flex items-center justify-center ml-[31px] flex-auto'>
              <div className='bg-light-white px-8 py-[50px] flex items-center justify-center flex-col rounded-[20px] w-full'>
                <div className='mb-[19px]'>
                  <h1 className='text-hl-md font-bold text-center'>Daftar</h1>
                  <p className='text-tl-md font-normal text-center'>Mulailah berkarir di perusahaan ternama</p>
                </div>
                <div className='mb-[19px] rounded-xl bg-white-blue flex flex-row overflow-clip'>
                  <div
                    onClick={() => {
                      setIsCompany(false);
                    }}
                    className={`w-32 flex items-center justify-center h-10 text-lb-lg cursor-pointer ${!isCompany ? 'text-white bg-blue' : 'text-gray bg-transparent'}`}
                  >
                    Pelamar
                  </div>
                  <div
                    onClick={() => {
                      setIsCompany(true);
                    }}
                    className={`w-32 flex items-center justify-center h-10 text-lb-lg cursor-pointer ${isCompany ? 'text-white bg-blue' : 'text-gray bg-transparent'}`}
                  >
                    Perusahaan
                  </div>
                </div>

                {isCompany ? (
                  <div className=''>
                    <input required placeholder='Nama Perusahaan' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                    <input required placeholder='Alamat Perusahaan' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                    <input required placeholder='Email Perusahaan' type='email' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                    <input required placeholder='Password' type='password' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                    <input required placeholder='Confirm Password' type='password' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                    <div className='flex justify-center items-center w-full'>
                      <label htmlFor='dropzone-file' className='px-[25px] py-[15px] bg-light-blue text-blue rounded-[10px] w-full mb-[19px] cursor-pointer'>
                        <div className='flex flex-row items-center'>
                          <UploadIcon className='h-5 w-5 mr-3 stroke-blue'></UploadIcon>
                          <p className='text-lb-lg text-blue-500 dark:text-blue-400'>Upload SIUP (.pdf)</p>
                        </div>
                        <input id='dropzone-file' type='file' className='hidden' accept='application/pdf' />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className=''>
                    <input required placeholder='Nama Lengkap' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                    <input
                      required
                      placeholder='Tanggal Lahir'
                      type='text'
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) => (e.target.type = 'text')}
                      className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]'
                    />
                    <input required placeholder='Email' type='email' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                    <input required placeholder='Password' type='password' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                    <input required placeholder='Confirm Password' type='password' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                  </div>
                )}
                <div className='flex items-center justify-center w-full mb-[19px]'>
                  <button className='bg-blue text-white font-bold py-[15px] px-[25px] rounded-[10px] hover:bg-blue-dark focus:outline-none focus:shadow-outline w-full'>Masuk</button>
                </div>
                <div>
                  <p className='text-center text-lb-lg font-normal'>
                    Sudah punya akun?{'  '}
                    <Link href='/register'>
                      <span className='text-blue font-bold cursor-pointer'>Masuk</span>
                    </Link>
                  </p>
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
