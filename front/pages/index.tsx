import Navbar from '@gauthiercart/components/NavBar/NavBar';
import { NavbarItemProps } from '@gauthiercart/components/NavBar/NavBarItem';
import About from '@gauthiercart/components/sections/About';
import Contact from '@gauthiercart/components/sections/Contact';
import Portfolio from '@gauthiercart/components/sections/Portfolio';
import Skills from '@gauthiercart/components/sections/Skills';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const menuLeft: NavbarItemProps[] = [
    {
      label: 'About',
      sectionRef: aboutRef,
    },
    {
      label: 'Skills',
      sectionRef: skillsRef,
    },
  ];

  const menuRight: NavbarItemProps[] = [
    {
      label: 'Portfolio',
      sectionRef: portfolioRef,
    },
    {
      label: 'Contact',
      sectionRef: contactRef,
    },
  ];

  return (
    <div>
      <Head>
        <title>Gauthier Cart | Senior Software Engineer</title>
        <meta
          name="description"
          content="Gauthier Cart Senior Software Engineer"
        />
      </Head>
      <main className="overflow-x-hidden">
        <header>
          <Navbar menuLeft={menuLeft} menuRight={menuRight} />
        </header>
        <About sectionRef={aboutRef} />
        <Skills sectionRef={skillsRef} />
        <Portfolio sectionRef={portfolioRef} />
        <Contact sectionRef={contactRef} />
      </main>
      <footer />
    </div>
  );
};

export default Home;
