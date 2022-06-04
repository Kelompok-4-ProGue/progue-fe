import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AppBar from '../../components/app-bar';
import Footer from '../../components/footer';
import menus from '../../data/menus';
import LoginGirl from '../../assets/images/login/login-girl.png';

export default function Login() {
  return (
    <div className='flex flex-col min-h-full items-center'>
      <Head>
        <title>Login | Progue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppBar menus={menus} active='Login' />

      <main className='w-full'>
        <div className='h-[835px] w-full bg-light-blue flex items-end justify-center'>
          <div className='flex items-end justify-center h-full max-w-[1175px] ml-[-65px]'>
            <div className='flex-none flex justify-end w-[607.67px]'>
              <Image src={LoginGirl} alt='Login' height={782.9} width={607.67} />
            </div>
            <div className='h-full flex items-center justify-center ml-[31px] flex-auto max-w-xl'>
              <div className='bg-light-white px-8 py-[50px] flex items-center justify-center flex-col rounded-[20px] w-full'>
                <div className='mb-[19px]'>
                  <h1 className='text-hl-md font-bold text-center'>Masuk</h1>
                  <p className='text-tl-md font-normal text-center'>Lamar pekerjaan di Perusahaan Impian anda</p>
                </div>
                <div className=''>
                  <input required placeholder='Email' type='email' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                  <input required placeholder='Password' type='password' className='px-[25px] py-[15px] bg-input text-gray rounded-[10px] w-full mb-[19px]' />
                </div>
                <div className='flex items-center justify-between w-full mb-[19px]'>
                  <div className='form-check'>
                    <input
                      type='checkbox'
                      className='appearance-none h-4 w-4 rounded transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left bg-white-blue border-[1px] border-gray checked:bg-blue mr-2 cursor-pointer'
                      id='ingatSaya'
                    />
                    <label htmlFor='ingatSaya' className='text-lb-md'>
                      Ingat Saya
                    </label>
                  </div>
                  {/* <Link href='/'>Lupa Password</Link> */}
                </div>
                <div className='flex items-center justify-center w-full mb-[19px]'>
                  <button className='bg-blue text-white font-bold py-[15px] px-[25px] rounded-[10px] hover:bg-blue-dark focus:outline-none focus:shadow-outline w-full'>Masuk</button>
                </div>
                <div>
                  <p className='text-center text-lb-lg font-normal'>
                    Belum punya akun?{'  '}
                    <Link href='/auth/login'>
                      <span className='text-blue font-bold cursor-pointer'>Daftar</span>
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
