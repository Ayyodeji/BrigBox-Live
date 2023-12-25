import { FC } from 'react';

interface Props {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  link: string; // Update the link prop to include the mailto
}

export const Post: FC<Props> = ({
  title,
  category,
  description,
  thumbnail,
  link,
}) => {
  // Optionally, you can check if the link starts with "mailto:" before generating the mailto link
  const mailtoLink = link.startsWith('mailto:') ? link : `mailto:${link}?subject=Learn More: ${title}`;

  return (
    <div className="blog__item">
      <h3>{title}</h3>
      <h4>{category}</h4>
      <div className="blog__img">
        <img src={thumbnail} alt="post-thumbnail" />
      </div>
      <p className="description post__description">{description}</p>
      <div className="learn__more">
        <a href={mailtoLink}>
          Learn more... <i className="ri-arrow-right-line" />
        </a>
      </div>
    </div>
  );
};
