import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRef, useState, useEffect } from 'react';

import LowonganPekerjaanList from './lowongan-pekerjaan-list';

// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
import { Swiper, SwiperSlide } from 'swiper/react';

// data
import jobs from '../../../data/jobs';

const LowonganPekerjaanCarousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [realIndex, setRealIndex] = useState(0);
  const [swiper, setSwiper] = useState({});

  const [jobsArray, setJobsArray] = useState([]);

  const spliter = (_jobs) => {
    let arrays = [];
    let arr = [];
    for (let i = 0; i < _jobs.length && i < 18; i++) {
      arr.push(_jobs[i]);
      if (arr.length === 6) {
        arrays.push(arr);
        arr = [];
      }
    }
    return arrays;
  };

  useEffect(() => {
    setJobsArray(spliter(jobs));
  }, []);

  return (
    <div>
      <div className='relative'>
        <Swiper
          className='my-10 drop-shadow-c rounded-[20px]'
          onRealIndexChange={(_swiper) => {
            setRealIndex(_swiper.realIndex);
          }}
          spaceBetween={40}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            setRealIndex(swiper.realIndex);
            setSwiper(swiper);
          }}
        >
          {jobsArray.map((splitedJobs, index) => (
            <SwiperSlide key={index}>
              <LowonganPekerjaanList splitedJobs={splitedJobs} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`rounded-full bg-blue p-[10px] absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[120%] cursor-pointer ${realIndex === 0 ? 'bg-gray' : ''}`}>
          <ChevronLeftIcon className='chv-left h-11 w-11 stroke-white' ref={navigationPrevRef}></ChevronLeftIcon>
        </div>
        <div className={`rounded-full bg-blue p-[10px] absolute top-1/2 right-0 -translate-y-1/2 translate-x-[120%] cursor-pointer ${realIndex === jobsArray.length - 1 ? 'bg-gray' : ''}`}>
          <ChevronRightIcon className='chv-right h-11 w-11 stroke-white' ref={navigationNextRef}></ChevronRightIcon>
        </div>
      </div>
      <div className='-mr-5 flex justify-center'>
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className={`mr-5 rounded-full h-5 w-5 cursor-pointer ${index === realIndex ? 'bg-gray' : 'bg-white-blue'}`} onClick={() => swiper.slideTo(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default LowonganPekerjaanCarousel;
