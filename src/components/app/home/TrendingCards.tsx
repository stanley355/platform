import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeTrendingCards = () => {
  return (
    <div className='p-4 w-full border-b border-gray-300 lg:mt-8'>
    <div className='font-semibold mb-4 text-lg'>Lagi Ngetrend nih</div>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 font-semibold'>
      <Link href="/search?keywords=women">
        <Image src="/images/home/home_trend_1.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Perlengkapan Wanita</div>
      </Link>
      <Link href="/search?keywords=men">
        <Image src="/images/home/home_trend_2.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Perlengkapan Pria</div>
      </Link>
      <Link href="/search?keywords=children">
        <Image src="/images/home/home_trend_3.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Perlengkapan Anak-anak</div>
      </Link>
      <Link href="/search?keywords=outfit">
        <Image src="/images/home/home_trend_4.jpg" alt='InGoods Women' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Perlengkapan Keren</div>
      </Link>
    </div>
    <Link href="/register" className='text-blue-600'>Lihat yang Barang Import Ngetrend</Link>
  </div>
  )
};

export default HomeTrendingCards;