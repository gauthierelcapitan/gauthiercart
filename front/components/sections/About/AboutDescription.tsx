import { Parallax } from 'react-scroll-parallax';

const AboutDescription = () => {
  return (
    <div>
      <Parallax speed={-10}>
        <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
          Gauthier Cart
        </h1>
      </Parallax>
      <Parallax speed={10}>
        <h2 className="font-primary font-mono font-bold text-white text-2xl sm:text-3xl md:text-4xl md:leading-snug">
          Senior Software Engineer
        </h2>
      </Parallax>
    </div>
  );
};

export default AboutDescription;
