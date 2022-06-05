import Carousel from '../carousel/carousel';
import LowonganPekerjaanItem from './lowongan-pekerjaan-item';

// data
import jobs from '../../../data/jobs';

// react
import { useState, useEffect, useCallback } from 'react';

const LowonganPekerjaanCarousel = () => {
  const [jobsData, setJobsData] = useState([]);

  const getJobs = useCallback(async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/job-vacancy`, requestOptions);
    const responeJson = await respone.json();

    if (respone.ok) {
      setJobsData(responeJson.data);
      console.log(responeJson.data);
    } else {
      console.log('error', responeJson);
    }
  }, []);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return (
    <Carousel>
      {jobsData.map((job, index) => (
        <LowonganPekerjaanItem
          key={index}
          additional_requirement={job.additional_requirement}
          category={job.category}
          city={job.city}
          company={job.company}
          company_id={job.company_id}
          created_at={job.created_at}
          description={job.description}
          id={job.id}
          position={job.position}
          requirement={job.requirement}
          salary={job.salary}
          updated_at={job.updated_at}
        />
      ))}
    </Carousel>
  );
};

export default LowonganPekerjaanCarousel;
