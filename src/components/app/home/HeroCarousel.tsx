import React from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { HOME_CAROUSEL_IMAGES } from '@/lib/home/constant';
import { useDesktopScreen } from '@/lib/hooks/useDesktopScreen';

const HomeHeroCarousel = () => {
  const isDesktop = useDesktopScreen();

  return (
    <div className='h-[340px] lg:h-[550px]'>
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {HOME_CAROUSEL_IMAGES[isDesktop ? "desktop" : "mobile"].map(
        (img: any) =>
          <Image src={img.src} alt={img.alt} key={img.alt} width={isDesktop ? 1200 : 400} height={isDesktop ? 600 : 400} className='w-full h-auto lg:h-[550px]' />
      )}
    </Carousel>
    </div>
  )
};

export default HomeHeroCarousel;