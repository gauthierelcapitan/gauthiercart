import Link from 'next/link';
import { memo } from 'react';
import { Parallax } from 'react-scroll-parallax';

const AboutDescription = () => {
  return (
    <div>
      <Parallax translateY={['-100px', '150px']}>
        <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug mb-5">
          Gauthier Cart
        </h1>
        <h2 className="font-primary font-mono font-bold text-white text-2xl sm:text-3xl md:text-4xl md:leading-snug mb-10">
          Senior Software Engineer
        </h2>
      </Parallax>

      <Parallax translateY={['-100px', '200px']}>
        <div className="font-sans max-w-7xl mx-auto grid grid-cols-12 text-2xl sm:text-3xl md:text-4xl mb-10">
          <div className="col-span-6 hover:text-rose-500 hover:underline hover:underline-offset-4 hover:bg-white">
            <Link href="https://utmb.world/runner/265957.gauthier.cart">
              <a target="_blank" rel="noopener noreferrer">
                <span className="font-mono">34</span> Y/o
              </a>
            </Link>
          </div>
          <div className="col-span-6 hover:text-rose-500 hover:underline hover:underline-offset-4 hover:bg-white">
            <Link href="/files/curriculum-vitae-gauthier.pdf">
              <a target="_blank" rel="noopener noreferrer">
                <span className="font-mono">10+</span> YEX
              </a>
            </Link>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default memo(AboutDescription);
