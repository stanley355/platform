import React from 'react';
import Link from 'next/link';

import Layout from '@/components/common/Layout';
import { BEST_SELLERS } from '@/lib/cart/constant';
import { EMPTY_CART_SVG } from '@/lib/home/constant';
import { dollarToRupiah } from '@/util/dollarToRupiah';
import { replaceAmazon } from '@/util/replaceAmazon';
import { removeCurrency } from '@/util/removeCurrency';

const ShoppingCart = () => {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen bg-gray-100 p-4'>
        <div className=' lg:flex lg:gap-4'>
          <div className='p-4 bg-white lg:w-2/3 lg:flex lg:gap-4 lg:items-center lg:rounded lg:h-fit'>
            <div>
              <img src={EMPTY_CART_SVG} alt="Empty cart" width={400} height={400} className='w-full h-auto' />
            </div>
            <div>
              <div className='text-center font-semibold mt-4 lg:mt-0 text-lg'>Keranjang Belanjamu Kosong</div>
              <Link href="/deals/" className='text-blue-500 w-fit mx-[30%] lg:mx-0'>
                Kuy Belanja Promo
              </Link>
            </div>
          </div>
          <div className='mt-8 bg-white lg:w-1/3 lg:mt-0 rounded'>
            <div className='text-lg font-semibold px-4'>Best Seller</div>
            <div className='grid grid-cols-2 gap-4 '>
              {BEST_SELLERS.slice(0, 4).map((best) =>
                <Link href={replaceAmazon(best.url, "/item")} className='p-4' key={best.imgAlt}>
                  <img src={best.imgSrc} alt={best.imgAlt} />
                  <div className='font-semibold mt-4'>{best.imgAlt.replace("Amazon", "")}</div>
                  <div className='text-sm text-gray-500'>Terjual : {best.soldAmount} </div>
                  <div className='text-red-700 font-semibold'>{dollarToRupiah(removeCurrency(best.price))}</div>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className='mt-8 bg-white overflow-x-auto'>
          <div className='text-lg font-semibold px-4'>Terlaris</div>
          <div className='w-max '>
            {BEST_SELLERS.slice(4, BEST_SELLERS.length).map((best) =>
              <Link href={(replaceAmazon(best.url, "/item"))} className='p-4 float-left w-[200px]' key={best.imgAlt}>
                <img src={best.imgSrc} alt={best.imgAlt} />
                <div className='font-semibold mt-4'>{best.imgAlt.replace("Amazon", "")}</div>
                <div className='text-sm text-gray-500'>Terjual : {best.soldAmount} </div>
                <div className='text-red-700 font-semibold'>{dollarToRupiah(removeCurrency(best.price))}</div>
              </Link>
            )}
          </div>
        </div>

      </div>
      <div className='p-4 w-full flex lg:hidden'>
        <Link href="/" className='p-2 bg-yellow-300 font-semibold text-center rounded mb-4 w-full '>Lanjut Belanja</Link>
      </div>
    </Layout>
  )
};

export default ShoppingCart;