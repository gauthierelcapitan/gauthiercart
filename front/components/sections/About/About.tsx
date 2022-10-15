import CloudyNoSSR from '@gauthiercart/components/Cloudy/CloudyNoSSR';
import AboutDescription from '@gauthiercart/components/sections/About/AboutDescription';
import AboutPhoto from '@gauthiercart/components/sections/About/AboutPhoto';
import { SectionProps } from '@gauthiercart/components/sections/types';
import aiguilleDuGouter from '@gauthiercart/public/images/aiguille-du-gouter.jpg';
import Image from 'next/image';
import { FC, memo } from 'react';

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
      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-xl mx-auto text-center">
        <AboutPhoto />
        <AboutDescription />
      </div>
    </div>
  );
};

export default memo(About);
