import LowonganPekerjaanItem from './lowongan-pekerjaan-item';

const LowonganPekerjaanList = ({ splitedJobs }) => {
  return (
    <div className='grid grid-cols-3 gap-10'>
      {splitedJobs.map((job, index) => (
        <LowonganPekerjaanItem key={index} id={job.id} title={job.title} company={job.company} companyIcon={job.companyIcon} location={job.location} workFrom={job.workFrom} salary={job.salary} createdAt={job.createdAt} />
      ))}
    </div>
  );
};

export default LowonganPekerjaanList;
