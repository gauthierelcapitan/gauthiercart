import { SectionProps } from '@gauthiercart/components/sections/types';
import aiguilleVerte from '@gauthiercart/public/images/aiguille-verte.jpg';
import Image from 'next/image';
import { FC, memo } from 'react';

const Contact: FC<SectionProps> = ({ sectionRef }) => {
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
        src={aiguilleVerte}
        alt="Aiguille Verte"
        placeholder="blur"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
          Contact
        </h1>

        <div className="space-y-8">
          <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
            Call me maybe
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
