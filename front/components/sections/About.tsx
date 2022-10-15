import CloudyNoSSR from '@gauthiercart/components/Cloudy/CloudyNoSSR';
import { SectionProps } from '@gauthiercart/components/sections/types';
import aiguilleDuGouter from '@gauthiercart/public/images/aiguille-du-gouter.jpg';
import gauthierProfessional from '@gauthiercart/public/images/gauthier-professional.png';
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
        <div className="relative rounded-full border-rose-500 border-2 pt-1.5 pr-1.5 pl-1.5">
          <div className="absolute rounded-full border-12 border-white w-40 h-40 bg-white/30 backdrop-blur" />
          <Image
            className="rounded-full -translate-y-2"
            src={gauthierProfessional}
            quality={100}
            alt="Gauthier Cart"
            placeholder="blur"
            width={160}
            height={160}
          />
          <div className="-translate-y-1.5">
            <div className="absolute rounded-full border-white border-l-12 border-r-12 border-b-12 w-40 h-40 -translate-y-full" />
          </div>
        </div>
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
    </div>
  );
};

export default memo(About);
