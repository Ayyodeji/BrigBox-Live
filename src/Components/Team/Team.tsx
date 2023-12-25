import { useRef } from 'react';
import member1 from '../../images/team-01.png';
import member2 from '../../images/team-02.webp';
import member3 from '../../images/team-03.png';
import { Member } from './Member';
import './team.css';
import { useInView } from 'framer-motion';

const teamData = [
  {
    image: member1,
    name: 'Ayodeji Ajayi',
    position: 'CTO & Co-Founder',
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
  },
  {
    image: member2,
    name: 'Similoluwa Ayokunle',
    position: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
  },
  {
    image: member3,
    name: 'Engr Olumide Ajayi',
    position: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
  },
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="our__team" ref={ref}>
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet <span className="highlight">our team</span>
          </h2>
        </div>
        <div className="team__wrapper">
          {teamData.map((i, idx) => (
            <Member
              image={i.image}
              name={i.name}
              position={i.position}
              linkedin={i.linkedin}
              twitter={i.twitter}
              key={`team__member-${idx}`}
              idx={idx}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
