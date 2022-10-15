import Link from 'next/link';
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

      <div className="font-sans max-w-7xl mx-auto grid grid-cols-12 text-2xl sm:text-3xl md:text-4xl mb-10">
        <div className="col-span-6 hover:text-rose-500 hover:underline hover:underline-offset-4">
          <Link href="https://utmb.world/runner/265957.gauthier.cart">
            <a target="_blank" rel="noopener noreferrer">
              <span className="font-mono">34</span> Y/o
            </a>
          </Link>
        </div>
        <div className="col-span-6 hover:text-rose-500 hover:underline hover:underline-offset-4">
          <Link href="/files/curriculum-vitae-gauthier.pdf">
            <a target="_blank" rel="noopener noreferrer">
              <span className="font-mono">10+</span> YEX
            </a>
          </Link>
        </div>
      </div>
      <h3 className="font-primary font-serif italic text-white text-2xl sm:text-3xl md:text-4xl md:leading-snug hover:text-rose-500 hover:underline hover:underline-offset-4">
        <Link href="https://github.com/gauthierelcapitan">
          <a target="_blank" rel="noopener noreferrer">
            “Talk is cheap. Show me the code.”
          </a>
        </Link>
      </h3>
    </div>
  );
};

export default memo(AboutDescription);
