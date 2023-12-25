import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './footer.css';
export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const year = new Date().getFullYear();
  const quickLinks = [
    {
      name: 'Solutions',
      content: [
        {
          path: '#blog',
          display: 'Company Branding & Marketing',
        },
        {
          path: '#blog',
          display: 'Analytics',
        },
        {
          path: '#blog',
          display: 'Video & Animation',
        },
      ],
    },
    {
      name: 'Support',
      content: [
        {
          path: 'mailto:info@brigbox.com?subject=Contact%20Us',
          display: 'Contact Us',
        },

        {
          path: 'mailto:support@brigbox.com?subject=Enquiry',
          display: 'Enquiries',
        },
      ],
    },
    {
      name: 'Company',
      content: [
        {
          path: '#about',
          display: 'About',
        },
        {
          path: '#blog',
          display: 'Blog',
        },
      ],
    },
  ];
  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer__wrapper">
          <div
            className="footer__logo"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <h2>BrigBox</h2>
            <p className="description footer__desc">"Thriving Together"</p>
            <p className="small__text description">
              
"Thriving Together" extends beyond an invitation to leverage our diverse services; it's a commitment to partnership and advancement. Our company is devoted to delivering tailor-made solutions, empowering both businesses and individuals to reach their aspirations.
            </p>
          </div>
          <div
            className="footer__quick-links-wrapper"
            style={{
              transform: isInView ? 'none' : 'translateX(100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            {quickLinks.map((i, idx) => (
              <div key={idx} className="footer__quick-links">
                <h3 className="quick__links-title">{i.name}</h3>
                <ul className="quick__links">
                  {i.content.map((link, idx) => (
                    <li
                      key={`link-${idx}`}
                      className="quick__link-item"
                    >
                      <a key={idx} href={link.path}>
                        {link.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="copyright">
          Copyright© {year}, developed by{' '}
          <a href="https://github.com/ayyodeji">BrigBox</a>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
