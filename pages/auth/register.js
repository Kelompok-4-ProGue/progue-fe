// next
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';
import RegisterMen from '../../assets/images/register/register-men.png';

// icons
import { UploadIcon } from '@heroicons/react/outline';

// react
import { useState, useRef } from 'react';

export default function Register() {
  const [isCompany, setIsCompany] = useState(false);

  // input company
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [companyConfirmPassword, setCompanyConfirmPassword] = useState('');
  const [companySiupName, setCompanySiupName] = useState('');
  const fileInputRef = useRef(null);

  // input personal
  const [personalName, setPersonalName] = useState('');
  const [personalBirthday, setPersonalBirthday] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
  const [personalPassword, setPersonalPassword] = useState('');
  const [personalConfirmPassword, setPersonalConfirmPassword] = useState('');

  // router
  const router = useRouter();

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isCompany) {
      const headers = new Headers();
      headers.append('Accept', 'application/json');

      const formdata = new FormData();
      formdata.append('name', companyName);
      formdata.append('address', companyAddress);
      formdata.append('letter', fileInputRef.current.files[0], companySiupName);
      formdata.append('email', companyEmail);
      formdata.append('password', companyPassword);
      formdata.append('password_confirmation', companyConfirmPassword);

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: formdata,
        redirect: 'follow',
      };

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/register/company`, requestOptions);
        const responseJson = await response.json();

        if (response.ok) {
          const loginHeaders = new Headers();
          headers.append('Accept', 'application/json');

          const urlencoded = new URLSearchParams();
          urlencoded.append('email', companyEmail);
          urlencoded.append('password', companyPassword);

          const loginRequestOptions = {
            method: 'POST',
            headers: loginHeaders,
            body: urlencoded,
            redirect: 'follow',
          };

          try {
            const responseLogin = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/login`, loginRequestOptions);
            const responseLoginJson = await responseLogin.json();

            if (responseLogin.ok) {
              window.localStorage.setItem('token', responseLoginJson.token);

              router.push('/');
            } else {
              console.log('error', responseLoginJson);
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log('error', responseJson);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const urlencoded = new URLSearchParams();
      urlencoded.append('name', personalName);
      urlencoded.append('birth_date', personalBirthday + ' 0:0:0');
      urlencoded.append('email', personalEmail);
      urlencoded.append('password', personalPassword);
      urlencoded.append('password_confirmation', personalConfirmPassword);

      const requestOptions = {
        method: 'POST',
        body: urlencoded,
        redirect: 'follow',
      };

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/register/job_finder`, requestOptions);
        const responseJson = await response.json();

        if (response.ok) {
          const loginHeaders = new Headers();
          loginHeaders.append('Accept', 'application/json');

          const urlencoded = new URLSearchParams();
          urlencoded.append('email', personalEmail);
          urlencoded.append('password', personalPassword);

          const loginRequestOptions = {
            method: 'POST',
            headers: loginHeaders,
            body: urlencoded,
            redirect: 'follow',
          };

          const responseLogin = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/login`, loginRequestOptions);
          const responseLoginJson = await responseLogin.json();

          if (responseLogin.ok) {
            window.localStorage.setItem('token', responseLoginJson.token);

            router.push('/');
          } else {
            console.log('error', responseLoginJson);
          }
        } else {
          console.log('error', responseJson);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
                    <input required placeholder='Nama Perusahaan' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' onChange={(event) => setCompanyName(event.target.value)} />
                    <input required placeholder='Alamat Perusahaan' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' onChange={(event) => setCompanyAddress(event.target.value)} />
                    <input required placeholder='Email Perusahaan' type='email' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' onChange={(event) => setCompanyEmail(event.target.value)} />
                    <input required placeholder='Password' type='password' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' onChange={(event) => setCompanyPassword(event.target.value)} />
                    <input required placeholder='Confirm Password' type='password' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' onChange={(event) => setCompanyConfirmPassword(event.target.value)} />
                    <div className='flex justify-center items-center w-full'>
                      <label htmlFor='dropzone-file' className='px-[25px] py-[15px] bg-light-blue text-blue rounded-[10px] w-full mb-[19px] cursor-pointer'>
                        <div className='flex flex-row items-center'>
                          <UploadIcon className='h-5 w-5 mr-3 stroke-blue'></UploadIcon>
                          <p className='text-lb-lg text-blue-500 dark:text-blue-400'>{companySiupName === '' ? 'Upload SIUP (.pdf)' : companySiupName}</p>
                        </div>
                        <input
                          id='dropzone-file'
                          type='file'
                          className='hidden'
                          accept='application/pdf'
                          ref={fileInputRef}
                          onChange={() => {
                            setCompanySiupName(fileInputRef.current.files[0].name);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className=''>
                    <input required placeholder='Nama Lengkap' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' onChange={(event) => setPersonalName(event.target.value)} />
                    <input
                      required
                      placeholder='Tanggal Lahir'
                      type='text'
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) => (e.target.type = 'text')}
                      className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]'
                      onChange={(event) => {
                        setPersonalBirthday(event.target.value);
                        console.log(event.target.value, typeof event.target.value);
                      }}
                    />
                    <input required placeholder='Email' type='email' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' onChange={(event) => setPersonalEmail(event.target.value)} />
                    <input required placeholder='Password' type='password' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' onChange={(event) => setPersonalPassword(event.target.value)} />
                    <input required placeholder='Confirm Password' type='password' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' onChange={(event) => setPersonalConfirmPassword(event.target.value)} />
                  </div>
                )}
                <div className='flex items-center justify-center w-full mb-[19px]'>
                  <button className='bg-blue text-white font-bold py-[15px] px-[25px] rounded-[10px] hover:bg-blue-dark focus:outline-none focus:shadow-outline w-full' onClick={handleSubmit}>
                    Daftar
                  </button>
                </div>
                <div>
                  <p className='text-center text-lb-lg font-normal'>
                    Sudah punya akun?{'  '}
                    <Link href='/auth/login'>
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
