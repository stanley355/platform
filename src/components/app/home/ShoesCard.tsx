import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeShoesCards = () => {
  return (
    <div className='p-4 w-full border-b border-gray-300'>
    <div className='font-semibold mb-4 text-lg'>Sepatu Import Murah</div>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 font-semibold'>
      <Link href="/search?keywords=women shoes">
        <Image src="/images/home/home_shoes_1.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Perempuan</div>
      </Link>
      <Link href="/search?keywords=men shoes">
        <Image src="/images/home/home_shoes_2.jpeg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Pria</div>
      </Link>
      <Link href="/search?keywords=girl shoes">
        <Image src="/images/home/home_shoes_3.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Anak Perempuan</div>
      </Link>
      <Link href="/search?keywords=boys shoes">
        <Image src="/images/home/home_shoes_4.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Anak Laki-laki</div>
      </Link>
    </div>
    <Link href="/register" className='text-blue-600'>Cari Sepatu Import</Link>
  </div>
  )
};

export default HomeShoesCards;