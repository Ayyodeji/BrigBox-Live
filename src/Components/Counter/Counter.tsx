import CountUp from 'react-countup';
import './counter.css';

const counterData = [
  {
    number: 40,
    text: 'Happy clients',
  },
  {
    number: 6,
    text: 'Running projects',
  },
  {
    number: 50,
    text: 'Projects Completed',
  },
];

export const Counter = () => {
  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((i, idx) => (
            <div key={idx} className="counter__item">
              <h3 className="counter__number">
                <CountUp
                  end={i.number}
                  suffix={i.number > 100 ? `+` : `+`}
                  separator=""
                  enableScrollSpy={true}
                />
              </h3>
              <h4 className="counter__title">{i.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
