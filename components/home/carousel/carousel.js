import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRef, useState, useEffect, useCallback } from 'react';

// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = ({ children }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [realIndex, setRealIndex] = useState(0);
  const [swiper, setSwiper] = useState({});

  const [childrenArray, setChildrenArray] = useState([]);

  const spliter = (_children) => {
    let arrays = [];
    let arr = [];
    for (let i = 0; i < _children.length && i < 18; i++) {
      arr.push(_children[i]);
      if (arr.length === 6 || i === _children.length - 1) {
        arrays.push(arr);
        arr = [];
      }
    }
    return arrays;
  };

  useEffect(() => {
    setChildrenArray(spliter(children));
    console.log(children);
  }, [children]);

  return (
    <div>
      <div className='relative'>
        <Swiper
          observer={true}
          className='my-10 drop-shadow-c rounded-[20px]'
          onRealIndexChange={(_swiper) => {
            setRealIndex(_swiper.realIndex);
          }}
          spaceBetween={40}
          navigation={{
            prevEl: navigationPrevRef.current ?? undefined,
            nextEl: navigationNextRef.current ?? undefined,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            setRealIndex(swiper.realIndex);
            setSwiper(swiper);
          }}
        >
          {childrenArray.map((splitedChildren, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-3 gap-10'>{splitedChildren}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`rounded-full bg-blue p-[10px] absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[120%] cursor-pointer ${realIndex === 0 ? 'bg-gray' : ''}`} ref={navigationPrevRef}>
          <ChevronLeftIcon className='chv-left h-11 w-11 stroke-white'></ChevronLeftIcon>
        </div>
        <div
          className={`rounded-full bg-blue p-[10px] absolute top-1/2 right-0 -translate-y-1/2 translate-x-[120%] cursor-pointer ${realIndex === childrenArray.length - 1 || childrenArray.length === 0 ? 'bg-gray' : ''}`}
          ref={navigationNextRef}
        >
          <ChevronRightIcon className='chv-right h-11 w-11 stroke-white'></ChevronRightIcon>
        </div>
      </div>
      <div className='-mr-5 flex justify-center'>
        {Array.from({ length: childrenArray.length }, (_, index) => (
          <div key={index} className={`mr-5 rounded-full h-5 w-5 cursor-pointer ${index === realIndex ? 'bg-gray' : 'bg-white-blue'}`} onClick={() => swiper.slideTo(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
