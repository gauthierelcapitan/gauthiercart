import { SectionProps } from '@gauthiercart/components/sections/types';
import dentDuGeant from '@gauthiercart/public/images/dent-du-geant.jpg';
import Image from 'next/image';
import { FC, memo } from 'react';
import { Parallax } from 'react-scroll-parallax';

const Portfolio: FC<SectionProps> = ({ sectionRef }) => {
  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-tr from-orange-300 to-indigo-500 relative h-screen w-screen"
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        layout="fill"
        objectFit="cover"
        quality={100}
        src={dentDuGeant}
        alt="Dent du geant"
        placeholder="blur"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        <Parallax speed={-5}>
          <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
            Portfolio
          </h1>
        </Parallax>
        <Parallax speed={5}>
          <div className="space-y-8">
            <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
              UTMB World and UTMB Live
            </p>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default memo(Portfolio);
