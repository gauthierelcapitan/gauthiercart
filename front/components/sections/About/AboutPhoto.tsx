import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import gauthierProfessional from '@gauthiercart/public/images/gauthier-professional.png';
import Image from 'next/image';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const AboutPhoto = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="relative rounded-full border-rose-500 border-2 p-1.5">
        <div className="absolute rounded-full border-8 border-white w-40 h-40 bg-white/30 backdrop-blur" />
        <div className="-translate-y-2">
          <Swiper
            modules={[Autoplay]}
            className="about-swiper"
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Image
                className="rounded-full"
                src={gauthierProfessional}
                quality={100}
                alt="Gauthier Cart"
                width={160}
                height={160}
                placeholder="blur"
              />
            </SwiperSlide>
            {[
              '/images/gauthier-running.png',
              '/images/gauthier-cycling.png',
              '/images/gauthier-adventure.png',
            ]
              .sort(() => 0.5 - Math.random())
              .map((src) => (
                <SwiperSlide key={src}>
                  <Image
                    className="rounded-full"
                    src={src}
                    quality={100}
                    alt="Gauthier Cart"
                    width={160}
                    height={160}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="absolute rounded-full border-white border-l-8 border-r-8 border-b-8 w-40 h-40 -translate-y-full" />
      </div>
      <style>
        {`
          .swiper {
            width: 160px;
            height: 160px;
            padding: 0px;
          }

          .swiper-slide {
            width: 160px;
            height: 160px;
          }
        }`}
      </style>
    </div>
  );
};

export default AboutPhoto;
