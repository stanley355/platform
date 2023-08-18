import React from 'react';
import Link from 'next/link';
import { FaBuffer, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {

  const SearchForm = () => (
    <form action="" className='w-full p-4 px-2'>
      <div className='w-full rounded-md bg-white flex items-center'>
        <label htmlFor="search" className='w-full'>
          <input type="text" name='search' id='search' className='p-2 w-full rounded-l-md' placeholder='Cari Barang Impor' />
        </label>
        <button type='submit' className='bg-yellow-500 text-primary-color text-2xl p-2 rounded-md'>
          <FaSearch />
        </button>
      </div>
    </form>
  );

  return (
    <nav className='bg-primary-color text-white w-full'>
      <div className='flex items-center justify-between p-2 lg:bg-black lg:py-0'>
        <Link href="/" className='flex items-center gap-2 text-xl'>
          <FaBuffer className="text-2xl" />
          <span>InGoods</span>
        </Link>
        <div className='hidden lg:block lg:w-4/6'>
          <SearchForm />
        </div>
        <div className='flex items-center gap-4 lg'>
          <Link href="/login" className='flex items-center gap-2'>
            <span className='text-sm'>Sign in </span>
            <FaUser className="text-xl" />
          </Link>
          <FaShoppingCart className="text-2xl" />
        </div>
      </div>
      <div className='block lg:hidden'>
        <SearchForm />
      </div>
      <div className='flex items-center p-2 gap-4 w-[200%] lg:w-full overflow-x-auto lg:justify-center'>
        <span className='w-fit'>Best Sellers</span>
        <span>Buku</span>
        <span>Elektronik</span>
        <span>Handphone & Tablet</span>
        <span>Laptop & Komputer</span>
        <span>Fashion</span>
      </div>
    </nav>
  )
};

export default Navbar;