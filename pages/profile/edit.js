// next
import Head from 'next/head';
import Image from 'next/image';

// custom components
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';

// icons
import { UserIcon } from '@heroicons/react/solid';

// next
import { useRouter } from 'next/router';

// react
import { useState, useCallback, useEffect } from 'react';

const FormLamar = () => {
  const router = useRouter();

  const [user, setUser] = useState({});

  const [imageLocal, setImageLocal] = useState(null);
  const [preview, setPreview] = useState(null);

  const [imageLocal2, setImageLocal2] = useState(null);
  const [preview2, setPreview2] = useState(null);

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

      setUser(responseJson.data);

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
      setUser({});
      router.push('/auth/login');
    }
  }, [router]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const token = window.localStorage.getItem('token');

      const headers = new Headers();
      headers.append('Authorization', 'Bearer ' + token);

      const { comapny_name, email, phone, address, city, postal_code, birth_place, birthDate, birthMonth, birthYear, linkedin, website, role } = user;

      const formData = new FormData();
      if (role === 'company') {
        if (imageLocal && imageLocal2) {
          formData.append('company_logo_small', imageLocal, imageLocal.name);
          formData.append('company_logo_big', imageLocal2, imageLocal2.name);
        }
        formData.append('name', comapny_name);
      }
      if (role === 'job_finder') {
        if (imageLocal) {
          formData.append('photo', imageLocal, imageLocal.name);
        }
        formData.append('birth_place', birth_place);
        formData.append('birth_date', `${birthDate}-${birthMonth}-${birthYear}`);
      }
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('address', address);
      formData.append('city', city);
      formData.append('postal_code', postal_code);
      formData.append('linkedin', linkedin);
      formData.append('website', website);

      const requestOptions = {
        method: 'POST',
        headers: headers,
      };

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/user`, requestOptions);
        const responseJson = await response.json();

        if (!response.ok) {
          throw new Error(responseJson.message);
        }

        console.log(responseJson);

        window.sessionStorage.setItem('user', JSON.stringify({ name: responseJson.data.name, photo: responseJson.data.photo }));
      } catch (error) {
        router.push('/auth/login');
      }
    },
    [imageLocal, imageLocal2, router, user]
  );

  useEffect(() => {
    getUser();
    if (imageLocal) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageLocal);
    } else {
      setPreview(null);
    }
    if (imageLocal2) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview2(reader.result);
      };
      reader.readAsDataURL(imageLocal2);
    } else {
      setPreview2(null);
    }
  }, [getUser, imageLocal, imageLocal2]);

  return (
    <div className='flex flex-col min-h-full items-center'>
      <Head>
        <title>Edit Profile | Progue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppBar menus={menus} />

      <main className='w-full'>
        <div className='w-full bg-light-white flex justify-center'>
          <div className='w-full max-w-ds h-full py-[50px] flex justify-center items-center flex-col'>
            {/* Details */}
            <div className='flex-auto bg-white drop-shadow-c px-10 py-[50px] grid grid-cols-1 gap-[30px] w-full'>
              {/* Head */}
              <div className='flex justify-center items-center w-full'>
                <label htmlFor='dropzone-profile-pic' className='px-[25px] py-[15px] bg-light-blue text-blue rounded-[10px] cursor-pointer h-48 w-48 border-2 border-dashed border-blue relative'>
                  {user.photo ?? user.company_logo_small ? (
                    <Image src={user.photo ?? user.company_logo_small} alt='' layout='fill' objectFit='cover'></Image>
                  ) : preview ? (
                    <Image src={preview} alt='' layout='fill' objectFit='cover'></Image>
                  ) : (
                    <div className='flex flex-col items-center justify-center h-full'>
                      <UserIcon className='h-7 w-7 stroke-blue'></UserIcon>
                    </div>
                  )}
                  <input
                    id='dropzone-profile-pic'
                    type='file'
                    className='hidden'
                    accept='image/png, image/jpeg'
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file && file.type.substring(0, 5) === 'image') {
                        setImageLocal(file);
                      } else {
                        setImageLocal(null);
                      }
                    }}
                  />
                </label>
                {user.role === 'company' ? (
                  <label htmlFor='dropzone-profile-pic2' className='px-[25px] py-[15px] bg-light-blue text-blue rounded-[10px] cursor-pointer h-48 w-[324px] border-2 border-dashed border-blue relative ml-[30px]'>
                    {user.company_logo_big ? (
                      <Image src={user.company_logo_big} alt='' layout='fill' objectFit='cover'></Image>
                    ) : preview2 ? (
                      <Image src={preview2} alt='' layout='fill' objectFit='cover'></Image>
                    ) : (
                      <div className='flex flex-col items-center justify-center h-full'>
                        <UserIcon className='h-7 w-7 stroke-blue'></UserIcon>
                      </div>
                    )}
                    <input
                      id='dropzone-profile-pic2'
                      type='file'
                      className='hidden'
                      accept='image/png, image/jpeg'
                      onChange={(event) => {
                        const file = event.target.files[0];
                        if (file && file.type.substring(0, 5) === 'image') {
                          setImageLocal2(file);
                        } else {
                          setImageLocal2(null);
                        }
                      }}
                    />
                  </label>
                ) : (
                  <></>
                )}
              </div>

              {/* Text Area */}
              {user.role === 'company' ? (
                <input
                  required
                  placeholder='Nama Perusahaan'
                  type='text'
                  className='input-text'
                  value={user.name ?? ''}
                  onChange={(event) => {
                    setUser({ ...user, name: event.target.value });
                  }}
                />
              ) : (
                <></>
              )}
              <div className='grid grid-cols-2 gap-[30px] w-full'>
                <input
                  required
                  placeholder='Email'
                  type='email'
                  className='input-text'
                  value={user.email ?? ''}
                  onChange={(event) => {
                    setUser({ ...user, email: event.target.value });
                  }}
                />
                <input
                  required
                  placeholder='No. Telepon'
                  type='tel'
                  className='input-text'
                  value={user.phone ?? ''}
                  onChange={(event) => {
                    setUser({ ...user, phone: event.target.value });
                  }}
                />
              </div>
              <input
                required
                placeholder='Alamat'
                type='text'
                className='input-text'
                value={user.address ?? ''}
                onChange={(event) => {
                  setUser({ ...user, address: event.target.value });
                }}
              />
              <div className='grid grid-cols-2 gap-[30px]'>
                <input
                  required
                  placeholder='Kota'
                  type='text'
                  className='input-text'
                  value={user.city ?? ''}
                  onChange={(event) => {
                    setUser({ ...user, city: event.target.value });
                  }}
                />
                <input
                  required
                  placeholder='Kode Pos'
                  type='number'
                  className='input-text'
                  value={user.postal_code ?? ''}
                  onChange={(event) => {
                    setUser({ ...user, postal_code: event.target.value });
                  }}
                />
              </div>
              {user.role === 'job_finder' ? (
                <div className='grid grid-cols-5 gap-7 w-full'>
                  <input
                    type='text'
                    placeholder='Tempat Lahir'
                    className='input-text col-span-2'
                    value={user.birth_place ?? ''}
                    onChange={(event) => {
                      setUser({ ...user, birth_place: event.target.value });
                    }}
                  />
                  <input
                    type='number'
                    maxLength={2}
                    placeholder='Tanggal Lahir'
                    className='input-text'
                    value={(user.birth_date ?? '').split('-')[2] ?? ''}
                    onChange={(event) => {
                      setUser({ ...user, birthDate: event.target.value });
                    }}
                  />
                  <input
                    type='number'
                    maxLength={2}
                    placeholder='Bulan Lahir'
                    className='input-text'
                    value={(user.birth_date ?? '').split('-')[1] ?? ''}
                    onChange={(event) => {
                      setUser({ ...user, birthMonth: event.target.value });
                    }}
                  />
                  <input
                    type='number'
                    maxLength={4}
                    placeholder='Tahun Lahir'
                    className='input-text'
                    value={(user.birth_date ?? '').split('-')[0] ?? ''}
                    onChange={(event) => {
                      setUser({ ...user, birthYear: event.target.value });
                    }}
                  />
                </div>
              ) : (
                <></>
              )}
              <div className='grid grid-cols-2 gap-[30px]'>
                <input
                  required
                  placeholder='Linkedin'
                  type='url'
                  className='input-text'
                  value={user.linkedin ?? ''}
                  onChange={(event) => {
                    setUser({ ...user, linkedin: event.target.value });
                  }}
                />
                <input
                  required
                  placeholder='Website'
                  type='url'
                  className='input-text'
                  value={user.website ?? ''}
                  onChange={(event) => {
                    setUser({ ...user, website: event.target.value });
                  }}
                />
              </div>

              {/* Lamar */}
            </div>
            <button className='py-[11px] px-5 bg-blue text-white rounded mt-[50px] w-fit flex justify-center items-center' onClick={handleSubmit}>
              <div className='text-tl-lg mr-[10px]'>Simpan </div>
              <svg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M26.6709 8.59277L21.9072 3.8291C21.5557 3.47754 21.0781 3.28125 20.5801 3.28125H4.71875C4.2002 3.28125 3.78125 3.7002 3.78125 4.21875V25.7812C3.78125 26.2998 4.2002 26.7188 4.71875 26.7188H26.2812C26.7998 26.7188 27.2188 26.2998 27.2188 25.7812V9.91699C27.2188 9.41895 27.0225 8.94434 26.6709 8.59277ZM11.75 5.15625H19.25V8.4375H11.75V5.15625ZM15.5 21.3867C13.1709 21.3867 11.2812 19.4971 11.2812 17.168C11.2812 14.8389 13.1709 12.9492 15.5 12.9492C17.8291 12.9492 19.7188 14.8389 19.7188 17.168C19.7188 19.4971 17.8291 21.3867 15.5 21.3867ZM15.5 14.8242C14.2051 14.8242 13.1562 15.873 13.1562 17.168C13.1562 18.4629 14.2051 19.5117 15.5 19.5117C16.7949 19.5117 17.8438 18.4629 17.8438 17.168C17.8438 15.873 16.7949 14.8242 15.5 14.8242Z'
                  fill='#F7FBFF'
                />
              </svg>
            </button>
          </div>
        </div>
      </main>

      <Footer menus={menus} />
    </div>
  );
};

export default FormLamar;
