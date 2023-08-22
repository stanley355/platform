import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HomeHeroCarousel from '@/components/app/home/HeroCarousel';
import HomeHeroCards from '@/components/app/home/HeroCards';
import HomePromoCards from '@/components/app/home/PromoCard';
import HomeTrendingCards from '@/components/app/home/TrendingCards';
import HomeShoesCards from '@/components/app/home/ShoesCard';
import HomeBeautyCards from '@/components/app/home/BeautyCards';
import HomeBestInternational from '@/components/app/home/BestInternational';
import HomeBestLocal from '@/components/app/home/BestLocal';
import HomeToysCards from '@/components/app/home/ToysCard';
import HomeCategoryCards from '@/components/app/home/CategoryCards';
import Layout from '@/components/common/Layout';

const Home = () => {
  return (
    <Layout>
      <div className='bg-yellow-300 text-primary-color py-1 font-semibold'>
        <div className='text-center'>InGoods</div>
        <div className='text-center'>Import Murah & Berkualitas</div>
      </div>
      <div className='container mx-auto'>
        <HomeHeroCarousel />
        <HomeHeroCards />
        <div className='border-b border-gray-300 p-4 flex flex-col lg:hidden'>
          <div className='font-semibold mb-4'>Login untuk Belanja Barang Import</div>
          <Link href="/login" className='p-2 bg-yellow-300 font-semibold rounded mb-4 text-center'>Masuk</Link>
          <Link href="/register" className='text-blue-600'>Buat Akun</Link>
        </div>
        <HomePromoCards />
        <HomeTrendingCards />
        <HomeShoesCards />
        <Link href="/best" className='w-full lg:flex'>
          <Image src="/images/home/home_banner_1.jpg" alt='InGoods Beauty Products' width={400} height={50} className='w-full h-auto lg:w-[50%]' />
          <Image src="/images/home/home_banner_2.jpg" alt='InGoods Beauty Products' width={400} height={50} className='w-full h-auto lg:w-[50%] hidden lg:block' />
        </Link>
        <HomeBeautyCards />
        <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
          <HomeBestInternational />
          <HomeBestLocal />
        </div>
        <Link href="/best" className='w-full lg:flex'>
          <Image src="/images/home/home_banner_4.jpg" alt='InGoods Mainan dan Game' width={400} height={50} className='w-full h-auto lg:w-[50%]' />
          <Image src="/images/home/home_banner_3.jpg" alt='InGoods Sports and Outdoor' width={400} height={50} className='w-full h-auto lg:w-[50%] hidden lg:block' />
        </Link>
        <HomeToysCards />
        <HomeCategoryCards />
      </div>
    </Layout>
  )
};

export default Home;
