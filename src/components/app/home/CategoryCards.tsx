import React from 'react';
import Image from 'next/image';

const HomeCategoryCards = () => {
  return (
    <div className='p-4 w-full border-b border-gray-300 lg:mt-8'>
    <div className='font-semibold mb-4 text-lg'>Kategori Lainnya</div>
    <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 mb-4 font-semibold'>
      <a href="/search?keywords=women">
        <Image src="/images/home/home_category_1.jpeg" alt='InGoods Kecantikan' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Perlengkapan Wanita</div>
      </a>
      <a href="/search?keywords=kitchen">
        <Image src="/images/home/home_category_2.jpeg" alt='Peralatan Rumah dan Dapur' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Peralatan Rumah & Dapur</div>
      </a>
      <a href="/search?keywords=sport">
        <Image src="/images/home/home_category_3.jpeg" alt='InGoods Olahraga' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Peralatan Olahraga</div>
      </a>
      <a href="/search?keywords=electronic">
        <Image src="/images/home/home_category_4.jpeg" alt='Elektronik' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Elektronik</div>
      </a>
      <a href="/search?keywords=outdoor">
        <Image src="/images/home/home_category_5.jpeg" alt='Baju Outdoor' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Baju Outdoor</div>
      </a>
      <a href="/search?keywords=pet food">
        <Image src="/images/home/home_category_6.jpeg" alt='Makanan Hewan' width={200} height={200} className='w-full rounded h-auto mx-auto' />
        <div>Makanan Hewan</div>
      </a>
    </div>
    <a href="/register" className='text-blue-600'>Lihat semua kategori</a>
  </div>
  )
};

export default HomeCategoryCards;