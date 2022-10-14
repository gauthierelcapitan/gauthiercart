import Navbar from '@gauthiercart/components/NavBar/NavBar';
import aiguilleDuGouter from '@gauthiercart/public/images/aiguille-du-gouter.jpg';
import aiguilleVerte from '@gauthiercart/public/images/aiguille-verte.jpg';
import deleveret from '@gauthiercart/public/images/deleveret.jpg';
import dentDuGeant from '@gauthiercart/public/images/dent-du-geant.jpg';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import {useRef} from "react";
import CloudyNoSSR from "@gauthiercart/components/Cloudy/CloudyNoSSR";



const Home: NextPage = () => {

  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const menuLeft = [
    {
      label : "About",
      ref: aboutRef,
    },
    {
      label : "Skills",
      ref: skillsRef,
    }
  ]

  const menuRight = [
    {
      label : "Portfolio",
      ref: portfolioRef,
    },
    {
      label : "Contact",
      ref: contactRef,
    }
  ]

  return (
    <div>
      <Head>
        <title>Gauthier Cart</title>
        <meta name="description" content="Gauthier Cart" />
      </Head>
      <main>
        <header>
          <Navbar menuLeft={menuLeft} menuRight={menuRight}  />
        </header>
        <div ref={aboutRef} className="bg-gradient-to-tr from-rose-500 to-california-400 relative h-screen w-screen">
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
            layout="fill"
            objectFit="cover"
            quality={100}
            src={aiguilleDuGouter}
            alt="Toto"
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


        <div ref={skillsRef} className="bg-gradient-to-tr from-orange-300 to-indigo-500 relative h-screen w-screen">
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
            layout="fill"
            objectFit="cover"
            quality={100}
            src={deleveret}
            alt="Toto"
            placeholder="blur"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
            <Parallax speed={-20}>
              <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
                Skills
              </h1>
            </Parallax>
            <Parallax speed={20}>
              <div className="space-y-8">
                <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
                  TypeScript and Kotlin
                </p>
              </div>
            </Parallax>
          </div>
        </div>

        <div ref={portfolioRef} className="bg-gradient-to-tr from-orange-300 to-indigo-500 relative h-screen w-screen">
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
            layout="fill"
            objectFit="cover"
            quality={100}
            src={dentDuGeant}
            alt="Toto"
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

        <div ref={contactRef} className="bg-gradient-to-tr from-orange-300 to-indigo-500 relative h-screen w-screen">
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
            layout="fill"
            objectFit="cover"
            quality={100}
            src={aiguilleVerte}
            alt="Toto"
            placeholder="blur"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
            <Parallax speed={-5}>
              <h1 className="font-primary font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
                Contact
              </h1>
            </Parallax>
            <Parallax speed={5}>
              <div className="space-y-8">
                <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
                  Call me maybe
                </p>
              </div>
            </Parallax>
          </div>
        </div>
      </main>
      <footer/>
    </div>
  );
};

export default Home;
