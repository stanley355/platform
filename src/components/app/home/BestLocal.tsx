import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dollarToRupiah } from '@/util/dollarToRupiah';
import { replaceAmazon } from '@/util/replaceAmazon';

const HomeBestLocal = () => {
  return (
    <div className='p-4 w-full border-b border-gray-300'>
      <div className='font-semibold mb-4 text-lg'>Best Seller di Indonesia</div>
      <Link href={replaceAmazon("https://www.amazon.com/OKeeffes-Healthy-Feet-Cream-ounce/dp/B00JU1TXKI/ref=sr_1_1?keywords=O%27Keeffe%27s+for+Healthy+Feet+Foot+Cream%2C+Guaranteed+Relief+for+Extreme+Pain&sr=8-1", "/item")} className='w-full flex gap-4 mb-8'>
        <Image src="/images/home/home_best_local_1.jpg" alt='InGoods Best Seller' width={150} height={150} className='w-[20%] h-auto mx-auto' />
        <div>
          <div>
            O&apos;Keeffe&apos;s for Healthy Feet Foot Cream, Guaranteed Relief for Extreme Pain
          </div>
          <div className='flex gap-4'>
            <span className='font-semibold'>
              {dollarToRupiah(17.95)}
            </span>
              <s>{dollarToRupiah(19.95)}</s>
          </div>
        </div>
      </Link>
      <Link href={replaceAmazon("https://www.amazon.com/Tenmiro-Ultra-Long-Flexible-Changing-Decoration/dp/B087D55WK2/ref=sr_1_3?keywords=Tenmiro+65.6ft+Led+Strip+Lights%2C+Ultra+Long+RGB+5050+Color+Changing+Light&sr=8-3", "/item")} className='w-full flex gap-4 mb-8'>
        <Image src="/images/home/home_best_local_2.jpg" alt='InGoods Best Seller' width={150} height={150} className='w-[25%] h-auto mx-auto' />
        <div>
          <div>
            Tenmiro 65.6ft Led Strip Lights, Ultra Long RGB 5050 Color Changing Light
          </div>
          <div className='flex gap-4'>
            <span className='font-semibold'>
              {dollarToRupiah(11.99)}
            </span>
              <s>{dollarToRupiah(29.99)}</s>
          </div>
        </div>
      </Link>
      <Link href={replaceAmazon("https://www.amazon.com/BAXIA-TECHNOLOGY-Wireless-Waterproof-Security/dp/B071HW515B/ref=sr_1_5?keywords=BAXIA+TECHNOLOGY+Solar+Outdoor+Lights+Wireless+Security+Motion&sr=8-5", "/item")} className='w-full flex gap-4 mb-4'>
        <Image src="/images/home/home_best_local_3.jpg" alt='InGoods Best Seller' width={150} height={150} className='w-[25%] h-auto mx-auto' />
        <div>
          <div>
          BAXIA TECHNOLOGY Solar Outdoor Lights Wireless Security Motion
          </div>
          <div className='font-semibold'>
            {dollarToRupiah(32.99)}
          </div>
        </div>
      </Link>
    </div>
  )
};

export default HomeBestLocal;