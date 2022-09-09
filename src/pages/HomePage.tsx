import landing from '../images/landing.png';

const HomePage = () => (
  <div
    style={{
      backgroundImage: `url(${landing.src})`,
      width: '100%',
      height: 885,
    }}
  ></div>
);

export { HomePage };
