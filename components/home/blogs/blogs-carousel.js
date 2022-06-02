import Carousel from '../carousel/carousel';
import BlogItem from './blog-item';

// data
import pelatihan from '../../../data/pelatihan';

const BlogCarousel = () => {
  return (
    <Carousel>
      {pelatihan.map((item, index) => (
        <BlogItem key={index} id={item.id} title={item.title} courseOwner={item.courseOwner} courseOwnerIcon={item.courseOwnerIcon} createdAt={item.createdAt} price={item.price} location={item.location} online={item.online} />
      ))}
    </Carousel>
  );
};

export default BlogCarousel;
