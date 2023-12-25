import { FC } from 'react';

interface Props {
  image: string;
  name: string;
  position: string;
  idx: number;
  isInView: boolean;
  linkedin: string;
  twitter: string;
}

export const Member: FC<Props> = ({
  image,
  name,
  position,
  idx,
  isInView,
  linkedin,
  twitter,
}) => {
  return (
    <div
      className="team__item"
      style={{
        transform: isInView ? 'none' : 'translateY(100%)',
        opacity: isInView ? 1 : 0,
        transition: `all ${(idx + 1) / 2}s ease-out 0.2s`,
      }}
    >
      <div className="team__img">
        <img src={image} alt="team-member" />
      </div>
      <div className="team__details">
        <h4>{name}</h4>
        <p className="description">{position}</p>
        <div className="team__member-social">
          <span>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-box-fill" />
            </a>
          </span>
          <span>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-fill" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
