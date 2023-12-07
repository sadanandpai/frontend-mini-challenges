import styles from './testimonials.module.scss';
import { testimonials } from './testimonialData';

interface Props {
  testimonial: (typeof testimonials)[0];
}

function Testimonial({ testimonial }: Props) {
  return (
    <swiper-slide>
      <article className={styles.testimonial}>
        <div className={styles.heading}>
          <img src={testimonial.img} alt={testimonial.name} />
          <div>
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.role}</h4>
          </div>
        </div>
        <p>{testimonial.comment}</p>
      </article>
    </swiper-slide>
  );
}

export default Testimonial;
