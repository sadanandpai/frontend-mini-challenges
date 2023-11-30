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
        <swiper-slide>
          <article className={styles.testimonial}>
            <h3 className="text-center">
              If you are benefited from these challenges for interviews or learning, please consider adding your
              testimonial by submitting the details{' '}
              <a href="https://forms.gle/2hJGa3foKuPctiWE7" target="_blank">
                here
              </a>
            </h3>
          </article>
        </swiper-slide>

        {testimonials.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </swiper-container>
    </section>
  );
}

export default Testimonials;
