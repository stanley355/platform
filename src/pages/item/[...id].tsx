import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FaHandPointRight, FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/router';

import Layout from '@/components/common/Layout';
import { removeCurrency } from '@/util/removeCurrency';
import { dollarToRupiah } from '@/util/dollarToRupiah';
import { BEST_SELLERS } from '@/lib/cart/constant';
import { replaceAmazon } from '@/util/replaceAmazon';
import ItemFallbackSkeleton from '@/components/app/item/FallbackSkeleton';
import { sendFirebaseEvent } from '@/lib/firebase/sendFirebaseEvent';


const ItemPage = (props: any) => {
  const { item } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <ItemFallbackSkeleton />
  }

  const addToCart = () => {
    sendFirebaseEvent("add_cart", {});
    const oldCart = localStorage.getItem("cart");
    if (oldCart) {
      const parse = JSON.parse(oldCart);
      let newCart = structuredClone(parse);
      newCart.push(item);
      const stringify = JSON.stringify(newCart);
      localStorage.setItem("cart", stringify);
      alert("Item telah ditambahkan ke keranjang");
      return;
    }

    const newCart = [item];
    const stringify = JSON.stringify(newCart);
    localStorage.setItem("cart", stringify);
    alert("Item telah ditambahkan ke keranjang");
    return;
  }

  return (
    <Layout>
      <div className='container mx-auto min-h-[90vh]'>
        <div className='lg:flex'>
          <div className='w-full p-4 lg:w-1/3'>
            <div className='w-full mb-4'>
              <img src={item?.mainImg?.src} alt={item?.mainImg?.alt} className='w-full h-auto' width={400} height={400} />
            </div>
            <div className='flex gap-4'>
              {item?.imgList.map((it: any, index: number) => <img src={it} alt={it} key={index} className='rounded' />)}
            </div>
          </div>

          <div className='p-4 lg:w-1/3'>
            <div className='font-semibold mb-4'>{item?.title}</div>
            <div className='mb-2'>
              <span>Rating: {item?.rating} - </span>
              <span>{item?.ratingAmount}</span>
            </div>
            {(item?.discountPercentage && item?.finalPrice) && <div>
              <div>
                <span className='text-red-500 text-xl mr-4'>{item.discountPercentage}</span>
                <span className='text-xl'>{dollarToRupiah(removeCurrency(item?.finalPrice))}</span>
              </div>
              <div className='text-gray-500'>
                Old Price <s>{item?.initialPrice && dollarToRupiah(removeCurrency(item.initialPrice))}</s>
              </div>
            </div>}
            {!item?.discountPercentage && (item?.finalPrice || item?.price) && <div className='text-xl'>{dollarToRupiah(removeCurrency(item?.finalPrice ? item?.finalPrice : item?.price))}</div>}
            {!item?.discountPercentage && !item?.price && !item.finalPrice && <div className='text-xl text-green-500'>Stok Habis</div>}
            <div>
              {item?.description}
            </div>
          </div>
          <div className='border-t border-gray-500 p-4 flex flex-col lg:w-1/3'>
            <button onClick={addToCart} className='flex items-center justify-center gap-2 text-xl w-full rounded mx-auto bg-yellow-300 p-2 mb-4'>
              <FaShoppingCart className="text-2xl" />
              <span>Tambah Keranjang</span>
            </button>
            <button className='flex items-center justify-center gap-2 text-xl w-full rounded mx-auto bg-yellow-300 p-2' onClick={()=> sendFirebaseEvent("buy_now", {}) }>
              <FaHandPointRight className="text-2xl" />
              <span>Beli Langsung</span>
            </button>
          </div>
        </div>
        <div className='mt-8 bg-white overflow-x-auto'>
          <div className='text-lg font-semibold px-4'>Terlaris</div>
          <div className='w-max '>
            {BEST_SELLERS.map((best) =>
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
    </Layout>
  )
};

export default ItemPage;
export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const idPath = ctx?.params?.id.slice(0, 3).join("/");
  console.log(123, idPath);
  const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/amazon/items?url=https://amazon.com/${idPath}`;
  console.log("Endpoint", endpoint);
  const item = await fetch(endpoint);

  return {
    props: {
      item: await item.json()
    },
    revalidate: 60 // 1min
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true, // false or "blocking"
  }
}