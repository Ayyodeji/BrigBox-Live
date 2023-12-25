import { useRef } from 'react';
import { Card } from './Card';
import './services.css';
import { useInView } from 'framer-motion';

const servicesData = [
  {
      icon: "ri-apps-line",
      title: "App Development",
      description: "Crafted for success: bespoke apps, seamless user experiences, and a standout presence in the digital landscape.",
  },
  {
      icon: "ri-code-s-slash-line",
      title: "Web Design",
      description: "Elevate online presence with visually stunning, user-friendly websites that align seamlessly with your brand.",
  },
  {
      icon: "ri-landscape-line",
      title: "Graphics  & Animation",
      description: "Captivate your audience with striking graphics and dynamic animations that bring your brand to life.",
  },
  {
      icon: "ri-rocket-line",
      title: "Digital Marketing",
      description: "Propel your brand forward with strategic SEO, targeted social media, and compelling content for maximum online visibility and engagement.",
  },
];


export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="services" ref={ref}>
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2>
        </div>
        <div className="services__item-wrapper">
            {servicesData.map((i, idx) => (
                <Card key={`services__item-${idx}`} title={i.title} description={i.description} icon={i.icon} isInView={isInView} idx={idx} />
            ))}
        </div>
      </div>
    </section>
  );
};
