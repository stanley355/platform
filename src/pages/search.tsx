import Layout from '@/components/common/Layout';
import { BEST_SELLERS } from '@/lib/cart/constant';
import { EMPTY_CART_SVG } from '@/lib/home/constant';
import { dollarToRupiah } from '@/util/dollarToRupiah';
import { removeCurrency } from '@/util/removeCurrency';
import { replaceAmazon } from '@/util/replaceAmazon';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';

const SearchPage = (props: any) => {
  const { keywords, searchData } = props;

  const NotFound = () => {
    return (
      <div>
        <div className='p-4 bg-white lg:w-2/3 lg:flex lg:gap-4 lg:items-center lg:rounded lg:h-fit'>
          <div>
            <img src={EMPTY_CART_SVG} alt="Empty cart" width={400} height={400} className='w-full h-auto' />
          </div>
          <div>
            <div className='text-center font-semibold mt-4 lg:mt-0 text-lg'>Pencarian Tidak ditemukan</div>
            <a href="/" className='text-blue-500 w-fit mx-[30%] lg:mx-0'>
              Kuy Cari yang lain
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className='container mx-auto bg-gray-100 min-h-screen'>
        <div className='p-4 font-semibold text-xl'>Menampilkan Pencarian untuk &apos;{keywords}&apos;</div>
        {searchData.length < 3 && <NotFound />}
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
          {searchData.length > 3 && searchData.map((search: any) =>
            <a key={search.title} href={replaceAmazon(search.link, "/item")} className='p-4 rounded bg-white mb-4 cursor-pointer'>
              <img src={search.imgSrc} alt={search.imgAlt} width={400} height={400} className='w-full h-auto max-h-[400px]' />
              <div className='mt-4 font-semibold'>{search.title}</div>
              <div className='text-sm text-gray-500'>Rating: {search.rating} dari 5</div>
              {search.price && <div className='text-xl'>{dollarToRupiah(removeCurrency(search?.price))}</div>}
            </a>
          )}
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

export default SearchPage;
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const keywords = ctx?.query?.keywords;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/amazon/search?keywords=${keywords}`;

  try {
    const searchData = await fetch(url);

    return {
      props: {
        keywords: keywords,
        searchData: await searchData.json()
      }
    }
  } catch (error) {
    return {
      props: {
        keywords: keywords,
        searchData: []
      }
    }
  }

}