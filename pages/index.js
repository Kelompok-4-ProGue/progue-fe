// next
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import AppBar from '../components/app-bar';
import Footer from '../components/footer';
import menus from '../data/menus';
import LowonganPekerjaanCarousel from '../components/home/lowongan-pekerjaan/lowongan-pekerjaan-carousel';
import Hero from '../components/home/hero/hero';
import PelatihanHero from '../components/home/pelatihan/pelatihan-hero';
import PelatihanCarousel from '../components/home/pelatihan/pelatihan-carousel';
import BlogCarousel from '../components/home/blogs/blogs-carousel';
import CVMakerHero from '../components/home/cv/cv-hero';

// react
import { useState, useEffect, useCallback } from 'react';

export default function Home() {
  const router = useRouter();

  const [user, setUser] = useState({});

  const getUser = useCallback(async () => {
    const token = window.localStorage.getItem('token');

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/user`, requestOptions);
    const responseJson = await response.json();

    if (response.ok) {
      setUser(responseJson.data);
    } else {
      console.log('error', responseJson);
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

      <AppBar menus={menus} active='Login' userData={user} />

      <main className='w-full'>
        {/* Hero And Popup Company */}
        <Hero />

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
            <LowonganPekerjaanCarousel />
          </div>
        </div>

        {/* Pelatihan */}
        <PelatihanHero />

        {/* Daftar Pelatihan */}
        <div className='w-full bg-light-white flex items-end justify-center'>
          <div className='w-full max-w-ds h-full pt-36 pb-20'>
            <div className='flex justify-between items-center'>
              <h1 className='text-ds-sm font-bold'>
                Pelatihan <span className='text-blue'>Kerja</span>
              </h1>
              <Link href='/lowongan-pekerjaan'>
                <a className='text-blue text-tl-lg'>Lihat Semua</a>
              </Link>
            </div>
            <PelatihanCarousel />
          </div>
        </div>

        {/* Blog */}
        {/* <div className='w-full bg-white flex items-end justify-center'>
          <div className='w-full max-w-ds h-full pt-36 pb-20'>
            <div className='flex justify-between items-center'>
              <h1 className='text-ds-sm font-bold'>
                Blog <span className='text-blue'>Karir</span>
              </h1>
              <Link href='/lowongan-pekerjaan'>
                <a className='text-blue text-tl-lg'>Lihat Semua</a>
              </Link>
            </div>
            <BlogCarousel />
          </div>
        </div> */}

        {/* CV Maker */}
        <CVMakerHero />
      </main>

      <Footer menus={menus} />
    </div>
  );
}
