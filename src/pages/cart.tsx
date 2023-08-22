import React, { useEffect, useMemo, useState } from 'react';

import Layout from '@/components/common/Layout';
import { BEST_SELLERS } from '@/lib/cart/constant';
import { EMPTY_CART_SVG } from '@/lib/home/constant';
import { dollarToRupiah } from '@/util/dollarToRupiah';
import { replaceAmazon } from '@/util/replaceAmazon';
import { removeCurrency } from '@/util/removeCurrency';

const ShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      const cart = JSON.parse(cartStorage);
      setShoppingCart(cart);
      return;
    }
  }, [shoppingCart])



  const NotFound = () => (
    <div className='p-4 bg-white lg:w-2/3 lg:flex lg:gap-4 lg:items-center lg:rounded lg:h-fit'>
      <div>
        <img src={EMPTY_CART_SVG} alt="Empty cart" width={400} height={400} className='w-full h-auto' />
      </div>
      <div className='flex items-center flex-col'>
        <div className='font-semibold mt-4 lg:mt-0 text-lg'>Keranjang Belanjamu Kosong</div>
        <a href="/best/" className='text-blue-500 lg:mx-0'>
          Kuy Belanja Promo
        </a>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className='container mx-auto min-h-screen bg-gray-100 p-4'>
        <div className=' lg:flex lg:gap-4'>
          {!shoppingCart.length && <NotFound />}
          {shoppingCart.length > 0 &&
            <div className='p-4 bg-white lg:w-2/3 rounded lg:h-fit'>
              {shoppingCart.map((item: any) =>
                <div className="mb-8 flex gap-4 lg:items-center" key={item.title}>
                  <div className='w-1/3 lg:w-1/5'>
                    <img src={item.mainImg.src} alt={item.mainImg.alt} />
                  </div>
                  <div>
                    <div className='font-semibold'>{item.title}</div>
                    <div className='text-gray-500'>Quantity: 1</div>
                    <div className='text-xl'>{dollarToRupiah(removeCurrency(item.finalPrice ? item.finalPrice : item.price.replace("\n", "")))}</div>
                  </div>
                </div>)}
              <button className='p-2 bg-yellow-300 font-semibold text-center rounded mb-4 w-full '>Checkout</button>
            </div>
          }
          <div className='mt-8 bg-white lg:w-1/3 lg:mt-0 rounded'>
            <div className='text-lg font-semibold px-4'>Best Seller</div>
            <div className='grid grid-cols-2 gap-4 '>
              {BEST_SELLERS.slice(0, 4).map((best) =>
                <a href={replaceAmazon(best.url, "/item")} className='p-4' key={best.imgAlt}>
                  <img src={best.imgSrc} alt={best.imgAlt} />
                  <div className='font-semibold mt-4'>{best.imgAlt.replace("Amazon", "")}</div>
                  <div className='text-sm text-gray-500'>Terjual : {best.soldAmount} </div>
                  <div className='text-red-700 font-semibold'>{dollarToRupiah(removeCurrency(best.price))}</div>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className='mt-8 bg-white overflow-x-auto'>
          <div className='text-lg font-semibold px-4'>Terlaris</div>
          <div className='w-max '>
            {BEST_SELLERS.slice(4, BEST_SELLERS.length).map((best) =>
              <a href={(replaceAmazon(best.url, "/item"))} className='p-4 float-left w-[200px]' key={best.imgAlt}>
                <img src={best.imgSrc} alt={best.imgAlt} />
                <div className='font-semibold mt-4'>{best.imgAlt.replace("Amazon", "")}</div>
                <div className='text-sm text-gray-500'>Terjual : {best.soldAmount} </div>
                <div className='text-red-700 font-semibold'>{dollarToRupiah(removeCurrency(best.price))}</div>
              </a>
            )}
          </div>
        </div>

      </div>
      <div className='p-4 w-full flex lg:hidden'>
        <a href="/" className='p-2 bg-yellow-300 font-semibold text-center rounded mb-4 w-full '>Lanjut Belanja</a>
      </div>
    </Layout>
  )
};

export default ShoppingCart;