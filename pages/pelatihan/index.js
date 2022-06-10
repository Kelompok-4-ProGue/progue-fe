// next
import Head from 'next/head';
import { useRouter } from 'next/router';

// custom components
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';
import PelatihanKerjaItem from '../../components/pelatihan/pelatihan-kerja-item';
import PelatihanKerjaDetails from '../../components/pelatihan/pelatihan-kerja-details';

// icons
import { BriefcaseIcon, SearchIcon, LocationMarkerIcon, HomeIcon } from '@heroicons/react/solid';

// react
import { useState, useCallback, useEffect } from 'react';

// data
import pelatihan from '../../data/pelatihan';

const PelatihanKerja = () => {
  const router = useRouter();
  const [id, setId] = useState(router.query.id);

  const [pelatihanData, setPelatihanData] = useState([]);

  const getData = useCallback(
    async (id) => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/job-training`, requestOptions);
        const responseJson = await response.json();

        if (response.ok) {
          setPelatihanData(responseJson.data);
          console.log(responseJson.data);
          if (!id && !window.location.search) {
            console.log(id);
            _setIdCallback(responseJson.data[0]);
          }
        } else {
          console.log('error', responseJson);
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    [id]
  );

  const _setIdCallback = (data) => {
    router.push({
      pathname: 'pelatihan/',
      query: { id: data.id },
    });
  };

  useEffect(() => {
    setId(router.query.id);
    getData();
  }, [getData]);

  return (
    <div className='flex flex-col min-h-full items-center'>
      <Head>
        <title>Pelatihan Kerja | Progue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppBar menus={menus} />

      <main className='w-full'>
        {/* Search Bar */}
        <div className='w-full bg-light-blue flex items-end justify-center'>
          <div className='w-full max-w-ds h-full py-[50px]'>
            {/* Title */}
            <h1 className='text-ds-sm font-bold'>
              Pelatihan <span className='text-blue'>Kerja</span>
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
            <aside className='w-[343px] flex-none drop-shadow-c h-screen sticky top-16 overflow-auto mr-3 grid grid-cols-1 gap-5 rounded-[20px]'>
              {pelatihanData.map((item, index) => (
                <PelatihanKerjaItem
                  key={index}
                  id={item.id}
                  company_id={item.company_id}
                  title={item.title}
                  description={item.description}
                  requirement={item.requirement}
                  additional_requirement={item.additional_requirement}
                  city={item.city}
                  price={item.price}
                  is_online={item.is_online}
                  created_at={item.created_at}
                  updated_at={item.updated_at}
                  company={item.company}
                />
              ))}
            </aside>

            {/* Details */}
            <PelatihanKerjaDetails setIdCallback={_setIdCallback} />
          </div>
        </div>
      </main>

      <Footer menus={menus} />
    </div>
  );
};

export default PelatihanKerja;
