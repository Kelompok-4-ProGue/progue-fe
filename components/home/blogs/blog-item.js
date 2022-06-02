import Image from 'next/image';
import Link from 'next/link';
import { LocationMarkerIcon } from '@heroicons/react/outline';

// image
import BlogImg from '../../../assets/images/home/blog/blog-1.png';

const BlogCarousel = ({ id, title, courseOwner, courseOwnerIcon, createdAt, price, location, online }) => {
  return (
    <div className='p-5 bg-white rounded-[20px] pb-[-10px]'>
      <div className='pb-[10px]'>
        <div className='h-[200px] w-full relative'>
          <Image src={BlogImg} alt='' layout='fill' objectFit='contain'></Image>
        </div>
      </div>
      <h2 className='text-tl-lg font-bold pb-[10px]'>{title}</h2>
      <div className='flex justify-between items-center h-[30px]'>
        <Link href='/'>
          <a className='text-blue text-lb-md'>Selengkapnya...</a>
        </Link>
        <p className='text-lb-md text-gray'>{createdAt}</p>
      </div>
    </div>
  );
};

export default BlogCarousel;
