// next
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import AppBar from '../../../components/app-bar';
import Footer from '../../../components/footer';
import menus from '../../../data/menus';
import LowonganPekerjaanItem from '../../../components/home/lowongan-pekerjaan/lowongan-pekerjaan-item';

// react
import { useEffect, useCallback } from 'react';

export default function Home() {
  const router = useRouter();

  const getUser = useCallback(async () => {
    const userLocal = window.sessionStorage.getItem('user');
    const userLocalJson = JSON.parse(userLocal);
    setUser(userLocalJson);

    const token = window.localStorage.getItem('token');

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/user`, requestOptions);
      const responseJson = await response.json();

      if (!response.ok) {
        throw new Error(responseJson.message);
      }

      console.log(responseJson);

      window.sessionStorage.setItem(
        'user',
        JSON.stringify({
          name: responseJson.data.name,
          photo: responseJson.data.photo,
          role: responseJson.data.role,
          company_logo_small: responseJson.data.company_logo_small,
          company_logo_big: responseJson.data.company_logo_big,
        })
      );
    } catch (error) {
      router.push('/auth/login');
    }
  }, [router]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className='flex flex-col min-h-full items-center'>
      <Head>
        <title>Home | Progue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppBar menus={menus} active='Login' />

      <main className='w-full'>
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
            <div className='grid grid-cols-3 gap-10'></div>
          </div>
        </div>
      </main>

      <Footer menus={menus} />
    </div>
  );
}
