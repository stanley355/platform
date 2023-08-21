import React from 'react';
import { GetServerSideProps } from 'next';

import { BEST_SELLERS } from '@/lib/cart/constant';
import Layout from '@/components/common/Layout';
import { replaceAmazon } from '@/util/replaceAmazon';
import { dollarToRupiah } from '@/util/dollarToRupiah';
import { removeCurrency } from '@/util/removeCurrency';

const BestSeller = (props: any) => {
  const { items } = props;

  return (
    <Layout>
      <div className='container mx-auto bg-gray-100'>
        <div className='bg-white p-4'>
          <div className='text-lg font-semibold'>Terbaru</div>
          <div className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
            {items.length > 0 && items.map((it: any) =>
              <a href={(replaceAmazon(it.url, "/item"))} className='p-4 float-left w-[200px]' key={it.imgAlt}>
                <img src={it.imgSrc} alt={it.imgAlt} />
                <div className='font-semibold mt-4'>{it.imgAlt.replace("Amazon", "")}</div>
                <div className='text-sm text-gray-500'>Terjual : {it.soldAmount} </div>
                <div className='text-red-700 font-semibold'>{dollarToRupiah(removeCurrency(it.price))}</div>
              </a>
            )}
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

export default BestSeller;
export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/amazon/bestsellers/`;
  const items = await fetch(url);

  return {
    props: {
      items: await items.json()
    }
  }
}
