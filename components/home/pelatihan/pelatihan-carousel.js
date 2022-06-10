import Carousel from '../carousel/carousel';
import PelatihanItem from './pelatihan-item';

import { useState, useEffect, useCallback } from 'react';

// data
import pelatihan from '../../../data/pelatihan';

const PelatihanCarousel = () => {
  const [pelatihanData, setPelatihanData] = useState([]);

  const getData = useCallback(async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/job-training`, requestOptions);
      const responseJson = await response.json();

      setPelatihanData(responseJson.data);
      console.log(responseJson.data);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Carousel>
      {pelatihanData.map((item, index) => (
        <PelatihanItem
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
    </Carousel>
  );
};

export default PelatihanCarousel;
