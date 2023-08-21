import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dollarToRupiah } from '@/util/dollarToRupiah';
import { replaceAmazon } from '@/util/replaceAmazon';

const HomeBestInternational = () => {
  return (
    <div className='p-4 w-full border-b border-gray-300'>
      <div className='font-semibold mb-4 text-lg'>Best Seller Mancanegara</div>
      <Link href={replaceAmazon("https://www.amazon.com/InkjetsClub-910XL-Pack-High-Yield/dp/B09Y97BRC8/ref=sr_1_1_sspa?keywords=HP+910XL+Black+High-yield+Ink+Cartridge+Rp+613.350%2C00&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1", "/item")} className='w-full flex gap-4 mb-4'>
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
      <Link href={replaceAmazon("https://www.amazon.com/AmazonBasics-Multipurpose-Copy-Printer-Paper/dp/B01FV0F75G/ref=sr_1_1_ffob_sspa?keywords=Basics+Multipurpose+Copy+Printer+Paper&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1", "/item")} className='w-full flex gap-4 mb-8'>
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
      <Link href={replaceAmazon("https://www.amazon.com/206X-206A-Toner-Cartridges-Replacement/dp/B0B5TMY3ZC/ref=sr_1_1_sspa?keywords=Original+HP+206X+Black+High-yield+Toner+Cartridge&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&smid=A34V69SFKQ28Z0", "/item")} className='w-full flex gap-4 mb-4'>
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