import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import aboutImg from '../../images/about-us.jpg';
import { ChoseUs } from './ChoseUs';
import './about.css';
// import lightThemeAboutUsImg from '../../images/about-us.jpg';
// import darkThemeAboutUsImg from '../../images/dark-about-us.jpg';


const chooseData = [
  {
    icon: 'ri-settings-2-line',
    title: 'Experience and Expertise',
    description:
      'Our team has in depth expertise and experience in the industry, and we pride ourselves on staying up-to-date with the latest developments and trends. We have the expertise to deliver high-quality work that meets your specific needs and exceeds your expectations.',
  },
  {
    icon: 'ri-team-line',
    title: 'Personalized Approach',
    description:
      'We understand that every client is unique, which is why we take a personalized approach to every project. We take the time to understand your goals, objectives, and challenges, and we work closely with you to develop a customized solution that works for your business.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 Hours support',
    description:
      'At our company, we believe that great customer service is essential to building long-term relationships with our clients. We are committed to providing exceptional service, and we always go above and beyond to ensure that our clients are satisfied with our work.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in navigating</h2>
            <h2 className="highlight">digital growth</h2>
            <p className="description about__content-desc">
            At BrigBox, we stand out as your dedicated digital growth partner, specializing in crafting flawless digital products to elevate and promote your brand. Similar to our expertise in advising clients on financial challenges, we understand that navigating the digital landscape can be intricate. That's why we offer comprehensive solutions, blending creativity and strategy to help you stand out and succeed online.
            </p>
            <div className="choose__us-item-wrapper">
              {chooseData.map((i, idx) => (
                <ChoseUs
                  icon={i.icon}
                  title={i.title}
                  description={i.description}
                  key={`choose__us-${idx}`}
                />
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="about-us" />
          </div>
        </div>
      </div>
    </section>
  );
};