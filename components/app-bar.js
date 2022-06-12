import { Fragment, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';
import Profile from '../assets/images/profile.png';
// import useAuth from '../context/AuthContext';

const AppBar = ({ menus, active }) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');

  const getUser = useCallback(async () => {
    const userLocal = window.sessionStorage.getItem('user');

    if (!userLocal) {
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
        setName(responseJson.data.name);

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
        console.log(error);
      }
    } else {
      const userLocalJson = JSON.parse(userLocal);
      setUser(userLocalJson);
      setName(userLocalJson.name);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <Popover className='sticky top-0 backdrop-blur-md bg-black w-full z-10 text-white flex items-center justify-center'>
        {/* Desktop App Bar */}
        <div className='max-w-ds w-full'>
          <div className='flex justify-between items-center py-5 md:justify-start md:space-x-10 h-14'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link href='/'>
                <svg width='100' viewBox='0 0 430 67' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M29.3807 1.67609C35.1263 1.67609 40.1159 2.64377 44.3495 4.57913C48.5831 6.45401 51.8491 9.17561 54.1473 12.7439C56.4455 16.2518 57.5947 20.3946 57.5947 25.1726C57.5947 29.9505 56.4455 34.0934 54.1473 37.6012C51.8491 41.109 48.5831 43.8307 44.3495 45.766C40.1159 47.6409 35.1263 48.5783 29.3807 48.5783H18.3129V65.1801H0.350342V1.67609H29.3807ZM28.2921 34.426C31.9814 34.426 34.7635 33.6398 36.6383 32.0673C38.5132 30.4343 39.4507 28.1361 39.4507 25.1726C39.4507 22.209 38.5132 19.9108 36.6383 18.2778C34.7635 16.6449 31.9814 15.8284 28.2921 15.8284H18.3129V34.426H28.2921Z'
                    fill='white'
                  />
                  <path
                    d='M94.113 48.3062H84.3152V65.1801H66.3527V1.67609H95.3831C101.129 1.67609 106.118 2.64377 110.352 4.57913C114.585 6.45401 117.851 9.17561 120.15 12.7439C122.448 16.2518 123.597 20.3946 123.597 25.1726C123.597 29.7691 122.508 33.791 120.331 37.2383C118.214 40.6252 115.16 43.2863 111.168 45.2217L124.867 65.1801H105.634L94.113 48.3062ZM105.453 25.1726C105.453 22.209 104.516 19.9108 102.641 18.2778C100.766 16.6449 97.9837 15.8284 94.2944 15.8284H84.3152V34.426H94.2944C97.9837 34.426 100.766 33.6398 102.641 32.0673C104.516 30.4343 105.453 28.1361 105.453 25.1726Z'
                    fill='white'
                  />
                  <path
                    d='M165.531 66.4502C158.818 66.4502 152.77 65.0289 147.387 62.1863C142.065 59.3438 137.861 55.4126 134.777 50.3927C131.753 45.3729 130.241 39.718 130.241 33.4281C130.241 27.1382 131.753 21.4833 134.777 16.4634C137.861 11.4436 142.065 7.51241 147.387 4.66985C152.77 1.82729 158.818 0.406006 165.531 0.406006C172.244 0.406006 178.262 1.82729 183.584 4.66985C188.967 7.51241 193.17 11.4436 196.194 16.4634C199.279 21.4833 200.821 27.1382 200.821 33.4281C200.821 39.718 199.279 45.3729 196.194 50.3927C193.17 55.4126 188.967 59.3438 183.584 62.1863C178.262 65.0289 172.244 66.4502 165.531 66.4502ZM165.531 51.5721C168.736 51.5721 171.639 50.8161 174.24 49.3041C176.841 47.7921 178.897 45.6753 180.409 42.9537C181.921 40.1716 182.677 36.9964 182.677 33.4281C182.677 29.8598 181.921 26.7148 180.409 23.9932C178.897 21.2111 176.841 19.0641 174.24 17.5521C171.639 16.0401 168.736 15.2841 165.531 15.2841C162.325 15.2841 159.422 16.0401 156.822 17.5521C154.221 19.0641 152.165 21.2111 150.653 23.9932C149.141 26.7148 148.385 29.8598 148.385 33.4281C148.385 36.9964 149.141 40.1716 150.653 42.9537C152.165 45.6753 154.221 47.7921 156.822 49.3041C159.422 50.8161 162.325 51.5721 165.531 51.5721Z'
                    fill='white'
                  />
                  <path
                    d='M252.777 32.0673H268.653V58.3761C265.024 60.9767 260.851 62.9726 256.133 64.3636C251.416 65.7546 246.698 66.4502 241.981 66.4502C235.328 66.4502 229.341 65.0591 224.018 62.2771C218.696 59.4345 214.523 55.5033 211.499 50.4835C208.475 45.4636 206.963 39.7785 206.963 33.4281C206.963 27.0777 208.475 21.3926 211.499 16.3727C214.523 11.3529 218.726 7.45193 224.109 4.66985C229.492 1.82729 235.57 0.406006 242.344 0.406006C248.271 0.406006 253.593 1.40393 258.311 3.39977C263.028 5.39561 266.959 8.26841 270.104 12.0182L258.673 22.3602C254.379 17.6428 249.239 15.2841 243.251 15.2841C237.808 15.2841 233.423 16.9473 230.097 20.2737C226.77 23.5396 225.107 27.9244 225.107 33.4281C225.107 36.9359 225.863 40.0809 227.375 42.863C228.887 45.5846 231.004 47.7316 233.725 49.3041C236.447 50.8161 239.562 51.5721 243.07 51.5721C246.517 51.5721 249.753 50.8766 252.777 49.4855V32.0673Z'
                    fill='white'
                  />
                  <path
                    d='M309.343 66.4502C299.908 66.4502 292.56 63.8798 287.298 58.739C282.097 53.5982 279.496 46.3103 279.496 36.8755V1.67609H297.459V36.3311C297.459 46.4918 301.481 51.5721 309.525 51.5721C317.508 51.5721 321.5 46.4918 321.5 36.3311V1.67609H339.19V36.8755C339.19 46.3103 336.559 53.5982 331.298 58.739C326.096 63.8798 318.778 66.4502 309.343 66.4502Z'
                    fill='white'
                  />
                  <path d='M402.343 51.2999V65.1801H351.359V1.67609H401.164V15.5562H369.14V26.2612H397.354V39.6878H369.14V51.2999H402.343Z' fill='white' />
                  <path
                    d='M418.752 65.9966C415.849 65.9966 413.4 65.0289 411.404 63.0935C409.408 61.1582 408.41 58.7087 408.41 55.7452C408.41 52.7212 409.378 50.2718 411.313 48.3969C413.309 46.522 415.789 45.5846 418.752 45.5846C421.776 45.5846 424.256 46.522 426.191 48.3969C428.127 50.2718 429.094 52.7212 429.094 55.7452C429.094 58.7087 428.097 61.1582 426.101 63.0935C424.165 65.0289 421.716 65.9966 418.752 65.9966Z'
                    fill='white'
                  />
                  <path
                    d='M418.791 65.8165C415.888 65.8165 413.439 64.8488 411.443 62.9135C409.447 60.9781 408.449 58.5287 408.449 55.5652C408.449 52.5412 409.417 50.0917 411.352 48.2168C413.348 46.342 415.828 45.4045 418.791 45.4045C421.815 45.4045 424.295 46.342 426.23 48.2168C428.166 50.0917 429.134 52.5412 429.134 55.5652C429.134 58.5287 428.136 60.9781 426.14 62.9135C424.204 64.8488 421.755 65.8165 418.791 65.8165Z'
                    fill='#006AFE'
                  />
                </svg>
              </Link>
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <div className='hidden md:flex space-x-10'>
              {menus.map((menu, index) => {
                return (
                  <div key={index}>
                    <Link href={menu.href}>
                      <a className={`${menu.label === active ? 'font-bold' : 'text-white'} text-tl-sm font-normal hover:font-bold transition`}>{menu.label}</a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              {!(JSON.stringify(user) === '{}') ? (
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='flex items-center justify-end'>
                      <div className='ml-5 whitespace-nowrap rounded-full overflow-clip shadow-smblock h-[30px] w-[30px] relative mr-3'>
                        {user.photo ?? user.company_logo_small ? <Image src={user.photo ?? user.company_logo_small} alt='' layout='fill' objectFit='contain'></Image> : <UserCircleIcon className='h-full'></UserCircleIcon>}
                      </div>
                      <div className='text-tl-sm text-white flex items-center justify-center'>{name}</div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-56 bg-white focus:outline-none drop-shadow-c shadow-none'>
                      <Menu.Item>
                        <Link href='/profile/edit'>
                          <div className='text-lb-lg text-black font-md px-[25px] py-[10px] cursor-pointer'>Edit Profile</div>
                        </Link>
                      </Menu.Item>
                      {user.role === 'company' ? (
                        <Menu.Item>
                          <Link href='/profile/lowongan-pekerjaan'>
                            <div className='text-lb-lg text-black font-md px-[25px] py-[10px] cursor-pointer'>Lowongan Pekerjaan</div>
                          </Link>
                        </Menu.Item>
                      ) : (
                        <></>
                      )}
                      <Menu.Item>
                        <div
                          className='text-lb-lg text-blue font-md  px-[25px] py-[10px] cursor-pointer'
                          onClick={() => {
                            window.localStorage.removeItem('token');
                            window.sessionStorage.removeItem('user');
                            setUser({});
                            setName('');
                          }}
                        >
                          Logout
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <div>
                  <Link href='/auth/login'>
                    <div className='ml-5 whitespace-nowrap inline-flex items-center justify-center px-5 py-[6px] w-[86px] rounded-md shadow-sm text-lb-sm font-normal text-white border-[1px] border-blue bg-blue hover:bg-blue-700 cursor-pointer'>
                      Login
                    </div>
                  </Link>
                  <Link href='/auth/register'>
                    <div className='ml-5 whitespace-nowrap inline-flex items-center justify-center px-5 py-[6px] w-[86px] rounded-md shadow-sm text-lb-sm font-normal text-white border-[1px]  border-blue hover:bg-blue-700 cursor-pointer'>
                      Register
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile app bar */}
        <Transition as={Fragment} enter='duration-200 ease-out' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='duration-100 ease-in' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
          <Popover.Panel focus className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h1 className='text-3xl font-bold'>
                      <span className='box-decoration-slice bg-gradient-to-r from-blue-600 to-pink-500 text-white py-1 px-3 rounded-md' href='https://nextjs.org'>
                        Progue
                      </span>
                    </h1>
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='py-6 px-5 space-y-6'>
                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  {menus.map((menu, index) => {
                    return (
                      <div key={index}>
                        <Link href={menu.href}>
                          <a className={`${menu.label === active ? 'text-gray-900' : 'text-gray-500'} text-base font-medium text-gray-900 hover:text-gray-700`}>{menu.label}</a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <p className='mt-6 text-center text-base text-gray-500'>
                    Wanna leave?{' '}
                    <button onClick={() => {}} href='#' className='text-blue-600 hover:text-blue-500 font-bold'>
                      Sign Out
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default AppBar;
