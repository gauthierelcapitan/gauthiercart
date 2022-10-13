import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

import mountains from '../public/mont-blanc.jpg';

const DynamicFog = dynamic(() => import('../components/fog'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gauthier Cart</title>
        <meta name="description" content="Gauthier Cart" />
      </Head>

      <main>
        <div className="bg-gradient-to-tr from-rose-500 to-california-400 relative h-screen w-screen">
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
            layout="fill"
            objectFit="cover"
            quality={100}
            src={mountains}
            alt="Toto"
            placeholder="blur"
          />
          <DynamicFog />
          <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
            <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
              Gauthier Cart
            </h1>
            <div className="space-y-8">
              <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
                Website under construction.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
