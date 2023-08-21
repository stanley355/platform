import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePromoCards = () => {
  return (
    <div className='p-4 w-full border-b border-gray-300 lg:hidden'>
      <div className='font-semibold mb-4 text-lg'>Promo Belanja</div>
      <Link href="/search?keywords=furniture" className='w-full'>
        <Image src="/images/home/home_furniture.jpg" alt='InGoods Furniture' width={200} height={200} className='w-[50%] h-auto mx-auto' />
      </Link>
      <div className='bg-red-500 text-white p-1 w-fit rounded text-sm mt-4'>Diskon Hingga 46%</div>
      <div className='mt-1 mb-2'>Belanja Furnitur dari InGoods</div>
      <Link href="/register" className='text-blue-600'>Lihat Barang Import Promo</Link>
    </div>
  )
};

export default HomePromoCards;