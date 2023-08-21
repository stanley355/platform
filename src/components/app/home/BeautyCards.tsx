
import React from 'react';
import Image from 'next/image';

const HomeBeautyCards = () => {
  return (
    <div className='p-4 w-full border-b border-gray-300'>
    <div className='font-semibold mb-4 text-lg'>Health & Beauty</div>
    <div className='grid grid-cols-3 lg:grid-cols-9 gap-4 mb-4 font-semibold'>
      <a href="/search?keywords=beauty products" >
        <Image src="/images/home/home_beauty_1.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
      </a>
      <a href="/search?keywords=beauty products" >
        <Image src="/images/home/home_beauty_2.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
      </a>
      <a href="/search?keywords=beauty products" >
        <Image src="/images/home/home_beauty_3.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
      </a>
      <a href="/search?keywords=beauty products" >
        <Image src="/images/home/home_beauty_4.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
      </a>
      <a href="/search?keywords=beauty products" >
        <Image src="/images/home/home_beauty_5.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
      </a>
      <a href="/search?keywords=beauty products" >
        <Image src="/images/home/home_beauty_1.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
      </a>
      <a href="/search?keywords=beauty products" >
        <Image src="/images/home/home_beauty_2.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
      </a>
      <a href="/search?keywords=beauty products" >
        <Image src="/images/home/home_beauty_4.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
      </a>
      <a href="/search?keywords=beauty products" >
        <Image src="/images/home/home_beauty_3.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
      </a>
    </div>
    <a href="/register" className='text-blue-600'>Lihat Lebih Banyak</a>
  </div>
  )
};

export default HomeBeautyCards;