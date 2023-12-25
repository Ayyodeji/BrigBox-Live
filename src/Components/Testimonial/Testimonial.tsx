import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
import customer1 from '../../images/ava-1.jpg';
import customer2 from '../../images/ava-2.jpg';
import customer3 from '../../images/ava-3.jpg';
import customer4 from '../../images/ava-4.jpg';
import { CustomerSlide } from './CustomerSlide';
import './testimonial.css';

const customerData = [
  {
    name: 'Sean Stevens',
    description: `"I cannot recommend BrigBox highly enough! As the CEO of a large corporation, I was initially hesitant to work with an external agency. However, the team at BrigBox quickly put my fears to rest. They were professional, efficient, and most importantly, delivered results. Their expertise in digital marketing helped us to increase our online presence and generate more leads than ever before. I will definitely be using BrigBox for all my marketing needs in the future!"`,
    image: customer1,
    position: 'CEO, NerdBuds',
  },
  {
    name: 'Anonymous',
    description: `"I am so glad that we chose BrigBox as our marketing agency! From the very beginning, they took the time to understand our business goals and develop a customized strategy that would help us achieve them. Their team is always available to answer questions and provide updates, and they have been instrumental in helping us to build brand awareness and drive more traffic to our website. Thanks to their hard work and dedication, we have been able to grow our business and reach new customers. I would highly recommend BrigBox to any CEO looking for a reliable and effective marketing partner."`,
    image: customer2,
    position: 'CEO, Insight.ai',
  },
  {
    name: 'Chidi Bernard',
    description: `"Working with BrigBox has been a game-changer for our marketing efforts! As a UI/UX Designer at ProjectPal, I've seen firsthand the impact of their creative and dedicated team. Their commitment to success is unparalleled, and the results speak for themselves. Thanks to BrigBox, our website has experienced a significant boost in traffic and conversions. I highly recommend BrigBox to any business aiming to elevate their marketing strategy to new heights."`,
    image: customer3,
    position: 'UI/UX Designer, ProjectPal',
  },
  {
    name: 'Adenuga Israel',
    description: `"Choosing BrigBox was one of the best decisions for our marketing endeavors! As the Director of UPA Energy, I've collaborated with numerous agencies, but none compare to the expertise and dedication of BrigBox. Their team's creativity and willingness to go the extra mile have led to the success of our campaigns. We've witnessed a substantial increase in website traffic and conversions, making BrigBox the ideal choice for businesses seeking to enhance their marketing efforts."`,
    image: customer4,
    position: 'Director, UPA Energy',
  },
];


export const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="testimonial" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than
            <span className="highlight"> 50 customers!</span>{' '}
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            {customerData.map((i, idx) => (
              <CustomerSlide
                key={`slide-${idx}`}
                name={i.name}
                description={i.description}
                image={i.image}
                position={i.position}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
