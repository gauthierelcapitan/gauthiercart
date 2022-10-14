import CloudyNoSSR from '@gauthiercart/components/Cloudy/CloudyNoSSR';
import { SectionProps } from '@gauthiercart/components/sections/types';
import aiguilleDuGouter from '@gauthiercart/public/images/aiguille-du-gouter.jpg';
import Image from 'next/image';
import { FC, memo } from 'react';
import { Parallax } from 'react-scroll-parallax';

const About: FC<SectionProps> = ({ sectionRef }) => {
  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-tr from-rose-500 to-california-400 relative h-screen w-screen"
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        layout="fill"
        objectFit="cover"
        quality={100}
        src={aiguilleDuGouter}
        alt="Mont Blanc"
        placeholder="blur"
      />
      <CloudyNoSSR />
      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        <Parallax speed={-10}>
          <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
            Gauthier Cart
          </h1>
          <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
            Senior Software Engineer
          </h1>
        </Parallax>
        <Parallax speed={10}>
          <div className="space-y-8">
            <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
              Website under construction.
            </p>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default memo(About);
