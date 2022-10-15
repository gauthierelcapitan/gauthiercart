import gauthierProfessional from '@gauthiercart/public/images/gauthier-professional.png';
import Image from 'next/image';

const AboutPhoto = () => {
  return (
    <div className="relative rounded-full border-rose-500 border-2 pt-1.5 pr-1.5 pl-1.5">
      <div className="absolute rounded-full border-8 border-white w-40 h-40 bg-white/30 backdrop-blur" />
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
        <div className="absolute rounded-full border-white border-l-8 border-r-8 border-b-8 w-40 h-40 -translate-y-full" />
      </div>
    </div>
  );
};

export default AboutPhoto;
