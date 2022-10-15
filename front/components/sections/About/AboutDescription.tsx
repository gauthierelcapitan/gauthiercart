import { memo } from 'react';

const AboutDescription = () => {
  return (
    <div>
      <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug mb-5">
        Gauthier Cart
      </h1>
      <h2 className="font-primary font-mono font-bold text-white text-2xl sm:text-3xl md:text-4xl md:leading-snug mb-10">
        Senior Software Engineer
      </h2>

      <div className="font-sans max-w-7xl mx-auto grid grid-cols-12 text-xl sm:text-2xl md:text-3xl mb-10">
        <div className="col-span-4">
          <span className="font-mono">34</span> Y/o
        </div>
        <div className="col-span-4">
          <span className="font-mono">10+</span> YEX in IT
        </div>
        <div className="col-span-4">Fullstack</div>
      </div>

      <h3 className="font-primary font-serif italic text-white text-2xl sm:text-3xl md:text-4xl md:leading-snug">
        “Talk is cheap. Show me the code.”
      </h3>
    </div>
  );
};

export default memo(AboutDescription);
