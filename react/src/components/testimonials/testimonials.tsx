import { Navigation, Pagination } from 'swiper/modules';

import Testimonial from './testimonial';
import { register } from 'swiper/element/bundle';
import styles from './testimonials.module.scss';
import { testimonials } from './testimonialData';

register();

function Testimonials() {
  return (
    <section>
      <h2 id="testimonials" className={styles.heading}>
        Testimonials
      </h2>

      <swiper-container
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {testimonials.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </swiper-container>
    </section>
  );
}

export default Testimonials;
