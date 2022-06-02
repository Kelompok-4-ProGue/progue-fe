import Carousel from '../carousel/carousel';
import LowonganPekerjaanItem from './lowongan-pekerjaan-item';

// data
import jobs from '../../../data/jobs';

const LowonganPekerjaanCarousel = () => {
  return (
    <Carousel>
      {jobs.map((job, index) => (
        <LowonganPekerjaanItem key={index} id={job.id} title={job.title} company={job.company} companyIcon={job.companyIcon} location={job.location} workFrom={job.workFrom} salary={job.salary} createdAt={job.createdAt} />
      ))}
    </Carousel>
  );
};

export default LowonganPekerjaanCarousel;
