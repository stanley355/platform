import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeToysCards = () => {
  return (
    <div className='lg:hidden'>
      <div className='p-4 w-full border-y border-gray-300'>
        <div className='font-semibold mb-4 text-lg'>Peralatan Rumah dan Dapur Import</div>
        <Link href="/furniture" className='w-full'>
          <Image src="/images/home/home_toys_1.jpg" alt='InGoods Furniture' width={200} height={200} className='w-full h-auto mx-auto' />
        </Link>
      </div>
      <div className='p-4 w-full border-b border-gray-300'>
        <div className='font-semibold mb-4 text-lg'>Mainan Import</div>
        <Link href="/furniture" className='w-full'>
          <Image src="/images/home/home_toys_2.jpg" alt='InGoods Furniture' width={200} height={200} className='w-full h-auto mx-auto' />
        </Link>
      </div>
    </div>
  )
};

export default HomeToysCards;