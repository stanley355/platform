import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dollarToRupiah } from '@/util/dollarToRupiah';

const HomeBestInternational = () => {
  return (
    <div className='p-4 w-full border-b border-gray-300'>
      <div className='font-semibold mb-4 text-lg'>Best Seller Mancanegara</div>
      <Link href="/furniture" className='w-full flex gap-4 mb-4'>
        <Image src="/images/home/home_supply_best_1.jpg" alt='InGoods Best Seller' width={150} height={150} className='w-[25%] h-auto mx-auto lg:mx-0' />
        <div>
          <div>
            HP 910XL Black High-yield Ink Cartridge
          </div>
          <div className='font-semibold'>
            {dollarToRupiah(40.89)}
          </div>
        </div>
      </Link>
      <Link href="/furniture" className='w-full flex gap-4 mb-8'>
        <Image src="/images/home/home_supply_best_2.jpg" alt='InGoods Best Seller' width={150} height={150} className='w-[25%] h-auto mx-auto lg:mx-0' />
        <div>
          <div>
            Basics Multipurpose Copy Printer Paper, 8.5&quot; x 11&quot;, 20Lb, 10…
          </div>
          <div className='font-semibold'>
            {dollarToRupiah(49.99)}
          </div>
        </div>
      </Link>
      <Link href="/furniture" className='w-full flex gap-4 mb-4'>
        <Image src="/images/home/home_supply_best_3.jpg" alt='InGoods Best Seller' width={150} height={150} className='w-[25%] h-auto mx-auto lg:mx-0' />
        <div>
          <div>
            Original HP 206X Black High-yield Toner Cartridge
          </div>
          <div className='font-semibold'>
            {dollarToRupiah(104.89)}
          </div>
        </div>
      </Link>
    </div>
  )
};

export default HomeBestInternational;