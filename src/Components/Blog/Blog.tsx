import { useInView } from 'framer-motion';
import { useRef } from 'react';
import articleThumbnail from '../../images/article.png';
import caseStudyThumbnail from '../../images/case-study.png';
import videoThumbnail from '../../images/video.png';
import { Post } from './Post';
import './blog.css';

const blogData = [
  {
    title: 'Video & Animation',
    category: 'Marketing',
    description: 'Transform ideas into captivating visual stories with our expert Video & Animation services. From compelling explainer videos to stunning animations, we bring your brand to life.',
    thumbnail: videoThumbnail,
    link: '#',
  },
  {
    title: 'Online Presence',
    category: 'SEO',
    description:
      "Ignite your online presence and climb the ranks with our SEO solutions. Unleash the power of strategic optimization to enhance your website's visibility and drive organic traffic. Our data-driven approach ensures that your brand stands out in search results, delivering measurable results and sustainable growth.",
    thumbnail: caseStudyThumbnail,
    link: '#',
  },
  {
    title: 'Company Branding',
    category: 'Design',
    description: 'Shape a memorable identity that resonates. Our comprehensive Company Branding services go beyond logos, weaving a cohesive story that strengthens loyalty and builds trust.',
    thumbnail: articleThumbnail,
    link: '#',
  },
];

export const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="blog" className="blog" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="blog__top-content">
          <h6 className="subtitle">Our Solutions</h6>
          <h2>
            Let's have a look at our
            <span className="highlight">solutions</span>
          </h2>
        </div>
        <div className="blog__wrapper">
          {blogData.map((i, idx) => (
            <Post
              key={`BlogPost-${idx}`}
              title={i.title}
              category={i.category}
              description={i.description}
              thumbnail={i.thumbnail}
              link={i.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
