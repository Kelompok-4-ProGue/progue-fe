import Carousel from '../carousel/carousel';
import PelatihanItem from './pelatihan-item';

// data
import pelatihan from '../../../data/pelatihan';

const PelatihanCarousel = () => {
  return (
    <Carousel>
      {pelatihan.map((item, index) => (
        <PelatihanItem key={index} id={item.id} title={item.title} courseOwner={item.courseOwner} courseOwnerIcon={item.courseOwnerIcon} createdAt={item.createdAt} price={item.price} location={item.location} online={item.online} />
      ))}
    </Carousel>
  );
};

export default PelatihanCarousel;
