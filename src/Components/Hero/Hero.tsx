import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import darkThemeHeroImg from '../../images/hero-img.png';
import lightThemeHeroImg from '../../images/light-hero-img.jpg';
import './hero.css';

interface Props {
  theme: string;
}

export const Hero: FC<Props> = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Email address to send the mail to
  const emailAddress = 'info@brigbox.com';

  // Subjects for the buttons
  const getStartedSubject = encodeURIComponent('Get Started Now');
  const discoverMoreSubject = encodeURIComponent('Discover More');

  // Construct the mailto links
  const getStartedLink = `mailto:${emailAddress}?subject=${getStartedSubject}`;
  const discoverMoreLink = `mailto:${emailAddress}?subject=${discoverMoreSubject}`;

  return (
    <section className="hero__section" id="home" ref={ref}>
      <div className="container">
        <div className="hero__wrapper">
          <div
            className="hero__content"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <div>
              <h2>We Craft Flawless</h2>
              <h2>Digital Products To</h2>
              <h2 className="highlight">Elevate And Promote Your Brand.</h2>
            </div>
            <p className="description">
              BrigBox is your go-to digital growth partner, specializing in elevating businesses online through SEO, social media marketing, and PPC advertising. Beyond boosting your online presence, we also excel in crafting impactful products and enhancing company branding. Committed to innovation, we deliver results-driven strategies to fuel your success.
            </p>
            <div className="hero__btns">
              <a href={getStartedLink} className="primary__btn">
                Get Started Now
              </a>
              <a href={discoverMoreLink} className="secondary__btn">
                Discover More
              </a>
            </div>
          </div>
          <div className="hero__img">
            <img
              src={theme === '' ? darkThemeHeroImg : lightThemeHeroImg}
              alt="hero-img"
              style={{
                transform: isInView ? 'none' : 'translateX(100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 1s ease-out 0.5s',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
