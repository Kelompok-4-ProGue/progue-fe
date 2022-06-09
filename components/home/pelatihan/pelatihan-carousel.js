import Carousel from '../carousel/carousel';
import PelatihanItem from './pelatihan-item';

import { useState, useEffect, useCallback } from 'react';

// data
import pelatihan from '../../../data/pelatihan';

const PelatihanCarousel = () => {
  // const [pelatihanData, setPelatihanData] = useState([]);

  // const getData = useCallback(async () => {
  //   const requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //   };

  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/job-training`, requestOptions);
  //     const responseJson = await response.json();

  //     setPelatihanData(responseJson.data);
  //     console.log(responseJson.data);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // }, []);

  // useEffect(() => {
  //   getData();
  // }, [getData]);

  return (
    <Carousel>
      {pelatihan.map((item, index) => (
        <PelatihanItem key={index} id={item.id} title={item.title} courseOwner={item.courseOwner} courseOwnerIcon={item.courseOwnerIcon} createdAt={item.createdAt} price={item.price} location={item.location} online={item.online} />
      ))}
    </Carousel>
  );
};

export default PelatihanCarousel;
