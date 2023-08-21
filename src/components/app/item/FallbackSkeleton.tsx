import React from 'react';
import Layout from '@/components/common/Layout';
import { FaShoppingCart, FaHandPointRight } from 'react-icons/fa';

const ItemFallbackSkeleton = () => {
  return (
    <Layout>
      <div className='container mx-auto min-h-[90vh]'>
        <div className='lg:flex'>
          <div className='w-full p-4 lg:w-1/3'>
            <div className='w-full mb-4 animate-pulse h-36 bg-gray-500' />
            <div className='grid grid-cols-4 gap-4'>
              <div className='w-full mb-4 animate-pulse h-8 bg-gray-500' />
              <div className='w-full mb-4 animate-pulse h-8 bg-gray-500' />
              <div className='w-full mb-4 animate-pulse h-8 bg-gray-500' />
              <div className='w-full mb-4 animate-pulse h-8 bg-gray-500' />
            </div>
          </div>

          <div className='p-4 lg:w-1/3'>
            <div className='font-semibold mb-4 w-full h-8 bg-gray-500 animate-pulse' />
            <div className='mb-2 grid grid-cols-2 gap-4'>
              <span className='bg-gray-500 h-8 w-full animate-pulse' />
              <span className='bg-gray-500 h-8 w-full animate-pulse' />
            </div>
            <div className='font-semibold mb-4 w-16 h-8 bg-gray-500 animate-pulse' />
            <div className='font-semibold mb-4 w-full h-16 bg-gray-500 animate-pulse' />
          </div>
          <div className='border-t border-gray-500 p-4 flex flex-col lg:w-1/3'>
            <button className='flex items-center justify-center gap-2 text-xl w-full rounded mx-auto bg-yellow-300 p-2 mb-4'>
              <FaShoppingCart className="text-2xl" />
              <span>Add To Cart</span>
            </button>
            <button className='flex items-center justify-center gap-2 text-xl w-full rounded mx-auto bg-yellow-300 p-2'>
              <FaHandPointRight className="text-2xl" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
        <div className='mt-8 bg-white overflow-x-auto'>
          <div className='text-lg font-semibold px-4'>Terlaris</div>
          <div className='grid grid-cols-4 gap-4'>
              <div className='w-full mb-4 animate-pulse h-20 bg-gray-500' />
              <div className='w-full mb-4 animate-pulse h-20 bg-gray-500' />
              <div className='w-full mb-4 animate-pulse h-20 bg-gray-500' />
              <div className='w-full mb-4 animate-pulse h-20 bg-gray-500' />
            </div>
        </div>
      </div>
    </Layout>
  )
};

export default ItemFallbackSkeleton;