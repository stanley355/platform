import Layout from '@/components/common/Layout';
import { EMPTY_CART_SVG } from '@/lib/home/constant';
import Link from 'next/link';
import React from 'react';

const ShoppingCart = () => {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen bg-gray-100 lg:p-4'>
        <div className='p-4 bg-white lg:w-2/3 lg:flex lg:gap-4 lg:items-center lg:rounded'>
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

      </div>

    </Layout>
  )
};

export default ShoppingCart;